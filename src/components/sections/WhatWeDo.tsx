import Link from "next/link";
import { ArrowRight, Sparkles, Users, Handshake, Globe } from "lucide-react";

const programs = [
  {
    title: "Power Tables",
    label: "By Invitation",
    icon: Users,
    headline: "Where Decisions Happen",
    body: "Invite-only gatherings that bring 25 women leaders face-to-face with 25 board-level decision-makers. Structured conversations. Real commitments. Every table produces measurable outcomes.",
    proof: "Past tables: 8 board placements, €1.2M in commitments per event.",
    cta: "Request an Invitation",
    ctaLink: "/programs/power-tables",
    color: "teal" as const,
  },
  {
    title: "Sponsor Match",
    label: "Open",
    icon: Handshake,
    headline: "Sponsorship That Delivers",
    body: "Senior leaders — men and women — commit to concrete actions: introductions, board nominations, investor connections. Not advice. Not mentoring. Action. Every commitment is tracked and published.",
    proof: "The difference: a sponsor stakes their reputation on your advancement.",
    cta: "Find Your Sponsor",
    ctaLink: "/programs/sponsor-match",
    color: "navy" as const,
  },
  {
    title: "Global Shift Summit",
    label: "Annual",
    icon: Globe,
    headline: "The Global Moment",
    body: "Our annual flagship event. 500+ leaders. Multiple continents. The place where the companies making real progress on gender leadership stand up, and the ones falling short are named. Where commitments become public record.",
    proof: "Next Summit: 2026. Applications open soon.",
    cta: "Get Early Access",
    ctaLink: "/programs/summit",
    color: "teal" as const,
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
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 mb-6 animate-fade-in-up opacity-0 [animation-delay:0.1s]">
            <Sparkles className="h-4 w-4 text-brand-teal" />
            <span className="text-sm font-semibold text-brand-teal">How We Work</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.1] animate-fade-in-up opacity-0 [animation-delay:0.2s]">
            Programs That Move Women{" "}
            <span className="gradient-text-teal">from Pipeline to Power</span>
          </h2>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, idx) => {
            const IconComponent = program.icon;
            const isTeal = program.color === "teal";

            return (
              <div
                key={program.title}
                className="group relative rounded-4xl overflow-hidden transition-all duration-500 hover:-translate-y-3 animate-fade-in-up opacity-0"
                style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
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
                <div className="relative p-8 lg:p-10 flex flex-col h-full">
                  {/* Label badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex h-14 w-14 rounded-2xl items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-white/90 border border-white/10">
                      {program.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">
                    {program.title}
                  </h3>

                  {/* Headline */}
                  <p className="text-white/90 font-semibold text-lg mb-4">
                    {program.headline}
                  </p>

                  {/* Body */}
                  <p className="text-white/70 leading-relaxed mb-6 flex-1">
                    {program.body}
                  </p>

                  {/* Proof line */}
                  <p className="text-sm italic text-white/50 mb-8 border-l-2 border-white/20 pl-4">
                    {program.proof}
                  </p>

                  {/* CTA */}
                  <Link
                    href={program.ctaLink}
                    className="inline-flex items-center gap-2 text-white font-semibold group/cta"
                  >
                    <span>{program.cta}</span>
                    <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center group-hover/cta:bg-white/20 group-hover/cta:translate-x-1 transition-all duration-300">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-brl from-white/10 to-transparent rounded-bl-[4rem]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
