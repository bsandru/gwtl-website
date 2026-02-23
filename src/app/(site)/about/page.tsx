import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Heart,
  Users,
  Lightbulb,
  Globe,
  Award,
  ArrowRight,
  Sparkles,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Global Women TechLeaders - our mission, values, and the team driving change in tech leadership worldwide.",
};

const timeline = [
  {
    year: "2017",
    title: "Founded as Global Women in Tech",
    description: "Started as a grassroots initiative in Romania",
    highlight: false,
  },
  {
    year: "2020",
    title: "International Expansion",
    description: "Grew to 25+ countries with 5,000+ members",
    highlight: false,
  },
  {
    year: "2023",
    title: "Rebranded to GWTL",
    description: "Evolved focus to tech leadership development",
    highlight: false,
  },
  {
    year: "2024",
    title: "Erasmus+ Partnership",
    description: "Launched Girls Who Lead initiative",
    highlight: false,
  },
  {
    year: "2026",
    title: "Davos Debut",
    description: "Co-organized Davos Innovation Week",
    highlight: true,
  },
];

const impactStats = [
  { value: "5,000+", label: "Members", icon: Users },
  { value: "10+", label: "Countries", icon: Globe },
  { value: "500+", label: "Events Hosted", icon: Sparkles },
  { value: "9", label: "Years of Impact", icon: Award },
];

