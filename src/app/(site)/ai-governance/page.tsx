import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Eye,
  Lock,
  Sparkles,
  Brain,
  Target,
  ArrowRight,
  Users,
  FileText,
  AlertTriangle,
  Scale,
  Heart,
  Mail,
  CheckCircle2,
  XCircle,
  Cpu,
  Globe,
  BarChart3,
  Megaphone,
  Bot,
  UserCheck,
  Database,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Governance Framework - GWTL",
  description:
    "Global Women Tech Leaders is AI-native. Here's how we govern responsibly. Led by humans. Run by AI agents. Governed responsibly.",
};

const corePrinciples = [
  {
    icon: UserCheck,
    title: "Human Accountability",
    description: "Humans decide. AI executes.",
    gradient: "from-brand-teal to-emerald-600",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We're open about what AI does.",
    gradient: "from-sky-500 to-blue-600",
  },
  {
    icon: Lock,
    title: "Privacy by Design",
    description: "Member data protected, GDPR-compliant.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: ShieldCheck,
    title: "Brand Integrity",
    description: "All content reviewed before publication.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Brain,
    title: "Continuous Improvement",
    description: "We learn, adapt, improve.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: Target,
    title: "Mission Alignment",
    description: "AI accelerates, never replaces, our mission.",
    gradient: "from-brand-navy to-indigo-600",
  },
];

const whatAIDoes = [
  {
    icon: FileText,
    title: "Content Creation",
    items: [
      "Drafts social media posts (LinkedIn, Twitter, Instagram)",
      "Writes newsletters and blog articles",
      "Creates visual assets",
    ],
    approval: "CMO approves all content before publication",
  },
  {
    icon: Cpu,
    title: "Operations & Coordination",
    items: [
      "Schedules meetings and events",
      "Organizes documents",
      "Tracks tasks and deadlines",
    ],
    approval: "COO oversight",
  },
  {
    icon: BarChart3,
    title: "Research & Analysis",
    items: [
      "Market and trend research",
      "Competitive analysis",
      "Performance analytics",
      "Audience insights",
    ],
    approval: "Internal use only, CMO reviews",
  },
  {
    icon: MessageSquare,
    title: "Community Management",
    items: [
      "Drafts responses to comments",
      "Tracks engagement",
      "Manages Ambassador program",
    ],
    approval: "Human approval for external communication",
  },
];

const whatAIDoesnt = [
  {
    title: "Board placements",
    detail: "Human-led (COO), AI assists with coordination only",
  },
  {
    title: "Sponsor negotiations",
    detail: "CEO-led, AI drafts outreach only",
  },
  {
    title: "Strategic decisions",
    detail: "C-Suite consensus required",
  },
  {
    title: "Publish content",
    detail: "Never published without CMO approval",
  },
  {
    title: "Share member data",
    detail: "Never without explicit member consent",
  },
  {
    title: "Financial transactions",
    detail: "Humans only",
  },
];

const accountabilityTable = [
  { agent: "Content & Social Media", human: "CMO" },
  { agent: "Operations", human: "COO" },
  { agent: "Technical Infrastructure", human: "CTO" },
  { agent: "Strategic Oversight", human: "CEO" },
];

const riskTypes = [
  "Brand risk (off-brand content)",
  "Privacy risk (data exposure)",
  "Operational risk (incorrect decisions)",
  "Reputational risk (public backlash)",
  "Technical risk (system failures)",
];

const incidentSteps = [
  "Pause affected AI agent immediately",
  "Assess and contain issue",
  "Notify affected parties",
  "Post-incident review and learning",
  "Update framework as needed",
];

const standards = [
  "GDPR (EU General Data Protection Regulation)",
  "UK Data Protection Act 2018",
  "CCPA (California Consumer Privacy Act)",
  "ISO 27001 principles (information security)",
  "OECD AI Principles",
];

