import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Target, Heart, Users, Lightbulb, Globe, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Global Women TechLeaders - our mission, values, and the team driving change in tech leadership worldwide.",
};

const values = [
  {
    icon: Heart,
    title: "Diversity & Inclusion",
    description:
      "We believe a diverse and inclusive tech industry is essential for driving innovation and creativity.",
  },
  {
    icon: Lightbulb,
    title: "Creativity & Innovation",
    description:
      "We value creativity and believe these qualities are essential for driving progress and solving complex problems.",
  },
  {
    icon: Users,
    title: "Collaboration & Integrity",
    description:
      "We believe global collaboration is key to driving progress and hold ourselves to high ethical standards.",
  },
  {
    icon: Award,
    title: "Empowerment",
    description:
      "We aim to empower women in tech by providing the tools and resources they need to succeed.",
  },
];

const timeline = [
  {
    year: "2017",
    title: "Founded as Global Women in Tech",
    description: "Started as a grassroots initiative in Romania",
  },
  {
    year: "2020",
    title: "International Expansion",
    description: "Grew to 25+ countries with 5,000+ members",
  },
  {
    year: "2023",
    title: "Rebranded to GWTL",
    description: "Evolved focus to tech leadership development",
  },
  {
    year: "2024",
    title: "Erasmus+ Partnership",
    description: "Launched Girls Who Lead initiative",
  },
  {
    year: "2026",
    title: "Davos Debut",
    description: "Co-organized Davos Innovation Week",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 gradient-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Empowering Women Tech Leaders{" "}
              <span className="gradient-text">Since 2017</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Global Women TechLeaders (GWTL) is a non-profit organization that
              promotes continuous learning, growth, and international knowledge
              sharing through global partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                <Target className="h-4 w-4" />
                Our Mission
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Supporting Women&apos;s Career Development in Tech
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our mission is to support the career development of women in the
                tech industry through programs, collaborations, resources, and
                opportunities of growth—across borders and cultures.
              </p>
              <p className="mt-4 text-gray-600">
                We are &apos;global&apos; as we facilitate international business exchange
                through programs, networking, and business opportunities that
                bring innovative educational and professional development
                initiatives to women in the tech ecosystem worldwide.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <Globe className="h-32 w-32 text-primary-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
            <p className="mt-4 text-lg text-gray-600">
              From a local initiative to a global movement
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                      <span className="text-sm font-bold text-primary-600">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mt-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary-600 border-4 border-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Be Part of Our Story
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join thousands of women leaders shaping the future of technology
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-leaders/join">
              <Button size="lg">Join the Network</Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
