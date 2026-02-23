import Link from "next/link";
import { ArrowRight, Sparkles, Globe, Users, Award } from "lucide-react";

const stats = [
  { value: "5K+", label: "Leaders", icon: Users },
  { value: "10+", label: "Countries", icon: Globe },
  { value: "95%", label: "Satisfaction", icon: Award },
];

export function CTA() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      {/* Dark background with animated gradient mesh */}
      <div className="absolute inset-0 bg-brand-navy">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-linear-to-br from-brand-teal/30 to-transparent blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-linear-to-tl from-brand-teal-light/20 to-transparent blur-[100px] animate-glow-pulse [animation-delay:2s]" />
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[400px] rounded-full bg-gradient-to-l from-brand-teal/25 to-transparent blur-[80px] animate-glow-pulse [animation-delay:4s]" />

        {/* Noise texture */}
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Main content card */}
        <div className="relative">
          {/* Glowing border effect */}
          <div className="absolute -inset-px rounded-[3rem] bg-linear-to-r from-brand-navy/50 via-brand-navy-light/50 to-brand-navy/50 blur-sm" />

          {/* Glass card */}
          <div className="relative rounded-[3rem] p-10 sm:p-14 lg:p-20 overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10">
            {/* Inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-linear-to-r from-transparent via-brand-teal-light/60 to-transparent" />

            {/* Content */}
            <div className="text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-10 animate-fade-in-up opacity-0 [animation-delay:0.1s] bg-brand-teal/20 border border-brand-teal/30">
                <Sparkles className="h-4 w-4 text-brand-teal-light" />
                <span className="text-sm font-semibold text-brand-teal-light tracking-wide">
                  Join 5,000+ Leaders Worldwide
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight mb-8 animate-fade-in-up opacity-0 [animation-delay:0.2s]">
                <span className="text-white">Ready to Shape</span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="gradient-text-cta">Tech Leadership</span>
                  {/* Animated underline */}
                  <span className="absolute -bottom-2 left-0 right-0 h-1.5 rounded-full bg-linear-to-r from-brand-teal-light via-brand-teal to-brand-teal-light animate-line-grow" />
                </span>
                <span className="text-white">?</span>
              </h2>

              {/* Description */}
              <p className="text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed text-white/60 mb-12 animate-fade-in-up opacity-0 [animation-delay:0.3s]">
                Whether you&apos;re a woman leader looking to grow, or a company
                wanting to make an impact —{" "}
                <span className="text-white font-medium">
                  GWTL is your partner
                </span>{" "}
                in building a more inclusive tech industry.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up opacity-0 [animation-delay:0.4s]">
                <Link href="/for-leaders/join">
                  <button className="magnetic-btn group relative h-14 px-8 rounded-2xl font-bold overflow-hidden bg-linear-to-r from-brand-teal to-brand-teal-light text-brand-navy shadow-lg shadow-brand-teal/30">
                    {/* Shimmer effect */}
                    <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative flex items-center justify-center gap-2">
                      Join as a Leader
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/for-companies">
                  <button className="magnetic-btn group h-14 px-8 rounded-2xl font-bold text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2">
                    <span>Become a Partner</span>
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </button>
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap justify-center gap-8 lg:gap-16 pt-10 border-t border-white/10 animate-fade-in-up opacity-0 [animation-delay:0.5s]">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <stat.icon className="h-5 w-5 text-brand-teal-light" />
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/50">{stat.label}</div>
                    </div>
                  </div>
                ))}
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
      </div>
    </section>
  );
}
