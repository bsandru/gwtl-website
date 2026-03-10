import { Metadata } from "next";
import Link from "next/link";
import {
  Handshake,
  ArrowRight,
  Sparkles,
  DoorOpen,
  Users,
  Briefcase,
  Building2,
  CircleDollarSign,
  MessageSquareQuote,
  ShieldCheck,
  CalendarCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Strategic Council — GWTL",
  description:
    "GWTL's Strategic Council consists of 10–15 senior leaders who don't advise — they act. Every member commits to 3 warm introductions per quarter.",
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
            <span className="text-secondary-800">The People</span>
            <br />
            <span className="relative inline-block gradient-text-hero">
              Opening Doors
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
            GWTL&apos;s Strategic Council consists of 10–15 senior leaders who
            don&apos;t advise — they{" "}
            <strong className="text-secondary-800">act</strong>. Every member
            commits to{" "}
            <strong className="text-secondary-800">
              3 warm introductions per quarter
            </strong>
            : to sponsors, board opportunities, or capital.
          </p>

          <p className="animate-fade-in-up mt-6 text-2xl sm:text-3xl font-display font-bold gradient-text-hero stagger-4 opacity-0">
            They are catalysts. Not figureheads.
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

const doorTypes = [
  {
    icon: Briefcase,
    title: "Board Opportunities",
    description:
      "Warm introductions to board seats and advisory roles at companies committed to leadership diversity. We connect qualified women with decision-makers who have the authority to appoint.",
    color: "from-brand-teal to-emerald-600",
  },
  {
    icon: CircleDollarSign,
    title: "Capital & Funding",
    description:
      "Connections to investors, VCs, and funding bodies for women-led ventures and initiatives. We facilitate introductions that lead to real funding conversations, not just networking events.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Building2,
    title: "Sponsor Connections",
    description:
      "Direct introductions to sponsors who stake their reputation on placing women into leadership. Executives who actively advocate and mentor.",
    color: "from-rose-500 to-pink-600",
  },
];

function ThreeDoors() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
            <DoorOpen className="h-4 w-4" />
            3 Doors Per Quarter
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
            Every Quarter, We Ask:{" "}
            <span className="gradient-text">&ldquo;What Did You Deliver?&rdquo;</span>
          </h2>
          <p className="mt-6 text-xl text-secondary-500 max-w-2xl mx-auto">
            Each council member opens at least three doors — not through good
            intentions, but through concrete introductions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {doorTypes.map((item, index) => (
            <div key={item.title} className="group relative">
              <div className="absolute inset-0 rounded-4xl bg-linear-to-br opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
              <div
                className={`relative h-full min-h-[360px] rounded-4xl p-8 lg:p-10 overflow-hidden bg-linear-to-br ${item.color} shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2`}
              >
                <div className="absolute top-2 right-8 lg:right-10">
                  <span className="text-7xl lg:text-8xl font-display font-bold text-white/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-base lg:text-lg text-white/90 leading-relaxed">
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

function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32 bg-brand-navy overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl bg-brand-teal" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-brand-teal-light" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-brand-teal/20 text-brand-teal-light">
            <ShieldCheck className="h-4 w-4" />
            Accountability Built In
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            Not Advisory.{" "}
            <span className="text-brand-teal-light">Operational.</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
            Most councils are decorative. Ours is built on delivery. Every
            quarter, every member reports what they opened — and for whom.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: CalendarCheck,
              metric: "Quarterly",
              label: "Accountability reviews",
            },
            {
              icon: DoorOpen,
              metric: "3+",
              label: "Introductions per member, per quarter",
            },
            {
              icon: Users,
              metric: "10–15",
              label: "Senior leaders per cohort",
            },
            {
              icon: MessageSquareQuote,
              metric: "1",
              label: "Question: \"What did you deliver?\"",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-brand-teal/30 transition-all duration-300 text-center"
            >
              <div className="h-14 w-14 mx-auto rounded-2xl flex items-center justify-center mb-5 bg-brand-teal/20 group-hover:bg-brand-teal/30 transition-colors">
                <item.icon className="h-7 w-7 text-brand-teal-light" />
              </div>
              <p className="text-4xl font-bold text-white mb-2">
                {item.metric}
              </p>
              <p className="text-sm text-white/60">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CouncilMembers() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl bg-linear-to-br from-brand-teal to-brand-teal-light animate-float" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
            <Users className="h-4 w-4" />
            The Council
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-8">
            2026 <span className="gradient-text">Council Members</span>
          </h2>

          <div className="premium-card p-12 lg:p-16">
            <div className="h-20 w-20 mx-auto rounded-3xl flex items-center justify-center mb-8 bg-linear-to-br from-secondary-100 to-primary-50 border border-primary-100/50">
              <Sparkles className="h-10 w-10 text-brand-teal" />
            </div>
            <p className="text-xl text-secondary-500 leading-relaxed max-w-lg mx-auto">
              Council member profiles will be published here once the 2026
              cohort is confirmed.
            </p>
            <p className="mt-4 text-sm text-secondary-400 italic">
              Selection is underway.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="section-divider" />
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
          Join the
          <br />
          <span className="gradient-text-cta">Strategic Council</span>
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          We are selecting the 2026 council. If you can open doors we want to talk.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-white/60">
          <span>One share a month.</span>
          <span className="hidden sm:inline">·</span>
          <span>One referral a quarter.</span>
          <span className="hidden sm:inline">·</span>
          <span className="italic">Optional: attend a Power Table in your city.</span>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <button className="group w-full sm:w-auto h-14 px-10 text-lg rounded-2xl font-bold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl inline-flex items-center justify-center bg-brand-teal text-white hover:bg-brand-teal-dark">
              Apply for the Council
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
      <ThreeDoors />
      <HowItWorks />
      <CouncilMembers />
      <CouncilCTA />
    </div>
  );
}
