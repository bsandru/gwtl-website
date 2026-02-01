import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

const features = [
  {
    title: "GWTL at Davos 2026",
    description:
      "Co-organized Davos Innovation Week, hosting executive panels on AI-driven leadership and investment trends.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    link: "/news/davos-2026",
    date: "January 2026",
    location: "Davos, Switzerland",
    tag: "Conference",
  },
  {
    title: "Girls Who Lead - Erasmus+",
    description:
      "A 24-month initiative empowering girls aged 16-18 with digital, entrepreneurial, and leadership skills.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    link: "/programs/erasmus",
    date: "2024-2026",
    location: "Europe",
    tag: "Program",
  },
  {
    title: "WeAreDevelopers World Congress",
    description:
      "Hosted panels and main-stage sessions on inclusive innovation, AI ethics, and emerging technologies.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
    link: "/news/wearedevelopers-2025",
    date: "2025",
    location: "Berlin, Germany",
    tag: "Event",
  },
];

const partners = [
  { name: "EU Digital Skills", logo: "DSJC" },
  { name: "WeAreDevelopers", logo: "WAD" },
  { name: "ECWT", logo: "ECWT" },
  { name: "SEE40", logo: "SEE" },
  { name: "EBU Luxembourg", logo: "EBU" },
  { name: "WomenTech", logo: "WT" },
];

export function FeaturedIn() {
  return (
    <section className="relative bg-secondary-50 py-24 lg:py-36 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="mx-auto mb-6 w-[60px] h-[3px] bg-linear-to-r from-brand-teal to-brand-navy rounded-sm" />
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy">
            Latest News
          </h2>
          <p className="mt-6 text-lg lg:text-xl leading-relaxed text-secondary-600">
            From Davos to WeAreDevelopers, we're shaping conversations about
            women's leadership in technology worldwide.
          </p>
        </div>

        {/* Featured Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <Link
              key={feature.title}
              href={feature.link}
              className="group block animate-fade-in-up opacity-0"
            >
              <article className="rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 h-full bg-white shadow-elegant">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />

                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-teal text-white">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Date badge */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-4 text-sm text-white/90">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        {feature.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        {feature.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="font-display text-xl lg:text-2xl font-bold group-hover:opacity-80 transition-opacity mb-3 text-brand-navy">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed mb-4 text-secondary-600">
                    {feature.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-bold text-brand-teal">
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Partners */}
        <div className="mt-24 pt-16 border-t border-secondary-200">
          <p className="text-center text-sm font-medium mb-10 uppercase tracking-widest text-secondary-500">
            Strategic Partners & Affiliations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-10">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center w-28 h-16 rounded-xl transition-all duration-300 hover:-translate-y-1 bg-white shadow-sm"
              >
                <span className="text-lg font-bold text-secondary-500 hover:opacity-70 transition-opacity">
                  {partner.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
