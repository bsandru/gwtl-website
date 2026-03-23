import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Cpu, Zap, Network } from "lucide-react";

export const metadata: Metadata = {
  title: "Agentic Architecture | GWTL",
  description:
    "The Agentic Architecture — a four-tier AI-native organizational operating system with AI Governance Framework, published APIs, and autonomous execution at scale.",
};

const PATHS = "/goals /ops /metrics /work";

const executives = [
  { label: "CEO", sublabel: "Human" },
  { label: "CPO", sublabel: "Human" },
  { label: "CTO", sublabel: "Human" },
  { label: "CMO", sublabel: "Human" },
];

const departments = [
  { id: "eng", label: "ENG" },
  { id: "sec", label: "SEC" },
  { id: "fin", label: "FIN" },
  { id: "mkt", label: "MKT" },
  { id: "par", label: "PARTNERS" },
  { id: "ops", label: "OPS" },
];

const tasksByDept: Record<string, string[]> = {
  eng: ["Task A", "Task B", "Task C", "Task D"],
  sec: ["Task A", "Task B", "Task C"],
  fin: ["Task A", "Task B"],
  mkt: ["Task A", "Task B", "Task C", "Task D"],
  par: ["Task A", "Task B", "Task C"],
  ops: ["Task A", "Task B", "Task C"],
};

const descCards = [
  {
    tier: "TIER 1",
    tierClass: "text-teal-700",
    cardClass: "border border-teal-600/20 bg-white",
    title: "Executive Layer",
    desc: "CEO, CPO, CTO and CMO operate as humans with full organizational context. They prompt the Coordinating Agents from the Agentic Platform and hold accountability for goals, operations, metrics, and work.",
  },
  {
    tier: "TIER 2",
    tierClass: "text-teal-700",
    cardClass: "border border-teal-600/25 bg-teal-50/30",
    title: "Agentic Platform",
    desc: "AI Governance Framework: Guardrails, Safety Nets, Regulatory Compliance. Accountability, Transparency, Privacy, Identity, and more.",
  },
  {
    tier: "TIER 3",
    tierClass: "text-brand-teal",
    cardClass: "border border-brand-teal/20 bg-white",
    title: "Departments",
    desc: "Six authoritative departments, each powered by Coordinating Agents that orchestrate tasks across departments without hierarchy bottlenecks, enabling parallel execution and real-time collaboration.",
  },
];

function TierLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-40 shrink-0 pt-5 hidden lg:block">
      <span className="text-[10px] font-mono text-slate-400 uppercase leading-tight whitespace-nowrap">
        {children}
      </span>
    </div>
  );
}

function DownArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider mb-1">
        {label}
      </span>
      <div className="w-px h-5 bg-slate-300" />
      {/* CSS triangle — no Tailwind equivalent */}
      <div
        className="w-0 h-0"
        style={{
          borderLeft: "4px solid transparent",
          borderRight: "4px solid transparent",
          borderTop: "5px solid #94a3b8",
        }}
      />
    </div>
  );
}

function UpArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center">
      {/* CSS triangle — no Tailwind equivalent */}
      <div
        className="w-0 h-0"
        style={{
          borderLeft: "4px solid transparent",
          borderRight: "4px solid transparent",
          borderBottom: "5px solid #94a3b8",
        }}
      />
      <div className="w-px h-5 bg-slate-300" />
      <span className="text-[8px] font-mono text-slate-400 uppercase tracking-wider mt-1">
        {label}
      </span>
    </div>
  );
}

