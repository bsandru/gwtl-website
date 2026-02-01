import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, Sparkles, Crown, Zap } from "lucide-react";

const benefits = [
  "Access to a curated network of 10,000+ senior women tech leaders",
  "DEI reporting and impact metrics for your organization",
  "Co-branded events and visibility at global forums",
  "Priority access to our speaker bureau for your conferences",
  "Sponsored mentee slots in our leadership programs",
  "Talent pipeline for diverse leadership hiring",
];

const tiers = [
  {
    name: "Partner",
    price: "€5,000",
    period: "/year",
    description: "Perfect for companies starting their DEI journey",
    icon: Zap,
    features: [
      "5 employee seats in network",
      "Quarterly DEI report",
      "Logo on website",
      "Newsletter mention",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "€10,000",
    period: "/year",
    description: "For companies committed to women's leadership",
    icon: Sparkles,
    features: [
      "15 employee seats in network",
      "Monthly DEI report",
      "Co-branded event (1/year)",
      "Speaker bureau access",
      "2 sponsored mentee slots",
      "Priority job posting",
    ],
    popular: true,
  },
  {
    name: "Strategic",
    price: "€25,000",
    period: "/year",
    description: "Full partnership with maximum impact",
    icon: Crown,
    features: [
      "Unlimited employee seats",
      "Custom DEI dashboard",
      "Co-branded events (4/year)",
      "Advisory board seat",
      "10 sponsored mentee slots",
      "Executive roundtable access",
      "Davos presence opportunity",
    ],
    popular: false,
  },
];

export function ForCompanies() {
  return (
    <section className="relative bg-white py-24 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-secondary-200 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold mb-6 bg-primary-50 text-brand-teal">
            <Building2Icon className="h-4 w-4" />
            For Companies
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal">
            Partner With Us
          </h2>
          <p className="mt-6 text-lg lg:text-xl leading-relaxed text-secondary-600">
            Join leading organizations in advancing women's leadership in
            technology. Demonstrate commitment, access talent, and make an impact.
          </p>
        </div>

        {/* Benefits Card */}
        <div className="rounded-3xl p-8 lg:p-12 mb-20 bg-white shadow-elegant border border-secondary-100">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Image side */}
            <div className="relative h-80 lg:h-full min-h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Business team collaboration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-navy/90 via-brand-navy/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="font-display text-2xl font-bold mb-2 text-white">
                  Why Companies Partner With GWTL
                </h4>
                <p className="text-sm text-white/80">
                  Unlock the power of diverse leadership
                </p>
              </div>
            </div>

            {/* Benefits list */}
            <div>
              <div className="grid gap-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-4 p-4 rounded-xl transition-colors bg-secondary-50"
                  >
                    <div className="h-8 w-8 rounded-full flex items-center justify-center shrink-0 bg-linear-to-br from-brand-teal to-brand-teal-dark">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-charcoal">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => {
            return (
              <div
                key={tier.name}
                className={`relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 animate-fade-in-up bg-white shadow-elegant border border-secondary-100 ${
                  tier.popular ? "ring-2 ring-brand-teal" : ""
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-brand-teal via-brand-teal-light to-brand-teal" />
                )}

                <div className="p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`h-14 w-14 rounded-2xl flex items-center justify-center ${
                        tier.popular ? "bg-brand-teal" : "bg-brand-navy"
                      }`}
                    >
                      <tier.icon className="h-7 w-7 text-white" />
                    </div>
                    {tier.popular && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-50 text-brand-teal">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl font-bold text-charcoal">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-sm text-secondary-500">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-5xl font-bold text-charcoal">
                      {tier.price}
                    </span>
                    <span className="text-secondary-500">{tier.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="mt-8 space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="h-5 w-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-primary-50">
                          <Check className="h-3 w-3 text-brand-teal" />
                        </div>
                        <span className="text-secondary-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href="/for-companies/membership" className="block mt-10">
                    <button
                      className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 hover:-translate-y-0.5 text-white ${
                        tier.popular ? "bg-brand-teal" : "bg-brand-navy"
                      }`}
                    >
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-lg mb-4 text-secondary-600">
            Need a custom partnership? Let's talk.
          </p>
          <Link href="/contact">
            <button className="inline-flex items-center text-lg font-bold transition-colors text-brand-teal hover:text-brand-teal-dark">
              Schedule a Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Building2Icon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
      <path d="M10 6h4" />
      <path d="M10 10h4" />
      <path d="M10 14h4" />
      <path d="M10 18h4" />
    </svg>
  );
}
