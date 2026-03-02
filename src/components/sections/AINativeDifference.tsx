import { Cpu } from "lucide-react";

const comparison = [
  { traditional: "50+ staff to coordinate", gwtl: "4 C-level + 25 agents" },
  { traditional: "High overhead", gwtl: "Maximum impact per dollar" },
  { traditional: "Slow execution", gwtl: "24/7 delivery" },
  { traditional: "Talks about AI", gwtl: "Runs on AI" },
  { traditional: "Awareness-focused", gwtl: "Outcome-driven" },
];

export function AINativeDifference() {
  return (
    <section className="relative bg-[#f8f8f8] py-28 lg:py-40 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] -translate-y-1/3 translate-x-1/4 rounded-full bg-linear-to-brl from-brand-teal/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] translate-y-1/3 -translate-x-1/4 rounded-full bg-linear-to-tr from-brand-navy/5 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 mb-6 animate-fade-in-up opacity-0 [animation-delay:0.1s]">
            <Cpu className="h-4 w-4 text-brand-navy" />
            <span className="text-sm font-semibold text-brand-navy">
              Built Different
            </span>
          </div>
        </div>

        {/* Side-by-side layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column — Headline + body */}
          <div className="animate-fade-in-up opacity-0 [animation-delay:0.2s]">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-[1.1] mb-8">
              Led by humans. <br />
              <span className="gradient-text-teal">Run by AI agents.</span>
            </h2>

            <div className="space-y-5 text-lg text-secondary-600 leading-relaxed">
              <p>
                Four C-level executives. Twenty-five AI agents. We operate with
                the output of a 50-person organization and the overhead of four.
              </p>
              <p>
                Every dollar goes to impact. Every decision is made by a human.
                Every execution is handled by agents.
              </p>
              <p className="font-semibold text-brand-navy">
                We don&apos;t just talk about AI transforming leadership. We
                demonstrate it.
              </p>
            </div>
          </div>

          {/* Right column — Comparison table */}
          <div className="animate-fade-in-up opacity-0 [animation-delay:0.4s]">
            <div className="rounded-3xl overflow-hidden shadow-xl shadow-black/5 border border-secondary-200/60">
              {/* Table header */}
              <div className="grid grid-cols-2">
                <div className="bg-secondary-100 px-6 py-4">
                  <span className="text-sm font-bold text-secondary-500 uppercase tracking-wider">
                    Traditional Nonprofit
                  </span>
                </div>
                <div className="bg-brand-navy px-6 py-4">
                  <span className="text-sm font-bold text-brand-teal-light uppercase tracking-wider">
                    GWTL
                  </span>
                </div>
              </div>

              {/* Table rows */}
              {comparison.map((row, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-2 ${idx % 2 === 0 ? "bg-white" : "bg-secondary-50"
                    }`}
                >
                  <div className="px-6 py-4 border-t border-secondary-100">
                    <span className="text-secondary-500 text-sm">
                      {row.traditional}
                    </span>
                  </div>
                  <div className="px-6 py-4 border-t border-secondary-100 bg-brand-navy/5">
                    <span className="text-brand-navy font-semibold text-sm">
                      {row.gwtl}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-16 animate-fade-in-up opacity-0 [animation-delay:0.6s]">
          <p className="text-lg italic text-secondary-500">
            The world&apos;s first AI-native nonprofit in women&apos;s
            leadership.
          </p>
        </div>
      </div>
    </section>
  );
}
