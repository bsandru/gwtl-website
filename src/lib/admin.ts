/** Google accounts allowed into /admin. */
export const ADMIN_EMAILS = [
  "bsandru@gmail.com",
  "simona.sandru@globalwomenintech.com",
] as const;

const ADMIN_EMAIL_SET = new Set<string>(ADMIN_EMAILS);

export function isAdminEmail(
  email: string | null | undefined,
): email is string {
  if (!email) return false;
  return ADMIN_EMAIL_SET.has(email.trim().toLowerCase());
}