/* ─── PAGE HERO ────────────────────────────────────────────────────────────── */
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
            <ShieldCheck className="h-4 w-4 text-primary-500" />
            <span className="text-sm font-medium text-secondary-800">
              AI Governance Framework
            </span>
          </div>

          <h1 className="animate-fade-in-up font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.2] stagger-2 opacity-0">
            <span className="text-secondary-800">Governed</span>
            <br />
            <span className="relative inline-block gradient-text-hero">
              Responsibly.
              <svg
                className="absolute -bottom-2.5 left-0 w-full"
                height="12"
                viewBox="0 0 400 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5C50 2.5 150 2.5 200 8.5C250 14.5 350 2.5 398 8.5"
                  stroke="url(#underline-gradient-governance)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="underline-gradient-governance"
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
            Global Women Tech Leaders is AI-native. Here&apos;s how we govern
            responsibly.
          </p>

          <p className="animate-fade-in-up mt-6 text-2xl sm:text-3xl font-display font-bold gradient-text-hero stagger-4 opacity-0">
            Led by humans. Run by AI agents.
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

/* ─── CORE PRINCIPLES ──────────────────────────────────────────────────────── */
function CorePrinciples() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
            <Sparkles className="h-4 w-4" />
            Foundation
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
            Core <span className="gradient-text">Principles</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {corePrinciples.map((principle) => {
            const Icon = principle.icon;
            return (
              <div
                key={principle.title}
                className="group relative p-8 rounded-3xl bg-white border border-secondary-100 hover:border-brand-teal/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div
                  className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 bg-linear-to-br ${principle.gradient} group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-2">
                  {principle.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="section-divider" />
      </div>
    </section>
  );
}

/* ─── WHAT AI DOES / DOESN'T DO ────────────────────────────────────────────── */
function AIScope() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* What AI Does */}
        <div className="mb-24">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
              <Bot className="h-4 w-4" />
              AI in Action
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
              What AI <span className="gradient-text">Does</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whatAIDoes.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="group premium-card p-8 hover:shadow-xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-linear-to-br from-brand-teal to-brand-teal-dark group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-brand-navy">
                      {area.title}
                    </h3>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {area.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-secondary-600"
                      >
                        <span className="shrink-0 mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-teal/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-teal/10 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-brand-teal shrink-0" />
                    <span className="font-semibold text-brand-teal">
                      {area.approval}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* What AI Doesn't Do */}
        <div>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-rose-500/10 text-rose-600 border border-rose-500/20">
              <XCircle className="h-4 w-4" />
              Boundaries
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
              What AI{" "}
              <span className="bg-linear-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                Doesn&apos;t Do
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatAIDoesnt.map((item) => (
              <div
                key={item.title}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-secondary-50 hover:bg-rose-50/50 border border-secondary-100 hover:border-rose-200/50 transition-all duration-300"
              >
                <div className="shrink-0 h-10 w-10 rounded-xl flex items-center justify-center bg-rose-100 group-hover:bg-rose-200/70 transition-colors">
                  <XCircle className="h-5 w-5 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-secondary-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
        <div className="section-divider" />
      </div>
    </section>
  );
}

/* ─── ACCOUNTABILITY STRUCTURE ─────────────────────────────────────────────── */
function AccountabilityStructure() {
  return (
    <section className="relative py-24 lg:py-32 bg-brand-navy overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl bg-brand-teal" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-brand-teal-light" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-brand-teal/20 text-brand-teal-light">
            <Users className="h-4 w-4" />
            Accountability
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            Every AI Agent Has a{" "}
            <span className="text-brand-teal-light inline-block">Responsible Human</span>
          </h2>
          <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
            Global Women Tech Leaders is AI-native.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-px bg-white/10 rounded-3xl overflow-hidden">
            <div className="px-6 py-4 bg-brand-teal/20">
              <span className="text-sm font-bold text-brand-teal-light uppercase tracking-wider">
                AI Agent
              </span>
            </div>
            <div className="px-6 py-4 bg-brand-teal/20">
              <span className="text-sm font-bold text-brand-teal-light uppercase tracking-wider">
                Responsible Human
              </span>
            </div>
            {accountabilityTable.map((row, idx) => (
              <Fragment key={row.agent}>
                <div
                  className={`px-6 py-5 ${idx % 2 === 0 ? "bg-white/5" : "bg-white/2"}`}
                >
                  <span className="text-white font-medium">{row.agent}</span>
                </div>
                <div
                  className={`px-6 py-5 ${idx % 2 === 0 ? "bg-white/5" : "bg-white/2"}`}
                >
                  <span className="font-bold text-brand-teal-light">
                    {row.human}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── DATA PROTECTION ──────────────────────────────────────────────────────── */
function DataProtection() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl bg-linear-to-br from-brand-teal to-brand-teal-light animate-float" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
            <Database className="h-4 w-4" />
            Data Protection
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
            Your Data. <span className="gradient-text">Your Control.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Access Controls */}
          <div className="premium-card p-8">
            <h3 className="font-display text-xl font-bold text-brand-navy mb-6 flex items-center gap-3">
              <Lock className="h-5 w-5 text-brand-teal" />
              Access Controls
            </h3>
            <ul className="space-y-4">
              {[
                "AI agents have role-based, purpose-limited access",
                "No AI agent has unrestricted access to member data",
                "All access is logged and auditable",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-secondary-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* GDPR Compliance */}
          <div className="premium-card p-8">
            <h3 className="font-display text-xl font-bold text-brand-navy mb-6 flex items-center gap-3">
              <Scale className="h-5 w-5 text-brand-teal" />
              GDPR Compliance
            </h3>
            <ul className="space-y-4">
              {[
                "Members can request their data (right to access)",
                "Members can request deletion (right to erasure)",
                "Members can export their data (right to portability)",
                "Explicit consent required for data processing",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-secondary-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Third-Party AI */}
          <div className="premium-card p-8">
            <h3 className="font-display text-xl font-bold text-brand-navy mb-6 flex items-center gap-3">
              <Globe className="h-5 w-5 text-brand-teal" />
              Third-Party AI
            </h3>
            <ul className="space-y-4">
              {[
                "We use OpenAI, Anthropic, and Google APIs",
                "No member data used for training external models",
                "All providers under enterprise agreements with no-training clauses",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                  <span className="text-secondary-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Data Retention */}
          <div className="premium-card p-8">
            <h3 className="font-display text-xl font-bold text-brand-navy mb-6 flex items-center gap-3">
              <FileText className="h-5 w-5 text-brand-teal" />
              Data Retention
            </h3>
            <div className="space-y-4">
              {[
                { label: "Member data", value: "Until deletion requested" },
                { label: "Audit logs", value: "5 years" },
                { label: "Incident reports", value: "Indefinite" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between p-4 rounded-xl bg-secondary-50"
                >
                  <span className="font-medium text-secondary-700">
                    {item.label}
                  </span>
                  <span className="font-semibold text-brand-teal">
                    {item.value}
                  </span>
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

/* ─── TRANSPARENCY COMMITMENTS ─────────────────────────────────────────────── */
function TransparencyCommitments() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
              <Eye className="h-4 w-4" />
              Transparency
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-8">
              Open By <span className="gradient-text">Default</span>
            </h2>

            <div className="space-y-5 text-lg text-secondary-600 leading-relaxed">
              <h3 className="font-display text-xl font-bold text-brand-navy">
                Public Disclosures
              </h3>
              <ul className="space-y-3">
                {[
                  "Full AI Governance Framework (published online)",
                  "Quarterly Transparency Reports (AI activity, incidents, learnings)",
                  "Human accountability structure",
                  "Data handling policies",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-teal shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-6 rounded-2xl bg-linear-to-br from-secondary-50 to-primary-50/30 border border-primary-100/50">
                <p className="font-semibold text-brand-navy">
                  First Quarterly Report
                </p>
                <p className="text-brand-teal font-bold text-lg mt-1">
                  Q2 2026 (covering Q1 2026)
                </p>
              </div>
            </div>
          </div>

          <div className="premium-card p-10 lg:p-12 bg-linear-to-br from-secondary-50 to-primary-50/30 border border-primary-100/40">
            <div className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 bg-linear-to-br from-brand-teal to-brand-teal-dark">
              <Megaphone className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-display text-2xl font-bold text-brand-navy mb-4">
              Stakeholder Input Welcome
            </h3>
            <div className="space-y-5 text-secondary-600">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-teal shrink-0" />
                <a
                  href="mailto:governance@globalwomenintech.com"
                  className="hover:text-brand-teal transition-colors font-medium"
                >
                  governance@globalwomenintech.com
                </a>
              </div>
              <p>
                Annual survey for sponsors, Strategic Council, and members
              </p>
              <p>CEO office hours (monthly)</p>
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

/* ─── RISK MANAGEMENT ──────────────────────────────────────────────────────── */
function RiskManagement() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-linear-to-br from-white via-primary-50/30 to-white">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-amber-500/10 text-amber-600 border border-amber-500/20">
            <AlertTriangle className="h-4 w-4" />
            Risk Management
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
            Prepared for{" "}
            <span className="gradient-text">What Could Go Wrong</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Risks we monitor */}
          <div>
            <h3 className="font-display text-2xl font-bold text-brand-navy mb-8">
              We monitor for:
            </h3>
            <div className="space-y-4">
              {riskTypes.map((risk) => (
                <div
                  key={risk}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-secondary-100 hover:border-amber-200/50 hover:shadow-sm transition-all"
                >
                  <div className="shrink-0 h-10 w-10 rounded-xl flex items-center justify-center bg-amber-100">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                  </div>
                  <span className="text-secondary-700 font-medium">{risk}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Incident response */}
          <div>
            <h3 className="font-display text-2xl font-bold text-brand-navy mb-8">
              Incident Response
            </h3>
            <div className="space-y-0">
              {incidentSteps.map((step, idx) => (
                <div key={step} className="relative flex gap-6 pb-8 last:pb-0">
                  {idx < incidentSteps.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-0 w-px bg-brand-teal/20" />
                  )}
                  <div className="shrink-0 h-10 w-10 rounded-full flex items-center justify-center bg-linear-to-br from-brand-teal to-brand-teal-dark text-white font-bold text-sm z-10">
                    {idx + 1}
                  </div>
                  <div className="pt-2">
                    <span className="text-secondary-700 font-medium">
                      {step}
                    </span>
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

/* ─── STANDARDS & WHY IT MATTERS ───────────────────────────────────────────── */
function StandardsAndImpact() {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Standards */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
              <Scale className="h-4 w-4" />
              Compliance
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
              Standards We <span className="gradient-text">Follow</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {standards.map((standard) => (
              <div
                key={standard}
                className="px-6 py-3.5 rounded-2xl bg-secondary-50 border border-secondary-100 text-secondary-700 font-medium text-sm hover:border-brand-teal/30 hover:bg-primary-50/50 transition-all"
              >
                {standard}
              </div>
            ))}
          </div>
        </div>

        {/* Why This Matters */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
              <Heart className="h-4 w-4" />
              Impact
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
              Why This <span className="gradient-text">Matters</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "For Sponsors",
                gradient: "from-brand-teal to-brand-teal-dark",
                items: [
                  "Your investment and reputation are protected",
                  "Clear accountability and transparency",
                  "Confidence in our operations",
                ],
              },
              {
                title: "For Members",
                gradient: "from-brand-navy to-brand-navy-light",
                items: [
                  "Your data is safe and private",
                  "You control your information",
                  "Trust in our processes",
                ],
              },
              {
                title: "For the Sector",
                gradient: "from-amber-500 to-orange-600",
                items: [
                  "We model responsible AI-native operations",
                  "We share learnings openly",
                  "We prove nonprofit innovation works",
                ],
              },
            ].map((group) => (
              <div
                key={group.title}
                className={`relative rounded-3xl p-8 lg:p-10 overflow-hidden bg-linear-to-br ${group.gradient} shadow-xl group hover:-translate-y-2 transition-all duration-500`}
              >
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-2xl bg-white" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {group.title}
                  </h3>
                  <ul className="space-y-4">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-white/90"
                      >
                        <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-white/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT & FOOTER CTA ─────────────────────────────────────────────────── */
function GovernanceCTA() {
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
            <ShieldCheck className="h-10 w-10 text-white" />
          </div>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Led by Humans.
          <br />
          <span className="gradient-text-cta">Governed Responsibly.</span>
        </h2>

        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed italic font-display">
          &ldquo;Led by humans. Run by AI agents. Governed responsibly.&rdquo;
        </p>

        <p className="mt-3 text-sm text-gray-500">
          Version 1.0 — February 2026
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/about">
            <button className="group w-full sm:w-auto h-14 px-10 text-lg rounded-2xl font-bold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl inline-flex items-center justify-center bg-brand-teal text-white hover:bg-brand-teal-dark">
              About GWTL
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
import { Fragment } from "react";

export default function AIGovernancePage() {
  return (
    <div className="pt-20 overflow-hidden">
      <PageHero />
      <CorePrinciples />
      <AIScope />
      <AccountabilityStructure />
      <DataProtection />
      <TransparencyCommitments />
      <RiskManagement />
      <StandardsAndImpact />
      <GovernanceCTA />
    </div>
  );
}
