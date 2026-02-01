import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Users,
  BookOpen,
  Calendar,
  Globe,
  Award,
  ArrowRight,
  CheckCircle2,
  Rocket,
  Heart,
  MessageCircle,
  Zap,
  Target,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Leaders",
  description:
    "Join GWTL's global network of women tech leaders. Access mentoring, exclusive events, resources, and career opportunities.",
};

const benefits = [
  {
    icon: Users,
    title: "Global Network",
    description:
      "Connect with 10,000+ women tech leaders across 50+ countries. Build meaningful relationships that accelerate your career.",
    color: "from-brand-teal to-emerald-600",
    bgColor: "bg-gradient-to-br from-teal-50 to-emerald-50",
  },
  {
    icon: BookOpen,
    title: "1:1 Mentoring",
    description:
      "Get matched with senior leaders through our AI-powered platform. Personalized guidance from those who've walked your path.",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
  },
  {
    icon: Calendar,
    title: "Exclusive Events",
    description:
      "Access invitation-only roundtables, workshops, and networking events. From local meetups to Davos Innovation Week.",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
  },
  {
    icon: Rocket,
    title: "Career Acceleration",
    description:
      "92% of our members report career advancement within 2 years. Leadership programs, visibility opportunities, and more.",
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-gradient-to-br from-rose-50 to-pink-50",
  },
];

const membershipTiers = [
  {
    name: "Community",
    price: "Free",
    description: "Start your leadership journey",
    features: [
      "Global community access",
      "Monthly newsletter",
      "Public events",
      "Resource library (limited)",
      "Job board access",
    ],
    cta: "Join Free",
    highlighted: false,
    accent: "border-secondary-200 hover:border-brand-teal/50",
    ctaStyle: "bg-secondary-100 text-secondary-800 hover:bg-secondary-200",
  },
  {
    name: "Leader",
    price: "€149",
    period: "/year",
    description: "For ambitious tech leaders",
    features: [
      "Everything in Community",
      "1:1 mentoring (4 sessions/year)",
      "Exclusive roundtables",
      "Full resource library",
      "Member directory access",
      "Priority event registration",
      "Leadership cohort discount",
    ],
    cta: "Become a Leader",
    highlighted: true,
    accent: "border-brand-teal shadow-glow-teal",
    ctaStyle: "bg-brand-teal text-white hover:bg-brand-teal-dark",
  },
  {
    name: "Executive",
    price: "€499",
    period: "/year",
    description: "For C-suite and senior leaders",
    features: [
      "Everything in Leader",
      "Unlimited mentoring",
      "Executive roundtables",
      "Speaking opportunities",
      "Board placement support",
      "Davos Week invitation",
      "Dedicated success manager",
    ],
    cta: "Apply Now",
    highlighted: false,
    accent: "border-brand-navy/20 hover:border-brand-navy/50",
    ctaStyle: "bg-brand-navy text-white hover:bg-brand-navy-dark",
  },
];

const testimonials = [
  {
    quote:
      "GWTL opened doors I didn't know existed. The mentoring program connected me with a CTO who helped me land my VP role within 8 months.",
    author: "Elena Vasquez",
    role: "VP of Engineering",
    company: "Stripe",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "The executive roundtables are invaluable. Having candid conversations with other women leaders in a safe space has transformed how I lead.",
    author: "Priya Sharma",
    role: "Chief Technology Officer",
    company: "Deliveroo",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "From local meetups in Berlin to speaking at Davos—GWTL's network has been the catalyst for my entire leadership journey.",
    author: "Sarah Mitchell",
    role: "Founder & CEO",
    company: "TechForward",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&h=200&fit=crop&crop=faces",
  },
];

const stats = [
  { value: "10K+", label: "Active Members", icon: Users },
  { value: "50+", label: "Countries", icon: Globe },
  { value: "92%", label: "Career Growth", icon: Rocket },
  { value: "500+", label: "Mentors", icon: Heart },
];

const journeySteps = [
  {
    step: "01",
    title: "Join the Community",
    description: "Create your profile and connect with women leaders worldwide.",
    icon: Sparkles,
  },
  {
    step: "02",
    title: "Get Matched",
    description: "Our AI matches you with mentors aligned to your goals.",
    icon: Target,
  },
  {
    step: "03",
    title: "Grow Together",
    description: "Attend events, build relationships, and accelerate your career.",
    icon: Zap,
  },
  {
    step: "04",
    title: "Lead Forward",
    description: "Pay it forward by mentoring the next generation of leaders.",
    icon: Star,
  },
];

