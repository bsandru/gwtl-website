import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Users,
  Globe,
  Award,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore GWTL programs: Leadership Cohorts, Mentoring, Erasmus+ initiatives, and Executive Roundtables.",
};

const programs = [
  {
    title: "Leadership Cohorts",
    description:
      "Intensive 12-week programs for women leaders ready to accelerate their careers. Small groups, curated content, peer networking, and executive coaching that transforms potential into impact.",
    icon: GraduationCap,
    features: [
      "12-week structured curriculum",
      "Small cohorts of 15-20 leaders",
      "Executive coaching sessions",
      "Peer accountability groups",
      "Certificate of completion",
    ],
    cta: "Apply Now",
    link: "/programs/cohorts",
    status: "Applications Open",
    statusColor: "teal",
    accent: "from-teal-400 via-teal-500 to-emerald-600",
    bgAccent: "bg-gradient-to-br from-teal-50 to-emerald-50",
    gradientTextClass: "gradient-text-teal",
  },
  {
    title: "Top Tech Mentoring",
    description:
      "Connect with senior tech leaders for personalized 1:1 mentorship. Our AI-driven matching pairs you with mentors aligned to your goals, expertise needs, and career aspirations.",
    icon: Users,
    features: [
      "AI-powered mentor matching",
      "Flexible scheduling",
      "Progress tracking tools",
      "Both free and premium tiers",
      "Global mentor network",
    ],
    cta: "Find a Mentor",
    link: "/programs/mentoring",
    status: "Always Open",
    statusColor: "emerald",
    accent: "from-cyan-400 via-sky-500 to-blue-600",
    bgAccent: "bg-gradient-to-br from-sky-50 to-blue-50",
    gradientTextClass: "gradient-text-emerald",
  },
  {
    title: "Girls Who Lead (Erasmus+)",
    description:
      "A 24-month EU initiative empowering girls aged 16-18 with digital, entrepreneurial, and leadership skills. Building the next generation of tech leaders across Europe.",
    icon: Globe,
    features: [
      "EU-funded program",
      "Focus on underserved communities",
      "Digital skills training",
      "Entrepreneurship workshops",
      "International exchange",
    ],
    cta: "Learn More",
    link: "/programs/erasmus",
    status: "In Progress",
    statusColor: "violet",
    accent: "from-violet-400 via-purple-500 to-indigo-600",
    bgAccent: "bg-gradient-to-br from-violet-50 to-indigo-50",
    gradientTextClass: "gradient-text-violet",
  },
  {
    title: "Executive Roundtables",
    description:
      "Exclusive invitation-only sessions for C-level women leaders. Intimate gatherings to discuss challenges, share strategic insights, and build meaningful connections at the highest level.",
    icon: Award,
    features: [
      "Invitation-only format",
      "C-level participants",
      "Chatham House rules",
      "Curated topics",
      "Global and regional editions",
    ],
    cta: "Request Invite",
    link: "/programs/roundtables",
    status: "By Invitation",
    statusColor: "amber",
    accent: "from-amber-400 via-orange-500 to-rose-500",
    bgAccent: "bg-gradient-to-br from-amber-50 to-orange-50",
    gradientTextClass: "gradient-text-amber",
  },
];

