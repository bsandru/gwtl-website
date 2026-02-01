import { Metadata } from "next";
import { ForCompanies } from "@/components";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Users, TrendingUp, Award, Calendar, Mic } from "lucide-react";

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
  },
  {
    icon: Calendar,
    title: "Sponsored Events",
    description:
      "Co-brand executive roundtables, workshops, and networking events with GWTL.",
    link: "/for-companies/sponsorship",
  },
  {
    icon: Mic,
    title: "Speaker Bureau",
    description:
      "Access our network of 500+ women tech leaders for your conferences and panels.",
    link: "/for-companies/speakers",
  },
  {
    icon: TrendingUp,
    title: "DEI Consulting",
    description:
      "Get strategic guidance on building inclusive tech teams and leadership pipelines.",
    link: "/for-companies/consulting",
  },
];

const testimonials = [
  {
    quote:
      "GWTL has been instrumental in developing our women leaders. The network provides invaluable peer connections and mentorship.",
    author: "Sarah Chen",
    role: "VP of Engineering",
    company: "TechCorp",
  },
  {
    quote:
      "The quality of speakers from GWTL's bureau is exceptional. They bring real expertise and inspire our teams.",
    author: "Maria Rodriguez",
    role: "Head of DEI",
    company: "InnovateTech",
  },
];

export default function ForCompaniesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 gradient-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                For Companies
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                Build a More{" "}
                <span className="gradient-text">Inclusive Tech Industry</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Partner with GWTL to develop your women leaders, access diverse
                talent, and demonstrate your commitment to equity in tech.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg">Schedule a Call</Button>
                </Link>
                <Link href="#services">
                  <Button variant="outline" size="lg">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Why Companies Partner With Us
                </h3>
                <ul className="space-y-3">
                  {[
                    "Access to 10,000+ senior women tech leaders",
                    "Proven DEI impact with measurable results",
                    "Global reach across 50+ countries",
                    "Davos-level credibility and visibility",
                    "Dedicated partnership management",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive solutions to advance women&apos;s leadership in your
              organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.link}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-primary-50 transition-colors"
              >
                <div className="h-14 w-14 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <service.icon className="h-7 w-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-700">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <ForCompanies />

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              What Partners Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <p className="text-lg text-gray-700 italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="mt-6">
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Make an Impact?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Let&apos;s discuss how GWTL can support your DEI goals
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="xl">Schedule a Call</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
