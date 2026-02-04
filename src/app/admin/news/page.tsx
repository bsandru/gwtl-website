import Link from "next/link";
import { Plus, Edit, Trash2 } from "lucide-react";
import { getAllNews } from "@/lib/content";

export default function AdminNewsPage() {
  const news = getAllNews();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">News</h1>
          <p className="text-muted-foreground mt-1">Manage news articles</p>
        </div>
        <Link
          href="/admin/news/new"
          className="flex items-center gap-2 px-4 py-2 bg-brand-teal hover:bg-brand-teal-light text-white rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Article
        </Link>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 text-muted-foreground font-medium">Title</th>
              <th className="text-left p-4 text-muted-foreground font-medium">Category</th>
              <th className="text-left p-4 text-muted-foreground font-medium">Date</th>
              <th className="text-left p-4 text-muted-foreground font-medium">Featured</th>
              <th className="text-right p-4 text-muted-foreground font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {news.map((item) => (
              <tr
                key={item.slug}
                className="border-b border-border hover:bg-accent transition-colors"
              >
                <td className="p-4">
                  <Link
                    href={`/admin/news/${item.slug}`}
                    className="text-foreground hover:text-brand-teal font-medium"
                  >
                    {item.title}
                  </Link>
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground">
                    {item.category}
                  </span>
                </td>
                <td className="p-4 text-muted-foreground">
                  {new Date(item.date).toLocaleDateString()}
                </td>
                <td className="p-4">
                  {item.featured ? (
                    <span className="px-2 py-1 bg-brand-teal/20 text-brand-teal rounded-full text-xs">
                      Featured
                    </span>
                  ) : (
                    <span className="text-muted-foreground">—</span>
                  )}
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/news/${item.slug}`}
                      className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <form action={`/api/admin/news/${item.slug}/delete`} method="POST">
                      <button
                        type="submit"
                        className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {news.length === 0 && (
          <div className="p-12 text-center text-muted-foreground">
            No news articles yet.{" "}
            <Link href="/admin/news/new" className="text-brand-teal hover:underline">
              Create your first article
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
