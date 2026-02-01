import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Users, GraduationCap, Megaphone, Building2 } from "lucide-react";

const features = [
  {
    title: "Global Network",
    description:
      "Connect with senior women tech leaders across 50+ countries. Build meaningful relationships that accelerate your career.",
    icon: Users,
    color: "primary",
  },
  {
    title: "Mentoring & Coaching",
    description:
      "Access curated mentorship from C-level executives and industry pioneers. Personalized guidance for your leadership journey.",
    icon: GraduationCap,
    color: "secondary",
  },
  {
    title: "Advocacy & Visibility",
    description:
      "Amplify your voice at global forums like Davos and WeAreDevelopers. Shape policy and inspire the next generation.",
    icon: Megaphone,
    color: "accent",
  },
  {
    title: "Corporate Programs",
    description:
      "Partner with us to develop your women leaders, access top talent, and demonstrate DEI commitment.",
    icon: Building2,
    color: "primary",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary-100",
    text: "text-primary-600",
    border: "border-primary-200",
  },
  secondary: {
    bg: "bg-secondary-100",
    text: "text-secondary-600",
    border: "border-secondary-200",
  },
  accent: {
    bg: "bg-accent-100",
    text: "text-accent-600",
    border: "border-accent-200",
  },
};

export function WhatWeDo() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We support the career development of women in tech through programs,
            collaborations, resources, and opportunities—across borders and cultures.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            return (
              <Card
                key={feature.title}
                className="group hover:border-primary-200 transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div
                    className={`h-14 w-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className={`h-7 w-7 ${colors.text}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
