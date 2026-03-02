import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Users,
  Handshake,
  Globe,
  CalendarDays,
  MapPin,
  Target,
  TrendingUp,
  Award,
  BookOpen,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Programs — GWTL",
  description:
    "Three programs that place women in boardrooms, connect them to capital, and hold companies publicly accountable. Power Tables, Sponsor Match, and the Global Shift Summit.",
};

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
function ProgramsHero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary-50 via-white to-primary-50" />

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-30 animate-float bg-radial-teal" />
      <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-15 animate-float [animation-delay:3s]"
        style={{ background: "radial-gradient(circle, rgba(0,163,163,0.3) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-3 px-5 py-2.5 rounded-full shadow-lg mb-8 glass-badge opacity-0 stagger-1">
            <Target className="h-4 w-4 text-primary-500" />
            <span className="text-sm font-medium text-secondary-800">
              Women Tech Leadership
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-teal-100 text-teal-700 font-semibold">
              30% by 2030
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] stagger-2 opacity-0">
            <span className="text-secondary-800">Programs That</span>
            <br />
            <span className="relative inline-block gradient-text-hero">
              Transform Careers
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
                  stroke="url(#underline-gradient-hero)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="underline-gradient-hero" x1="0" y1="0" x2="400" y2="0">
                    <stop stopColor="#00A3A3" />
                    <stop offset="0.5" stopColor="#2dd4bf" />
                    <stop offset="1" stopColor="#00A3A3" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="animate-fade-in-up mt-8 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-secondary-600 stagger-3 opacity-0">
            We don&apos;t run awareness campaigns. We run programs that place
            women in boardrooms, connect them to capital, and hold companies
            publicly accountable for their commitments.
          </p>

          {/* Quick stats */}
          <div className="animate-fade-in-up mt-12 flex flex-wrap justify-center gap-8 sm:gap-12 stagger-4 opacity-0">
            {[
              { value: "8+", label: "Board Intros / Event" },
              { value: "€1.2M", label: "Avg Funding Initiated" },
              { value: "73%", label: "Commitments Delivered" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold font-display text-primary-500">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

/* ─── Program 1: Power Tables ──────────────────────────────────────────────── */
function PowerTables() {
  return (
    <section id="power-tables" className="relative py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Label + Number */}
        <div className="relative mb-12">
          <span className="absolute -top-8 right-0 hidden lg:block font-display text-[180px] font-bold leading-none text-secondary-100 select-none">
            01
          </span>
          <div className="relative flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-amber-100 text-amber-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-amber-500" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              By Invitation
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-secondary-800">
            Power Tables
          </h2>
          <p className="mt-3 text-xl sm:text-2xl text-primary-500 font-medium">
            The room where decisions happen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Body */}
          <div className="relative z-10">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Most networking events create connections. Power Tables create <strong className="text-secondary-800">outcomes</strong>.
              </p>
              <p>
                Each Power Table brings together 25 high-potential women leaders
                and 25 decision-makers — board chairs, CEOs, investors, and
                hiring executives — for structured, outcome-focused
                conversations.
              </p>
              <p>
                There&apos;s no keynote. No panel. No &ldquo;lean in&rdquo;
                moment. Just direct access to the people who can open doors —
                and a public commitment record for everyone in the room.
              </p>
            </div>

            {/* How It Works */}
            <div className="mt-12">
              <h3 className="font-display text-2xl font-bold text-secondary-800 mb-6">
                How It Works
              </h3>
              <ol className="space-y-5">
                {[
                  {
                    title: "Curated invitations",
                    desc: "Both sides are vetted. Every participant has demonstrated track record. Every decision-maker has real authority.",
                  },
                  {
                    title: "Structured conversations",
                    desc: "Purpose-designed format that moves from introduction to commitment in a single session.",
                  },
                  {
                    title: "Public commitment log",
                    desc: "Every commitment made is recorded and published in our Accountability Report.",
                  },
                  {
                    title: "Follow-through tracking",
                    desc: "Six months later, we check. Who delivered? Who didn't?",
                  },
                ].map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white text-sm font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <span className="font-semibold text-secondary-800">{step.title}</span>
                      <span className="text-gray-600"> — {step.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: Stats + Details */}
          <div className="space-y-8">
            {/* Outcomes Card */}
            <div className="premium-card p-8">
              <h3 className="font-display text-xl font-bold text-secondary-800 mb-6 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary-500" />
                Outcomes from Past Tables
              </h3>
              <div className="space-y-5">
                {[
                  { value: "8", label: "board introductions per event", suffix: "avg" },
                  { value: "€1.2M", label: "in funding conversations initiated", suffix: "avg" },
                  { value: "73%", label: "of commitments delivered within 6 months", suffix: "" },
                ].map((outcome) => (
                  <div key={outcome.label} className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold font-display text-primary-500">
                      {outcome.value}
                    </span>
                    <span className="text-gray-600 text-sm leading-tight">
                      {outcome.suffix && <span className="text-xs font-medium text-primary-400 mr-1">{outcome.suffix}</span>}
                      {outcome.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Who attends */}
            <div className="premium-card p-8">
              <h3 className="font-display text-xl font-bold text-secondary-800 mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary-500" />
                Who Attends
              </h3>
              <ul className="space-y-3">
                {[
                  "Women leaders targeting board seats, C-suite roles, or VC funding",
                  "Corporate executives, board directors, investors, and hiring leaders",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-primary-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Where */}
            <div className="premium-card p-8">
              <h3 className="font-display text-xl font-bold text-secondary-800 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary-500" />
                Where
              </h3>
              <p className="text-gray-600 mb-3">
                Power Tables run across Europe, Gulf, and Africa. Locations rotate.
              </p>
              <div className="flex flex-wrap gap-2">
                {["London", "Dubai", "Amsterdam", "Nairobi"].map((city) => (
                  <span key={city} className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary-50 text-primary-700 border border-primary-100">
                    {city}
                  </span>
                ))}
                <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-secondary-100 text-secondary-600">
                  2026 Schedule
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="flex-1">
                <Button size="lg" className="w-full group">
                  Apply (Referred)
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact" className="flex-1">
                <Button size="lg" variant="outline" className="w-full group">
                  Register Interest
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <p className="text-sm text-gray-400 text-center">
              Applications are by invitation. If you&apos;ve been referred, apply above. Otherwise, register your interest for a future table.
            </p>
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

/* ─── Program 2: Sponsor Match ─────────────────────────────────────────────── */
function SponsorMatch() {
  return (
    <section id="sponsor-match" className="relative py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Label + Number */}
        <div className="relative mb-12">
          <span className="absolute -top-8 right-0 hidden lg:block font-display text-[180px] font-bold leading-none text-secondary-100 select-none">
            02
          </span>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-500" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Open Applications
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-secondary-800">
            Sponsor Match
          </h2>
          <p className="mt-3 text-xl sm:text-2xl text-primary-500 font-medium">
            Not mentoring. Sponsorship. The kind that moves careers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Body */}
          <div className="max-w-3xl">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                A mentor gives advice. A sponsor opens doors.
              </p>
              <p>
                Sponsor Match pairs high-potential women with senior leaders — men
                and women — who commit to concrete actions: board introductions,
                investor connections, executive nominations. Time-bound.
                Outcome-tracked. Publicly accountable.
              </p>
              <p>
                Every sponsor stakes their professional reputation on their
                participant&apos;s advancement. <strong className="text-secondary-800">That&apos;s what makes it work.</strong>
              </p>
            </div>
          </div>

          {/* The Difference Table */}
          <div className="max-w-2xl">
            {/* <h3 className="font-display text-2xl font-bold text-secondary-800 mb-6">
              The Difference
            </h3> */}
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-secondary-50">
                    <th className="px-6 py-4 text-sm font-semibold text-secondary-500 uppercase tracking-wider">
                      Mentoring
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold text-primary-600 uppercase tracking-wider">
                      Sponsor Match
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ["Advice", "Action"],
                    ["Open-ended", "12-month commitment"],
                    ["Conversations", "Introductions & advocacy"],
                    ["Informal", "Publicly tracked"],
                    ['"Good luck"', '"I\'m opening this door for you"'],
                  ].map(([mentoring, sponsor], i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-2 text-gray-500">{mentoring}</td>
                      <td className="px-6 py-2 text-secondary-800 font-medium">
                        {sponsor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Three audience cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Participants */}
          <div className="premium-card p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-linear-to-br from-teal-400 to-emerald-500">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-secondary-800">
                For Participants
              </h3>
            </div>
            <p className="text-xs uppercase tracking-wider text-brand-teal mb-2">Women seeking advancement</p>

            <ul className="space-y-3 text-gray-600 text-sm flex-1">
              <li>
                <span className="font-semibold text-secondary-700">Who qualifies:</span>{" "}
                Senior professionals targeting board seats, C-suite roles, VP promotions, or startup funding.
              </li>
              <li>
                <span className="font-semibold text-secondary-700">What you get:</span>{" "}
                A matched sponsor with direct access to your target domain. Monthly structured check-ins. Tracked introductions with accountability.
              </li>
              <li>
                <span className="font-semibold text-secondary-700">What we ask:</span>{" "}
                Clarity on your goal. Commitment to follow through. One referral to the program when you&apos;ve made your move.
              </li>
            </ul>

            <Link href="/contact" className="mt-6">
              <Button size="lg" className="w-full group">
                Apply as Participant
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Sponsors */}
          <div className="premium-card p-8 flex flex-col border-2 border-primary-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-linear-to-br from-primary-400 to-primary-600">
                <Handshake className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-secondary-800">
                For Sponsors
              </h3>
            </div>
            <p className="text-xs uppercase tracking-wider text-brand-teal mb-2">Senior leaders</p>

            <ul className="space-y-3 text-gray-600 text-sm flex-1">
              <li>
                <span className="font-semibold text-secondary-700">Who qualifies:</span>{" "}
                C-suite executives, board directors, investors, and senior leaders who can credibly open doors in their domain.
              </li>
              <li>
                <span className="font-semibold text-secondary-700">What you commit:</span>{" "}
                3 introductions per quarter over 12 months. One concrete outcome (board seat, funding connection, C-suite nomination).
              </li>
              <li>
                <span className="font-semibold text-secondary-700">What you get:</span>{" "}
                Public recognition in our Accountability Report. Association with a pioneering AI-native organization. The satisfaction of measurable impact.
              </li>
              <li>
                <span className="font-semibold text-secondary-700">Men welcome:</span>{" "}
                Some of our most effective sponsors are men. Diverse leadership is competitive advantage — not charity.
              </li>
            </ul>

            <Link href="/contact" className="mt-6">
              <Button size="lg" className="w-full group">
                Apply as Sponsor
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Companies */}
          <div className="premium-card p-8 flex flex-col bg-linear-to-br from-secondary-50 to-white md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-linear-to-br from-secondary-700 to-secondary-900">
                <Award className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-display text-xl font-bold text-secondary-800">
                For Companies
              </h3>
            </div>
            <p className="text-xs uppercase tracking-wider text-brand-teal mb-2">Team sponsorship</p>
            <div className="flex-1 space-y-3">
              <p className="text-gray-600 text-sm">
                Commit a cohort of senior leaders as sponsors. Get consolidated
                outcome data for your DEI and ESG reporting. Be named as a
                Corporate Sponsor in our Accountability Report.
              </p>
              <p className="text-gray-600 text-sm">
                Gain early access to a diverse talent pool of AI-ready executives and board candidates. We help you identify and nurture the next generation of leadership within and outside your organization.
              </p>
              <p className="text-gray-600 text-sm ">
                Demonstrate your commitment to ethical AI and gender parity through tangible, measurable outcomes. Our program provides the structure for your leaders to make a real-world impact while expanding their own professional networks.
              </p>
            </div>
            <Link href="/contact" className="mt-6">
              <Button size="lg" variant="outline" className="w-full group">
                Enquire about Corporate Sponsorship
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

/* ─── Program 3: Global Shift Summit ──────────────────────────────────────── */
function GlobalShiftSummit() {
  return (
    <section id="global-shift-summit" className="relative py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Label + Number */}
        <div className="relative mb-12">
          <span className="absolute -top-8 right-0 hidden lg:block font-display text-[180px] font-bold leading-none text-secondary-100 select-none">
            03
          </span>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-violet-100 text-violet-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-violet-500" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
              </span>
              Annual
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-secondary-800">
            Global Shift Summit
          </h2>
          <p className="mt-3 text-xl sm:text-2xl text-primary-500 font-medium">
            The flagship event that creates the global moment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Body */}
          <div className="relative z-10">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Once a year, the GWTL community — women leaders, sponsors,
                corporate partners, and council members — gathers for the Global
                Shift Summit.
              </p>
              <p>
                This is not a conference. It&apos;s a <strong className="text-secondary-800">reckoning and a celebration</strong>.
              </p>
              <p>
                We publish the Accountability Report: companies that delivered on
                their commitments are celebrated. Companies that didn&apos;t are
                named. Leaders who moved the needle are recognized. The
                year&apos;s placements, funding, and commitments are announced
                publicly.
              </p>
              <p>Then we set the targets for the next year.</p>
            </div>

            {/* 2026 Summit details */}
            <div className="mt-12 premium-card p-8">
              <h3 className="font-display text-xl font-bold text-secondary-800 mb-6 flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-primary-500" />
                2026 Summit
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 block mb-1">Date</span>
                  <span className="font-semibold text-secondary-800">TBA, Q4 2026</span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 block mb-1">Location</span>
                  <span className="font-semibold text-secondary-800">TBA</span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 block mb-1">Attendance</span>
                  <span className="font-semibold text-secondary-800">By application &amp; invitation</span>
                </div>
              </div>

              <Link href="/contact" className="mt-8 block">
                <Button size="lg" className="w-full group">
                  Register Early Interest
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: What happens */}
          <div>
            <h3 className="font-display text-2xl font-bold text-secondary-800 mb-8">
              What Happens at the Summit
            </h3>
            <div className="space-y-6">
              {[
                {
                  icon: BookOpen,
                  title: "Accountability Report release",
                  desc: "Public commitments vs. actual delivery.",
                },
                {
                  icon: Award,
                  title: "Annual placements announcement",
                  desc: "Board seats, C-suite roles, and funding facilitated.",
                },
                {
                  icon: Users,
                  title: "Power Tables finale",
                  desc: "The highest-stakes table of the year.",
                },
                {
                  icon: Sparkles,
                  title: "Strategic Council reveals",
                  desc: "New members, new door-openers.",
                },
                {
                  icon: Globe,
                  title: "Keynote conversations",
                  desc: "Structured dialogue with leaders who've moved the needle.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 group">
                  <div className="flex-shrink-0 h-11 w-11 rounded-xl flex items-center justify-center bg-primary-50 group-hover:bg-primary-100 transition-colors">
                    <item.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Bottom CTA Bar ──────────────────────────────────────────────────────── */
function ProgramsCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cta-gradient" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15 animate-glow-pulse"
        style={{ background: "radial-gradient(circle, rgba(0,163,163,0.6) 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="h-20 w-20 rounded-3xl flex items-center justify-center animate-pulse-glow bg-gradient-to-br from-primary-500 to-primary-400">
            <Phone className="h-10 w-10 text-white" />
          </div>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Not Sure Which Program
          <br />
          <span className="gradient-text-cta">is Right for You?</span>
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Tell us where you are and where you want to go. We&apos;ll point you
          in the right direction.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link href="/contact">
            <Button size="lg" variant="full" className="sm:w-auto group">
              Book a 20-minute call
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function ProgramsPage() {
  return (
    <div className="pt-20 overflow-hidden">
      <ProgramsHero />
      <PowerTables />
      <SponsorMatch />
      <GlobalShiftSummit />
      <ProgramsCTA />
    </div>
  );
}
