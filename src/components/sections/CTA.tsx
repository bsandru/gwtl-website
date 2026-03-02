import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      {/* Dark background with animated gradient mesh */}
      <div className="absolute inset-0 bg-brand-navy">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-linear-to-br from-brand-teal/30 to-transparent blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-linear-to-tl from-brand-teal-light/20 to-transparent blur-[100px] animate-glow-pulse [animation-delay:2s]" />

        {/* Noise texture */}
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
          {/* Left — Women Leaders */}
          <div className="relative p-10 sm:p-14 lg:p-16 bg-white/5 backdrop-blur-2xl border-b lg:border-b-0 lg:border-r border-white/10">
            {/* Inner glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-teal-light/40 to-transparent" />

            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                  Ready to step into the room where{" "}
                  <span className="gradient-text-cta">
                    decisions happen?
                  </span>
                </h3>
                <p className="text-white/60 text-lg leading-relaxed mb-10">
                  Stop waiting for a seat at the table. We&apos;ll get you in the room.
                </p>
              </div>

              <Link href="/for-leaders/join">
                <button className="magnetic-btn group relative h-14 px-8 rounded-2xl font-bold overflow-hidden bg-linear-to-r from-brand-teal to-brand-teal-light text-brand-navy shadow-lg shadow-brand-teal/30 w-full sm:w-auto">
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative flex items-center justify-center gap-2">
                    Apply Now
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right — Companies */}
          <div className="relative p-10 sm:p-14 lg:p-16 bg-white/[0.03] backdrop-blur-2xl">
            {/* Inner glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-teal-light/20 to-transparent" />

            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
                  Want to be on the right side of history{" "}
                  <span className="text-white/60">
                    — and the right side of the P&amp;L?
                  </span>
                </h3>
                <p className="text-white/60 text-lg leading-relaxed mb-10">
                  Sponsor outcomes, not overhead.
                </p>
              </div>

              <Link href="/for-companies">
                <button className="magnetic-btn group h-14 px-8 rounded-2xl font-bold text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto">
                  <span>Let&apos;s Talk</span>
                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="hidden lg:block absolute -left-20 top-1/3 animate-float">
        <div className="h-20 w-20 rounded-2xl bg-linear-to-br from-brand-teal to-brand-teal-light opacity-20 blur-sm" />
      </div>
      <div className="hidden lg:block absolute -right-16 bottom-1/4 animate-float-reverse">
        <div className="h-16 w-16 rounded-full bg-linear-to-br from-brand-teal-light to-brand-teal opacity-30 blur-sm" />
      </div>
    </section>
  );
}
