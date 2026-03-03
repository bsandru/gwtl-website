import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  ClipboardCheck,
  Globe,
  Bot,
  Shield,
  Star,
  Crown,
  Users,
  Sparkles,
  Mail,
  TrendingUp,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Sponsors & Partners — GWTL",
  description:
    "Partner with GWTL: sponsor outcomes, not overhead. Measurable placements, public accountability, and competitive advantage through gender-diverse leadership.",
};

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
function SponsorsHero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary-50 via-white to-primary-50" />

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-30 animate-float bg-radial-teal" />
      <div
        className="absolute bottom-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-15 animate-float [animation-delay:3s]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,163,163,0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full blur-3xl opacity-10 animate-float [animation-delay:5s]"
        style={{
          background:
            "radial-gradient(circle, rgba(45,212,191,0.4) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-3 px-5 py-2.5 rounded-full shadow-lg mb-8 glass-badge opacity-0 stagger-1">
            <Building2 className="h-4 w-4 text-primary-500" />
            <span className="text-sm font-medium text-secondary-800">
              Corporate Partnerships
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-teal-100 text-teal-700 font-semibold">
              Outcome-Based
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] stagger-2 opacity-0">
            <span className="text-secondary-800">Partner With GWTL</span>
            <br />
            <span className="relative inline-block gradient-text-hero text-6xl leading-[1.25]">
              Sponsor Outcomes, Not Overhead
              {/* Decorative underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 600 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5C75 2.5 225 2.5 300 8.5C375 14.5 525 2.5 598 8.5"
                  stroke="url(#underline-gradient-sponsors)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="underline-gradient-sponsors"
                    x1="0"
                    y1="0"
                    x2="600"
                    y2="0"
                  >
                    <stop stopColor="#00A3A3" />
                    <stop offset="0.5" stopColor="#2dd4bf" />
                    <stop offset="1" stopColor="#00A3A3" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="animate-fade-in-up mt-8 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-secondary-600 stagger-3 opacity-0">
            Your DEI budget buys awareness elsewhere. With us, it buys
            placements — and you&apos;re named in our public Accountability
            Report.
          </p>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

/* ─── Business Case ────────────────────────────────────────────────────────── */
function BusinessCase() {
  const stats = [
    {
      value: "25%",
      description:
        "More likely to outperform on profitability — companies with gender-diverse leadership",
      source: "McKinsey, 2024",
    },
    {
      value: "78¢",
      description:
        "Return per dollar invested in women-founded ventures vs. 31¢ for male-founded",
      source: "BCG, 2023",
    },
    {
      value: "87%",
      description: "Better decisions made by diverse leadership teams",
      source: "Cloverpop, 2022",
    },
    {
      value: "$12T",
      description:
        "Added to global GDP by closing the gender leadership gap",
      source: "McKinsey Global Institute",
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700 mb-4">
            <TrendingUp className="h-4 w-4" />
            The Data
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-secondary-800">
            This Isn&apos;t Charity.
            <br />
            <span className="gradient-text-teal">
              It&apos;s Competitive Advantage.
            </span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="premium-card p-8 text-center group"
            >
              <div className="text-4xl sm:text-5xl font-bold font-display text-primary-500 mb-4 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {stat.description}
              </p>
              <span className="text-xs text-gray-400 italic">
                {stat.source}
              </span>
            </div>
          ))}
        </div>

        {/* Body text */}
        <div className="max-w-3xl mx-auto">
          <div className="premium-card p-8 lg:p-12 border-l-4 border-primary-500">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                The companies getting women into leadership at scale aren&apos;t
                doing it because it&apos;s the right thing. They&apos;re doing
                it because it{" "}
                <strong className="text-secondary-800">
                  wins markets, retains talent, and delivers better returns
                </strong>
                .
              </p>
              <p>
                The companies partnering with GWTL are the ones who&apos;ve read
                the data and decided to act on it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 lg:mt-28">
        <div className="section-divider" />
      </div>
    </section>
  );
}

