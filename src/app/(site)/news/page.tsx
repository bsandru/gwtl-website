import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Calendar, Sparkles, Clock } from "lucide-react";
import { getAllNews } from "@/lib/content";

export const metadata: Metadata = {
  title: "News & Updates",
  description: "Latest news, insights, and updates from Global Women TechLeaders.",
};

// Default images for news items without images
const DefaultImage = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"


function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export default function NewsPage() {
  const allNews = getAllNews();

  // Take the first 5 articles for the bento grid, rest go to "All Updates"
  const bentoNews = allNews.slice(0, 5);
  const otherNews = allNews.slice(5);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        {/* <div className="absolute inset-0">
          <div className="absolute -top-[300px] -right-[200px] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-brand-teal/15 via-brand-teal-light/10 to-transparent blur-3xl" />
          <div className="absolute -bottom-[200px] -left-[200px] w-[500px] h-[500px] rounded-full bg-linear-to-tr from-brand-navy/5 to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-pattern-dots opacity-20" />
        </div> */}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 mb-6 animate-fade-in-up opacity-0 [animation-delay:0.1s]">
              <Sparkles className="h-4 w-4 text-brand-teal" />
              <span className="text-sm font-semibold text-brand-teal">Latest Updates</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-navy leading-[0.95] tracking-tight animate-fade-in-up opacity-0 [animation-delay:0.2s]">
              News &{" "}
              <span className="gradient-text-teal">Insights</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-secondary-600 leading-relaxed max-w-2xl animate-fade-in-up opacity-0 [animation-delay:0.3s]">
              Stay informed with the latest updates, thought leadership, and stories
              from the global community of women tech leaders.
            </p>
          </div>

          {/* ============================== */}
          {/* Bento Grid */}
          {/* ============================== */}
          {bentoNews.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 animate-fade-in-up opacity-0 [animation-delay:0.4s]">
              {/* ---- Row 1: Large card (2/3) + Small card (1/3) ---- */}
              {bentoNews[0] && (
                <Link
                  href={`/news/${bentoNews[0].slug}`}
                  className="group relative md:col-span-2 rounded-2xl lg:rounded-3xl overflow-hidden border border-white/[0.08] transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_40px_-12px_rgba(0,163,163,0.25)]"
                >
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <Image
                      src={bentoNews[0].image || DefaultImage}
                      alt={bentoNews[0].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/70 to-brand-navy/30" />
                  </div>

                  {/* Content overlay */}
                  <div className="relative flex flex-col justify-end min-h-[320px] md:min-h-[380px] lg:min-h-[420px] p-6 lg:p-8">
                    {/* Top badges */}
                    <div className="absolute top-5 left-5 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-teal text-white">
                        {bentoNews[0].category}
                      </span>
                      {bentoNews[0].featured && (
                        <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white/80 border border-white/15">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-white/50 text-xs mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(bentoNews[0].date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {getReadTime(bentoNews[0].content)} min read
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-brand-teal-light transition-colors leading-tight line-clamp-2">
                      {bentoNews[0].title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-white/45 text-sm leading-relaxed line-clamp-2 max-w-xl mb-4">
                      {bentoNews[0].excerpt}
                    </p>

                    {/* CTA */}
                    <div className="inline-flex items-center gap-2 text-brand-teal-light text-sm font-semibold">
                      <span>Read article</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              )}

              {bentoNews[1] && (
                <Link
                  href={`/news/${bentoNews[1].slug}`}
                  className="group relative rounded-2xl lg:rounded-3xl overflow-hidden border border-white/[0.08] transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_40px_-12px_rgba(0,163,163,0.25)]"
                >
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <Image
                      src={bentoNews[1].image || DefaultImage}
                      alt={bentoNews[1].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/70 to-brand-navy/30" />
                  </div>

                  {/* Content overlay */}
                  <div className="relative flex flex-col justify-end min-h-[320px] md:min-h-[380px] lg:min-h-[420px] p-6 lg:p-8">
                    {/* Category badge */}
                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-teal text-white">
                        {bentoNews[1].category}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-white/50 text-xs mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(bentoNews[1].date)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-brand-teal-light transition-colors leading-tight line-clamp-3">
                      {bentoNews[1].title}
                    </h3>

                    {/* CTA */}
                    <div className="inline-flex items-center gap-2 text-brand-teal-light text-sm font-semibold">
                      <span>Read more</span>
                      <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              )}

              {/* ---- Row 2: Three equal cards ---- */}
              {bentoNews.slice(2, 5).map((item, idx) => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="group relative rounded-2xl lg:rounded-3xl overflow-hidden border border-white/[0.08] transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_40px_-12px_rgba(0,163,163,0.25)]"
                >
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.image || DefaultImage}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/70 to-brand-navy/30" />
                  </div>

                  {/* Content overlay */}
                  <div className="relative flex flex-col justify-end min-h-[280px] md:min-h-[300px] lg:min-h-[320px] p-6 lg:p-7">
                    {/* Category badge */}
                    <div className="absolute top-5 left-5">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-teal text-white">
                        {item.category}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-white/50 text-xs mb-2">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(item.date)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-brand-teal-light transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-white/40 text-sm leading-relaxed line-clamp-2 mb-3">
                      {item.excerpt}
                    </p>

                    {/* CTA */}
                    <div className="inline-flex items-center gap-2 text-brand-teal-light text-sm font-semibold">
                      <span>Read more</span>
                      <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* All News Grid */}
      {otherNews.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy">
                  All Updates
                </h2>
                <p className="mt-2 text-secondary-600">
                  Browse our complete archive of news and articles
                </p>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-6xl font-bold text-secondary-100">
                  {String(otherNews.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* News Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherNews.map((item, idx) => (
                <Link
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="group relative rounded-[1.5rem] overflow-hidden bg-secondary-50 hover:bg-white transition-all duration-500 shadow-sm hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${0.1 * idx}s` }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image || DefaultImage}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-brand-navy/80 via-brand-navy/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Category tag */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-brand-navy">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-secondary-500 text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(item.date)}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-secondary-300" />
                      <span>{getReadTime(item.content)} min</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-secondary-600 text-sm leading-relaxed line-clamp-2 mb-4">
                      {item.excerpt}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-brand-teal font-semibold text-sm group-hover:text-brand-teal-dark transition-colors">
                        Read article
                      </span>
                      <div className="h-8 w-8 rounded-full bg-brand-teal/10 flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-all">
                        <ArrowUpRight className="h-4 w-4 text-brand-teal group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {allNews.length === 0 && (
        <section className="py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-secondary-100 mb-6">
              <Sparkles className="h-10 w-10 text-secondary-400" />
            </div>
            <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">
              No articles yet
            </h2>
            <p className="text-secondary-500 max-w-md mx-auto">
              We&apos;re working on exciting content. Check back soon for the latest news and updates!
            </p>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-28 bg-brand-navy relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-linear-to-br from-brand-teal/20 to-transparent blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-linear-to-tl from-brand-teal-light/15 to-transparent blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Never Miss an Update
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest news, events, and
            insights delivered directly to your inbox.
          </p>

          <div className="flex justify-center max-w-lg mx-auto">
            <Link
              href="/contact"
              className="magnetic-btn px-8 py-4 font-bold rounded-xl transition-all duration-300 bg-linear-to-r from-brand-teal to-brand-teal-light text-brand-navy hover:shadow-lg hover:shadow-brand-teal/30 flex items-center justify-center gap-2"
            >
              <span>Subscribe</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
