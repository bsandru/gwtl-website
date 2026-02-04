import Link from "next/link";
import { Newspaper, Calendar, Plus } from "lucide-react";
import { getAllNews, getAllEvents } from "@/lib/content";

export default function AdminDashboard() {
  const news = getAllNews();
  const events = getAllEvents();

  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* News Card */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-brand-teal/20 rounded-xl">
                <Newspaper className="w-6 h-6 text-brand-teal" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">News</h2>
                <p className="text-sm text-muted-foreground">{news.length} articles</p>
              </div>
            </div>
            <Link
              href="/admin/news/new"
              className="p-2 bg-brand-teal hover:bg-brand-teal-light rounded-lg transition-colors"
            >
              <Plus className="w-5 h-5 text-white" />
            </Link>
          </div>
          <Link
            href="/admin/news"
            className="text-brand-teal hover:text-brand-teal-light text-sm font-medium"
          >
            Manage news →
          </Link>
        </div>

        {/* Events Card */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-brand-teal/20 rounded-xl">
                <Calendar className="w-6 h-6 text-brand-teal" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">Events</h2>
                <p className="text-sm text-muted-foreground">{events.length} events</p>
              </div>
            </div>
            <Link
              href="/admin/events/new"
              className="p-2 bg-brand-teal hover:bg-brand-teal-light rounded-lg transition-colors"
            >
              <Plus className="w-5 h-5 text-white" />
            </Link>
          </div>
          <Link
            href="/admin/events"
            className="text-brand-teal hover:text-brand-teal-light text-sm font-medium"
          >
            Manage events →
          </Link>
        </div>
      </div>

      {/* Recent Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent News */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Recent News</h3>
          <div className="space-y-3">
            {news.slice(0, 5).map((item) => (
              <Link
                key={item.slug}
                href={`/admin/news/${item.slug}`}
                className="block bg-card border border-border rounded-xl p-4 hover:bg-accent transition-colors"
              >
                <h4 className="text-foreground font-medium truncate">{item.title}</h4>
                <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                  <span className="px-2 py-0.5 bg-muted rounded-full text-xs">
                    {item.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Events */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-4">Recent Events</h3>
          <div className="space-y-3">
            {events.slice(0, 5).map((item) => (
              <Link
                key={item.slug}
                href={`/admin/events/${item.slug}`}
                className="block bg-card border border-border rounded-xl p-4 hover:bg-accent transition-colors"
              >
                <h4 className="text-foreground font-medium truncate">{item.title}</h4>
                <div className="flex items-center gap-3 mt-2 text-sm text-muted-foreground">
                  <span>{new Date(item.date).toLocaleDateString()}</span>
                  <span>{item.location}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
