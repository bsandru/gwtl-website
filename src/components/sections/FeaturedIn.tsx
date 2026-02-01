import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "GWTL at Davos 2026",
    description:
      "Co-organized Davos Innovation Week, hosting executive panels on AI-driven leadership and investment trends.",
    image: "/images/davos.jpg",
    link: "/news/davos-2026",
    date: "January 2026",
  },
  {
    title: "Girls Who Lead - Erasmus+",
    description:
      "A 24-month initiative empowering girls aged 16-18 with digital, entrepreneurial, and leadership skills.",
    image: "/images/erasmus.jpg",
    link: "/programs/erasmus",
    date: "2024-2026",
  },
  {
    title: "WeAreDevelopers World Congress",
    description:
      "Hosted panels and main-stage sessions on inclusive innovation, AI ethics, and emerging technologies.",
    image: "/images/wearedevelopers.jpg",
    link: "/news/wearedevelopers-2025",
    date: "2025",
  },
];

export function FeaturedIn() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Global Impact
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From Davos to WeAreDevelopers, we&apos;re shaping conversations about
            women&apos;s leadership in technology worldwide.
          </p>
        </div>

        {/* Featured Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.link}
              className="group block"
            >
              <div className="relative h-56 rounded-2xl overflow-hidden bg-gray-200 mb-4">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/80 to-accent-600/80 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold opacity-20">
                    GWTL
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-white/90 text-sm font-medium text-gray-700">
                  {feature.date}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              <span className="inline-flex items-center mt-3 text-sm font-medium text-primary-600 group-hover:text-primary-700">
                Read more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        {/* Partners */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 mb-8">
            Official partners and affiliations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            <span className="text-xl font-semibold text-gray-600">EU Digital</span>
            <span className="text-xl font-semibold text-gray-600">WeAreDevelopers</span>
            <span className="text-xl font-semibold text-gray-600">ECWT</span>
            <span className="text-xl font-semibold text-gray-600">SEE40</span>
            <span className="text-xl font-semibold text-gray-600">EBU Luxembourg</span>
            <span className="text-xl font-semibold text-gray-600">WomenTech</span>
          </div>
        </div>
      </div>
    </section>
  );
}
