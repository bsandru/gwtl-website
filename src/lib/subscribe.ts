"use server";

import { verify } from "hcaptcha";
import { sql, initDb } from "./db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SubscribeResult =
  | { success: true }
  | { success: false; error: string };

export async function subscribeNewsletter(
  email: string,
  captchaToken: string,
  source: string
): Promise<SubscribeResult> {
  if (!email || !EMAIL_RE.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  if (!captchaToken) {
    return { success: false, error: "Please complete the captcha." };
  }

  const secret = process.env.HCAPTCHA_SECRET;
  if (!secret) {
    console.error("HCAPTCHA_SECRET is not configured");
    return { success: false, error: "Server configuration error." };
  }

  try {
    const verification = await verify(secret, captchaToken);
    if (!verification.success) {
      return { success: false, error: "Captcha verification failed. Please try again." };
    }
  } catch {
    return { success: false, error: "Captcha verification failed. Please try again." };
  }

  try {
    await initDb();
    await sql`
      INSERT INTO subscribers (email, name, created_at)
      VALUES (${email.toLowerCase().trim()}, ${source}, ${new Date().toISOString()})
      ON CONFLICT (email) DO NOTHING
    `;
    return { success: true };
  } catch (err) {
    console.error("Failed to save subscriber:", err);
    return { success: false, error: "Something went wrong. Please try again later." };
  }
}
