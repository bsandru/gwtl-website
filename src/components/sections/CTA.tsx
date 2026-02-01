import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-brand-navy">
        {/* Primary gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full blur-[120px] animate-pulse [animation-duration:8s] bg-[radial-gradient(circle,rgba(0,163,163,0.4)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-[100px] animate-pulse [animation-duration:6s] [animation-delay:2s] bg-[radial-gradient(circle,rgba(45,212,191,0.3)_0%,transparent_70%)]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[80px] animate-pulse [animation-duration:10s] [animation-delay:4s] bg-[radial-gradient(circle,rgba(0,133,133,0.35)_0%,transparent_70%)]" />

        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.15] bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20256%20256%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%3E%3Cfilter%20id%3D%27noise%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%270.9%27%20numOctaves%3D%274%27%20stitchTiles%3D%27stitch%27%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url%28%23noise%29%27%2F%3E%3C%2Fsvg%3E')]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Glass card container */}
        <div className="relative rounded-5xl p-8 sm:p-12 lg:p-16 overflow-hidden bg-linear-to-br from-white/8 to-white/2 backdrop-blur-xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4),inset_0_1px_0_0_rgba(255,255,255,0.1)]">
          {/* Inner glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-brand-teal-light/50 to-transparent" />

          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 animate-fade-in-up opacity-0 [animation-delay:0.1s] bg-linear-to-br from-brand-teal/20 to-brand-teal-light/10 border border-brand-teal-light/30">
              <Sparkles className="h-4 w-4 text-brand-teal-light" />
              <span className="text-sm font-semibold text-brand-teal-light tracking-wide">
                Join 10,000+ Leaders Worldwide
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight animate-fade-in-up opacity-0 [animation-delay:0.2s]">
              <span className="text-white">Ready to Shape</span>
              <br />
              <span className="relative inline-block mt-2 bg-linear-to-br from-brand-teal-light via-brand-teal to-brand-teal-light bg-clip-text text-transparent">
                Tech Leadership
                {/* Underline accent */}
                <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-linear-to-r from-brand-teal-light to-brand-teal" />
              </span>
              <span className="text-white">?</span>
            </h2>

            <p className="mt-8 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed text-white/70 animate-fade-in-up opacity-0 [animation-delay:0.3s]">
              Whether you're a woman leader looking to grow, or a company wanting
              to make an impact — <span className="text-white font-medium">GWTL is your partner</span> in building
              a more inclusive tech industry.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0 [animation-delay:0.4s]">
              <Link href="/for-leaders/join">
                <button className="group relative w-full sm:w-auto h-14 px-8 rounded-2xl font-semibold text-brand-navy overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-linear-to-br from-brand-teal-light to-brand-teal shadow-glow-teal">
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative flex items-center justify-center gap-2">
                    Join as a Leader
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              <Link href="/for-companies">
                <button className="group w-full sm:w-auto h-14 px-8 rounded-2xl font-semibold text-white border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-[1.02]">
                  <span className="flex items-center justify-center gap-2">
                    Become a Partner
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </span>
                </button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-14 pt-8 border-t border-white/10 animate-fade-in-up opacity-0 [animation-delay:0.5s]">
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-white/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>Active Community</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">50+</span>
                  <span>Countries</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">500+</span>
                  <span>Partner Companies</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white">95%</span>
                  <span>Satisfaction Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
