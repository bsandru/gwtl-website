import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Content directory paths
const contentDirectory = path.join(process.cwd(), "content");

// ============================================
// Types
// ============================================

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  featured: boolean;
  content: string;
  image?: string;
}

export interface EventItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  endDate?: string;
  location: string;
  category: string;
  featured: boolean;
  content: string;
  image?: string;
  registrationUrl?: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
  order: number;
  content: string;
  category?: string;
  company?: string;
  country?: string;
}

// ============================================
// Helper Functions
// ============================================

function getContentDirectory(type: "news" | "events" | "team"): string {
  return path.join(contentDirectory, type);
}

function ensureDirectoryExists(dir: string): void {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}

function getAllFiles(directory: string): string[] {
  ensureDirectoryExists(directory);
  return fs.readdirSync(directory).filter((file) => file.endsWith(".md"));
}

// ============================================
// News Functions
// ============================================

export function getAllNews(): NewsItem[] {
  const newsDirectory = getContentDirectory("news");
  const files = getAllFiles(newsDirectory);

  const news = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(newsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      date: data.date || "",
      category: data.category || "News",
      featured: data.featured || false,
      image: data.image || undefined,
      content,
    } as NewsItem;
  });

  // Sort by date, newest first
  return news.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getNewsItem(slug: string): Promise<NewsItem | null> {
  const newsDirectory = getContentDirectory("news");
  const fullPath = path.join(newsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const htmlContent = await markdownToHtml(content);

  return {
    slug,
    title: data.title || "",
    excerpt: data.excerpt || "",
    date: data.date || "",
    category: data.category || "News",
    featured: data.featured || false,
    image: data.image || undefined,
    content: htmlContent,
  };
}

// ============================================
// Events Functions
// ============================================

export function getAllEvents(): EventItem[] {
  const eventsDirectory = getContentDirectory("events");
  const files = getAllFiles(eventsDirectory);

  const events = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(eventsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      excerpt: data.excerpt || "",
      date: data.date || "",
      endDate: data.endDate || undefined,
      location: data.location || "",
      category: data.category || "Event",
      featured: data.featured || false,
      image: data.image || undefined,
      registrationUrl: data.registrationUrl || undefined,
      content,
    } as EventItem;
  });

  // Sort by date, newest first
  return events.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getEventItem(slug: string): Promise<EventItem | null> {
  const eventsDirectory = getContentDirectory("events");
  const fullPath = path.join(eventsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const htmlContent = await markdownToHtml(content);

  return {
    slug,
    title: data.title || "",
    excerpt: data.excerpt || "",
    date: data.date || "",
    endDate: data.endDate || undefined,
    location: data.location || "",
    category: data.category || "Event",
    featured: data.featured || false,
    image: data.image || undefined,
    registrationUrl: data.registrationUrl || undefined,
    content: htmlContent,
  };
}

export function getUpcomingEvents(): EventItem[] {
  const allEvents = getAllEvents();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return allEvents.filter((event) => new Date(event.date) >= today);
}

export function getPastEvents(): EventItem[] {
  const allEvents = getAllEvents();
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return allEvents.filter((event) => new Date(event.date) < today);
}

// ============================================
// Team Functions
// ============================================

export function getAllTeamMembers(): TeamMember[] {
  const teamDirectory = getContentDirectory("team");
  const files = getAllFiles(teamDirectory);

  const team = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(teamDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      name: data.name || "",
      role: data.role || "",
      bio: data.bio || "",
      image: data.image || undefined,
      linkedin: data.linkedin || undefined,
      twitter: data.twitter || undefined,
      order: data.order || 999,
      category: data.category || "leadership",
      company: data.company || undefined,
      country: data.country || undefined,
      content,
    } as TeamMember;
  });

  // Sort by order field
  return team.sort((a, b) => a.order - b.order);
}

export async function getTeamMember(slug: string): Promise<TeamMember | null> {
  const teamDirectory = getContentDirectory("team");
  const fullPath = path.join(teamDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const htmlContent = await markdownToHtml(content);

  return {
    slug,
    name: data.name || "",
    role: data.role || "",
    bio: data.bio || "",
    image: data.image || undefined,
    linkedin: data.linkedin || undefined,
    twitter: data.twitter || undefined,
    order: data.order || 999,
    category: data.category || "leadership",
    company: data.company || undefined,
    country: data.country || undefined,
    content: htmlContent,
  };
}
