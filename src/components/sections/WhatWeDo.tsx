import { BookOpen, Users, Award, Building2, ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Learn",
    description:
      "World-class training programs and continuous learning opportunities to develop your leadership potential.",
    icon: BookOpen,
    link: "/programs/learning",
    stat: "500+",
    statLabel: "Courses",
    color: "teal",
    size: "large",
  },
  {
    title: "Connect",
    description:
      "Build global alliances and leverage diverse expertise across 50+ countries.",
    icon: Users,
    link: "/for-leaders/join",
    stat: "5K+",
    statLabel: "Members",
    color: "navy",
    size: "small",
  },
  {
    title: "Lead",
    description:
      "Shape the future of tech through bold, visible leadership at global forums.",
    icon: Award,
    link: "/programs",
    stat: "50+",
    statLabel: "Events/Year",
    color: "teal",
    size: "small",
  },
  {
    title: "Corporate Programs",
    description:
      "Partner with us to develop your women leaders, access top talent, and demonstrate DEI commitment.",
    icon: Building2,
    link: "/for-companies",
    stat: "100+",
    statLabel: "Partners",
    color: "navy",
    size: "large",
  },
];

export function WhatWeDo() {
  return (
    <section className="relative bg-white py-28 lg:py-40 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-linear-to-br from-brand-teal/5 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 mb-6 animate-fade-in-up opacity-0 [animation-delay:0.1s]">
              <Sparkles className="h-4 w-4 text-brand-teal" />
              <span className="text-sm font-semibold text-brand-teal">What We Do</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.1] animate-fade-in-up opacity-0 [animation-delay:0.2s]">
              Leadership{" "}
              <span className="gradient-text-teal">in Action</span>
            </h2>
            <p className="mt-6 text-lg text-secondary-600 leading-relaxed animate-fade-in-up opacity-0 [animation-delay:0.3s]">
              What we&apos;re building together — globally, strategically, and with purpose.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            const isLarge = feature.size === "large";
            const isTeal = feature.color === "teal";

            return (
              <Link
                key={feature.title}
                href={feature.link}
                className={`group relative rounded-4xl overflow-hidden transition-all duration-500 hover:-translate-y-3 animate-fade-in-up opacity-0 ${isLarge ? "lg:col-span-2" : ""
                  }`}
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                {/* Card background */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${isTeal
                    ? "bg-linear-to-br from-brand-teal via-brand-teal to-brand-teal-dark"
                    : "bg-linear-to-br from-brand-navy via-brand-navy to-brand-navy-dark"
                    }`}
                />

                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isTeal
                    ? "bg-linear-to-br from-brand-teal-light via-brand-teal to-brand-teal-dark"
                    : "bg-linear-to-br from-brand-navy-light via-brand-navy to-brand-navy-dark"
                    }`}
                />

                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-pattern-dots" />
                </div>

                {/* Content */}
                <div className={`relative ${isLarge ? "p-10 lg:p-12" : "p-8 lg:p-10"}`}>
                  <div className={`flex ${isLarge ? "flex-row items-start gap-8" : "flex-col"}`}>
                    {/* Main content */}
                    <div className={isLarge ? "flex-1" : ""}>
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="inline-flex h-14 w-14 rounded-2xl items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/70 leading-relaxed mb-6 max-w-md">
                        {feature.description}
                      </p>

                      {/* CTA */}
                      <div className="inline-flex items-center gap-2 text-white font-semibold">
                        <span>Explore</span>
                        <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 group-hover:translate-x-1 transition-all duration-300">
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className={`${isLarge ? "text-right" : "mt-8 pt-6 border-t border-white/10"}`}>
                      <div className={`${isLarge ? "" : "flex items-end justify-between"}`}>
                        <div>
                          <div className="font-display text-5xl lg:text-6xl font-bold text-white">
                            {feature.stat}
                          </div>
                          <div className="text-white/50 text-sm mt-1 uppercase tracking-wider">
                            {feature.statLabel}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-brl from-white/10 to-transparent rounded-bl-[4rem]" />
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in-up opacity-0 [animation-delay:0.8s]">
          <Link href="/programs">
            <button className="magnetic-btn group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-brand-navy border-2 border-brand-navy/10 hover:border-brand-teal hover:text-brand-teal transition-all duration-300">
              <span>View All Programs</span>
              <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
