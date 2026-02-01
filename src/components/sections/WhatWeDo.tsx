import { BookOpen, Users, Award, Building2, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Learn",
    description:
      "Learn continuously, mentor others, and develop leadership potential through structured support and world-class training programs.",
    icon: BookOpen,
    gradientClass: "bg-linear-to-br from-[#00A3A3] to-[#008585]",
    link: "/programs/learning",
    stat: "500+",
    statLabel: "Courses",
  },
  {
    title: "Connect",
    description:
      "Build global alliances, share knowledge, leverage diverse expertise and work together on impactful tech initiatives across 50+ countries.",
    icon: Users,
    gradientClass: "bg-linear-to-br from-[#1C2541] to-slate-900",
    link: "/for-leaders/join",
    stat: "10,000+",
    statLabel: "Members",
  },
  {
    title: "Lead",
    description:
      "Advocate for inclusion, support other leaders, and shape the future of tech through bold, visible leadership at global forums.",
    icon: Award,
    gradientClass: "bg-linear-to-br from-[#00A3A3] to-[#008585]",
    link: "/programs",
    stat: "50+",
    statLabel: "Events/Year",
  },
  {
    title: "Corporate Programs",
    description:
      "Partner with us to develop your women leaders, access top talent, and demonstrate DEI commitment through strategic partnerships.",
    icon: Building2,
    gradientClass: "bg-linear-to-br from-[#1C2541] to-slate-900",
    link: "/for-companies",
    stat: "100+",
    statLabel: "Partners",
  },
];

export function WhatWeDo() {
  return (
    <section className="relative bg-white py-24 lg:py-36 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="mx-auto mb-6 w-[60px] h-[3px] rounded-sm bg-linear-to-r from-[#00A3A3] to-[#1C2541]" />
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C2541]">
            Leadership in Action
          </h2>
          <p className="mt-6 text-lg lg:text-xl leading-relaxed text-slate-600">
            What we're building together — globally, strategically, and with purpose.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <Link
                key={feature.title}
                href={feature.link}
                className={`group relative rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up bg-white shadow-elegant border border-slate-100 opacity-0 [animation-delay:${idx * 150}ms]`}
              >
                <div className="relative">
                  {/* Icon & Stats row */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ${feature.gradientClass}`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-[#00A3A3]">{feature.stat}</div>
                      <div className="text-sm text-slate-500">{feature.statLabel}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4 group-hover:opacity-80 transition-opacity text-[#1C2541]">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed mb-6 text-slate-600">
                    {feature.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-sm font-bold text-[#00A3A3]">
                    <span>Learn more</span>
                    <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
