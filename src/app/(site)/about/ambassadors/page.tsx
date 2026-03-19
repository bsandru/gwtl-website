import { Metadata } from "next";
import Link from "next/link";
import {
  Megaphone,
  ArrowRight,
  Globe,
  Handshake,
  Users,
  CheckCircle2,
  Eye,
  Network,
  Calendar,
  FileText,
  BarChart3,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ambassadors — GWTL",
  description:
    "GWTL Ambassadors are chosen — not recruited. Senior professionals selected because they have the credibility to carry the mission and the conviction to act on it.",
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
            <Megaphone className="h-4 w-4 text-primary-500" />
            <span className="text-sm font-medium text-secondary-800">
              GWTL Ambassadors
            </span>
          </div>

          <h1 className="animate-fade-in-up font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.2] stagger-2 opacity-0">
            <span className="text-secondary-800">Selected. Committed.</span>
            <br />
            <span className="relative inline-block gradient-text-hero">
              Accountable.
              <svg
                className="absolute -bottom-2.5 left-0 w-full"
                height="12"
                viewBox="0 0 400 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5C50 2.5 150 2.5 200 8.5C250 14.5 350 2.5 398 8.5"
                  stroke="url(#underline-gradient-ambassadors)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="underline-gradient-ambassadors"
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
          GWTL Ambassadors are{" "}
          <strong className="text-secondary-800">chosen — not recruited</strong>. <br />
            Senior professionals selected because they have the credibility to
            carry the mission and the conviction to act on it.
           
          </p>

          <p className="animate-fade-in-up mt-6 text-xl sm:text-2xl font-display font-bold gradient-text-hero stagger-4 opacity-0">
            Membership is selective. The standard is high. The impact is real.
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

const commitments = [
  {
    number: "01",
    title: "Represent GWTL publicly",
    description:
      "Speak about the mission at events, in your industry, and on your platforms. You carry the GWTL name — that means something, and we hold the standard on both sides. When you speak, you represent thousands of women in tech leadership. Your voice amplifies theirs.",
    color: "from-brand-teal to-emerald-600",
  },
  {
    number: "02",
    title: "Refer women and sponsors into programs",
    description:
      "Know a woman ready for a Power Table or board seat? Know a leader who should be sponsoring? Make the introduction. One referral per quarter, minimum — because one introduction can change a career trajectory.",
    color: "from-amber-500 to-orange-600",
  },
  {
    number: "03",
    title: "Show up in the community",
    description:
      "Ambassadors connect with each other. Attend a Power Table when we're in your city. Share insights, open doors, and engage with your fellow ambassadors. This is a peer network of senior professionals — treat it like one. The connections you make here can shape careers, including your own.",
    color: "from-rose-500 to-pink-600",
  },
];

function TheCommitment() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
            <CheckCircle2 className="h-4 w-4" />
            The Commitment
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
            Three Commitments.{" "}
            <span className="gradient-text inline-block">Held to All of Them.</span>
          </h2>
          <p className="mt-6 text-xl text-secondary-500 max-w-2xl mx-auto">
            Every ambassador carries the GWTL name publicly. That comes with
            expectation — and accountability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {commitments.map((item) => (
            <div key={item.title} className="group relative">
              <div className="absolute inset-0 rounded-4xl bg-linear-to-br opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
              <div
                className={`relative h-full min-h-[360px] rounded-4xl p-8 lg:p-10 overflow-hidden bg-linear-to-br ${item.color} shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2`}
              >
                <div className="absolute top-2 right-8 lg:right-10">
                  <span className="text-7xl lg:text-8xl font-display font-bold text-white/10">
                    {item.number}
                  </span>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end">
                  <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-3">
                    {item.number} —
                  </p>
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

const impactStats = [
  {
    metric: "10+",
    label: "Countries represented",
    icon: Globe,
  },
  {
    metric: "10+",
    label: "Active ambassadors",
    icon: Users,
  },
  {
    metric: "100+",
    label: "Referrals per year",
    icon: Handshake,
  },
];

function GlobalReach() {
  return (
    <section className="relative py-24 lg:py-32 bg-brand-navy overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl bg-brand-teal" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-brand-teal-light" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-brand-teal/20 text-brand-teal-light">
            <Globe className="h-4 w-4" />
            Global Reach
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            Distributed by Design.{" "}
            <span className="inline-block text-brand-teal-light">
              United by Mission.
            </span>
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
            Every ambassador multiplies our reach into rooms, networks, and
            communities we&apos;d never access from a single headquarters.
            Selected in every region. United by one goal.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {impactStats.map((item) => (
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

const requirements = [
  "5+ years in a senior or leadership role",
  "An active professional network you're willing to leverage for the mission",
  "Genuine belief that closing the leadership gap is an economic and strategic imperative",
  "Willingness to be publicly associated with GWTL's results and reputation",
];

const benefits = [
  {
    icon: Network,
    benefit: "Direct access",
    detail: "Direct line to GWTL leadership team",
  },
  {
    icon: Eye,
    benefit: "Visibility",
    detail:
      "Named on the GWTL website, social channels, and at events",
  },
  {
    icon: Users,
    benefit: "Peer network",
    detail: "Connection with selected ambassadors across 10+ countries",
  },
  {
    icon: Calendar,
    benefit: "Priority access",
    detail: "First invitations to Power Tables and Global Shift Summit",
  },
  {
    icon: FileText,
    benefit: "Quarterly briefings",
    detail: "Early access to research, reports, and program updates",
  },
  {
    icon: BarChart3,
    benefit: "Impact tracking",
    detail: "See exactly how your referrals translate to placements",
  },
];

function WhoWeAreLookingFor() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl bg-linear-to-br from-brand-teal to-brand-teal-light animate-float" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
              <Users className="h-4 w-4" />
              Who We&apos;re Looking For
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-8">
              Senior Professionals With{" "}
              <span className="gradient-text">Standing and Conviction</span>
            </h2>

            <div className="space-y-5 text-lg text-secondary-600 leading-relaxed">
              <p>
                Our ambassadors are senior leaders — VPs, directors, founders,
                investors, board members — who believe the leadership gap is a
                problem worth solving and are willing to say so publicly.
              </p>
              <p>
                We don&apos;t look for volume. We look for people whose
                involvement{" "}
                <strong className="text-secondary-800">
                  raises the standard
                </strong>
                .
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {requirements.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-brand-teal" />
                  <span className="text-secondary-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card overflow-hidden">
            <div className="px-8 py-6 border-b border-secondary-100">
              <h3 className="font-display text-xl font-bold text-secondary-800">
                What Ambassadors Receive
              </h3>
            </div>
            <div className="divide-y divide-secondary-100">
              {benefits.map((item) => (
                <div
                  key={item.benefit}
                  className="flex items-start gap-4 px-8 py-5 hover:bg-secondary-50/50 transition-colors group"
                >
                  <div className="shrink-0 h-9 w-9 rounded-lg flex items-center justify-center bg-brand-teal/10 group-hover:bg-brand-teal/20 transition-colors mt-0.5">
                    <item.icon className="h-4 w-4 text-brand-teal" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-800 text-sm">
                      {item.benefit}
                    </p>
                    <p className="text-sm text-secondary-500 mt-0.5 leading-snug">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="section-divider" />
      </div>
    </section>
  );
}

function AmbassadorCTA() {
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
            <BadgeCheck className="h-10 w-10 text-white" />
          </div>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Selected.{" "}
          <span className="gradient-text-cta">Not Self-Appointed.</span>
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Applications are reviewed. Every applicant is considered
          individually. <br />We&apos;ll be in touch if there&apos;s a fit.
        </p>

        <div className="mt-10 flex justify-center">
          <Link href="/contact">
            <button className="group h-14 px-10 text-lg rounded-2xl font-bold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl inline-flex items-center justify-center bg-brand-teal text-white hover:bg-brand-teal-dark">
              Apply to become an Ambassador
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function AmbassadorsPage() {
  return (
    <div className="pt-20 overflow-hidden">
      <PageHero />
      <TheCommitment />
      <GlobalReach />
      <WhoWeAreLookingFor />
      <AmbassadorCTA />
    </div>
  );
}
