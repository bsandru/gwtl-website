import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

const stats = [
  {
    value: "25%",
    label: "more profitable",
    source: "McKinsey, 2024",
    description:
      "Companies with 30%+ women in leadership are 25% more profitable.",
  },
  {
    value: "78¢",
    label: "per dollar invested",
    source: "BCG, 2023",
    description:
      "Women-founded ventures generate 78 cents per dollar invested — more than twice the return of male-founded.",
  },
  {
    value: "87%",
    label: "of the time",
    source: "Cloverpop",
    description:
      "Diverse leadership teams make better decisions 87% of the time.",
  },
];

export function ForCompanies() {
  return (
    <section className="relative bg-white py-28 lg:py-40 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] -translate-y-1/2 translate-x-1/4 rounded-full bg-linear-to-brl from-brand-teal/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] translate-y-1/2 -translate-x-1/4 rounded-full bg-linear-to-tr from-brand-navy/5 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 mb-6 animate-fade-in-up opacity-0 [animation-delay:0.1s]">
            <TrendingUp className="h-4 w-4 text-brand-navy" />
            <span className="text-sm font-semibold text-brand-navy">
              For Companies
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.1] animate-fade-in-up opacity-0 [animation-delay:0.2s]">
            The Business Case{" "}
            <span className="gradient-text-teal">Is Closed</span>
          </h2>
        </div>

        {/* Stats cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={stat.source}
              className="group relative rounded-4xl bg-secondary-50 p-8 lg:p-10 border border-secondary-200/60 hover:border-brand-teal/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-teal/5 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <div className="font-display text-5xl lg:text-6xl font-bold gradient-text-teal mb-3">
                {stat.value}
              </div>
              <p className="text-secondary-600 leading-relaxed mb-4">
                {stat.description}
              </p>
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary-400">
                {stat.source}
              </span>
            </div>
          ))}
        </div>

        {/* Closing line + CTA */}
        <div className="text-center animate-fade-in-up opacity-0 [animation-delay:0.7s]">
          <p className="font-display text-2xl sm:text-3xl font-bold text-brand-navy mb-8">
            This isn&apos;t charity. It&apos;s{" "}
            <span className="gradient-text-teal">competitive advantage.</span>
          </p>
          <Link href="/for-companies">
            <button className="magnetic-btn group relative h-14 px-8 rounded-2xl font-bold text-white overflow-hidden bg-brand-navy shadow-lg shadow-brand-navy/20">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Partner With GWTL
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
