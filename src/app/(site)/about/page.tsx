import { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  ArrowRight,
  Sparkles,
  Globe,
  Award,
  Bot,
  Cpu,
  DoorOpen,
  Handshake,
  BarChart3,
  ShieldCheck,
  UsersRound,
  Megaphone,
  Clock,
  Zap,
  Scale,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About — GWTL",
  description:
    "From pipeline to power. GWTL accelerates women into tech leadership worldwide by creating access to decision-makers, delivering measurable outcomes, and holding institutions accountable.",
};

const timeline = [
  {
    year: "2017",
    title: "Founded",
    description:
      "Started as a grassroots initiative in Romania, connecting women in tech across borders. The first insight: talent wasn't the problem. Access was.",
    highlight: false,
  },
  {
    year: "2020",
    title: "International Expansion",
    description:
      "Grew to 5+ countries, 1,000+ members. Established partnerships across Europe. Confirmed what the data was showing: the pipeline existed. The doors were locked.",
    highlight: false,
  },
  {
    year: "2023",
    title: "Rebranded to GWTL",
    description:
      "Evolved from a networking community to a leadership placement organization. Focus sharpened: outcomes, not activities.",
    highlight: false,
  },
  {
    year: "2025",
    title: "Erasmus+ & Davos",
    description:
      "Launched Girls Who Lead (Erasmus+ EU initiative). Co-organized Davos Innovation Week. First major international stage.",
    highlight: false,
  },
  {
    year: "2026",
    title: "GWTL 2.0",
    description:
      "New mission. New model. AI-native operations. Three core programs: Power Tables, Sponsor Match, Global Shift Summit. The goal is set: 30% of tech leadership held by women by 2030.",
    highlight: true,
  },
];