export default function ProgramsPage() {
  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-secondary-50 via-white to-primary-50 " />

        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-pattern-grid" />

        {/* Floating decorative shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-30 animate-float bg-radial-teal" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 animate-float [animation-delay:3s] bg-radial-violet" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 animate-float [animation-delay:1.5s] bg-radial-navy" />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-3 px-5 py-2.5 rounded-full shadow-lg mb-8 glass-badge opacity-0 stagger-1">
              <Sparkles className="h-4 w-4 text-primary-500" />
              <span className="text-sm font-medium text-secondary-800">
                4 Flagship Programs
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-teal-100 text-teal-700 font-semibold">
                2026 Edition
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
                    stroke="url(#underline-gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="underline-gradient"
                      x1="0"
                      y1="0"
                      x2="400"
                      y2="0"
                    >
                      <stop stopColor="#00A3A3" />
                      <stop offset="0.5" stopColor="#7c3aed" />
                      <stop offset="1" stopColor="#1C2541" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="animate-fade-in-up mt-8 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-secondary-600 stagger-3 opacity-0">
              From mentorship to executive cohorts, our programs are designed to
              accelerate your leadership journey at every stage of your career.
            </p>

            {/* Quick stats */}
            <div className="animate-fade-in-up mt-12 flex flex-wrap justify-center gap-8 sm:gap-12 stagger-4 opacity-0">
              {[
                { value: "2,500+", label: "Program Alumni" },
                { value: "92%", label: "Career Advancement" },
                { value: "10+", label: "Countries Reached" },
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

      {/* Programs Section */}
      <section className="relative py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <div className="decorative-line" />
            <span className="text-sm font-semibold uppercase tracking-wider text-gray-400">
              Our Programs
            </span>
          </div>

          {/* Programs */}
          <div className="space-y-24 lg:space-y-32">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Number indicator */}
                <div
                  className={`absolute -top-8 ${index % 2 === 1 ? "lg:right-0" : "lg:left-0"
                    } hidden lg:block`}
                >
                  <span className="font-display text-[180px] font-bold leading-none text-secondary-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`relative z-10 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  {/* Status badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold ${program.statusColor === "teal"
                          ? "bg-teal-100 text-teal-700"
                          : program.statusColor === "emerald"
                            ? "bg-emerald-100 text-emerald-700"
                            : program.statusColor === "violet"
                              ? "bg-violet-100 text-violet-700"
                              : "bg-amber-100 text-amber-700"
                        }`}
                    >
                      <span className="relative flex h-2 w-2">
                        <span
                          className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${program.statusColor === "teal"
                              ? "bg-teal-500"
                              : program.statusColor === "emerald"
                                ? "bg-emerald-500"
                                : program.statusColor === "violet"
                                  ? "bg-violet-500"
                                  : "bg-amber-500"
                            }`}
                        />
                        <span
                          className={`relative inline-flex rounded-full h-2 w-2 ${program.statusColor === "teal"
                              ? "bg-teal-500"
                              : program.statusColor === "emerald"
                                ? "bg-emerald-500"
                                : program.statusColor === "violet"
                                  ? "bg-violet-500"
                                  : "bg-amber-500"
                            }`}
                        />
                      </span>
                      {program.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-secondary-800">
                    {program.title}
                  </h2>

                  {/* Description */}
                  <p className="mt-6 text-lg leading-relaxed text-gray-600">
                    {program.description}
                  </p>

                  {/* Features */}
                  <ul className="mt-8 space-y-4">
                    {program.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <CheckCircle2
                          className={`h-5 w-5 mt-0.5 shrink-0 ${program.statusColor === "teal"
                              ? "text-teal-500"
                              : program.statusColor === "emerald"
                                ? "text-emerald-500"
                                : program.statusColor === "violet"
                                  ? "text-violet-500"
                                  : "text-amber-500"
                            }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-10">
                    <Link href={program.link}>
                      <Button size="lg" className="group">
                        {program.cta}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Visual card */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <div
                    className={`relative aspect-[4/3] rounded-3xl overflow-hidden ${program.bgAccent}`}
                  >
                    {/* Glass card */}
                    <div className="absolute inset-6 rounded-2xl shadow-2xl overflow-hidden glass-card">
                      {/* Gradient border effect */}
                      <div
                        className={`absolute inset-0 rounded-2xl opacity-50 bg-gradient-to-br ${program.accent} gradient-border-mask`}
                      />

                      {/* Content inside glass card */}
                      <div className="relative h-full flex flex-col items-center justify-center p-8">
                        {/* Icon */}
                        <div
                          className={`h-24 w-24 rounded-3xl flex items-center justify-center mb-6 bg-gradient-to-br ${program.accent} shadow-lg`}
                        >
                          <program.icon className="h-12 w-12 text-white" />
                        </div>

                        {/* Program number */}
                        <div
                          className={`text-6xl font-display font-bold ${program.gradientTextClass}`}
                        >
                          0{index + 1}
                        </div>

                        {/* Decorative dots */}
                        <div className="flex gap-2 mt-6">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`h-2 w-2 rounded-full ${i <= index
                                  ? `bg-gradient-to-r ${program.accent}`
                                  : "bg-gray-200"
                                }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-cta-gradient" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-pattern-grid-teal" />

        {/* Glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-20 bg-radial-teal-cta" />

        {/* Content */}
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="h-20 w-20 rounded-3xl flex items-center justify-center animate-pulse-glow bg-gradient-teal">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Not Sure Which Program
            <br />
            <span className="gradient-text-cta">is Right for You?</span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Book a call with our team to discuss your goals, career stage, and
            aspirations. We&apos;ll help you find the perfect program to
            accelerate your leadership journey.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto group shadow-xl bg-gradient-teal hover:opacity-90"
              >
                Schedule a Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto btn-outline-teal hover:bg-white/10"
              >
                Learn About GWTL
              </Button>
            </Link>
          </div>

          {/* Trust indicator */}
          <div className="mt-14 pt-10 border-t border-white/10">
            <p className="text-sm text-gray-400 mb-4">
              Join 10,000+ women leaders who&apos;ve transformed their careers
            </p>
            <div className="flex justify-center gap-6">
              {[
                { icon: Users, label: "10K+ Members" },
                { icon: Globe, label: "10+ Countries" },
                { icon: Award, label: "9 Years Impact" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-gray-400"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
