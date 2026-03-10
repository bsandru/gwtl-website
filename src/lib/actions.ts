"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { revalidatePath } from "next/cache";
import { verify } from "hcaptcha";

// ============================================
// Directory Helpers
// ============================================

const contentDirectory = path.join(process.cwd(), "content");
const uploadDirectory = path.join(process.cwd(), "public", "images", "news");

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// ============================================
// HTML → Markdown Converter
// ============================================

function htmlToMarkdown(html: string): string {
  if (!html) return "";

  let md = html;

  // Remove wrapper paragraph tags from block elements
  md = md.replace(/<p><(h[1-6]|ul|ol|blockquote)/g, "<$1");
  md = md.replace(/<\/(h[1-6]|ul|ol|blockquote)><\/p>/g, "</$1>");

  // Headings
  md = md.replace(/<h1[^>]*>(.*?)<\/h1>/gi, "# $1\n\n");
  md = md.replace(/<h2[^>]*>(.*?)<\/h2>/gi, "## $1\n\n");
  md = md.replace(/<h3[^>]*>(.*?)<\/h3>/gi, "### $1\n\n");
  md = md.replace(/<h4[^>]*>(.*?)<\/h4>/gi, "#### $1\n\n");
  md = md.replace(/<h5[^>]*>(.*?)<\/h5>/gi, "##### $1\n\n");
  md = md.replace(/<h6[^>]*>(.*?)<\/h6>/gi, "###### $1\n\n");

  // Bold and italic
  md = md.replace(/<strong[^>]*>(.*?)<\/strong>/gi, "**$1**");
  md = md.replace(/<b[^>]*>(.*?)<\/b>/gi, "**$1**");
  md = md.replace(/<em[^>]*>(.*?)<\/em>/gi, "*$1*");
  md = md.replace(/<i[^>]*>(.*?)<\/i>/gi, "*$1*");

  // Code
  md = md.replace(/<code[^>]*>(.*?)<\/code>/gi, "`$1`");
  md = md.replace(/<pre[^>]*>(.*?)<\/pre>/gis, "```\n$1\n```\n\n");

  // Links
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)");

  // Images
  md = md.replace(
    /<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi,
    "![$2]($1)"
  );
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, "![]($1)");

  // Lists
  md = md.replace(/<ul[^>]*>/gi, "");
  md = md.replace(/<\/ul>/gi, "\n");
  md = md.replace(/<ol[^>]*>/gi, "");
  md = md.replace(/<\/ol>/gi, "\n");
  md = md.replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n");

  // Blockquotes
  md = md.replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gis, "> $1\n\n");

  // Horizontal rule
  md = md.replace(/<hr[^>]*\/?>/gi, "\n---\n\n");

  // Line breaks and paragraphs
  md = md.replace(/<br[^>]*\/?>/gi, "\n");
  md = md.replace(/<p[^>]*>(.*?)<\/p>/gi, "$1\n\n");

  // Remove remaining tags
  md = md.replace(/<[^>]+>/g, "");

  // Decode HTML entities
  md = md.replace(/&nbsp;/g, " ");
  md = md.replace(/&amp;/g, "&");
  md = md.replace(/&lt;/g, "<");
  md = md.replace(/&gt;/g, ">");
  md = md.replace(/&quot;/g, '"');

  // Clean up extra whitespace
  md = md.replace(/\n{3,}/g, "\n\n");
  md = md.trim();

  return md;
}

// ============================================
// Slug Helper
// ============================================

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ============================================
// Event Actions
// ============================================

interface EventData {
  title: string;
  excerpt: string;
  date: string;
  endDate?: string;
  location: string;
  category: string;
  featured: boolean;
  image?: string;
  registrationUrl?: string;
  content: string;
}

export async function getEvent(slug: string) {
  const dir = path.join(contentDirectory, "events");
  ensureDir(dir);
  const filePath = path.join(dir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return { error: "Not found" };
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "",
    excerpt: data.excerpt || "",
    date: data.date || "",
    endDate: data.endDate || "",
    location: data.location || "",
    category: data.category || "Conference",
    featured: data.featured || false,
    image: data.image || "",
    registrationUrl: data.registrationUrl || "",
    content,
  };
}

