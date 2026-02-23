import { Metadata } from "next";
import { ForCompanies } from "@/components";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Users,
  TrendingUp,
  Calendar,
  Mic,
  ArrowRight,
  Quote,
  Sparkles,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "For Companies",
  description:
    "Partner with GWTL to advance women's leadership in tech. Corporate membership, sponsorship, and DEI consulting.",
};

const services = [
  {
    icon: Users,
    title: "Corporate Membership",
    description:
      "Give your women leaders access to our global network, events, and mentoring programs.",
    link: "/for-companies/membership",
    gradient: "from-brand-teal to-emerald-600",
    delay: "0.1s",
  },
  {
    icon: Calendar,
    title: "Sponsored Events",
    description:
      "Co-brand executive roundtables, workshops, and networking events with GWTL.",
    link: "/for-companies/sponsorship",
    gradient: "from-violet-500 to-purple-700",
    delay: "0.2s",
  },
  {
    icon: Mic,
    title: "Speaker Bureau",
    description:
      "Access our network of 500+ women tech leaders for your conferences and panels.",
    link: "/for-companies/speakers",
    gradient: "from-amber-500 to-orange-600",
    delay: "0.3s",
  },
  {
    icon: TrendingUp,
    title: "DEI Consulting",
    description:
      "Get strategic guidance on building inclusive tech teams and leadership pipelines.",
    link: "/for-companies/consulting",
    gradient: "from-brand-navy to-slate-700",
    delay: "0.4s",
  },
];

const testimonials = [
  {
    quote:
      "GWTL has been instrumental in developing our women leaders. The network provides invaluable peer connections and mentorship that have accelerated careers.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechCorp",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=faces",
  },
  {
    quote:
      "The quality of speakers from GWTL's bureau is exceptional. They bring real expertise and inspire our teams to reach higher.",
    author: "Maria Rodriguez",
    role: "Head of DEI",
    company: "InnovateTech",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=faces",
  },
];

const partnerBenefits = [
  "Access to 5,000+ senior women tech leaders",
  "Proven DEI impact with measurable results",
  "Global reach across 10+ countries",
  "Davos-level credibility and visibility",
  "Dedicated partnership management",
];

const partnerLogos = ["Google", "Microsoft", "Amazon", "SAP", "Accenture", "Stripe", "Spotify", "Trimble", "Etsy", "KPMG", "PayPal", "Salesforce", "VMware", "Oracle", "Zoom"];

