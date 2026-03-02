import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Newspaper,
  Calendar,
  Users,
  ArrowLeft,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-48 min-h-screen bg-card border-r border-border p-6 flex flex-col">
          <div className="mb-8">
            <Link href="/" className="flex items-center">
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

          <div className="pt-6 border-t border-border">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Site
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  );
}
