import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Globe, Award, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore GWTL programs: Leadership Cohorts, Mentoring, Erasmus+ initiatives, and Executive Roundtables.",
};

const programs = [
  {
    title: "Leadership Cohorts",
    description:
      "Intensive 12-week programs for women leaders ready to accelerate their careers. Small groups, curated content, peer networking.",
    icon: GraduationCap,
    features: [
      "12-week structured curriculum",
      "Small cohorts of 15-20 leaders",
      "Executive coaching sessions",
      "Peer accountability groups",
      "Certificate of completion",
    ],
    cta: "Apply Now",
    link: "/programs/cohorts",
    status: "Applications Open",
  },
  {
    title: "Top Tech Mentoring",
    description:
      "Connect with senior tech leaders for personalized 1:1 mentorship. AI-driven matching based on goals and expertise.",
    icon: Users,
    features: [
      "AI-powered mentor matching",
      "Flexible scheduling",
      "Progress tracking tools",
      "Both free and premium tiers",
      "Global mentor network",
    ],
    cta: "Find a Mentor",
    link: "/programs/mentoring",
    status: "Always Open",
  },
  {
    title: "Girls Who Lead (Erasmus+)",
    description:
      "A 24-month EU initiative empowering girls aged 16-18 with digital, entrepreneurial, and leadership skills.",
    icon: Globe,
    features: [
      "EU-funded program",
      "Focus on underserved communities",
      "Digital skills training",
      "Entrepreneurship workshops",
      "International exchange",
    ],
    cta: "Learn More",
    link: "/programs/erasmus",
    status: "In Progress",
  },
  {
    title: "Executive Roundtables",
    description:
      "Exclusive invitation-only sessions for C-level women leaders. Discuss challenges, share insights, build connections.",
    icon: Award,
    features: [
      "Invitation-only format",
      "C-level participants",
      "Chatham House rules",
      "Curated topics",
      "Global and regional editions",
    ],
    cta: "Request Invite",
    link: "/programs/roundtables",
    status: "By Invitation",
  },
];

export default function ProgramsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 lg:py-32 gradient-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Programs That{" "}
              <span className="gradient-text">Transform Careers</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              From mentorship to executive cohorts, our programs are designed to
              accelerate your leadership journey at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center">
                      <program.icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-secondary-100 text-secondary-700 text-sm font-medium">
                      {program.status}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {program.title}
                  </h2>
                  <p className="mt-4 text-gray-600">{program.description}</p>
                  <ul className="mt-6 space-y-3">
                    {program.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link href={program.link}>
                      <Button className="group">
                        {program.cta}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                    <program.icon className="h-24 w-24 text-primary-300" />
                  </div>
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
            Not Sure Which Program is Right for You?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Book a call with our team to discuss your goals and find the perfect fit.
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