/* ─── PAGE HERO ────────────────────────────────────────────────────────────── */
function PageHero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary-50 via-white to-primary-50" />

      {/* Floating shapes */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-30 animate-float bg-radial-teal" />
      <div
        className="absolute bottom-20 left-20 w-64 h-64 rounded-full blur-3xl opacity-15 animate-float [animation-delay:3s]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,163,163,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-3 px-5 py-2.5 rounded-full shadow-lg mb-8 glass-badge opacity-0 stagger-1">
            <Target className="h-4 w-4 text-primary-500" />
            <span className="text-sm font-medium text-secondary-800">
              About GWTL
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] stagger-2 opacity-0">
            <span className="text-secondary-800">From Pipeline</span>
            <br />
            <span className="relative inline-block gradient-text-hero">
              to Power.
              {/* Decorative underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 400 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5C50 2.5 150 2.5 200 8.5C250 14.5 350 2.5 398 8.5"
                  stroke="url(#underline-gradient-about)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="underline-gradient-about"
                    x1="0"
                    y1="0"
                    x2="400"
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
            Women are 50% of the talent pool. They hold 15% of tech leadership
            positions. That gap doesn&apos;t exist because women aren&apos;t
            capable. It exists because the doors to boards, capital, and
            decision-making rooms have been locked.
          </p>

          <p className="animate-fade-in-up mt-6 text-2xl sm:text-3xl font-display font-bold gradient-text-hero stagger-4 opacity-0">
            GWTL exists to open those doors.
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

/* ─── THE MISSION ──────────────────────────────────────────────────────────── */
function TheMission() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
            <Target className="h-4 w-4" />
            Our Mission
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
            What We&apos;re Here{" "}
            <span className="gradient-text">to Do</span>
          </h2>
        </div>

        {/* Mission statement - large, prominent */}
        <div className="max-w-4xl mx-auto mb-16">
          <blockquote className="relative p-8 lg:p-12 rounded-3xl bg-linear-to-br from-secondary-50 to-primary-50/30 border border-primary-100/50">
            <div className="absolute top-6 left-8 text-6xl font-display text-brand-teal/20 leading-none">
              &ldquo;
            </div>
            <p className="relative z-10 text-xl lg:text-2xl font-display italic text-brand-navy leading-relaxed text-center">
              Accelerate women into tech leadership worldwide by creating access
              to decision-makers, delivering measurable outcomes, and holding
              institutions accountable.
            </p>
            <div className="mt-6 text-center">
              <span className="inline-block text-lg font-bold gradient-text-hero">
                The short version: From pipeline to power.
              </span>
            </div>
          </blockquote>
        </div>

        {/* What that means in practice */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16">
          <div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-brand-navy mb-8">
              What that means in practice
            </h3>
            <div className="space-y-5">
              {[
                {
                  icon: DoorOpen,
                  text: "We place women on boards.",
                  anti: "We don't teach them how to ask.",
                },
                {
                  icon: TrendingUp,
                  text: "We connect women to capital.",
                  anti: "We don't run pitch coaching.",
                },
                {
                  icon: ShieldCheck,
                  text: "We hold companies accountable to their public commitments.",
                  anti: "We don't accept press releases.",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex gap-4 group p-4 rounded-2xl hover:bg-primary-50/50 transition-colors"
                >
                  <div className="flex-shrink-0 h-11 w-11 rounded-xl flex items-center justify-center bg-linear-to-br from-brand-teal to-brand-teal-dark group-hover:scale-110 transition-transform">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-secondary-800">
                      {item.text}
                    </span>{" "}
                    <span className="text-secondary-500">{item.anti}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What we're not / What we are */}
          <div className="space-y-8">
            {/* What we're not */}
            <div className="premium-card p-8">
              <h4 className="font-display text-lg font-bold text-secondary-800 mb-5">
                What we&apos;re not
              </h4>
              <div className="space-y-3">
                {[
                  {
                    text: "An awareness campaign",
                    sub: "everyone knows there's a gap.",
                  },
                  {
                    text: "A training program",
                    sub: "women are already qualified.",
                  },
                  {
                    text: "A networking event",
                    sub: "LinkedIn exists.",
                  },
                  {
                    text: "An inspiration platform",
                    sub: "inspiration doesn't open doors.",
                  },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 mt-0.5 shrink-0 text-red-400" />
                    <span className="text-secondary-600">
                      <strong className="text-secondary-800">
                        {item.text}
                      </strong>{" "}
                      — {item.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* What we are */}
            <div className="premium-card p-8 bg-linear-to-br from-brand-navy to-brand-navy-light">
              <h4 className="font-display text-lg font-bold text-secondary-800 mb-5">
                What we are
              </h4>
              <div className="space-y-3">
                {[
                  "Access to the rooms where decisions happen.",
                  "Sponsors who stake their reputation on placing women.",
                  "Public accountability for corporate commitments.",
                  "Capital flowing to women-led ventures.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-brand-teal-light" />
                    <span className="text-secondary-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-divider" />
      </div>
    </section>
  );
}

/* ─── THE 2030 GOAL ────────────────────────────────────────────────────────── */
function The2030Goal() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl bg-linear-to-br from-brand-teal to-brand-teal-light animate-float" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
            <BarChart3 className="h-4 w-4" />
            The Target
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
            30% by 2030.{" "}
            <span className="gradient-text">Why That Number?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Body text */}
          <div>
            <div className="prose prose-lg max-w-none text-secondary-600 leading-relaxed space-y-5">
              <p>
                30% isn&apos;t arbitrary. It&apos;s the{" "}
                <strong className="text-secondary-800">
                  critical mass threshold
                </strong>{" "}
                — the point where women in leadership stop being tokens and
                start shaping culture.
              </p>
              <p>
                Research by Rosabeth Moss Kanter (Harvard Business School)
                established this. Studies by Torchia, Calabrò, and Huse
                confirmed it. The 30% Club proved it in practice: UK FTSE 100
                boards went from 12.5% to 40%+ women between 2010 and 2024 when
                this target was taken seriously.
              </p>
              <p>
                30% is where parity becomes self-sustaining. Once critical mass
                is reached, the next generation of women leaders isn&apos;t
                hired out of obligation. They&apos;re hired because
                they&apos;re the best.
              </p>
            </div>

            {/* The line */}
            <blockquote className="mt-8 pl-6 border-l-4 border-brand-teal">
              <p className="text-xl font-display italic text-brand-navy">
                &ldquo;30% is the floor. Parity is the ceiling. We&apos;re
                building from here.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Data snapshot */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-secondary-800 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary-500" />
              Data Snapshot
            </h3>

            {/* Stats cards */}
            <div className="space-y-4">
              {[
                {
                  label: "Women tech CEOs (Fortune 500)",
                  today: "8%",
                  color: "from-red-500 to-rose-600",
                },
                {
                  label: "VC funding to women-founded startups",
                  today: "2.3%",
                  color: "from-amber-500 to-orange-600",
                },
                {
                  label: "Women in tech C-suite",
                  today: "15%",
                  color: "from-yellow-500 to-amber-600",
                },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="premium-card p-6 flex items-center gap-6"
                >
                  <div
                    className={`flex-shrink-0 h-16 w-16 rounded-2xl flex items-center justify-center bg-linear-to-br ${stat.color}`}
                  >
                    <span className="text-xl font-bold text-white">
                      {stat.today}
                    </span>
                  </div>
                  <div>
                    <p className="text-secondary-600 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Target card */}
            <div className="premium-card p-6 bg-linear-to-br from-brand-teal to-brand-teal-dark">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-secondary-800 text-sm">Target</p>
                  <p className="text-2xl font-bold text-brand-teal mt-1">
                    30% tech leadership globally
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-secondary-800 text-sm">Deadline</p>
                  <p className="text-2xl font-bold text-brand-teal mt-1">2030</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 text-center">
                <span className="text-sm font-semibold text-secondary-800 uppercase tracking-wider">
                  Non-negotiable
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="section-divider" />
      </div>
    </section>
  );
}

/* ─── THE AI-NATIVE MODEL ──────────────────────────────────────────────────── */
function AINativeModel() {
  return (
    <section className="relative py-24 lg:py-32 bg-brand-navy overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

      {/* Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl bg-brand-teal" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-brand-teal-light" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-brand-teal/20 text-brand-teal-light">
            <Cpu className="h-4 w-4" />
            AI-Native Model
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            Led by Humans.{" "}
            <span className="text-brand-teal-light">Run by AI Agents.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="space-y-5 text-lg text-white/80 leading-relaxed">
              <p>
                GWTL is the world&apos;s first{" "}
                <strong className="text-white">AI-native nonprofit</strong>.
              </p>
              <p>
                Four C-level executives set strategy and make decisions.
                Twenty-five AI agents handle execution — content, outreach,
                research, coordination, analytics.
              </p>
              <p>
                The result: we operate with the output of a 50-person
                organization and the overhead of four.
              </p>
              <p className="text-brand-teal-light font-semibold">
                We don&apos;t talk about AI transforming leadership. <br/>We
                demonstrate it.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/team"
                className="group inline-flex items-center gap-2 font-semibold transition-all text-brand-teal-light hover:text-brand-teal"
              >
                Meet the Team
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <p className="mt-2 text-sm text-white/50">
                Four humans hold the strategy. Meet the council.
              </p>
            </div>
          </div>

          {/* Why this matters grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: Scale,
                title: "Maximum capital efficiency",
                desc: "Every euro reaches the mission, not payroll",
              },
              {
                icon: Clock,
                title: "24/7 execution",
                desc: "Agents don't burn out",
              },
              {
                icon: Zap,
                title: "Scalable",
                desc: "Adding impact doesn't mean adding headcount",
              },
              {
                icon: Bot,
                title: "Proof of concept",
                desc: "If AI can run a global nonprofit, it can transform any organization",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-brand-teal/30 transition-all duration-300"
              >
                <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4 bg-brand-teal/20 group-hover:bg-brand-teal/30 transition-colors">
                  <item.icon className="h-5 w-5 text-brand-teal-light" />
                </div>
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CORE VALUES ──────────────────────────────────────────────────────────── */
function CoreValues() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-linear-to-br from-white via-primary-50/30 to-white">
      {/* Animated background elements */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl bg-linear-to-br from-brand-teal to-brand-teal-light animate-float" />
      <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl bg-linear-to-br from-brand-navy to-brand-navy-light animate-float [animation-delay:2s]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
            <Award className="h-4 w-4" />
            Our Foundation
          </div>
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-brand-navy leading-tight">
            What We <span className="gradient-text">Stand For</span>
          </h2>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Value 1: Access Over Awareness */}
          <div className="lg:col-span-7 group relative">
            <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-brand-teal to-emerald-600 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
            <div className="relative h-full min-h-[320px] lg:min-h-[380px] rounded-4xl p-8 lg:p-10 overflow-hidden bg-linear-to-br from-brand-teal to-emerald-600 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-2xl bg-white" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-30 bg-white/10" />

              {/* Number badge */}
              <div className="absolute top-8 right-8 lg:top-10 lg:right-10">
                <span className="text-7xl lg:text-8xl font-display font-bold text-white/10">
                  01
                </span>
              </div>

              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-500">
                  <DoorOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Access Over Awareness
                </h3>
                <p className="text-lg text-white/90 leading-relaxed max-w-lg">
                  We create access to decision-makers, not awareness campaigns.
                  A warm introduction beats a webinar every time.
                </p>
              </div>
            </div>
          </div>

          {/* Value 2: Outcomes Over Activities */}
          <div className="lg:col-span-5 group relative">
            <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
            <div className="relative h-full min-h-[320px] lg:min-h-[380px] rounded-4xl p-8 lg:p-10 overflow-hidden bg-linear-to-br from-amber-500 to-orange-600 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
              {/* Number badge */}
              <div className="absolute top-8 right-8 lg:top-10 lg:right-10">
                <span className="text-7xl lg:text-8xl font-display font-bold text-white/10">
                  02
                </span>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full opacity-20 blur-xl bg-white" />

              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-500">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Outcomes Over Activities
                </h3>
                <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                  We measure placements, funding, and policy wins — not
                  attendees, followers, or &ldquo;reach.&rdquo; If it
                  doesn&apos;t move a woman into a leadership role, it
                  doesn&apos;t count.
                </p>
              </div>
            </div>
          </div>

          {/* Value 3: Accountability Over Promises */}
          <div className="lg:col-span-5 group relative">
            <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-rose-500 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
            <div className="relative h-full min-h-[320px] lg:min-h-[380px] rounded-4xl p-8 lg:p-10 overflow-hidden bg-linear-to-br from-rose-500 to-pink-600 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
              {/* Number badge */}
              <div className="absolute top-8 right-8 lg:top-10 lg:right-10">
                <span className="text-7xl lg:text-8xl font-display font-bold text-white/10">
                  03
                </span>
              </div>

              {/* Decorative circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-white/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-white/5" />

              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-500">
                  <ShieldCheck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Accountability Over Promises
                </h3>
                <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                  Every commitment is published. Every delivery is tracked. The
                  Accountability Report names names — the companies who acted,
                  and the ones who didn&apos;t.
                </p>
              </div>
            </div>
          </div>

          {/* Value 4: Inclusion Over Ideology */}
          <div className="lg:col-span-7 group relative">
            <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-brand-navy to-indigo-600 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
            <div className="relative h-full min-h-[320px] lg:min-h-[380px] rounded-4xl p-8 lg:p-10 overflow-hidden bg-linear-to-br from-brand-navy to-indigo-600 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
              {/* Number badge */}
              <div className="absolute top-8 right-8 lg:top-10 lg:right-10">
                <span className="text-7xl lg:text-8xl font-display font-bold text-white/10">
                  04
                </span>
              </div>

              {/* Decorative lines */}
              <svg
                className="absolute bottom-0 left-0 w-full h-32 opacity-10"
                viewBox="0 0 400 100"
                fill="none"
              >
                <path
                  d="M0 80 Q100 20 200 60 T400 40"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M0 90 Q100 30 200 70 T400 50"
                  stroke="white"
                  strokeWidth="1"
                  fill="none"
                />
              </svg>

              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-500">
                  <UsersRound className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  Inclusion Over Ideology
                </h3>
                <p className="text-lg text-white/90 leading-relaxed max-w-lg">
                  Men and women at the table. Economic framing over activist
                  language. Results over rhetoric. We welcome anyone — man or
                  woman — who can open doors and deliver results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-3">
            <div className="h-1 w-12 rounded-full bg-brand-teal/30" />
            <div className="h-2 w-2 rounded-full bg-brand-teal" />
            <div className="h-1 w-12 rounded-full bg-brand-navy/30" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── OUR STORY / TIMELINE ─────────────────────────────────────────────────── */
function OurStory() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-brand-navy via-brand-navy-dark to-brand-navy" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl bg-brand-teal" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-brand-teal-light" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-brand-teal/20 text-brand-teal-light">
            <Globe className="h-4 w-4" />
            Our Story
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            Where We{" "}
            <span className="text-brand-teal-light">Came From</span>
          </h2>
        </div>

        {/* Desktop timeline - creative staggered layout */}
        <div className="hidden lg:block relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="h-full w-full bg-linear-to-br from-brand-teal via-brand-teal/50 to-brand-navy" />
          </div>

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
              >
                {/* Year badge - centered on line */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${item.highlight
                      ? "bg-brand-teal border-brand-teal-light shadow-glow-teal animate-pulse-glow"
                      : "bg-brand-navy-light border-brand-navy hover:border-brand-teal/50"
                      }`}
                  >
                    <span
                      className={`text-lg font-bold ${item.highlight ? "text-white" : "text-white/80"
                        }`}
                    >
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`w-5/12 ${index % 2 === 0 ? "pr-16 text-right" : "pl-16 text-left"
                    }`}
                >
                  <div
                    className={`group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${item.highlight
                      ? "bg-linear-to-br from-brand-teal to-brand-teal-dark shadow-glow-teal"
                      : "bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-brand-teal/30"
                      }`}
                  >
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {item.title}
                    </h3>
                    <p
                      className={`text-base leading-relaxed ${item.highlight ? "text-white/90" : "text-white/60"
                        }`}
                    >
                      {item.description}
                    </p>

                    {/* Decorative corner */}
                    <div
                      className={`absolute ${index % 2 === 0
                        ? "right-0 translate-x-1/2"
                        : "left-0 -translate-x-1/2"
                        } top-1/2 -translate-y-1/2 w-4 h-px ${item.highlight ? "bg-white/50" : "bg-white/20"
                        }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile timeline - elegant vertical */}
        <div className="lg:hidden relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-linear-to-br from-brand-teal via-brand-teal/50 to-brand-navy" />

          <div className="space-y-10">
            {timeline.map((item) => (
              <div key={item.year} className="relative pl-16">
                {/* Year node */}
                <div className="absolute left-0 top-0">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${item.highlight
                      ? "bg-brand-teal border-brand-teal-light shadow-glow-teal"
                      : "bg-brand-navy-light border-brand-navy"
                      }`}
                  >
                    <span className="text-xs font-bold text-white">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`p-6 rounded-2xl ${item.highlight
                    ? "bg-linear-to-br from-brand-teal to-brand-teal-dark shadow-glow-teal"
                    : "bg-white/5 backdrop-blur-sm border border-white/10"
                    }`}
                >
                  {item.highlight && (
                    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-3">
                      <Sparkles className="h-3 w-3" />
                      Latest
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p
                    className={`text-sm ${item.highlight ? "text-white/90" : "text-white/60"
                      }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── STRATEGIC COUNCIL ────────────────────────────────────────────────────── */
function StrategicCouncil() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
              <Handshake className="h-4 w-4" />
              Strategic Council
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-8">
              The People{" "}
              <span className="gradient-text">Opening Doors</span>
            </h2>

            <div className="space-y-5 text-lg text-secondary-600 leading-relaxed">
              <p>
                GWTL&apos;s Strategic Council consists of 10-15 senior leaders
                who don&apos;t advise — they{" "}
                <strong className="text-secondary-800">act</strong>.
              </p>
              <p>
                Every Strategic Council member commits to{" "}
                <strong className="text-secondary-800">
                  3 warm introductions per quarter
                </strong>
                : to sponsors, board opportunities, or capital. Every quarter,
                we ask: &ldquo;What did you deliver?&rdquo;
              </p>
              <p className="font-semibold text-brand-navy">
                They are catalysts. Not figureheads.
              </p>
            </div>

            <p className="mt-6 text-sm text-secondary-400 italic">
              Council member profiles — to be added when confirmed
            </p>
          </div>

          {/* CTA Card */}
          <div className="premium-card p-10 lg:p-12 bg-linear-to-br from-secondary-50 to-primary-50/30 border border-primary-100/40">
            <div className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 bg-linear-to-br from-brand-teal to-brand-teal-dark">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-brand-navy mb-4">
              Join the Strategic Council
            </h3>
            <p className="text-secondary-600 mb-8 leading-relaxed">
              We are selecting the 2026 council. If you can open 3 doors a
              quarter, we want to talk.
            </p>
            <Link href="/contact">
              <Button size="lg" className="w-full group">
                Join the Strategic Council
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="section-divider" />
      </div>
    </section>
  );
}

/* ─── AMBASSADORS ──────────────────────────────────────────────────────────── */
function Ambassadors() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Info card */}
          <div className="premium-card p-10 lg:p-12 bg-linear-to-br from-brand-navy to-brand-navy-light order-2 lg:order-1">
            <h3 className="font-display text-2xl font-bold text-secondary-800 mb-6">
              The bar is low. The impact is real.
            </h3>
            <div className="space-y-4">
              {[
                {
                  icon: Megaphone,
                  text: "One share a month.",
                },
                {
                  icon: Handshake,
                  text: "One referral a quarter.",
                },
                {
                  icon: Globe,
                  text: "Optional: attend a Power Table in your city.",
                },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-xl flex items-center justify-center bg-brand-teal/20">
                    <item.icon className="h-5 w-5 text-brand-teal-light" />
                  </div>
                  <span className="text-secondary-800">{item.text}</span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="mt-8 block">
              <Button size="lg" variant="full" className="w-full group">
                Become an Ambassador
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right - Text */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
              <Megaphone className="h-4 w-4" />
              Ambassadors
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-8">
              The Network That{" "}
              <span className="gradient-text">Amplifies the Message</span>
            </h2>

            <div className="space-y-5 text-lg text-secondary-600 leading-relaxed">
              <p>
                GWTL Ambassadors are the distributed force behind our reach.
                Senior professionals across{" "}
                <strong className="text-secondary-800">10+ countries</strong>{" "}
                who share our content, refer women into programs, and open their
                own doors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── BOTTOM CTA ───────────────────────────────────────────────────────────── */
function AboutCTA() {
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
        <div className="flex justify-center mb-8">
          <div className="h-20 w-20 rounded-3xl flex items-center justify-center animate-pulse-glow bg-linear-to-br from-primary-500 to-primary-400">
            <Sparkles className="h-10 w-10 text-white" />
          </div>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Ready to Open
          <br />
          <span className="gradient-text-cta">Doors?</span>
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Whether you&apos;re a leader seeking your next role, a sponsor
          ready to act, or a company ready to be held accountable — we want
          to hear from you.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/programs">
            <button className="group w-full sm:w-auto h-14 px-10 text-lg rounded-2xl font-bold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl inline-flex items-center justify-center bg-brand-teal text-white hover:bg-brand-teal-dark">
              Explore Our Programs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link href="/contact">
            <button className="w-full sm:w-auto h-14 px-10 text-lg rounded-2xl font-bold border-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 inline-flex items-center justify-center border-white/30 text-white bg-transparent">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ─────────────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div className="pt-20 overflow-hidden">
      <PageHero />
      <TheMission />
      <The2030Goal />
      <AINativeModel />
      <CoreValues />
      <OurStory />
      <StrategicCouncil />
      <Ambassadors />
      <AboutCTA />
    </div>
  );
}