export default function ForLeadersPage() {
  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section - Dramatic asymmetric layout */}
      <section className="relative min-h-[90vh] flex items-center py-20 lg:py-32">
        {/* Background elements */}
        <div className="absolute inset-0 bg-hero-gradient" />

        {/* Organic shape decorations */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl bg-radial-teal animate-float" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl bg-radial-violet animate-float [animation-delay:2s]" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full opacity-15 blur-3xl bg-radial-navy animate-float [animation-delay:4s]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-pattern-grid" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Content - spans 7 columns */}
            <div className="lg:col-span-7 relative z-10">
              {/* Badge */}
              <div className="animate-fade-in-up inline-flex items-center gap-3 px-5 py-2.5 rounded-full shadow-lg mb-8 glass-badge opacity-0 stagger-1">
                <Sparkles className="h-4 w-4 text-brand-teal" />
                <span className="text-sm font-medium text-secondary-800">
                  For Women Tech Leaders
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-brand-teal/10 text-brand-teal font-semibold">
                  10K+ Members
                </span>
              </div>

              <h1 className="animate-fade-in-up font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] opacity-0 stagger-2">
                <span className="text-brand-navy">Your Leadership</span>
                <br />
                <span className="text-brand-navy">Journey Starts </span>
                <span className="relative inline-block">
                  <span className="gradient-text-hero">Here</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 120 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8C30 2 90 2 118 8"
                      stroke="url(#leader-underline)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="leader-underline" x1="0" y1="0" x2="120" y2="0">
                        <stop stopColor="#00A3A3" />
                        <stop offset="0.5" stopColor="#7c3aed" />
                        <stop offset="1" stopColor="#1C2541" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="animate-fade-in-up mt-8 text-xl leading-relaxed max-w-2xl text-secondary-600 opacity-0 stagger-3">
                Join a global community of ambitious women tech leaders. Access
                mentoring, exclusive events, and resources designed to accelerate
                your career—from your next role to the C-suite.
              </p>

              {/* CTA Buttons */}
              <div className="animate-fade-in-up mt-10 flex flex-col sm:flex-row gap-4 opacity-0 stagger-4">
                <Link href="/for-leaders/join">
                  <button className="group w-full sm:w-auto h-14 px-8 rounded-2xl text-base font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl inline-flex items-center justify-center bg-brand-teal text-white hover:bg-brand-teal-dark">
                    Join the Network
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="#membership">
                  <button className="w-full sm:w-auto h-14 px-8 rounded-2xl text-base font-bold border-2 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary-50 inline-flex items-center justify-center border-secondary-200 text-secondary-800 bg-white">
                    View Membership
                  </button>
                </Link>
              </div>

              {/* Quick stats */}
              <div className="animate-fade-in-up mt-12 flex flex-wrap gap-8 opacity-0 stagger-5">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-brand-teal to-brand-teal-dark">
                      <stat.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-brand-navy">{stat.value}</div>
                      <div className="text-sm text-secondary-500">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual - spans 5 columns */}
            <div className="lg:col-span-5 relative animate-fade-in-scale opacity-0 [animation-delay:0.4s]">
              <div className="relative">
                {/* Background decorative shape */}
                <div className="absolute -inset-4 rounded-[3rem] transform -rotate-3 bg-gradient-to-br from-brand-teal to-violet-600" />

                {/* Main image */}
                <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&crop=faces"
                    alt="Women tech leader"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />

                  {/* Overlay content */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br from-brand-teal to-brand-navy"
                            />
                          ))}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-brand-navy">Join 10K+ Leaders</p>
                          <p className="text-xs text-secondary-500">From 50+ countries</p>
                        </div>
                        <Sparkles className="h-5 w-5 text-brand-teal" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-elegant-lg p-4 animate-float [animation-delay:1s]">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-violet-500 to-purple-600">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-navy text-sm">92%</p>
                      <p className="text-xs text-secondary-500">Career Growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Bento Grid */}
      <section className="relative py-24 lg:py-32 bg-white">
        {/* Decorative elements */}
        <div className="absolute top-20 -left-40 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl bg-radial-teal" />
        <div className="absolute bottom-20 -right-40 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-radial-violet" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
              <Heart className="h-4 w-4" />
              Why Leaders Choose GWTL
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
              Everything You Need to{" "}
              <span className="gradient-text">Lead & Thrive</span>
            </h2>
            <p className="mt-6 text-xl text-secondary-500 max-w-2xl mx-auto">
              A comprehensive platform designed for ambitious women tech leaders
              at every stage of their journey
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`group relative ${benefit.bgColor} rounded-[2rem] p-8 lg:p-10 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl`}
              >
                {/* Decorative number */}
                <div className="absolute top-6 right-6 lg:top-8 lg:right-8">
                  <span className="text-7xl lg:text-8xl font-display font-bold text-black/[0.03]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`h-16 w-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${benefit.color} shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-brand-navy mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-secondary-600 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Learn more link */}
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative py-24 lg:py-32 bg-brand-navy overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-[0.03] bg-pattern-grid" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl bg-brand-teal" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-violet-500" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-brand-teal/20 text-brand-teal-light">
              <Rocket className="h-4 w-4" />
              Your Journey
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
              From Member to <span className="text-brand-teal-light">Leader</span>
            </h2>
            <p className="mt-4 text-lg text-white/60">
              A clear path to leadership excellence, supported at every step
            </p>
          </div>

          {/* Journey steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((item, index) => (
              <div key={item.step} className="relative group">
                {/* Connector line (hidden on last item) */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-brand-teal/50 to-transparent" />
                )}

                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center transition-all duration-500 hover:bg-white/10 hover:border-brand-teal/30 hover:-translate-y-2">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center justify-center h-8 w-12 rounded-full bg-brand-teal text-white text-sm font-bold">
                      {item.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="h-16 w-16 mx-auto rounded-2xl flex items-center justify-center mb-6 mt-4 bg-gradient-to-br from-brand-teal/20 to-violet-500/20 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="h-8 w-8 text-brand-teal-light" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section id="membership" className="relative py-24 lg:py-32 bg-gradient-to-b from-white via-primary-50/30 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl bg-radial-teal" />
        <div className="absolute bottom-20 -left-40 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl bg-radial-violet" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
              <Award className="h-4 w-4" />
              Membership
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
              Choose Your <span className="gradient-text">Leadership Path</span>
            </h2>
            <p className="mt-6 text-xl text-secondary-500 max-w-2xl mx-auto">
              Flexible membership options for every stage of your career
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {membershipTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-white rounded-3xl border-2 p-8 transition-all duration-500 hover:-translate-y-2 ${tier.accent} ${
                  tier.highlighted ? "lg:-translate-y-4" : ""
                }`}
              >
                {/* Popular badge */}
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-brand-teal text-white text-sm font-bold shadow-lg">
                      <Sparkles className="h-3.5 w-3.5" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-brand-navy">{tier.name}</h3>
                  <p className="text-secondary-500 mt-1">{tier.description}</p>
                  <div className="mt-6">
                    <span className="text-5xl font-bold text-brand-navy">{tier.price}</span>
                    {tier.period && (
                      <span className="text-secondary-500">{tier.period}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-teal mt-0.5 shrink-0" />
                      <span className="text-secondary-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/for-leaders/join">
                  <button
                    className={`w-full h-14 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1 ${tier.ctaStyle}`}
                  >
                    {tier.cta}
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Trust note */}
          <p className="text-center text-secondary-500 mt-12">
            All memberships include access to our global Slack community and monthly newsletters.
            <br />
            <span className="text-brand-teal font-medium">30-day money-back guarantee</span> on paid memberships.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-violet-100 text-violet-700 border border-violet-200">
              <MessageCircle className="h-4 w-4" />
              Success Stories
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
              Hear From Our <span className="gradient-text-violet">Leaders</span>
            </h2>
          </div>

          {/* Testimonials grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="group relative bg-secondary-50 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-6xl font-serif text-brand-teal/10">
                  &ldquo;
                </div>

                <p className="relative text-lg text-secondary-700 leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-brand-navy">{testimonial.author}</p>
                    <p className="text-sm text-secondary-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-cta-gradient" />

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl bg-brand-teal" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-violet-500" />
        <div className="absolute inset-0 opacity-[0.03] bg-pattern-grid" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="h-20 w-20 rounded-3xl flex items-center justify-center animate-pulse-glow bg-gradient-to-br from-brand-teal to-violet-600">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Accelerate
            <br />
            <span className="gradient-text-cta">Your Leadership?</span>
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join 10,000+ women tech leaders who are building the future together.
            Your next chapter starts with a single step.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-leaders/join">
              <button className="group w-full sm:w-auto h-16 px-10 text-lg rounded-2xl font-bold shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl inline-flex items-center justify-center bg-brand-teal text-white hover:bg-brand-teal-dark">
                Join the Network
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-full sm:w-auto h-16 px-10 text-lg rounded-2xl font-bold border-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 inline-flex items-center justify-center btn-outline-dark">
                Talk to Our Team
              </button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <p className="text-sm font-medium uppercase tracking-wider mb-6 text-white/50">
              Leaders from these companies are in our network
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {["Google", "Microsoft", "Amazon", "Meta", "Stripe", "SAP"].map((company) => (
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