export async function saveEvent(formData: EventData, existingSlug?: string) {
  const dir = path.join(contentDirectory, "events");
  ensureDir(dir);

  const isNew = !existingSlug;
  const slug = isNew ? generateSlug(formData.title) : existingSlug;
  const filePath = path.join(dir, `${slug}.md`);

  if (isNew && fs.existsSync(filePath)) {
    return { error: "An event with this title already exists" };
  }

  if (!isNew && !fs.existsSync(filePath)) {
    return { error: "Not found" };
  }

  const markdownContent = htmlToMarkdown(formData.content);

  const frontmatter = {
    title: formData.title,
    excerpt: formData.excerpt,
    date: formData.date,
    ...(formData.endDate && { endDate: formData.endDate }),
    location: formData.location,
    category: formData.category,
    featured: formData.featured,
    ...(formData.image && { image: formData.image }),
    ...(formData.registrationUrl && {
      registrationUrl: formData.registrationUrl,
    }),
  };

  const fileContent = matter.stringify(markdownContent, frontmatter);
  fs.writeFileSync(filePath, fileContent);

  revalidatePath("/admin/events");
  return { success: true, slug };
}

export async function deleteEvent(slug: string): Promise<void> {
  const dir = path.join(contentDirectory, "events");
  const filePath = path.join(dir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return;
  }

  fs.unlinkSync(filePath);
  revalidatePath("/admin/events");
}

// ============================================
// News Actions
// ============================================

interface NewsData {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  featured: boolean;
  image?: string;
  content: string;
}

export async function getNews(slug: string) {
  const dir = path.join(contentDirectory, "news");
  ensureDir(dir);
  const filePath = path.join(dir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return { error: "Not found" };
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "",
    excerpt: data.excerpt || "",
    date: data.date || "",
    category: data.category || "News",
    featured: data.featured || false,
    image: data.image || "",
    content,
  };
}

export async function saveNews(formData: NewsData, existingSlug?: string) {
  const dir = path.join(contentDirectory, "news");
  ensureDir(dir);

  const isNew = !existingSlug;
  const slug = isNew ? generateSlug(formData.title) : existingSlug;
  const filePath = path.join(dir, `${slug}.md`);

  if (isNew && fs.existsSync(filePath)) {
    return { error: "An article with this title already exists" };
  }

  if (!isNew && !fs.existsSync(filePath)) {
    return { error: "Not found" };
  }

  const markdownContent = htmlToMarkdown(formData.content);

  const frontmatter = {
    title: formData.title,
    excerpt: formData.excerpt,
    date: formData.date,
    category: formData.category,
    featured: formData.featured,
    ...(formData.image && { image: formData.image }),
  };

  const fileContent = matter.stringify(markdownContent, frontmatter);
  fs.writeFileSync(filePath, fileContent);

  revalidatePath("/admin/news");
  return { success: true, slug };
}

export async function deleteNews(slug: string): Promise<void> {
  const dir = path.join(contentDirectory, "news");
  const filePath = path.join(dir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return;
  }

  fs.unlinkSync(filePath);
  revalidatePath("/admin/news");
}

// ============================================
// Team Actions
// ============================================

interface TeamMemberData {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
  order: number;
  category?: string;
  company?: string;
  country?: string;
  content: string;
}

export async function getTeamMemberAction(slug: string) {
  const dir = path.join(contentDirectory, "team");
  ensureDir(dir);
  const filePath = path.join(dir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return { error: "Not found" };
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    name: data.name || "",
    role: data.role || "",
    bio: data.bio || "",
    image: data.image || "",
    linkedin: data.linkedin || "",
    twitter: data.twitter || "",
    order: data.order || 999,
    category: data.category || "leadership",
    company: data.company || "",
    country: data.country || "",
    content,
  };
}

