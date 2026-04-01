import { Metadata } from "next";
import Link from "next/link";
import {
  Handshake,
  ArrowRight,
  Sparkles,
  Users,
  ShieldCheck,
  CheckCircle2,
  DollarSign,
  UserPlus,
  Megaphone,
  CalendarCheck,
  Target,
  Globe,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Strategic Council — GWTL",
  description:
    "GWTL's Strategic Council: investors and senior leaders who open doors, bring capital, and act — not just advise.",
};

function PageHero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-secondary-50 via-white to-primary-50" />

      <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-30 animate-float bg-radial-teal" />
      <div
        className="absolute bottom-20 left-20 w-64 h-64 rounded-full blur-3xl opacity-15 animate-float [animation-delay:3s]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,163,163,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up inline-flex items-center gap-3 px-5 py-2.5 rounded-full shadow-lg mb-8 glass-badge opacity-0 stagger-1">
            <Handshake className="h-4 w-4 text-primary-500" />
            <span className="text-sm font-medium text-secondary-800">
              Strategic Council
            </span>
          </div>

          <h1 className="animate-fade-in-up font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.2] stagger-2 opacity-0">
            <span className="text-secondary-800">The Investors</span>
            <br />
            <span className="relative inline-block gradient-text-hero">
              Behind the Mission
              <svg
                className="absolute -bottom-2.5 left-0 w-full"
                height="12"
                viewBox="0 0 500 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5C62 2.5 187 2.5 250 8.5C312 14.5 437 2.5 498 8.5"
                  stroke="url(#underline-gradient-council)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="underline-gradient-council"
                    x1="0"
                    y1="0"
                    x2="500"
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
            GWTL&apos;s Strategic Council is the board of investors and senior
            leaders who have put skin in the game — not to advise, but to act.
          </p>

          <p className="animate-fade-in-up mt-4 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-secondary-600 stagger-4 opacity-0">
            They open doors, bring capital, and make the introductions that
            change what&apos;s possible. Their involvement is structural, measurable, and accountable.
          </p>
        </div>
      </div>

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

const responsibilities = [
  {
    icon: DollarSign,
    number: "01",
    title: "Sponsor directly or bring a sponsor",
    description:
      "Each council member commits €5–10K directly to GWTL, or secures a corporate sponsor of equivalent value. This is the baseline. Not a suggestion.",
    color: "from-brand-teal to-emerald-600",
  },
  {
    icon: UserPlus,
    number: "02",
    title: "Make three warm introductions per quarter",
    description:
      "To sponsors, partners, or decision-makers. Every quarter, we ask: who did you bring to the table? The answer is tracked and reviewed.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "Attend and participate in Power Tables",
    description:
      "Council members show up in the room — not as observers, but as participants who open doors for the women across the table.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Megaphone,
    number: "04",
    title: "Champion GWTL in their networks publicly",
    description:
      "Their name is on what we build. That means publicly endorsing the mission and carrying it into rooms we can't access alone.",
    color: "from-rose-500 to-pink-600",
  },
];

