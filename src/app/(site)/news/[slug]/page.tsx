import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react";
import { getAllNews, getNewsItem } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

// Default images for news items without images
const defaultImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=900&fit=crop",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1600&h=900&fit=crop",
];

function getDefaultImage(slug: string): string {
  const index = slug.length % defaultImages.length;
  return defaultImages[index];
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

export async function generateStaticParams() {
  const news = getAllNews();
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = await getNewsItem(slug);

  if (!item) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${item.title} | GWTL News`,
    description: item.excerpt,
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = await getNewsItem(slug);

  if (!item) {
    notFound();
  }

  // Get related news (same category, excluding current)
  const allNews = getAllNews();
  const relatedNews = allNews
    .filter((n) => n.category === item.category && n.slug !== slug)
    .slice(0, 3);

  const articleImage = item.image || getDefaultImage(slug);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section with Image */}
      <section className="relative pt-24 pb-0">
        {/* Back link - floating */}
        <div className="fixed top-28 left-4 sm:left-6 lg:left-8 z-20">
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium text-brand-navy shadow-lg hover:bg-white transition-all"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to News
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative h-[50vh] min-h-[400px] max-h-[600px] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative h-full rounded-4xl overflow-hidden">
            <Image
              src={articleImage}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/40 to-transparent" />

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <div className="max-w-4xl">
                {/* Category badge */}
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal text-white mb-4">
                  {item.category}
                </span>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {formatDate(item.date)}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {getReadTime(item.content)} min read
                  </span>
                </div>

                {/* Title */}
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {item.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Sidebar - Share & Info */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="lg:sticky lg:top-28 space-y-8">
                {/* Share buttons */}
                <div className="p-6 rounded-2xl bg-white shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-secondary-500 mb-4">
                    Share this article
                  </h3>
                  <div className="flex gap-3">
                    <button className="group h-10 w-10 rounded-xl bg-secondary-100 flex items-center justify-center hover:bg-[#0077B5] transition-colors">
                      <Linkedin className="h-4 w-4 text-secondary-600 group-hover:text-white transition-colors" />
                    </button>
                    <button className="group h-10 w-10 rounded-xl bg-secondary-100 flex items-center justify-center hover:bg-[#1DA1F2] transition-colors">
                      <Twitter className="h-4 w-4 text-secondary-600 group-hover:text-white transition-colors" />
                    </button>
                    <button className="group h-10 w-10 rounded-xl bg-secondary-100 flex items-center justify-center hover:bg-[#1877F2] transition-colors">
                      <Facebook className="h-4 w-4 text-secondary-600 group-hover:text-white transition-colors" />
                    </button>
                    <button className="group h-10 w-10 rounded-xl bg-secondary-100 flex items-center justify-center hover:bg-brand-teal transition-colors">
                      <Share2 className="h-4 w-4 text-secondary-600 group-hover:text-white transition-colors" />
                    </button>
                  </div>
                </div>

                {/* Article info */}
                <div className="p-6 rounded-2xl bg-white shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-secondary-500 mb-4">
                    About this article
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-secondary-500">Category</p>
                      <p className="font-medium text-brand-navy">{item.category}</p>
                    </div>
                    <div>
                      <p className="text-secondary-500">Published</p>
                      <p className="font-medium text-brand-navy">{formatDate(item.date)}</p>
                    </div>
                    <div>
                      <p className="text-secondary-500">Reading time</p>
                      <p className="font-medium text-brand-navy">{getReadTime(item.content)} minutes</p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <article className="lg:col-span-9 order-1 lg:order-2">
              {/* Excerpt/Lead */}
              <p className="text-xl lg:text-2xl text-secondary-700 leading-relaxed mb-10 font-medium">
                {item.excerpt}
              </p>

              {/* Divider */}
              <div className="w-20 h-1 bg-linear-to-r from-brand-teal to-brand-teal-light rounded-full mb-10" />

              {/* Article body */}
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-display prose-headings:text-brand-navy prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                  prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
                  prose-p:text-secondary-600 prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-brand-teal prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-brand-navy prose-strong:font-semibold
                  prose-ul:text-secondary-600 prose-ul:my-6
                  prose-ol:text-secondary-600 prose-ol:my-6
                  prose-li:my-2 prose-li:leading-relaxed
                  prose-blockquote:border-l-4 prose-blockquote:border-brand-teal prose-blockquote:bg-brand-teal/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic
                  prose-blockquote:text-brand-navy prose-blockquote:font-medium
                  prose-img:rounded-2xl prose-img:shadow-lg
                  prose-code:text-brand-teal prose-code:bg-brand-teal/10 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none"
                dangerouslySetInnerHTML={{ __html: item.content }}
              />

              {/* Tags/Categories */}
              <div className="mt-12 pt-8 border-t border-secondary-200">
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-brand-teal/10 text-brand-teal">
                    {item.category}
                  </span>
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-secondary-100 text-secondary-600">
                    Women in Tech
                  </span>
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-secondary-100 text-secondary-600">
                    Leadership
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedNews.length > 0 && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="font-display text-3xl font-bold text-brand-navy">
                  Related Articles
                </h2>
                <p className="mt-2 text-secondary-600">
                  More from {item.category}
                </p>
              </div>
              <Link
                href="/news"
                className="hidden sm:inline-flex items-center gap-2 text-brand-teal font-semibold hover:text-brand-teal-dark transition-colors"
              >
                <span>View all news</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedNews.map((related, idx) => (
                <Link
                  key={related.slug}
                  href={`/news/${related.slug}`}
                  className="group relative rounded-[1.5rem] overflow-hidden bg-secondary-50 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={related.image || getDefaultImage(related.slug)}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brand-navy/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-brand-navy">
                        {related.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-secondary-500 text-sm mb-3">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(related.date)}
                    </div>
                    <h3 className="font-display text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-secondary-600 text-sm line-clamp-2">
                      {related.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile link */}
            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-brand-teal font-semibold"
              >
                <span>View all news</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-brand-navy relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-linear-to-br from-brand-teal/20 to-transparent blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Get the latest news and updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/news">
              <button className="magnetic-btn px-8 py-4 font-bold rounded-xl bg-white text-brand-navy hover:bg-brand-teal-light transition-colors">
                Browse All Articles
              </button>
            </Link>
            <Link href="/for-leaders/join">
              <button className="magnetic-btn px-8 py-4 font-bold rounded-xl border border-white/20 text-white hover:bg-white/10 transition-colors">
                Join the Community
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
