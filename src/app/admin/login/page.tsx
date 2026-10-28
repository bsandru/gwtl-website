import { redirect } from "next/navigation";
import { auth, signIn } from "@/auth";
import { isAdminEmail } from "@/lib/admin";

const missingEnv = [
  ["AUTH_SECRET", process.env.AUTH_SECRET],
  ["AUTH_GOOGLE_ID", process.env.AUTH_GOOGLE_ID],
  ["AUTH_GOOGLE_SECRET", process.env.AUTH_GOOGLE_SECRET],
]
  .filter(([, value]) => !value)
  .map(([name]) => name);

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const session = await auth();
  if (isAdminEmail(session?.user?.email)) {
    redirect("/admin");
  }

  const { error } = await searchParams;
  const configured = missingEnv.length === 0;
  const message =
    error === "AccessDenied"
      ? "This Google account cannot open the admin."
      : error
        ? "Google sign-in did not complete. Try again."
        : null;

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <h1 className="font-display text-4xl font-bold text-brand-navy">
          GWTL Admin
        </h1>
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          Sign in with Google to manage the website.
        </p>

        {message ? (
          <p className="mt-6 text-sm text-red-700" role="alert">
            {message}
          </p>
        ) : null}

        {configured ? (
          <form
            className="mt-8"
            action={async () => {
              "use server";
              await signIn("google", { redirectTo: "/admin" });
            }}
          >
            <button
              type="submit"
              className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-semibold text-brand-navy shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
            >
              <GoogleMark />
              Continue with Google
            </button>
          </form>
        ) : (
          <p className="mt-8 text-sm leading-relaxed text-slate-600">
            Sign-in is not configured.
            {process.env.NODE_ENV === "development" ? (
              <>
                {" "}
                Add {missingEnv.join(" and ")} to the environment, then restart
                the server.
              </>
            ) : null}
          </p>
        )}
      </div>
    </div>
  );
}

function GoogleMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5c-.3 1.5-1.1 2.8-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.7z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1C3.4 21.3 7.4 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.4 14.4c-.2-.7-.4-1.4-.4-2.4s.1-1.7.4-2.4V6.5H1.4C.5 8.3 0 10.1 0 12s.5 3.7 1.4 5.5l4-3.1z"
      />
      <path
        fill="#EA4335"
        d="M12 4.8c1.7 0 3.3.6 4.5 1.8l3.4-3.4C17.9 1.1 15.2 0 12 0 7.4 0 3.4 2.7 1.4 6.5l4 3.1C6.3 6.9 8.9 4.8 12 4.8z"
      />
    </svg>
  );
}
