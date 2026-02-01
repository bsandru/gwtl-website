import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Latest news, events, and updates from Global Women TechLeaders.",
};

// This would come from Sanity CMS in production
const news = [
  {
    slug: "davos-2026",
    title: "GWTL at Davos 2026: Where Global Agendas Meet the Future of Leadership",
    excerpt:
      "Global Women TechLeaders co-organizes Davos Innovation Week 2026, hosting two executive panels on AI-driven leadership and investment trends.",
    date: "2026-01-21",
    category: "Events",
    featured: true,
  },
  {
    slug: "girls-who-lead",
    title: "Empowerment in Action: Girls Who Lead Cultivates Future Female Leaders",
    excerpt:
      "A 24-month Erasmus+ initiative empowering girls aged 16-18 with digital, entrepreneurial, and leadership skills.",
    date: "2025-12-15",
    category: "Programs",
    featured: true,
  },
  {
    slug: "wearedevelopers-2025",
    title: "GWTL at WeAreDevelopers World Congress 2025: Women Shaping AI",
    excerpt:
      "GWTL highlighted women's leadership in AI, hosting panels on inclusive innovation, AI ethics, and emerging technologies.",
    date: "2025-07-20",
    category: "Events",
    featured: false,
  },
  {
    slug: "romanian-parliament-roundtable",
    title: "GWTL Hosts Roundtable at Romanian Parliament on Women's Leadership",
    excerpt:
      "GWTL and the Committee for Labour held a Roundtable on 'Shaping the Future: Tech Talent, Leadership & Startup Investment for Women'.",
    date: "2025-06-10",
    category: "Advocacy",
    featured: false,
  },
  {
    slug: "mentoring-program-2025",
    title: "GWTL Launches the Global Top Tech Mentoring Program 2025",
    excerpt:
      "Join Global Women TechLeaders as a mentor to empower and guide women in tech through tailored mentorship.",
    date: "2025-03-01",
    category: "Programs",
    featured: false,
  },
  {
    slug: "ebu-partnership",
    title: "GWTL Partners with European Business University of Luxembourg",
    excerpt:
      "Partnership to offer impactful leadership programs for women in technology across Europe.",
    date: "2025-01-15",
    category: "Partnerships",
    featured: false,
  },
];

export default function NewsPage() {
  const featuredNews = news.filter((item) => item.featured);
  const otherNews = news.filter((item) => !item.featured);

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

      {/* All News */}
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
    </div>
  );
}
