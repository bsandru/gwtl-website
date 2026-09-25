import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { COMPANIES } from "@/lib/content";
import { CountUp, HeroSpotlight, Parallax } from "@/components/motion";

const headline = [
  { words: ["Where", "Women", "Tech", "Leaders"], className: "text-brand-navy" },
  { words: ["Move", "From", "Visibility"], className: "gradient-text-hero gradient-text-animated leading-tight" },
  { words: ["to", "Power"], className: "text-brand-navy" },
];

const WORD_DELAY = 0.07;
const HEADLINE_START = 0.15;
const headlineWordCount = headline.reduce((n, line) => n + line.words.length, 0);

const stats = [
  { value: "30%", label: "2030 leadership benchmark" },
  { value: "1,200+", label: "2030 placement target" },
  { value: "2018", label: "Community work began", static: true },
  { value: "€150M+", label: "2030 capital-direction target" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fafafa]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large teal gradient blob */}
        <div className="absolute -top-[400px] -right-[300px] w-[900px] h-[900px] animate-drift">
          <div className="h-full w-full rounded-full bg-linear-to-br from-brand-teal/20 via-brand-teal-light/10 to-transparent blur-3xl animate-morph-blob" />
        </div>

        {/* Secondary blob */}
        <div className="absolute -bottom-[200px] -left-[200px] w-[600px] h-[600px] animate-drift-slow">
          <div className="h-full w-full rounded-full bg-linear-to-tr from-brand-navy/5 via-brand-teal/5 to-transparent blur-3xl animate-morph-blob [animation-delay:5s]" />
        </div>

        {/* Aurora accent */}
        <div className="absolute top-[18%] left-[8%] w-[420px] h-[420px] rounded-full bg-brand-teal-light/10 blur-[110px] animate-drift [animation-delay:-6s]" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-brand-teal/40 animate-float [animation-delay:0s]" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-brand-teal-light/50 animate-float [animation-delay:1s]" />
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full bg-brand-teal/30 animate-float [animation-delay:2s]" />

        <div className="absolute top-[60%] right-[12%] w-2.5 h-2.5 rounded-full bg-brand-teal/40 animate-float [animation-delay:3s]" />
        <div className="absolute top-[14%] right-[22%] w-1.5 h-1.5 rounded-full bg-brand-teal-light/70 animate-float-reverse [animation-delay:1.5s]" />

        {/* Subtle dot pattern, fading out toward the bottom */}
        <div className="absolute inset-0 bg-pattern-dots opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      </div>

      <HeroSpotlight />

      {/* Main content */}
      <div className="relative pt-30 lg:pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main headline */}
          <div className="text-center max-w-5xl mx-auto mb-8">
            <h1 className="editorial-headline font-display">
              {(() => {
                let wordIndex = 0;
                return headline.map((line, lineIdx) => (
                  <span key={lineIdx} className="block">
                    {line.words.map((word, i) => {
                      const delay = HEADLINE_START + wordIndex++ * WORD_DELAY;
                      const isPower = word === "Power";
                      return (
                        <span key={word} className={isPower ? "relative inline-block" : undefined}>
                          <span className="word-mask">
                            <span
                              className={`word-rise ${line.className}`}
                              style={{ animationDelay: `${delay}s` }}
                            >
                              {word}
                            </span>
                          </span>
                          {isPower && (
                            <svg
                              aria-hidden
                              viewBox="0 0 300 24"
                              preserveAspectRatio="none"
                              className="draw-stroke absolute left-0 -bottom-3 h-[0.28em] w-full overflow-visible"
                            >
                              <path
                                d="M4 16 C 60 4, 140 4, 196 10 S 280 20, 296 8"
                                pathLength={1}
                                fill="none"
                                stroke="url(#hero-underline)"
                                strokeWidth="6"
                                strokeLinecap="round"
                                style={{ animationDelay: `${HEADLINE_START + headlineWordCount * WORD_DELAY + 0.4}s` }}
                              />
                              <defs>
                                <linearGradient id="hero-underline" x1="0" x2="1">
                                  <stop offset="0" stopColor="#00A3A3" />
                                  <stop offset="1" stopColor="#2DD4BF" />
                                </linearGradient>
                              </defs>
                            </svg>
                          )}
                          {i < line.words.length - 1 ? " " : ""}
                        </span>
                      );
                    })}
                  </span>
                ));
              })()}
            </h1>
          </div>

          {/* Subheadline */}
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up opacity-0 [animation-delay:0.75s]">
            <p className="text-lg sm:text-xl text-secondary-600 leading-relaxed mb-4">
              GWTL connects women leaders with the people, rooms, sponsors,
              capital, and commitments that accelerate real leadership outcomes.
              <br />
              <span className="font-semibold text-brand-teal">
                Human-led. AI-amplified. Outcomes-driven.
              </span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-row flex-wrap gap-4 justify-center mb-20 animate-fade-in-up opacity-0 [animation-delay:0.9s]">
            <Link href="/programs">
              <button className="magnetic-btn group relative h-14 px-8 rounded-2xl font-bold text-white overflow-hidden bg-brand-navy shadow-lg shadow-brand-navy/20">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  I&apos;m a Woman Leader
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
            <Link href="/sponsorship">
              <button className="magnetic-btn group h-14 px-8 rounded-2xl font-bold border-2 border-brand-navy/10 hover:border-brand-teal/30 hover:bg-brand-teal/5 transition-all duration-300 flex items-center justify-center gap-2">
                Partner With Us
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>

          {/* Stats bar */}
          <div className="max-w-5xl text-center mx-auto mb-20 animate-fade-in-up opacity-0 [animation-delay:1.05s]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 mb-6">
              <Sparkles className="h-4 w-4 text-brand-teal animate-pulse" />
              <span className="text-sm font-semibold text-brand-teal">Our 2030 Targets</span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-secondary-200/60">
              {stats.map((stat) => (
                <div key={stat.label} className="group px-6 transition-transform duration-500 hover:-translate-y-1">
                  <div className="font-display text-4xl sm:text-5xl font-bold gradient-text-teal leading-tight tabular-nums">
                    {stat.static ? stat.value : <CountUp value={stat.value} />}
                  </div>
                  <div className="mx-auto mt-2 h-0.5 w-8 rounded-full bg-linear-to-r from-brand-teal to-brand-teal-light transition-all duration-500 group-hover:w-16" />
                  <div className="text-sm text-secondary-500 mt-2 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Hero Image Section */}
          <div className="relative max-w-5xl mx-auto animate-fade-in-scale opacity-0 [animation-delay:1.2s]">
            {/* Main image container with creative shape */}
            <Parallax speed={0.06}>
              {/* Glow effect behind image */}
              {/* <div className="absolute -inset-4 bg-linear-to-r from-brand-teal/20 via-brand-teal-light/20 to-brand-teal/20 rounded-[3rem] blur-2xl animate-glow-pulse" /> */}

              {/* Main image */}
              <div className="group/hero relative rounded-5xl overflow-hidden shadow-2xl shadow-brand-navy/10 ring-1 ring-black/5">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 animate-ken-burns [animation-delay:1.2s]">
                    <Image
                      src="/images/hero.avif"
                      alt="Women tech leaders collaborating"
                      fill
                      sizes="(min-width: 1024px) 1024px, 100vw"
                      className="object-cover transition-transform duration-[1.6s] ease-out group-hover/hero:scale-105"
                      priority
                    />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-brand-navy/60 via-transparent to-transparent" />

                  {/* Bottom content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                      {/* Quote */}
                      <div className="max-w-lg">
                        <p className="text-white/90 text-lg sm:text-xl font-medium italic mb-3">
                          &quot;AI is not the mission. People are. AI helps us scale
                          the trust, follow-through, and accountability this work requires.&quot;
                        </p>
                        <p className="text-white/60 text-sm">
                          - GWTL human-AI operating principle
                        </p>
                      </div>

                      {/* Floating action card */}
                      <div className="hidden sm:block glass-card-dark rounded-2xl p-4 sm:p-5 transition-transform duration-500 hover:-translate-y-1">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-xl bg-linear-to-br from-brand-teal to-brand-teal-light flex items-center justify-center animate-pulse-glow">
                            <span className="text-xl font-bold text-white">2.0</span>
                          </div>
                          <div>
                            <p className="text-white font-semibold">Human-led</p>
                            <p className="text-white/60 text-sm">AI-amplified execution</p>
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
                      <p className="text-2xl font-bold text-brand-navy tabular-nums"><CountUp value="150+" /></p>
                      <p className="text-xs text-secondary-500">Mentors & mentees reached</p>
                    </div>
                  </div>
                </div>
              </div>
            </Parallax>
          </div>

          {/* Trusted by section */}
          <div className="mt-20 pt-12 border-t border-secondary-200/50 animate-fade-in-up opacity-0 [animation-delay:0.2s]">
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-secondary-600 mb-8">
              People in the GWTL ecosystem have worked with and led across organizations including
            </p>
            <div className="marquee-mask marquee-pause relative overflow-hidden">
              <div className="marquee-track animate-marquee [animation-duration:45s]">
                {[0, 1].map((copy) => (
                  <div key={copy} className="flex shrink-0 items-center gap-x-14 pr-14" aria-hidden={copy === 1}>
                    {COMPANIES.map((company) => (
                      <span
                        key={company}
                        className="whitespace-nowrap text-xl font-semibold text-secondary-400 hover:text-brand-teal transition-colors duration-300 cursor-default"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