/* ─── What Partners Get ────────────────────────────────────────────────────── */
function WhatPartnersGet() {
  const benefits = [
    {
      icon: BarChart3,
      title: "Measurable Outcomes",
      description:
        "Your sponsorship is tracked to placements, funding facilitated, and commitments kept. We give you a quarterly report with real numbers for your DEI and ESG reporting. Not reach. Not impressions. Outcomes.",
      gradient: "from-teal-400 to-emerald-500",
    },
    {
      icon: ClipboardCheck,
      title: "Accountability Report",
      description:
        "Partners are recognized publicly in our annual Accountability Report — the document that names who delivered and who didn't. You want to be on the right side of this report.",
      gradient: "from-primary-400 to-primary-600",
    },
    {
      icon: Globe,
      title: "Network Access",
      description:
        "Access to GWTL's network of 5,000+ senior women tech leaders across 10+ countries. First access to our talent pipeline. Priority at Power Tables and Global Shift Summit.",
      gradient: "from-violet-400 to-purple-600",
    },
    {
      icon: Bot,
      title: "First-Mover Association",
      description:
        "GWTL is the world's first AI-native nonprofit. Partnering with us positions you at the intersection of gender leadership and AI innovation — a credibility play no traditional DEI initiative can offer.",
      gradient: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-primary-100 text-primary-700 mb-4">
            <Sparkles className="h-4 w-4" />
            Deliverables
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-secondary-800">
            What Sponsorship{" "}
            <span className="gradient-text-teal">Actually Delivers</span>
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="premium-card p-8 lg:p-10 flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`h-12 w-12 rounded-xl flex items-center justify-center bg-linear-to-br ${benefit.gradient} group-hover:scale-110 transition-transform`}
                >
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-bold text-secondary-800">
                  {benefit.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 lg:mt-28">
        <div className="section-divider" />
      </div>
    </section>
  );
}

/* ─── Partnership Tiers ────────────────────────────────────────────────────── */
function PartnershipTiers() {
  const tiers = [
    {
      name: "Community Partner",
      tagline:
        "For organizations entering the ecosystem. Ideal for scale-ups and regional firms.",
      icon: Users,
      color: "emerald",
      featured: false,
      includes: [
        "Listed in Accountability Report",
        "1 Sponsor Match placement",
        "2 seats at Power Tables",
        "Access to GWTL network and events",
        "Annual outcome summary",
      ],
      cta: "Get in touch for partnership details",
    },
    {
      name: "Strategic Partner",
      tagline:
        "For companies ready to demonstrate leadership publicly.",
      icon: Crown,
      color: "amber",
      featured: true,
      includes: [
        "Named lead sponsor in Accountability Report",
        "Dedicated Power Table (your executives + 25 women leaders)",
        "5 Sponsor Match placements (your senior leaders as sponsors)",
        "10 seats at Global Shift Summit",
        "Co-branded content and press recognition",
        "Quarterly outcome report for ESG reporting",
        "Strategic Council observer seat",
      ],
      cta: "Get in touch for partnership details",
    },
    {
      name: "Impact Partner",
      tagline:
        "For companies committed to measurable outcomes and public recognition.",
      icon: Star,
      color: "primary",
      featured: false,
      includes: [
        "Named in Accountability Report",
        "2 Sponsor Match placements",
        "4 seats at Global Shift Summit",
        "Priority access to GWTL talent pipeline",
        "Bi-annual outcome report",
        "Co-branded event presence",
      ],
      cta: "Get in touch for partnership details",
    },
  ];

  const colorMap: Record<string, { badge: string; iconBg: string; border: string; check: string }> = {
    amber: {
      badge: "bg-amber-100 text-amber-700",
      iconBg: "from-amber-400 to-amber-600",
      border: "border-amber-200",
      check: "text-amber-500",
    },
    primary: {
      badge: "bg-primary-100 text-primary-700",
      iconBg: "from-primary-400 to-primary-600",
      border: "border-primary-200",
      check: "text-primary-500",
    },
    emerald: {
      badge: "bg-emerald-100 text-emerald-700",
      iconBg: "from-emerald-400 to-emerald-600",
      border: "border-emerald-200",
      check: "text-emerald-500",
    },
  };

  return (
    <section className="relative py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-violet-100 text-violet-700 mb-4">
            <Shield className="h-4 w-4" />
            Tiers
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-secondary-800">
            Partnership{" "}
            <span className="gradient-text-teal">Tiers</span>
          </h2>
        </div>

        {/* Tier cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier) => {
            const colors = colorMap[tier.color];
            return (
              <div
                key={tier.name}
                className={`premium-card p-8 lg:p-10 flex flex-col relative ${tier.featured
                  ? `border-2 ${colors.border} ring-1 ring-amber-100`
                  : ""
                  }`}
              >
                {/* Featured badge */}
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold bg-linear-to-r from-amber-400 to-amber-500 text-white shadow-lg shadow-amber-200/50">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Tier header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`h-10 w-10 rounded-xl flex items-center justify-center bg-linear-to-br ${colors.iconBg}`}
                  >
                    <tier.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-secondary-800">
                      {tier.name}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-gray-500 italic mb-6">
                  {tier.tagline}
                </p>

                {/* Includes list */}
                <div className="flex-1">
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold block mb-4">
                    Includes
                  </span>
                  <ul className="space-y-3">
                    {tier.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-gray-600 text-sm"
                      >
                        <CheckCircle2
                          className={`h-4 w-4 mt-0.5 shrink-0 ${colors.check}`}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link href="/contact" className="mt-8 block">
                  <Button
                    size="lg"
                    variant={tier.featured ? "default" : "outline"}
                    className="w-full group"
                  >
                    {tier.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Custom program sponsor */}
        <div className="mt-12 premium-card p-8 lg:p-12 bg-linear-to-br from-secondary-50 to-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-linear-to-br from-secondary-700 to-secondary-900">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-secondary-800">
                  Custom: Program Sponsor
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Sponsor a specific program: Power Tables in your city, a
                regional Sponsor Match cohort, or a Summit session. Scope
                tailored to your goals.
              </p>
            </div>
            <Link href="/contact" className="shrink-0">
              <Button size="lg" className="group w-full lg:w-auto">
                Tell us what you have in mind
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 lg:mt-28">
        <div className="section-divider" />
      </div>
    </section>
  );
}

/* ─── Accountability Section ───────────────────────────────────────────────── */
function AccountabilitySection() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(0,163,163,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-red-100 text-red-700 mb-6">
              <Shield className="h-4 w-4" />
              Accountability
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight text-secondary-800 mb-8">
              We Publish What You Commit.{" "}
              <span className="gradient-text-teal">
                And What You Deliver.
              </span>
            </h2>

            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Every GWTL partner makes a public commitment. Every commitment
                is tracked. Every year, the Accountability Report shows exactly
                what was promised and what was delivered.
              </p>
              <p>
                This is what separates GWTL from every other partnership
                you&apos;ve seen.{" "}
                <strong className="text-secondary-800">
                  We don&apos;t let commitments disappear into a press release.
                </strong>
              </p>
              <p>
                The companies on the right side of this report are the ones
                winning talent, credibility, and market share.
              </p>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative">
            <div className="premium-card p-8 lg:p-10">
              <div className="space-y-6">
                {/* Visual report representation */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-linear-to-br from-primary-500 to-primary-400">
                    <ClipboardCheck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-secondary-800">
                      Accountability Report
                    </h3>
                    <span className="text-xs text-gray-400">
                      Annual Publication
                    </span>
                  </div>
                </div>

                {/* Example entries */}
                {[
                  {
                    company: "Partner A",
                    committed: "3 board placements",
                    delivered: true,
                    result: "4 delivered",
                  },
                  {
                    company: "Partner B",
                    committed: "€500K funding facilitated",
                    delivered: true,
                    result: "€720K achieved",
                  },
                  {
                    company: "Partner C",
                    committed: "5 sponsorship matches",
                    delivered: false,
                    result: "2 of 5 completed",
                  },
                ].map((entry) => (
                  <div
                    key={entry.company}
                    className={`px-5 py-4 rounded-xl border ${entry.delivered
                      ? "border-emerald-100 bg-emerald-50/50"
                      : "border-amber-100 bg-amber-50/50"
                      }`}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-secondary-800 text-sm">
                        {entry.company}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${entry.delivered
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-amber-100 text-amber-700"
                          }`}
                      >
                        {entry.delivered ? "Delivered" : "In Progress"}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Committed: {entry.committed}
                    </div>
                    <div
                      className={`text-xs font-medium mt-1 ${entry.delivered
                        ? "text-emerald-600"
                        : "text-amber-600"
                        }`}
                    >
                      {entry.result}
                    </div>
                  </div>
                ))}

                <p className="text-xs text-gray-400 text-center italic">
                  Sample illustration — actual report features named partners
                </p>
              </div>
            </div>

            {/* Decorative floating element */}
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-linear-to-br from-primary-100 to-primary-50 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Closing CTA ──────────────────────────────────────────────────────────── */
function SponsorsCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cta-gradient" />

      {/* Decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15 animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(0,163,163,0.6) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        {/* <div className="flex justify-center mb-8">
          <div className="h-20 w-20 rounded-3xl flex items-center justify-center animate-pulse-glow bg-gradient-to-br from-primary-500 to-primary-400">
            <Mail className="h-10 w-10 text-white" />
          </div>
        </div> */}

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Ready to Sponsor
          <br />
          <span className="gradient-text-cta">Outcomes?</span>
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          We&apos;ll show you exactly what your investment delivers and how it
          looks in your annual report.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button size="xlg" variant="full" className="sm:w-auto group">
              Schedule a Conversation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Contact email */}
        {/* <p className="mt-8 text-sm text-gray-400">
          Or email us directly at{" "}
          <a
            href="mailto:partners@globalwomentechleaders.com"
            className="text-primary-400 hover:text-primary-300 underline underline-offset-4 transition-colors"
          >
            partners@globalwomentechleaders.com
          </a>
        </p> */}
      </div>
    </section>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function SponsorsPage() {
  return (
    <div className="pt-20 overflow-hidden">
      <SponsorsHero />
      <BusinessCase />
      <WhatPartnersGet />
      <PartnershipTiers />
      <AccountabilitySection />
      <SponsorsCTA />
    </div>
  );
}
