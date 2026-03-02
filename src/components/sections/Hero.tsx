import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { COMPANIES } from "@/lib/content";

const stats = [
  { value: "30%", label: "Tech leadership by 2030" },
  { value: "1,200+", label: "Placements by 2030" },
  { value: "10+", label: "Countries" },
  { value: "€150M+", label: "Funding directed to women-led ventures" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fafafa]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large teal gradient blob */}
        <div className="absolute -top-[400px] -right-[300px] w-[900px] h-[900px] rounded-full bg-gradient-to-br from-brand-teal/20 via-brand-teal-light/10 to-transparent blur-3xl animate-morph-blob" />

        {/* Secondary blob */}
        <div className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-brand-navy/5 via-brand-teal/5 to-transparent blur-3xl animate-morph-blob [animation-delay:5s]" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-brand-teal/40 animate-float [animation-delay:0s]" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-brand-teal-light/50 animate-float [animation-delay:1s]" />
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full bg-brand-teal/30 animate-float [animation-delay:2s]" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-pattern-dots opacity-30" />
      </div>

      {/* Main content */}
      <div className="relative pt-30 lg:pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main headline */}
          <div className="text-center max-w-5xl mx-auto mb-8">
            <h1 className="editorial-headline font-display animate-fade-in-up opacity-0 [animation-delay:0.2s]">
              <span className="text-brand-navy">Where AI-Powered Leadership<br />and </span>
              <span className="gradient-text-hero leading-tight">Visionary Women</span>
              <span className="block text-brand-navy">Reshape Tech</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up opacity-0 [animation-delay:0.3s]">
            <p className="text-lg sm:text-xl text-secondary-600 leading-relaxed mb-4">
              Women are 50% of talent. 15% of tech leadership.<br />
              <span className="font-semibold text-brand-teal">
                That&apos;s not a fairness gap — it&apos;s a $12 trillion inefficiency.
              </span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-row flex-wrap gap-4 justify-center mb-20 animate-fade-in-up opacity-0 [animation-delay:0.4s]">
            <Link href="/for-leaders/join">
              <button className="magnetic-btn group relative h-14 px-8 rounded-2xl font-bold text-white overflow-hidden bg-brand-navy shadow-lg shadow-brand-navy/20">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  I&apos;m a Woman Leader
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
            <Link href="/for-companies">
              <button className="magnetic-btn group h-14 px-8 rounded-2xl font-bold text-brand-navy border-2 border-brand-navy/10 hover:border-brand-teal/30 hover:bg-brand-teal/5 transition-all duration-300 flex items-center justify-center gap-2">
                Partner With Us
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>

          {/* Stats bar */}
          <div className="max-w-5xl text-center mx-auto mb-20 animate-fade-in-up opacity-0 [animation-delay:0.5s]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 mb-6 animate-fade-in-up opacity-0 [animation-delay:0.1s]">
              <Sparkles className="h-4 w-4 text-brand-teal" />
              <span className="text-sm font-semibold text-brand-teal">Our Target</span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-secondary-200/60">
              {stats.map((stat) => (
                <div key={stat.label} className="px-6">
                  <div className="font-display text-4xl sm:text-5xl font-bold gradient-text-teal leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary-500 mt-2 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Hero Image Section */}
          <div className="relative max-w-5xl mx-auto animate-fade-in-scale opacity-0 [animation-delay:0.6s]">
            {/* Main image container with creative shape */}
            <div>
              {/* Glow effect behind image */}
              {/* <div className="absolute -inset-4 bg-linear-to-r from-brand-teal/20 via-brand-teal-light/20 to-brand-teal/20 rounded-[3rem] blur-2xl animate-glow-pulse" /> */}

              {/* Main image */}
              <div className="relative rounded-5xl overflow-hidden shadow-2xl shadow-brand-navy/10">
                <div className="aspect-video relative">
                  <Image
                    src="https://images.unsplash.com/photo-1718866033984-c3ddab9af2a0?q=80&w=1024&auto=format&fit=crop&crop=faces"
                    alt="Women tech leaders collaborating"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-brand-navy/60 via-transparent to-transparent" />

                  {/* Bottom content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                      {/* Quote */}
                      <div className="max-w-lg">
                        <p className="text-white/90 text-lg sm:text-xl font-medium italic mb-3">
                          &quot;GWTL accelerates women into tech leadership through board
                          placements, capital connections, and corporate accountability&quot;
                        </p>
                        <p className="text-white/60 text-sm">
                          — GWTL Global Mission
                        </p>
                      </div>

                      {/* Floating action card */}
                      <div className="glass-card-dark rounded-2xl p-4 sm:p-5">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-xl bg-linear-to-br from-brand-teal to-brand-teal-light flex items-center justify-center">
                            <span className="text-xl font-bold text-white">26</span>
                          </div>
                          <div>
                            <p className="text-white font-semibold">2026 Cohort</p>
                            <p className="text-white/60 text-sm">Now accepting applications</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="hidden lg:block absolute -left-16 top-1/4 animate-float [animation-delay:0.5s]">
                <div className="glass-card rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-linear-to-br from-brand-teal to-brand-teal-light flex items-center justify-center">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-brand-navy">500+</p>
                      <p className="text-xs text-secondary-500">Active Mentors</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute -right-12 bottom-1/4 animate-float-reverse [animation-delay:1s]">
                <div className="glass-card rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-linear-to-br from-brand-navy to-brand-navy-light flex items-center justify-center">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-brand-navy">10+</p>
                      <p className="text-xs text-secondary-500">Countries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted by section */}
          <div className="mt-20 pt-12 border-t border-secondary-200/50 animate-fade-in-up opacity-0 [animation-delay:0.7s]">
            <p className="text-center text-sm font-medium uppercase tracking-widest text-secondary-400 mb-8">
              Leaders from top companies trust GWTL
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {COMPANIES.map((company) => (
                <span
                  key={company}
                  className="text-xl font-bold text-secondary-300 hover:text-brand-teal transition-colors duration-300 cursor-default"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
