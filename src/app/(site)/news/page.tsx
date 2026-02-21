import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Calendar, Sparkles, Clock } from "lucide-react";
import { getAllNews } from "@/lib/content";

export const metadata: Metadata = {
  title: "News & Updates | GWTL",
  description: "Latest news, events, and updates from Global Women TechLeaders.",
};

// Default images for news items without images
const defaultImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
];

function getDefaultImage(index: number): string {
  return defaultImages[index % defaultImages.length];
}

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
  const featuredNews = allNews.filter((item) => item.featured);
  const otherNews = allNews.filter((item) => !item.featured);

  // Get the main featured article and secondary featured
  const mainFeatured = featuredNews[0];
  const secondaryFeatured = featuredNews.slice(1, 3);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-[300px] -right-[200px] w-[700px] h-[700px] rounded-full bg-gradient-to-br from-brand-teal/15 via-brand-teal-light/10 to-transparent blur-3xl" />
          <div className="absolute -bottom-[200px] -left-[200px] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-brand-navy/5 to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-pattern-dots opacity-20" />
        </div>

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

          {/* Featured Section */}
          {featuredNews.length > 0 && (
            <div className="grid lg:grid-cols-2 gap-8 animate-fade-in-up opacity-0 [animation-delay:0.4s]">
              {/* Main Featured Article */}
              {mainFeatured && (
                <Link
                  href={`/news/${mainFeatured.slug}`}
                  className="group relative rounded-4xl overflow-hidden lg:row-span-2"
                >
                  {/* Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={mainFeatured.image || getDefaultImage(0)}
                      alt={mainFeatured.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-brand-navy/20" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full min-h-[500px] lg:min-h-[600px] flex flex-col justify-end p-8 lg:p-10">
                    {/* Category badge */}
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal text-white shadow-lg">
                        {mainFeatured.category}
                      </span>
                    </div>

                    {/* Featured badge */}
                    <div className="absolute top-6 right-6">
                      <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white border border-white/20">
                        Featured
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-white/70 text-sm mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {formatDate(mainFeatured.date)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        {getReadTime(mainFeatured.content)} min read
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-brand-teal-light transition-colors leading-tight">
                      {mainFeatured.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-white/70 leading-relaxed mb-6 max-w-lg line-clamp-2">
                      {mainFeatured.excerpt}
                    </p>

                    {/* CTA */}
                    <div className="inline-flex items-center gap-2 text-brand-teal-light font-semibold">
                      <span>Read article</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              )}

              {/* Secondary Featured */}
              <div className="flex flex-col gap-8">
                {secondaryFeatured.map((item, idx) => (
                  <Link
                    key={item.slug}
                    href={`/news/${item.slug}`}
                    className="group relative flex flex-col sm:flex-row gap-6 p-6 rounded-[1.5rem] bg-white shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-500 hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative w-full sm:w-48 h-48 sm:h-auto rounded-xl overflow-hidden shrink-0">
                      <Image
                        src={item.image || getDefaultImage(idx + 1)}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Category tag */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-brand-navy">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center flex-1">
                      {/* Meta */}
                      <div className="flex items-center gap-3 text-secondary-500 text-sm mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {formatDate(item.date)}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-secondary-300" />
                        <span>{getReadTime(item.content)} min read</span>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors leading-snug">
                        {item.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-secondary-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {item.excerpt}
                      </p>

                      {/* CTA */}
                      <div className="inline-flex items-center gap-1.5 text-brand-teal font-semibold text-sm">
                        <span>Read more</span>
                        <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
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
                  className="group relative rounded-[1.5rem] overflow-hidden bg-secondary-50 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${0.1 * idx}s` }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image || getDefaultImage(idx + 3)}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

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
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand-teal/20 to-transparent blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-brand-teal-light/15 to-transparent blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Never Miss an Update
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest news, events, and
            insights delivered directly to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/50 transition-all bg-white/10 border border-white/10 text-white placeholder:text-white/40"
            />
            <button
              type="submit"
              className="magnetic-btn px-8 py-4 font-bold rounded-xl transition-all duration-300 bg-gradient-to-r from-brand-teal to-brand-teal-light text-brand-navy hover:shadow-lg hover:shadow-brand-teal/30 flex items-center justify-center gap-2"
            >
              <span>Subscribe</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
