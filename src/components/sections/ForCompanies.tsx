import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, Sparkles, Crown, Zap, Building2 } from "lucide-react";

const benefits = [
  "Access to a curated network of 5,000+ senior women tech leaders",
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
    color: "navy",
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
    color: "teal",
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
    color: "navy",
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
    <section className="relative bg-white py-28 lg:py-40 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] -translate-y-1/2 translate-x-1/4 rounded-full bg-linear-to-brl from-brand-teal/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] translate-y-1/2 -translate-x-1/4 rounded-full bg-linear-to-tr from-brand-navy/5 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy/5 mb-6 animate-fade-in-up opacity-0 [animation-delay:0.1s]">
            <Building2 className="h-4 w-4 text-brand-navy" />
            <span className="text-sm font-semibold text-brand-navy">For Companies</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.1] animate-fade-in-up opacity-0 [animation-delay:0.2s]">
            Partner{" "}
            <span className="gradient-text-teal">With Us</span>
          </h2>
          <p className="mt-6 text-lg text-secondary-600 leading-relaxed animate-fade-in-up opacity-0 [animation-delay:0.3s]">
            Join leading organizations in advancing women&apos;s leadership in
            technology. Demonstrate commitment, access talent, and make an impact.
          </p>
        </div>

        {/* Benefits showcase */}
        <div className="rounded-5xl overflow-hidden mb-20 animate-fade-in-up opacity-0 [animation-delay:0.4s]">
          <div className="grid lg:grid-cols-2">
            {/* Image side */}
            <div className="relative h-80 lg:h-auto min-h-[400px]">
              <Image
                src="/images/partners.jpg"
                alt="Business team collaboration"
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-brand-navy/90 via-brand-navy/70 to-brand-navy/50 lg:bg-linear-to-t lg:from-brand-navy/90 lg:via-brand-navy/50 lg:to-transparent" />

              {/* Content on image */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">
                  Why Companies Partner With GWTL
                </h3>
                <p className="text-white/70 max-w-md">
                  Unlock the power of diverse leadership and make a measurable impact on tech inclusion.
                </p>
              </div>
            </div>

            {/* Benefits list */}
            <div className="bg-secondary-50 p-8 lg:p-10">
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div
                    key={benefit}
                    className="group flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="h-8 w-8 rounded-full flex items-center justify-center shrink-0 bg-linear-to-br from-brand-teal to-brand-teal-light shadow-md shadow-brand-teal/20">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium text-brand-navy group-hover:text-brand-teal transition-colors">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing tiers */}
        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => {
            const isTeal = tier.color === "teal";

            return (
              <div
                key={tier.name}
                className={`group relative rounded-4xl overflow-hidden transition-all duration-500 hover:-translate-y-3 animate-fade-in-up opacity-0 ${tier.popular
                  ? "lg:-mt-4 lg:mb-4"
                  : ""
                  }`}
                style={{ animationDelay: `${0.5 + idx * 0.1}s` }}
              >
                {/* Card background */}
                <div
                  className={`absolute inset-0 ${isTeal
                    ? "bg-linear-to-br from-brand-teal via-brand-teal to-brand-teal-dark"
                    : "bg-white border border-secondary-200"
                    }`}
                />

                {/* Popular badge glow */}
                {tier.popular && (
                  <div className="absolute -inset-[1px] rounded-4xl bg-linear-to-r from-brand-teal via-brand-teal-light to-brand-teal blur-sm opacity-50" />
                )}

                <div className={`relative p-8 lg:p-10 ${isTeal ? "" : ""}`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`h-14 w-14 rounded-2xl flex items-center justify-center ${isTeal
                        ? "bg-white/20 backdrop-blur-sm"
                        : "bg-brand-navy"
                        }`}
                    >
                      <tier.icon
                        className={`h-7 w-7 ${isTeal ? "text-white" : "text-white"}`}
                      />
                    </div>
                    {tier.popular && (
                      <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white text-brand-teal">
                        Most Popular
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-display text-2xl font-bold mb-2 ${isTeal ? "text-white" : "text-brand-navy"
                      }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${isTeal ? "text-white/70" : "text-secondary-500"
                      }`}
                  >
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-8">
                    <span
                      className={`font-display text-5xl font-bold ${isTeal ? "text-white" : "text-brand-navy"
                        }`}
                    >
                      {tier.price}
                    </span>
                    <span className={isTeal ? "text-white/60" : "text-secondary-400"}>
                      {tier.period}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div
                          className={`h-5 w-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isTeal ? "bg-white/20" : "bg-brand-teal/10"
                            }`}
                        >
                          <Check
                            className={`h-3 w-3 ${isTeal ? "text-white" : "text-brand-teal"
                              }`}
                          />
                        </div>
                        <span
                          className={isTeal ? "text-white/80" : "text-secondary-600"}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link href="/for-companies/membership">
                    <button
                      className={`magnetic-btn w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 ${isTeal
                        ? "bg-white text-brand-teal hover:bg-white/90"
                        : "bg-brand-navy text-white hover:bg-brand-teal"
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

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-in-up opacity-0 [animation-delay:0.9s]">
          <p className="text-lg text-secondary-600 mb-4">
            Need a custom partnership? Let&apos;s talk.
          </p>
          <Link href="/contact">
            <button className="group inline-flex items-center gap-2 text-lg font-bold text-brand-teal hover:text-brand-teal-dark transition-colors">
              <span>Schedule a Call</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
