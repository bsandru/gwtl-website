import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import type { Profile } from "next-auth";
import { isAdminEmail } from "@/lib/admin";

function isAllowedGoogleProfile(
  profile: Profile | undefined,
): profile is Profile & { email: string } {
  if (!profile || typeof profile.email !== "string") return false;
  // Google's ID token sets this only after it has verified the address.
  if (profile.email_verified !== true) return false;
  return isAdminEmail(profile.email);
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  providers: [Google],
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
  callbacks: {
    signIn({ account, profile }) {
      if (account?.provider !== "google") return false;
      return isAllowedGoogleProfile(profile);
    },
    jwt({ token, account, profile }) {
      if (account?.provider === "google") {
        if (!isAllowedGoogleProfile(profile)) return null;
        token.email = profile.email.toLowerCase();
      } else if (account) {
        return null;
      }
      if (!isAdminEmail(token.email)) return null;
      return token;
    },
    authorized({ auth: session, request }) {
      if (request.nextUrl.pathname === "/admin/login") return true;
      return isAdminEmail(session?.user?.email);
    },
  },
});