export async function saveTeamMember(
  formData: TeamMemberData,
  existingSlug?: string
) {
  const dir = path.join(contentDirectory, "team");
  ensureDir(dir);

  const isNew = !existingSlug;
  const slug = isNew ? generateSlug(formData.name) : existingSlug;
  const filePath = path.join(dir, `${slug}.md`);

  if (isNew && fs.existsSync(filePath)) {
    return { error: "A team member with this name already exists" };
  }

  if (!isNew && !fs.existsSync(filePath)) {
    return { error: "Not found" };
  }

  const markdownContent = htmlToMarkdown(formData.content);

  const frontmatter: Record<string, unknown> = {
    name: formData.name,
    role: formData.role,
    bio: formData.bio,
    order: formData.order,
    ...(formData.image && { image: formData.image }),
    ...(formData.linkedin && { linkedin: formData.linkedin }),
    ...(formData.twitter && { twitter: formData.twitter }),
    ...(formData.category && { category: formData.category }),
    ...(formData.company && { company: formData.company }),
    ...(formData.country && { country: formData.country }),
  };

  const fileContent = matter.stringify(markdownContent, frontmatter);
  fs.writeFileSync(filePath, fileContent);

  revalidatePath("/admin/team");
  revalidatePath("/team");
  return { success: true, slug };
}

export async function deleteTeamMember(slug: string): Promise<void> {
  const dir = path.join(contentDirectory, "team");
  const filePath = path.join(dir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return;
  }

  fs.unlinkSync(filePath);
  revalidatePath("/admin/team");
  revalidatePath("/team");
}

// ============================================
// Upload Action
// ============================================

function sanitizeFilename(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9.\-_]/g, "-")
    .replace(/-+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function uploadImage(formData: FormData) {
  ensureDir(uploadDirectory);

  const file = formData.get("file") as File | null;

  if (!file) {
    return { error: "No file provided" };
  }

  const allowedTypes = ["image/png", "image/jpeg", "image/gif", "image/webp"];
  if (!allowedTypes.includes(file.type)) {
    return {
      error: "Invalid file type. Only PNG, JPG, GIF, and WebP are allowed.",
    };
  }

  const maxSize = 1024 * 1024;
  if (file.size > maxSize) {
    return { error: "File too large. Maximum size is 1MB." };
  }

  const ext = path.extname(file.name) || `.${file.type.split("/")[1]}`;
  const baseName = sanitizeFilename(path.basename(file.name, ext));
  const fileName = `${baseName}${ext}`;

  // If the file already exists, delete it
  if (fs.existsSync(path.join(uploadDirectory, file.name))) {
    fs.unlinkSync(path.join(uploadDirectory, file.name));
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(uploadDirectory, fileName);
  fs.writeFileSync(filePath, buffer);

  const publicUrl = `/images/news/${fileName}`;

  return { success: true, url: publicUrl, fileName };
}

// ============================================
// Contact Form Action
// ============================================

const NEWSLETTER_API = "https://newsleter.globalwomentechleaders.com/api/send";
const NEWSLETTER_TOKEN = process.env.NEWSLETTER_API_TOKEN!;

export async function sendContactEmail(formData: FormData) {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();
  const captchaToken = (formData.get("captchaToken") as string)?.trim();

  if (!name || !email || !subject || !message) {
    return { error: "All fields are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please provide a valid email address." };
  }

  if (!captchaToken) {
    return { error: "Please complete the captcha." };
  }

  const hcaptchaSecret = process.env.HCAPTCHA_SECRET;
  if (!hcaptchaSecret) {
    return { error: "Server configuration error." };
  }

  try {
    const verification = await verify(hcaptchaSecret, captchaToken);
    if (!verification.success) {
      return { error: "Captcha verification failed. Please try again." };
    }
  } catch {
    return { error: "Captcha verification failed. Please try again." };
  }

  try {
    const res = await fetch(NEWSLETTER_API, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NEWSLETTER_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mode: "raw",
        to: "simona.sandru@gmail.com",
        subject: `[GWTL Contact] ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr>
              <td style="padding:8px 12px;font-weight:bold;vertical-align:top;color:#555;">Name</td>
              <td style="padding:8px 12px;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:bold;vertical-align:top;color:#555;">Email</td>
              <td style="padding:8px 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:bold;vertical-align:top;color:#555;">Subject</td>
              <td style="padding:8px 12px;">${escapeHtml(subject)}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:bold;vertical-align:top;color:#555;">Message</td>
              <td style="padding:8px 12px;white-space:pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </table>
        `,
      }),
    });

    if (!res.ok) {
      return { error: "Failed to send message. Please try again later." };
    }

    return { success: true };
  } catch {
    return { error: "Failed to send message. Please try again later." };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