export default function AboutPage() {
  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero - Dramatic asymmetric layout */}
      <section className="relative py-20 lg:py-24">
        {/* Background elements */}
        <div className="absolute inset-0 bg-linear-to-br from-secondary-50 via-white to-primary-50" />

        {/* Organic shape decorations */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl bg-linear-to-br from-brand-teal to-brand-teal-light" />
        {/* <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl bg-linear-to-br from-brand-navy to-brand-navy-light" /> */}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Content - spans 7 columns */}
            <div className="lg:col-span-7 relative z-10">
              {/* Decorative line */}
              <div className="decorative-line mb-8 animate-fade-in-up opacity-0 [animation-delay:0.1s]" />

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] animate-fade-in-up opacity-0 [animation-delay:0.2s]">
                <span className="text-brand-navy">Empowering Women</span>
                <br />
                <span className="text-brand-navy">Tech Leaders </span>
                {/* <span className="relative"> */}
                <span className="gradient-text">Since 2017</span>
                <svg
                  className="absolute -bottom-4 left-0 w-34"
                  viewBox="0 0 200 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C50 2 150 2 198 8"
                    stroke="url(#underline-gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="underline-gradient" x1="0" y1="0" x2="200" y2="0">
                      <stop stopColor="#00A3A3" />
                      <stop offset="1" stopColor="#1C2541" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* </span> */}
              </h1>

              <p className="mt-8 text-xl leading-relaxed max-w-2xl animate-fade-in-up text-secondary-600 opacity-0 [animation-delay:0.3s]">
                Global Women TechLeaders (GWTL) is a non-profit organization that
                promotes continuous learning, growth, and international knowledge
                sharing through global partnerships.
              </p>

              {/* Impact stats row */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in-up opacity-0 [animation-delay:0.4s]">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="group">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="h-10 w-10 shrink-0 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 bg-linear-to-br from-brand-teal to-brand-teal-dark">
                        <stat.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-3xl font-bold text-brand-navy">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-secondary-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual - spans 5 columns */}
            <div className="lg:col-span-5 relative animate-fade-in-scale opacity-0 [animation-delay:0.4s]">
              <div className="relative mx-8">
                {/* Background decorative shape */}
                <div className="absolute -inset-4 rounded-[3rem] transform rotate-3 bg-linear-to-br from-brand-teal to-brand-navy" />

                {/* Main image */}
                <div className="relative aspect-4/5 rounded-5xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1000&fit=crop&crop=faces"
                    alt="Women tech leaders collaborating"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-navy/50 to-transparent" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-elegant-lg p-5 animate-float [animation-delay:1s]">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-linear-to-br from-brand-teal to-brand-teal-dark">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-navy">10+ Countries</p>
                      <p className="text-sm text-secondary-500">Global Network</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission - Layered design */}
      <section className="relative py-24 lg:py-32 bg-brand-navy">
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-brand-teal/20 text-brand-teal-light">
                <Target className="h-4 w-4" />
                Our Mission
              </div>

              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
                Supporting Women&apos;s Career Development{" "}
                <span className="text-brand-teal-light">in Tech</span>
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Our mission is to support the career development of women in the
                tech industry through programs, collaborations, resources, and
                opportunities of growth—across borders and cultures.
              </p>

              <p className="mt-4 leading-relaxed text-white/60">
                We are &apos;global&apos; as we facilitate international business exchange
                through programs, networking, and business opportunities that
                bring innovative educational and professional development
                initiatives to women in the tech ecosystem worldwide.
              </p>

              <Link href="/programs" className="group inline-flex items-center gap-2 mt-8 font-semibold transition-all text-brand-teal-light hover:text-brand-teal">
                Explore Our Programs
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Globe visual */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-[400px] h-[400px] rounded-full opacity-20 animate-pulse bg-[radial-gradient(circle,_#00A3A3_0%,_transparent_70%)]" />
              <div className="relative w-64 h-64 rounded-full flex items-center justify-center bg-linear-to-br from-brand-teal/20 to-brand-navy/40 border-2 border-brand-teal/30">
                <Globe className="h-32 w-32 text-brand-teal-light" />
              </div>

              {/* Orbiting dots - keeping inline styles for dynamic transforms */}
              {[0, 60, 120, 180, 240, 300].map((deg, idx) => (
                <div
                  key={deg}
                  className="absolute w-3 h-3 rounded-full bg-brand-teal"
                  style={{
                    transform: `rotate(${deg}deg) translateX(160px)`,
                    opacity: 0.6 + idx * 0.05,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values - Immersive bento grid */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-linear-to-br from-white via-primary-50/30 to-white">
        {/* Animated background elements */}
        <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl bg-linear-to-br from-brand-teal to-brand-teal-light animate-float" />
        <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl bg-linear-to-br from-brand-navy to-brand-navy-light animate-float [animation-delay:2s]" />


        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header with badge */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
              <Heart className="h-4 w-4" />
              What We Stand For
            </div>
            <h2 className="font-display text-4xl lg:text-6xl font-bold text-brand-navy leading-tight">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="mt-6 text-xl text-secondary-500 max-w-2xl mx-auto">
              The principles that guide everything we do and shape the future of women in tech leadership
            </p>
          </div>

          {/* Bento grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Featured card - Diversity & Inclusion */}
            <div className="lg:col-span-7 group relative">
              <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-rose-500 to-pink-600 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
              <div className="relative h-full min-h-[320px] lg:min-h-[380px] rounded-4xl p-8 lg:p-10 overflow-hidden bg-linear-to-br from-rose-500 to-pink-600 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Decorative shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-2xl bg-white" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full opacity-30 bg-white/10" />

                {/* Number badge */}
                <div className="absolute top-8 right-8 lg:top-10 lg:right-10">
                  <span className="text-7xl lg:text-8xl font-display font-bold text-white/10">01</span>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-500">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    Diversity & Inclusion
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed max-w-lg">
                    We believe a diverse and inclusive tech industry is essential for driving innovation and creativity that changes the world.
                  </p>
                </div>
              </div>
            </div>

            {/* Creativity & Innovation */}
            <div className="lg:col-span-5 group relative">
              <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-amber-500 to-orange-600 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
              <div className="relative h-full min-h-[320px] lg:min-h-[380px] rounded-4xl p-8 lg:p-10 overflow-hidden bg-linear-to-br from-amber-500 to-orange-600 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Number badge */}
                <div className="absolute top-8 right-8 lg:top-10 lg:right-10">
                  <span className="text-7xl lg:text-8xl font-display font-bold text-white/10">02</span>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full opacity-20 blur-xl bg-white" />

                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-500">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    Creativity & Innovation
                  </h3>
                  <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                    We value creativity and believe these qualities are essential for driving progress and solving complex problems.
                  </p>
                </div>
              </div>
            </div>

            {/* Collaboration & Integrity */}
            <div className="lg:col-span-5 group relative">
              <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-brand-teal to-emerald-600 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
              <div className="relative h-full min-h-[320px] lg:min-h-[380px] rounded-4xl p-8 lg:p-10 overflow-hidden bg-linear-to-br from-brand-teal to-emerald-600 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Number badge */}
                <div className="absolute top-8 right-8 lg:top-10 lg:right-10">
                  <span className="text-7xl lg:text-8xl font-display font-bold text-white/10">03</span>
                </div>

                {/* Decorative circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-white/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-white/5" />

                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-500">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    Collaboration & Integrity
                  </h3>
                  <p className="text-base lg:text-lg text-white/90 leading-relaxed">
                    We believe global collaboration is key to driving progress and hold ourselves to high ethical standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Empowerment - Featured */}
            <div className="lg:col-span-7 group relative">
              <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-brand-navy to-indigo-600 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700" />
              <div className="relative h-full min-h-[320px] lg:min-h-[380px] rounded-4xl p-8 lg:p-10 overflow-hidden bg-linear-to-br from-brand-navy to-indigo-600 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                {/* Number badge */}
                <div className="absolute top-8 right-8 lg:top-10 lg:right-10">
                  <span className="text-7xl lg:text-8xl font-display font-bold text-white/10">04</span>
                </div>

                {/* Decorative lines */}
                <svg className="absolute bottom-0 left-0 w-full h-32 opacity-10" viewBox="0 0 400 100" fill="none">
                  <path d="M0 80 Q100 20 200 60 T400 40" stroke="white" strokeWidth="2" fill="none" />
                  <path d="M0 90 Q100 30 200 70 T400 50" stroke="white" strokeWidth="1" fill="none" />
                </svg>

                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className="h-16 w-16 rounded-2xl flex items-center justify-center mb-6 bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-500">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                    Empowerment
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed max-w-lg">
                    We aim to empower women in tech by providing the tools, resources, mentorship, and opportunities they need to succeed and lead.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-brand-teal/30" />
              <div className="h-2 w-2 rounded-full bg-brand-teal" />
              <div className="h-1 w-12 rounded-full bg-brand-navy/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Immersive journey section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-linear-to-br from-brand-navy via-brand-navy-dark to-brand-navy" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl bg-brand-teal" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-brand-teal-light" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-brand-teal/20 text-brand-teal-light">
              <Globe className="h-4 w-4" />
              Our Story
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
              A Journey of <span className="text-brand-teal-light">Impact</span>
            </h2>
            <p className="mt-4 text-lg text-white/60">
              From a local initiative to a global movement empowering women in tech
            </p>
          </div>

          {/* Desktop timeline - creative staggered layout */}
          <div className="hidden lg:block relative">
            {/* Central timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
              <div className="h-full w-full bg-linear-to-br from-brand-teal via-brand-teal/50 to-brand-navy" />
            </div>

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                >
                  {/* Year badge - centered on line */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${item.highlight
                        ? "bg-brand-teal border-brand-teal-light shadow-glow-teal animate-pulse-glow"
                        : "bg-brand-navy-light border-brand-navy hover:border-brand-teal/50"
                        }`}
                    >
                      <span className={`text-lg font-bold ${item.highlight ? "text-white" : "text-white/80"}`}>
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "pr-16 text-right" : "pl-16 text-left"
                      }`}
                  >
                    <div
                      className={`group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${item.highlight
                        ? "bg-linear-to-br from-brand-teal to-brand-teal-dark shadow-glow-teal"
                        : "bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-brand-teal/30"
                        }`}
                    >
                      {/* Highlight badge */}
                      {item.highlight && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                          <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white text-brand-navy text-xs font-bold">
                            <Sparkles className="h-3 w-3" />
                            Latest
                          </div>
                        </div>
                      )}

                      <h3 className={`text-xl font-bold mb-3 ${item.highlight ? "text-white" : "text-white"}`}>
                        {item.title}
                      </h3>
                      <p className={`text-base leading-relaxed ${item.highlight ? "text-white/90" : "text-white/60"}`}>
                        {item.description}
                      </p>

                      {/* Decorative corner */}
                      <div
                        className={`absolute ${index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"} top-1/2 -translate-y-1/2 w-4 h-px ${item.highlight ? "bg-white/50" : "bg-white/20"
                          }`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile timeline - elegant vertical */}
          <div className="lg:hidden relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-linear-to-br from-brand-teal via-brand-teal/50 to-brand-navy" />

            <div className="space-y-10">
              {timeline.map((item, index) => (
                <div key={item.year} className="relative pl-16">
                  {/* Year node */}
                  <div className="absolute left-0 top-0">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${item.highlight
                        ? "bg-brand-teal border-brand-teal-light shadow-glow-teal"
                        : "bg-brand-navy-light border-brand-navy"
                        }`}
                    >
                      <span className="text-xs font-bold text-white">{item.year}</span>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`p-6 rounded-2xl ${item.highlight
                      ? "bg-linear-to-br from-brand-teal to-brand-teal-dark shadow-glow-teal"
                      : "bg-white/5 backdrop-blur-sm border border-white/10"
                      }`}
                  >
                    {item.highlight && (
                      <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/20 text-white text-xs font-medium mb-3">
                        <Sparkles className="h-3 w-3" />
                        Latest
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className={`text-sm ${item.highlight ? "text-white/90" : "text-white/60"}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Dramatic gradient */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-br from-brand-navy via-brand-navy-dark to-brand-navy" />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl bg-brand-teal" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-brand-teal-light" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 bg-brand-teal/20 text-brand-teal-light">
            <Sparkles className="h-4 w-4" />
            Join the Movement
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            Be Part of Our Story
          </h2>

          <p className="mt-6 text-xl text-white/70">
            Join thousands of women leaders shaping the future of technology
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-leaders/join">
              <button className="group w-full sm:w-auto h-16 px-10 text-lg rounded-2xl font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl inline-flex items-center justify-center bg-brand-teal text-white hover:bg-brand-teal-dark">
                Join Our Network
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-full sm:w-auto h-16 px-10 text-lg rounded-2xl font-bold border-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 inline-flex items-center justify-center border-white/30 text-white bg-transparent">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <p className="text-sm font-medium uppercase tracking-wider mb-6 text-white/50">
              Leaders from these companies trust us
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {["Google", "Microsoft", "Amazon", "SAP", "Meta", "Stripe", "Accenture", "Spotify", "Trimble", "Etsy", "KPMG", "PayPal", "Salesforce", "VMware", "Wix", "Zoom"].map((company) => (
                <span
                  key={company}
                  className="text-lg font-semibold transition-opacity hover:opacity-100 text-white/40"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
