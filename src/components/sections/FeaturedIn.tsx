import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "GWTL at Davos 2026",
    description:
      "Co-organized Davos Innovation Week, hosting executive panels on AI-driven leadership and investment trends.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    link: "/news/davos-2026",
    date: "January 2026",
    location: "Davos, Switzerland",
    tag: "Conference",
    featured: true,
  },
  {
    title: "Girls Who Lead - Erasmus+",
    description:
      "A 24-month initiative empowering girls aged 16-18 with digital, entrepreneurial, and leadership skills.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    link: "/programs/erasmus",
    date: "2024-2026",
    location: "Europe",
    tag: "Program",
    featured: false,
  },
  {
    title: "WeAreDevelopers World Congress",
    description:
      "Hosted panels and main-stage sessions on inclusive innovation, AI ethics, and emerging technologies.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
    link: "/news/wearedevelopers-2025",
    date: "2025",
    location: "Berlin, Germany",
    tag: "Event",
    featured: false,
  },
];

const partners = [
  { name: "EU Digital Skills", abbr: "DSJC" },
  { name: "WeAreDevelopers", abbr: "WAD" },
  { name: "ECWT", abbr: "ECWT" },
  { name: "SEE40", abbr: "SEE" },
  { name: "EBU Luxembourg", abbr: "EBU" },
  { name: "WomenTech", abbr: "WT" },
];

export function FeaturedIn() {
  const featuredArticle = features.find((f) => f.featured);
  const otherArticles = features.filter((f) => !f.featured);

  return (
    <section className="relative bg-[#f8f8f8] py-28 lg:py-40 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-brand-teal/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] translate-y-1/2 translate-x-1/4 rounded-full bg-gradient-to-l from-brand-navy/5 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 mb-6 animate-fade-in-up opacity-0 [animation-delay:0.1s]">
              <span className="h-2 w-2 rounded-full bg-brand-teal animate-pulse" />
              <span className="text-sm font-semibold text-brand-navy">Latest Updates</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.1] animate-fade-in-up opacity-0 [animation-delay:0.2s]">
              News &{" "}
              <span className="gradient-text-teal">Highlights</span>
            </h2>
          </div>

          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-teal transition-colors animate-fade-in-up opacity-0 [animation-delay:0.3s]"
          >
            <span>View all news</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* News Grid - Magazine layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Featured article - Large */}
          {featuredArticle && (
            <Link
              href={featuredArticle.link}
              className="group relative rounded-4xl overflow-hidden animate-fade-in-up opacity-0 [animation-delay:0.3s] lg:row-span-2"
            >
              <div className="absolute inset-0">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative h-full min-h-[500px] lg:min-h-[600px] flex flex-col justify-end p-8 lg:p-10">
                {/* Tag */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal text-white">
                    {featuredArticle.tag}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-white/70 text-sm mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {featuredArticle.location}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-brand-teal-light transition-colors">
                  {featuredArticle.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed mb-6 max-w-lg">
                  {featuredArticle.description}
                </p>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 text-brand-teal-light font-semibold">
                  <span>Read article</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          )}

          {/* Other articles - Stacked */}
          <div className="flex flex-col gap-8">
            {otherArticles.map((article, idx) => (
              <Link
                key={article.title}
                href={article.link}
                className="group relative flex flex-col sm:flex-row gap-6 p-6 rounded-[1.5rem] bg-white shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all duration-500 hover:-translate-y-1 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative w-full sm:w-48 h-48 sm:h-auto rounded-xl overflow-hidden shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Tag overlay */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-brand-navy">
                      {article.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center">
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-secondary-500 text-sm mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {article.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-secondary-300" />
                    <span>{article.location}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {article.description}
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

        {/* Partners - Marquee style */}
        <div className="pt-16 border-t border-secondary-200/50">
          <p className="text-center text-sm font-medium uppercase tracking-widest text-secondary-400 mb-10">
            Strategic Partners & Affiliations
          </p>

          {/* Partner logos */}
          <div className="relative overflow-hidden">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-[#f8f8f8] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8f8f8] to-transparent z-10" />

            {/* Scrolling track */}
            <div className="flex gap-8 animate-marquee">
              {[...partners, ...partners].map((partner, idx) => (
                <div
                  key={`${partner.name}-${idx}`}
                  className="flex items-center justify-center px-8 py-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow shrink-0"
                >
                  <span className="text-xl font-bold text-secondary-400 hover:text-brand-teal transition-colors whitespace-nowrap">
                    {partner.abbr}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
