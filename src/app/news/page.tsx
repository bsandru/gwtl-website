import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { getAllNews } from "@/lib/content";

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Latest news, events, and updates from Global Women TechLeaders.",
};

export default function NewsPage() {
  const allNews = getAllNews();
  const featuredNews = allNews.filter((item) => item.featured);
  const otherNews = allNews.filter((item) => !item.featured);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">News & Updates</h1>
          <p className="mt-4 text-lg text-gray-600">
            Stay updated with the latest from GWTL
          </p>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && (
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredNews.map((item) => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="group block"
                >
                  <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-600 to-accent-600 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white text-8xl font-bold opacity-10">
                        GWTL
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-sm font-medium text-gray-700">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    {new Date(item.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All News */}
      {otherNews.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">All Updates</h2>
            <div className="space-y-6">
              {otherNews.map((item) => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="group block bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-medium">
                          {item.category}
                        </span>
                        <span className="text-sm text-gray-500">
                          {new Date(item.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-gray-600 text-sm">{item.excerpt}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {allNews.length === 0 && (
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-500">No news articles yet. Check back soon!</p>
          </div>
        </section>
      )}
    </div>
  );
}