export default function ForCompaniesPage() {
  return (
    <div className="pt-10 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-secondary-50 via-white to-primary-50/30" />

        {/* Decorative shapes */}
        {/* <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-radial-teal opacity-30 blur-3xl" /> */}
        {/* <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-radial-violet opacity-20 blur-3xl" /> */}

        {/* Grid pattern */}
        {/* <div className="absolute inset-0 bg-pattern-grid opacity-[0.02]" /> */}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Content */}
            <div className="relative z-10">
              {/* Badge */}
              <div className="animate-fade-in-up opacity-0 [animation-delay:0.1s]">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full shadow-lg bg-white border border-secondary-200">
                  <Building2 className="h-4 w-4 text-brand-teal" />
                  <span className="text-sm font-semibold text-brand-navy">
                    Corporate Partnerships
                  </span>
                </span>
              </div>

              {/* Headline */}
              <h1 className="animate-fade-in-up mt-8 font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] opacity-0 [animation-delay:0.2s]">
                <span className="text-brand-navy">Build a More</span>{" "}
                <span className="gradient-text-hero">
                  Inclusive Tech Industry
                </span>
              </h1>

              <p className="animate-fade-in-up mt-8 text-lg sm:text-xl leading-relaxed text-secondary-600 max-w-xl opacity-0 [animation-delay:0.3s]">
                Partner with GWTL to develop your women leaders, access diverse
                talent, and demonstrate your commitment to equity in tech.
              </p>

              {/* CTAs */}
              <div className="animate-fade-in-up mt-10 flex flex-col sm:flex-row gap-4 opacity-0 [animation-delay:0.4s]">
                <Link href="/contact">
                  <button className="w-full sm:w-auto group h-16 px-10 text-lg rounded-2xl font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center justify-center bg-brand-teal text-white">
                    Schedule a Call
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="#services">
                  <button className="w-full sm:w-auto h-16 px-10 text-lg rounded-2xl font-bold border-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg inline-flex items-center justify-center border-brand-navy text-brand-navy bg-transparent">
                    Explore Services
                  </button>
                </Link>
              </div>

              {/* Trust logos */}
              <div className="animate-fade-in-up mt-14 pt-10 border-t border-secondary-200 opacity-0 [animation-delay:0.5s]">
                <p className="text-sm font-medium mb-5 uppercase tracking-wider text-secondary-500">
                  Trusted by leading companies
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  {partnerLogos.map((company) => (
                    <span
                      key={company}
                      className="text-lg font-semibold text-secondary-400 hover:text-secondary-600 transition-colors cursor-default"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual side */}
            <div className="relative animate-fade-in-scale opacity-0 [animation-delay:0.3s]">
              {/* Main card */}
              <div className="relative bg-white rounded-5xl shadow-elegant-lg p-8 lg:p-10 border border-secondary-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-12 w-12 rounded-2xl bg-linear-to-br from-brand-teal to-brand-teal-dark flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-navy">
                    Why Companies Partner With Us
                  </h3>
                </div>

                <ul className="space-y-4">
                  {partnerBenefits.map((item, idx) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 p-4 rounded-xl bg-secondary-50/50 hover:bg-primary-50 transition-colors group"
                    >
                      <div className="h-8 w-8 rounded-full bg-linear-to-br from-brand-teal to-brand-teal-dark flex items-center justify-center shrink-0">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-secondary-700 font-medium group-hover:text-brand-navy transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Stats row */}
                <div className="mt-8 pt-8 border-t border-secondary-100 grid grid-cols-3 gap-4">
                  {[
                    { value: "5K+", label: "Leaders" },
                    { value: "10+", label: "Countries" },
                    { value: "9", label: "Years" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-display text-2xl lg:text-3xl font-bold text-brand-teal">
                        {stat.value}
                      </div>
                      <div className="text-sm text-secondary-500">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-8 -left-8 lg:-left-16 bg-brand-navy rounded-2xl shadow-xl p-6 max-w-[240px] animate-float [animation-delay:1s]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-brand-teal flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-bold text-white">Impact Report</span>
                </div>
                <p className="text-sm text-secondary-300">
                  85% of partner companies saw improved retention of women in
                  leadership roles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative py-24 lg:py-36 bg-white overflow-hidden"
      >
        {/* Top divider */}
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-secondary-200 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6 bg-primary-50 text-brand-teal">
              What We Offer
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal">
              Our Services
            </h2>
            <p className="mt-6 text-lg lg:text-xl leading-relaxed text-secondary-600">
              Comprehensive solutions to advance women&apos;s leadership in your
              organization
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.link}
                className="group animate-fade-in-up opacity-0"
                style={{ animationDelay: service.delay }}
              >
                <div className="relative h-full bg-white rounded-3xl p-8 lg:p-10 border border-secondary-100 shadow-elegant transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant-lg overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary-50/0 to-primary-50/0 group-hover:from-primary-50/50 group-hover:to-transparent transition-all duration-500" />

                  {/* Decorative corner */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <div
                      className={`h-16 w-16 rounded-2xl bg-linear-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-2xl font-bold text-charcoal group-hover:text-brand-teal transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-secondary-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Arrow */}
                    <div className="mt-6 flex items-center text-brand-teal font-semibold">
                      <span className="mr-2">Learn more</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <ForCompanies />

      {/* Testimonials Section */}
      <section className="relative py-24 lg:py-36 bg-secondary-50 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-pattern-grid-teal opacity-[0.02]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-teal opacity-20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6 bg-white text-brand-teal shadow-sm">
              <Quote className="h-4 w-4" />
              Partner Testimonials
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal">
              What Partners Say
            </h2>
          </div>

          {/* Testimonials */}
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.author}
                className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover:-translate-y-2"
              >
                {/* Quote icon */}
                <div className="absolute -top-5 left-10 h-10 w-10 rounded-xl bg-linear-to-br from-brand-teal to-brand-teal-dark flex items-center justify-center shadow-lg">
                  <Quote className="h-5 w-5 text-white" />
                </div>

                {/* Content */}
                <div className="pt-4">
                  <p className="text-xl lg:text-2xl leading-relaxed text-secondary-700 font-display">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  {/* Author */}
                  <div className="mt-8 flex items-center gap-4 pt-6 border-t border-secondary-100">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-primary-100">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-charcoal">
                        {testimonial.author}
                      </p>
                      <p className="text-secondary-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-36 bg-brand-navy overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-pattern-grid opacity-[0.03]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-teal-cta opacity-30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-radial-violet opacity-20 blur-3xl" />

        {/* Content */}
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="h-4 w-4 text-brand-teal-light" />
            <span className="text-sm font-semibold text-white">
              Start Your Partnership
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text-cta">
            Ready to Make an Impact?
          </h2>

          <p className="mt-6 text-lg lg:text-xl text-secondary-300 max-w-2xl mx-auto">
            Let&apos;s discuss how GWTL can support your DEI goals and help you
            build a more inclusive tech organization.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="w-full sm:w-auto group h-16 px-10 text-lg rounded-2xl font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl inline-flex items-center justify-center bg-brand-teal text-white">
                Schedule a Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/contact">
              <button className="w-full sm:w-auto h-16 px-10 text-lg rounded-2xl font-bold transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center justify-center btn-outline-dark">
                Download Partnership Guide
              </button>
            </Link>
          </div>

          {/* Trust element */}
          <div className="mt-14 pt-10 border-t border-white/10">
            <p className="text-sm text-secondary-400 mb-4">
              Joining companies already partnering with GWTL
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {partnerLogos.map((company) => (
                <span
                  key={company}
                  className="text-lg font-semibold text-secondary-500"
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