export default function AgenticArchitecturePage() {
  return (
    <div className="pt-20 min-h-screen text-slate-800 overflow-hidden bg-white">
      
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="relative py-24 px-4 text-center">
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs mb-8 border border-teal-600/25 bg-teal-600/6 text-teal-700">
            <span className="h-1.5 w-1.5 rounded-full animate-pulse bg-teal-600" />
            GWTL 2.0
          </div>

          <h1 className="font-display text-5xl sm:text-7xl font-bold mb-6 leading-tight">
            <span className="text-brand-teal">Agentic Architecture
            </span>
          </h1>

          <p className="text-xl leading-relaxed text-slate-500">
            An AI-native organizational operating system designed for the future of work. Four tiers of AI Governance Framework, 
            autonomous execution at scale, and seamless human-AI collaboration across organization layers.
          </p>

          <div className="mt-10 flex items-center justify-center gap-8">
            {[
              { icon: Cpu, label: "AI-Native" },
              { icon: Zap, label: "Autonomous" },
              { icon: Network, label: "Seamless Collaboration" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-md text-slate-500">
                <Icon className="h-3.5 w-3.5 text-teal-600" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── DIAGRAM ─────────────────────────── */}
      <section className="pb-32 px-4 overflow-x-auto">
        <div className="mx-auto pb-4 max-w-6xl">

          {/* ── TIER 1 — EXECUTIVE ── */}
          <div className="flex items-center gap-4">
            <TierLabel>TIER 1 — EXECUTIVE</TierLabel>
            <div className="flex-1 flex justify-center gap-6">
              {executives.map((exec, idx) => (
                <div
                  key={exec.label}
                  className="w-40 rounded-xl p-5 text-center relative group animate-fade-in-up opacity-0 bg-white border border-teal-600/20 shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
                >
                  {/* <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.05)_0%,transparent_70%)]" /> */}

                  <h3 className="font-mono text-2xl font-bold text-brand-navy mb-1">
                    {exec.label}
                  </h3>
                  <p className="font-mono text-xs mb-3 text-teal-600">
                    {exec.sublabel}
                  </p>
                  <p className="font-mono text-[10px] text-slate-400">{PATHS}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Exec → Daemon connectors */}
          <div className="flex gap-4 mt-2">
            <div className="w-40 shrink-0 hidden lg:block" />
            <div className="flex-1 flex justify-center gap-6">
              {executives.map((exec) => (
                <div key={exec.label} className="w-40 flex justify-center">
                  <DownArrow label="PROMPT" />
                </div>
              ))}
            </div>
          </div>

          {/* ── TIER 2 — PLATFORM ── */}
          <div className="flex items-center gap-4 mt-1">
            <TierLabel>TIER 2 — PLATFORM</TierLabel>
            <div
              className="flex-1 relative animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="absolute inset-0 rounded-2xl blur-xl bg-teal-600/10" />
              <div className="relative rounded-2xl py-8 px-6 text-center border border-teal-600/35 bg-linear-to-br from-teal-600/6 to-purple-500/3 shadow-[0_0_40px_-5px_rgba(124,58,237,0.12),inset_0_1px_0_rgba(124,58,237,0.1)]">
                <h2 className="font-mono text-3xl sm:text-4xl font-bold tracking-[0.2em] mb-2 text-teal-900">
                  AGENTIC PLATFORM
                </h2>
                <p className="font-mono text-base mb-3 text-teal-600">
                  AI Governance Framework: Guardrails, Safety Nets, Regulatory Compliance
                </p>
                <p className="font-mono text-xs text-brand-navy/50">Accountability, Transparency, Privacy, Identity, and more.</p>
              </div>
            </div>
          </div>

          {/* Daemon → Depts connectors */}
          <div className="flex gap-4 mt-2">
            <div className="w-40 shrink-0 hidden lg:block" />
            <div className="flex-1 grid grid-cols-6 gap-1">
              {departments.map((dept) => (
                <div key={dept.id} className="flex justify-center">
                  <DownArrow label="ACT" />
                </div>
              ))}
            </div>
          </div>

          {/* ── TIER 3 — DEPARTMENTS ── */}
          <div className="flex items-start gap-4 mt-1">
            <TierLabel>TIER 3 — DEPARTMENTS</TierLabel>
            <div className="flex-1">
              <div className="grid grid-cols-6 gap-1">
                {departments.map((dept, idx) => (
                  <div
                    key={dept.id}
                    className="rounded-xl p-3 text-center relative group animate-fade-in-up opacity-0 bg-white border border-brand-teal/20 shadow-sm hover:shadow-md transition-shadow duration-300"
                    style={{ animationDelay: `${0.4 + idx * 0.06}s` }}
                  >
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_center,rgba(0,163,163,0.05)_0%,transparent_70%)]" />
                    <h3 className="font-mono text-base font-bold text-brand-teal mb-1">
                      {dept.label}
                    </h3>
                    {/* <p className="font-mono text-[8px] font-bold mb-1.5 tracking-widest text-brand-navy">
                      AGENTIC
                    </p> */}
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold mb-3 bg-teal-600/8 border border-teal-600/25 text-teal-700">
                      AI
                    </div>
                    <p className="font-mono text-sm italic mb-2 text-slate-500">
                      Coordinating Agent
                    </p>
                    <p className="font-mono text-sm  text-slate-400">AI Model Orchestrator</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Depts → Tasks connectors */}
          <div className="flex gap-4 mt-2">
            <div className="w-40 shrink-0 hidden lg:block" />
            <div className="flex-1 grid grid-cols-6 gap-1">
              {departments.map((dept) => (
                <div key={dept.id} className="flex justify-center">
                  <DownArrow label="Execute" />
                  <UpArrow label="Report" />
                </div>
              ))}
            </div>
          </div>

          {/* ── TIER 4 — TEAMS ── */}
          <div className="flex items-start gap-4 mt-1">
            <TierLabel>TIER 4 — TASKS</TierLabel>
            <div className="flex-1 grid grid-cols-6 gap-1">
              {departments.map((dept, dIdx) => (
                <div key={dept.id} className="flex flex-col gap-1.5">
                  {(tasksByDept[dept.id] ?? ["Task A", "Task B"]).map(
                    (task, tIdx) => (
                      <div
                        key={task}
                        className="rounded-lg p-2 text-center animate-fade-in-up opacity-0 border border-slate-200/80 bg-slate-50"
                        style={{ animationDelay: `${0.7 + dIdx * 0.05 + tIdx * 0.04}s` }}
                      >
                        <p className="font-mono text-[10px] font-bold text-slate-500 mb-0.5">
                          {task}
                        </p>
                        <p className="font-mono text-[10px] text-slate-400">Subagent</p>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── DESCRIPTION ─────────────────────────── */}
      <section className="relative py-24 px-4 overflow-hidden bg-linear-to-br from-violet-50/30 via-slate-50 to-primary-50/20">
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {descCards.map(({ tier, tierClass, cardClass, title, desc }) => (
              <div
                key={tier}
                className={`rounded-2xl p-6 shadow-elegant ${cardClass}`}
              >
                <div className={`text-sm font-bold tracking-widest mb-3 ${tierClass}`}>
                  {tier}
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-3">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-md uppercase tracking-widest mb-6 text-slate-400">
              Built on this architecture
            </p>
            <Link href="/ai-governance">
              <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 border border-teal-600/30 bg-teal-600/6 text-teal-700 shadow-[0_0_20px_-5px_rgba(124,58,237,0.1)]">
                View AI Governance Framework
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
