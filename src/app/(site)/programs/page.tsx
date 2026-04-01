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
  Award,
  BookOpen,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Programs — GWTL",
  description:
    "Power Tables, Sponsor Match, and the Global Shift Summit — three programs placing women in boardrooms and connecting them to capital.",
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
          {/* <div className="animate-fade-in-up mt-12 flex flex-wrap justify-center gap-8 sm:gap-12 stagger-4 opacity-0">
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
          </div> */}
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
            The room where decisions get made.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Body */}
          <div className="relative z-10">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                Most events create conversations. Power Tables create <strong className="text-secondary-800">commitments</strong>.
              </p>
              <p>
                Each Power Table brings together 25 senior decision-makers —
                CEOs, investors, board chairs, policy makers, and tech leaders —
                for a single purpose: to state what they will do, on the record.
              </p>
              <p>
                There&apos;s no keynote. No panel. A skilled moderator guides
                the room through three sessions — from context, to commitment,
                to action. Every pledge is published within 48 hours. Every
                attendee knows their name will be on the accountability list.
              </p>
            </div>

            {/* How It Works */}
            <div className="mt-12">
              <h3 className="font-display text-2xl font-bold text-secondary-800 mb-6">
                How It Works
              </h3>
              <ol className="space-y-5">
                {[
                  { step: 1, title: "Curated invitations", desc: "Attendance is selective. Every person in the room has real authority and a willingness to commit publicly." },
                  { step: 2, title: "Pre-work", desc: "Each attendee submits their commitment before they arrive. The room knows what's coming." },
                  {
                    step: 3, title: "Three sessions", subItems: [
                      { label: "State of play", desc: "regional data on women in tech leadership, framed for this specific room" },
                      { label: "Commitment round", desc: "each attendee states their pledge publicly, on record" },
                      { label: "Problem-solving", desc: "what's blocking progress, who can move what" },
                    ]
                  },
                  { step: 4, title: "Published record", desc: "Commitments go live within 48 hours. Named. Tracked." },
                  { step: 5, title: "Follow-through", desc: "Quarterly check-ins. Annual Accountability Report. Who delivered, who didn't." },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white text-sm font-bold">
                      {item.step}
                    </span>
                    <div>
                      <span className="font-semibold text-secondary-800">{item.title}</span>
                      {item.desc && (
                        <span className="text-gray-600"> — {item.desc}</span>
                      )}
                      {item.subItems && (
                        <ul className="mt-2 space-y-1.5 text-gray-600 text-sm">
                          {item.subItems.map((sub) => (
                            <li key={sub.label} className="flex gap-2">
                              <span className="text-primary-400 font-bold mt-0.5">—</span>
                              <span><em className="not-italic font-medium text-secondary-700">{sub.label}</em> — {sub.desc}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: Bridge Model + Who Attends + Where + CTA */}
          <div className="space-y-8">
            {/* The Bridge Model */}
            <div className="premium-card p-8 border-l-4 border-primary-500">
              <h3 className="font-display text-xl font-bold text-secondary-800 mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary-500" />
                The Bridge Model
              </h3>
              <blockquote className="text-gray-600 leading-relaxed">
                Power Tables connect ecosystems — not just cities. Each table is
                built around a specific bridge:{" "}
                <strong className="text-secondary-800">EU × Gulf, EU × Africa, EU × UK, EU × LATAM</strong>.
                The people in the room can create real cross-border capital flow,
                hiring pipelines, and policy change. That&apos;s the point.
              </blockquote>
            </div>

            {/* Who attends */}
            <div className="premium-card p-8">
              <h3 className="font-display text-xl font-bold text-secondary-800 mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary-500" />
                Who Attends
              </h3>
              <ul className="space-y-3">
                {[
                  "Senior decision-makers: CEOs, investors, board directors, policy makers, tech leaders",
                  "Women leaders targeting board seats, C-suite roles, or VC funding",
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
                Power Tables rotate across Europe, the Gulf, and Africa.
              </p>
              <div className="flex flex-wrap gap-2">
                {["London", "Dubai", "Amsterdam", "Nairobi", "Berlin", "Lisbon", "Bucharest"].map((city) => (
                  <span key={city} className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary-50 text-primary-700 border border-primary-100">
                    {city}
                  </span>
                ))}
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
              Attendance is by invitation. If you&apos;ve been referred, apply
              below. If you&apos;d like to be considered, register your interest
              — we review every submission.
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
            Starts with mentoring. Ends with open doors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Body */}
          <div className="max-w-3xl">
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                You can&apos;t introduce someone to a board you don&apos;t know.
              </p>
              <p>
                That&apos;s why Sponsor Match works the way it does. We pair
                high-potential women with senior leaders — men and women — who
                commit their time, their attention, and their network. The
                relationship starts on{" "}
                <strong className="text-secondary-800">GWTL Raise</strong>, our
                platform for structured collaboration. Over time, as trust is
                built and competencies are demonstrated, sponsors open the doors
                they can credibly open.
              </p>
              <p>
                The sponsor&apos;s time is the investment. The introductions
                come when they&apos;re ready to stake their reputation on
                someone they know.
              </p>
            </div>
          </div>

          {/* The Difference Table */}
          <div className="max-w-2xl">
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
                    ["Advice", "Sustained attention + action when ready"],
                    ["Open-ended", "6 to 12-month structured commitment"],
                    ["Informal conversations", "Tracked on GWTL Raise platform"],
                    ["No accountability", "Quarterly check-ins, published outcomes"],
                    ['"Good luck"', '"I know what she\'s capable of — and I\'m opening this door"'],
                  ].map(([mentoring, sponsor], i) => (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-3 text-gray-500 align-top">{mentoring}</td>
                      <td className="px-6 py-3 text-secondary-800 font-medium align-top">
                        {sponsor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-16">
          <h3 className="font-display text-2xl font-bold text-secondary-800 mb-8">
            How It Works
          </h3>
          <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: 1,
                title: "Application & matching",
                desc: "Participants apply with a clear goal — board seat, C-suite role, VP promotion, or funding. Sponsors are matched by sector, geography, and what they can credibly offer. Every match is reviewed by the GWTL team.",
              },
              {
                step: 2,
                title: "The relationship begins on GWTL Raise",
                desc: "Both sides onboard to the platform. Structured monthly check-ins, goal tracking, and shared milestones — all in one place. The platform is designed for accountability, not chat.",
              },
              {
                step: 3,
                title: "The sponsor learns the participant's work",
                desc: "Real sponsorship requires real knowledge. The first months are about building that — understanding the participant's goals, strengths, and the specific doors worth opening.",
              },
              {
                step: 4,
                title: "Doors open when the moment is right",
                desc: "When the sponsor is ready to make an introduction — to a board, an investor, a hiring executive — they do. Logged on the platform. Followed up within 48 hours. Outcome tracked.",
              },
              {
                step: 5,
                title: "Results published",
                desc: "Every placement, every funded introduction, every career milestone is logged and published in the annual Accountability Report. Named. Tracked. On record.",
              },
            ].map((item) => (
              <li key={item.step} className="premium-card p-6 flex gap-4 list-none">
                <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white text-sm font-bold self-start mt-0.5">
                  {item.step}
                </span>
                <div>
                  <span className="font-semibold text-secondary-800 block mb-1">{item.title}</span>
                  <span className="text-gray-600 text-sm leading-relaxed">{item.desc}</span>
                </div>
              </li>
            ))}
          </ol>
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
            <p className="text-xs uppercase tracking-wider text-brand-teal mb-4">Women seeking advancement</p>

            <div className="flex-1 space-y-4 text-sm">
              <div>
                <p className="font-semibold text-secondary-700 mb-1">Who qualifies:</p>
                <p className="text-gray-600">
                  Senior professionals targeting board seats, C-suite roles, VP
                  promotions, or startup funding — who are ready to commit to the
                  process, not just the outcome.
                </p>
              </div>
              <div>
                <p className="font-semibold text-secondary-700 mb-2">What you get:</p>
                <ul className="space-y-1.5 text-gray-600">
                  {[
                    "A matched sponsor with access and credibility in your target domain",
                    "Monthly structured check-ins on GWTL Raise",
                    "Introduction tracking — every door opened is logged",
                    "A record of your progress that feeds the Accountability Report",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary-500 font-bold mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-secondary-700 mb-2">What we ask:</p>
                <ul className="space-y-1.5 text-gray-600">
                  {[
                    "Clarity on your goal before you apply",
                    "Commitment to follow through — respond to introductions within 48 hours",
                    "One referral to the program when you've made your move",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary-500 font-bold mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

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
            <p className="text-xs uppercase tracking-wider text-brand-teal mb-4">Senior leaders — men and women</p>

            <div className="flex-1 space-y-4 text-sm">
              <div>
                <p className="font-semibold text-secondary-700 mb-1">Who qualifies:</p>
                <p className="text-gray-600">
                  C-suite executives, board directors, investors, and senior
                  leaders who have 2–4 hours per month to give, and the network
                  to open doors when the right moment comes.
                </p>
              </div>
              <div>
                <p className="font-semibold text-secondary-700 mb-2">What you commit:</p>
                <ul className="space-y-1.5 text-gray-600">
                  {[
                    "6 to 12-month commitment",
                    "Monthly structured check-in on GWTL Raise (1 hour)",
                    "Introductions when you're ready — not before",
                    "Quarterly review with GWTL",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary-500 font-bold mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-secondary-700 mb-2">What you get:</p>
                <ul className="space-y-1.5 text-gray-600">
                  {[
                    "Named in the annual Accountability Report alongside the outcomes you helped create",
                    "Association with a pioneering AI-native organisation",
                    "The specific satisfaction of knowing who you helped and how",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary-500 font-bold mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

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
            <p className="text-xs uppercase tracking-wider text-brand-teal mb-4">Team sponsorship</p>

            <div className="flex-1 space-y-4 text-sm">
              <div>
                <p className="font-semibold text-secondary-700 mb-1">Who qualifies:</p>
                <p className="text-gray-600">
                  Companies with senior leaders — C-suite, board directors, and
                  VPs — who want to sponsor a cohort of emerging women executives
                  as a structured, measurable initiative.
                </p>
              </div>
              <div>
                <p className="font-semibold text-secondary-700 mb-2">What you commit:</p>
                <ul className="space-y-1.5 text-gray-600">
                  {[
                    "A cohort of senior leaders enrolled as active sponsors",
                    "6 to 12-month programme cycle per cohort",
                    "Participation in quarterly reviews with GWTL",
                    "Named as Corporate Sponsor in the Accountability Report",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary-500 font-bold mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-secondary-700 mb-2">What you get:</p>
                <ul className="space-y-1.5 text-gray-600">
                  {[
                    "Consolidated outcome data formatted for DEI and ESG reporting",
                    "Access to GWTL's pipeline of AI-ready executives and board candidates",
                    "Public recognition for commitments delivered — not just made",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary-500 font-bold mt-0.5 shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
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
                2027 Summit
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 text-sm">
                <div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 block mb-1">Date</span>
                  <span className="font-semibold text-secondary-800">TBA, Q2 2027</span>
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
                  <div className="shrink-0 h-11 w-11 rounded-xl flex items-center justify-center bg-primary-50 group-hover:bg-primary-100 transition-colors">
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
        {/* <div className="flex justify-center mb-8">
          <div className="h-20 w-20 rounded-3xl flex items-center justify-center animate-pulse-glow bg-gradient-to-br from-primary-500 to-primary-400">
            <Phone className="h-10 w-10 text-white" />
          </div>
        </div> */}

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
            <Button size="xlg" variant="full" className="sm:w-auto group">
              Contact Us
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