function WhatTheyDo() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
            <CheckCircle2 className="h-4 w-4" />
            What they do
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
            Four Commitments.{" "}
            <span className="gradient-text inline-block">Not Suggestions.</span>
          </h2>
          <p className="mt-6 text-xl text-secondary-500 max-w-2xl mx-auto">
            Every council member takes on the same four responsibilities — and
            is held to them quarterly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {responsibilities.map((item) => (
            <div key={item.title} className="group relative">
              <div
                className={`relative h-full min-h-[320px] rounded-3xl p-8 overflow-hidden bg-linear-to-br ${item.color} shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2`}
              >
                <div className="absolute top-2 right-6">
                  <span className="text-7xl font-display font-bold text-white/10">
                    {item.number}
                  </span>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="h-14 w-14 rounded-2xl flex items-center justify-center mb-5 bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="section-divider" />
      </div>
    </section>
  );
}

function Accountability() {
  return (
    <section className="relative py-24 lg:py-32 bg-brand-navy overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl bg-brand-teal" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-brand-teal-light" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-brand-teal/20 text-brand-teal-light">
              <ShieldCheck className="h-4 w-4" />
              Accountability
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              Not an Advisory Board.{" "}
              <span className="text-brand-teal-light">
                A Committed Partner Board.
              </span>
            </h2>
            <div className="space-y-5 text-lg text-white/70 leading-relaxed">
              <p>
                Advisory boards give opinions. The Strategic Council gives{" "}
                <strong className="text-white">results</strong> — sponsoring
                directly, tracked quarterly, named publicly.
              </p>
              <p>
                Every member serves a 2-year term with clear commitments
                reviewed at the end of each quarter.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: CalendarCheck,
                metric: "2-year",
                label: "Term commitment",
              },
              {
                icon: Target,
                metric: "3 minimum",
                label: "Introductions per quarter",
              },
              {
                icon: Users,
                metric: "10–15",
                label: "Senior leaders per cohort",
              },
              {
                icon: Globe,
                metric: "Public",
                label: "Named and on record",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-brand-teal/30 transition-all duration-300 text-center"
              >
                <div className="h-12 w-12 mx-auto rounded-xl flex items-center justify-center mb-4 bg-brand-teal/20 group-hover:bg-brand-teal/30 transition-colors">
                  <item.icon className="h-6 w-6 text-brand-teal-light" />
                </div>
                <p className="text-3xl font-bold text-white mb-1">
                  {item.metric}
                </p>
                <p className="text-xs text-white/50 leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const profileCriteria = [
  "Sitting or former VC partner, CEO, CHRO, or board director",
  "Demonstrated ability to secure sponsorship or open doors to capital",
  "Willing to make financial commitment or bring equivalent corporate sponsor",
  "Willing to be publicly named and held to quarterly accountability",
];

function WhoQualifies() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl bg-linear-to-br from-brand-teal to-brand-teal-light animate-float" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
              <Users className="h-4 w-4" />
              Who qualifies
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-8">
              Capital and Authority.{" "}
              <span className="gradient-text inline-block">
                Not Just Credibility.
              </span>
            </h2>
            <p className="text-lg text-secondary-600 leading-relaxed mb-8">
              VCs, sitting CEOs, CHROs, and board directors who have the
              authority to write a check, make a call, or open a door that
              others can&apos;t.
            </p>
            <p className="text-secondary-500 leading-relaxed">
              This isn&apos;t a network of supporters. It&apos;s a group of
              people whose involvement changes outcomes — because of who they are
              and what they can move.
            </p>
          </div>

          <div className="premium-card p-10 lg:p-12">
            <h3 className="font-display text-2xl font-bold text-brand-navy mb-6">
              Profile criteria
            </h3>
            <ul className="space-y-4">
              {profileCriteria.map((criterion, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-0.5 shrink-0 h-6 w-6 rounded-full flex items-center justify-center bg-brand-teal/10 border border-brand-teal/20">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-teal" />
                  </span>
                  <span className="text-secondary-600 leading-relaxed">
                    {criterion}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="section-divider" />
      </div>
    </section>
  );
}

function CouncilMembers() {
  return (
    <section className="relative py-24 lg:py-32 bg-secondary-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-brand-teal animate-float" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-6">
            2026 Council Members
          </h2>
          <p className="text-lg text-secondary-500 leading-relaxed">
            Council member profiles will be published here once the 2026 cohort
            is confirmed. Selection is underway.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="group relative rounded-3xl p-8 bg-white border border-secondary-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-br from-brand-teal/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col items-center text-center gap-4">
                <div className="h-16 w-16 rounded-2xl bg-linear-to-br from-secondary-100 to-primary-50 border border-primary-100/50 flex items-center justify-center">
                  <Sparkles className="h-7 w-7 text-brand-teal/40" />
                </div>
                <div className="space-y-1">
                  <div className="h-4 w-32 rounded-full bg-secondary-100 mx-auto" />
                  <div className="h-3 w-24 rounded-full bg-secondary-100/60 mx-auto" />
                </div>
                <div className="h-3 w-40 rounded-full bg-secondary-100/40 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CouncilCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-cta-gradient" />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15 animate-glow-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(0,163,163,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <div className="h-20 w-20 rounded-3xl flex items-center justify-center animate-pulse-glow bg-linear-to-br from-primary-500 to-primary-400">
            <Handshake className="h-10 w-10 text-white" />
          </div>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Membership Is
          <br />
          <span className="gradient-text-cta">By Invitation</span>
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          The 2026 council is being assembled now. We reach out to the
          individuals we believe are the right fit. If you think that&apos;s
          you, signal your interest below — we&apos;ll be in touch.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <button className="group w-full sm:w-auto h-14 px-10 text-lg rounded-2xl font-bold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl inline-flex items-center justify-center bg-brand-teal text-white hover:bg-brand-teal-dark">
              Express interest
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link href="/about">
            <button className="w-full sm:w-auto h-14 px-10 text-lg rounded-2xl font-bold border-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 inline-flex items-center justify-center border-white/30 text-white bg-transparent">
              Learn About GWTL
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function StrategicCouncilPage() {
  return (
    <div className="pt-20 overflow-hidden">
      <PageHero />
      <WhatTheyDo />
      <Accountability />
      <WhoQualifies />
      <CouncilMembers />
      <CouncilCTA />
    </div>
  );
}
