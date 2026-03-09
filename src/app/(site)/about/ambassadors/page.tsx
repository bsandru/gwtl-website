import { Metadata } from "next";
import Link from "next/link";
import {
  Megaphone,
  ArrowRight,
  Globe,
  Handshake,
  Share2,
  MapPin,
  Sparkles,
  CheckCircle2,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Ambassadors — GWTL",
  description:
    "GWTL Ambassadors are the distributed force behind our reach. Senior professionals across 10+ countries who share our content, refer women into programs, and open their own doors.",
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

          <h1 className="animate-fade-in-up font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] stagger-2 opacity-0">
            <span className="text-secondary-800">The Network That</span>
            <br />
            <span className="relative inline-block gradient-text-hero">
              Amplifies the Message
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 600 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5C75 2.5 225 2.5 300 8.5C375 14.5 525 2.5 598 8.5"
                  stroke="url(#underline-gradient-ambassadors)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="underline-gradient-ambassadors"
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
            GWTL Ambassadors are the distributed force behind our reach. Senior
            professionals across{" "}
            <strong className="text-secondary-800">10+ countries</strong> who
            share our content, refer women into programs, and open their own
            doors.
          </p>

          <p className="animate-fade-in-up mt-6 text-2xl sm:text-3xl font-display font-bold gradient-text-hero stagger-4 opacity-0">
            The bar is low. The impact is real.
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
    icon: Share2,
    title: "One share a month",
    description:
      "Amplify GWTL content to your professional network. A single LinkedIn post, an email forward, a Slack share — small acts that compound.",
    color: "from-brand-teal to-emerald-600",
  },
  {
    icon: Handshake,
    title: "One referral a quarter",
    description:
      "Know a woman ready for a Power Table, a board seat, or a leadership program? One introduction can change a career trajectory.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: MapPin,
    title: "Attend a Power Table in your city",
    description:
      "When we host a Power Table near you, show up. Bring your network, your expertise, and your willingness to open doors.",
    color: "from-rose-500 to-pink-600",
  },
];

function WhatWeAsk() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
            <CheckCircle2 className="h-4 w-4" />
            The Commitment
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
            Three Things.{" "}
            <span className="gradient-text">That&apos;s It.</span>
          </h2>
          <p className="mt-6 text-xl text-secondary-500 max-w-2xl mx-auto">
            No committees. No KPIs. No mandatory calls. Just three simple
            actions that create outsized impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {commitments.map((item, index) => (
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

const impactPoints = [
  {
    metric: "10+",
    label: "Countries represented",
    icon: Globe,
  },
  {
    metric: "50+",
    label: "Active ambassadors",
    icon: Users,
  },
  {
    metric: "3x",
    label: "Content reach multiplier",
    icon: Zap,
  },
  {
    metric: "100+",
    label: "Referrals per year",
    icon: Handshake,
  },
];

function WhyItMatters() {
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
            <span className="inline-block text-brand-teal-light">United by Mission.</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
            Every ambassador multiplies our reach into rooms, networks, and
            communities we&apos;d never access from a single headquarters. This
            is how movements scale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactPoints.map((item) => (
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

function WhoCanJoin() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl bg-linear-to-br from-brand-teal to-brand-teal-light animate-float" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
              <Users className="h-4 w-4" />
              Who We&apos;re Looking For
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-8">
              Senior Professionals Who{" "}
              <span className="gradient-text">Open Doors</span>
            </h2>

            <div className="space-y-5 text-lg text-secondary-600 leading-relaxed">
              <p>
                You don&apos;t need a title. You don&apos;t need permission. You
                need a network and the willingness to use it for someone other
                than yourself.
              </p>
              <p>
                Our ambassadors are senior professionals — VPs, directors,
                founders, investors, board members — who believe the leadership
                gap is a problem worth solving, and that solving it starts with{" "}
                <strong className="text-secondary-800">
                  one introduction at a time
                </strong>
                .
              </p>
            </div>

            <div className="mt-10 space-y-4">
              {[
                "5+ years in a senior or leadership role",
                "Active professional network you're willing to leverage",
                "Belief that more women in leadership is an economic imperative",
                "Willingness to share, refer, and show up",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-brand-teal" />
                  <span className="text-secondary-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card p-10 lg:p-12">
            <h3 className="font-display text-2xl font-bold text-secondary-800 mb-6">
              What you get
            </h3>
            <div className="space-y-5">
              {[
                {
                  title: "Direct line to GWTL leadership",
                  desc: "Quarterly briefings, early access to research and reports.",
                },
                {
                  title: "Visibility",
                  desc: "Featured on our website, social channels, and at events.",
                },
                {
                  title: "Network access",
                  desc: "Connect with other ambassadors across 10+ countries.",
                },
                {
                  title: "Impact you can measure",
                  desc: "See exactly how your referrals and shares translate to placements.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 group/item p-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="shrink-0 h-10 w-10 rounded-xl flex items-center justify-center bg-brand-teal/20">
                    <Sparkles className="h-5 w-5 text-brand-teal-light" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-secondary-600 mt-0.5">{item.desc}</p>
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
            <Megaphone className="h-10 w-10 text-white" />
          </div>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Become an
          <br />
          <span className="gradient-text-cta">Ambassador</span>
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          One share. One referral. One door opened. That&apos;s all it takes to
          be part of the force that puts more women in leadership — worldwide.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <button className="group w-full sm:w-auto h-14 px-10 text-lg rounded-2xl font-bold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl inline-flex items-center justify-center bg-brand-teal text-white hover:bg-brand-teal-dark">
              Become an Ambassador
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

export default function AmbassadorsPage() {
  return (
    <div className="pt-20 overflow-hidden">
      <PageHero />
      <WhatWeAsk />
      <WhyItMatters />
      <WhoCanJoin />
      <AmbassadorCTA />
    </div>
  );
}
