import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

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
    features: [
      "5 employee seats in network",
      "Quarterly DEI report",
      "Logo on website",
      "Newsletter mention",
    ],
  },
  {
    name: "Premium",
    price: "€10,000",
    period: "/year",
    description: "For companies committed to women's leadership",
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
    features: [
      "Unlimited employee seats",
      "Custom DEI dashboard",
      "Co-branded events (4/year)",
      "Advisory board seat",
      "10 sponsored mentee slots",
      "Executive roundtable access",
      "Davos presence opportunity",
    ],
  },
];

export function ForCompanies() {
  return (
    <section className="py-20 lg:py-32 gradient-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            For Companies
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Partner With Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join leading organizations in advancing women&apos;s leadership in
            technology. Demonstrate commitment, access talent, and make an impact.
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-16">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Why Companies Partner With GWTL
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-secondary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-secondary-600" />
                </div>
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
                tier.popular ? "ring-2 ring-primary-500" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{tier.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {tier.price}
                  </span>
                  <span className="text-gray-500">{tier.period}</span>
                </div>
                <ul className="mt-8 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-secondary-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/for-companies/membership" className="block mt-8">
                  <Button
                    variant={tier.popular ? "default" : "outline"}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom partnership? Let&apos;s talk.
          </p>
          <Link href="/contact">
            <Button variant="ghost" className="group">
              Schedule a Call
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
