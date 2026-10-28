import Link from "next/link";
import { redirect } from "next/navigation";
import {
  LayoutDashboard,
  Newspaper,
  Calendar,
  Users,
  ArrowLeft,
  LogOut,
} from "lucide-react";
import { auth, signOut } from "@/auth";
import { isAdminEmail } from "@/lib/admin";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const email = session?.user?.email;
  if (!isAdminEmail(email)) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-48 min-h-screen bg-card border-r border-border p-6 flex flex-col">
          <div className="mb-8">
            <Link href="/admin" className="flex items-center">
              {/* <Image src="/images/logo.png" alt="GWTL Logo" width={50} height={50} /> */}
              <h1 className="inline-block text-xl font-bold text-brand-teal">GWTL Admin</h1>
            </Link>
            <p className="text-sm text-muted-foreground">Content Management</p>
          </div>

          <nav className="flex-1 space-y-2">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </Link>
            <Link
              href="/admin/news"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Newspaper className="w-5 h-5" />
              News
            </Link>
            <Link
              href="/admin/events"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Events
            </Link>
            <Link
              href="/admin/team"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Users className="w-5 h-5" />
              Team
            </Link>
          </nav>

          <div className="fixed bottom-6 w-36 space-y-1 border-t border-border pt-4">
            <p className="truncate px-1 text-xs text-muted-foreground" title={email}>
              {email}
            </p>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/admin/login" });
              }}
            >
              <button
                type="submit"
                className="flex w-full items-center gap-2 rounded-lg px-1 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <LogOut className="h-5 w-5" />
                Sign out
              </button>
            </form>
            <Link
              href="/"
              className="flex items-center gap-2 rounded-lg px-1 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to GWTL
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
