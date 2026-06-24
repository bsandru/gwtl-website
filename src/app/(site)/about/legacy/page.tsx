import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Handshake, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Legacy",
  description:
    "The human history behind GWTL: programs, mentoring cohorts, leadership events, roundtables, and the evolution toward GWTL 2.0.",
};

const milestones = [
  {
    year: "2018",
    title: "Code Diversity",
    body:
      "GWTL connected students with technology companies, creating early exposure to career pathways in tech. The program involved 15 students and 6 tech companies over two months.",
  },
  {
    year: "2019",
    title: "StartITup",
    body:
      "A six-month initiative supporting women-led and early-stage entrepreneurship, involving 14 advisors and 7 startups.",
  },
  {
    year: "2020-2021",
    title: "Mentoring cohorts",
    body:
      "GWTL developed mentoring programs for women in technology, including the Elite and Professional Mentoring Program, focused on leadership confidence, career development, and community support.",
  },
  {
    year: "2023",
    title: "Top Tech Mentoring and leadership events",
    body:
      "GWTL expanded the Top Tech Mentoring Program, reached more than 50 mentors and more than 50 mentees, hosted Bucharest conversations on cybersecurity and AI, launched courses, and participated in the Reykjavik Global Forum.",
  },
  {
    year: "2024",
    title: "Roundtables, global stages, and GWTL Rise",
    body:
      "GWTL convened Tech Decision Makers roundtables in Bucharest, joined the Tech Leaders stage at WeAreDevelopers World Congress in Berlin, continued Reykjavik participation, and launched GWTL Rise, the platform foundation that later evolved into GWTL Raise.",
  },
  {
    year: "2025",
    title: "Toward GWTL 2.0",
    body:
      "The work expanded into a broader ecosystem model: roundtables, mentoring, conference participation, recognition, advocacy, C-Tech meetings, and preparation for a sharper accountability-led strategy.",
  },
];

const pillars = [
  {
    icon: Users,
    title: "Community",
    body: "Years of mentors, mentees, founders, executives, students, and women tech leaders showing up for one another.",
  },
  {
    icon: Handshake,
    title: "Access",
    body: "Panels, roundtables, and programs designed to move women closer to decision-makers and opportunity.",
  },
  {
    icon: Calendar,
    title: "Continuity",
    body: "A history of programs and events that built the trust GWTL now carries into its next chapter.",
  },
];

export default function LegacyPage() {
  return (
    <div className="pt-20 overflow-hidden">
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-secondary-50 via-white to-primary-50" />
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-30 animate-float bg-radial-teal" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up inline-flex items-center gap-3 px-5 py-2.5 rounded-full shadow-lg mb-8 glass-badge opacity-0 stagger-1">
              <Sparkles className="h-4 w-4 text-primary-500" />
              <span className="text-sm font-medium text-secondary-800">
                Our Legacy
              </span>
            </div>

            <h1 className="animate-fade-in-up font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] stagger-2 opacity-0">
              <span className="text-secondary-800">Built by Women Leaders.</span>
              <br />
              <span className="relative inline-block gradient-text-hero">
                Amplified by AI.
              </span>
            </h1>

            <p className="animate-fade-in-up mt-8 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-secondary-600 stagger-3 opacity-0">
              Before GWTL became AI-native, it was human-native: built through
              years of programs, mentoring cohorts, leadership panels,
              roundtables, courses, advocacy conversations, and international
              conference moments.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
              AI is not the mission.{" "}
              <span className="gradient-text">People are.</span>
            </h2>
            <p className="mt-6 text-lg text-secondary-600 leading-relaxed">
              GWTL began as a community of women in technology who believed
              leadership does not happen by inspiration alone. It happens
              through access, trust, visibility, sponsorship, and the courage to
              bring business, academia, policy, and technology leaders into the
              same room.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="premium-card p-8">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-linear-to-br from-brand-teal to-brand-teal-dark mb-6">
                  <pillar.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-secondary-800 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6 bg-brand-teal/20 text-brand-teal-light">
              <Calendar className="h-4 w-4" />
              Milestones
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
              From Community to{" "}
              <span className="text-brand-teal-light">Global Leadership Movement</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {milestones.map((item) => (
              <div
                key={`${item.year}-${item.title}`}
                className="rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 hover:border-brand-teal/30 transition-all duration-300"
              >
                <p className="text-brand-teal-light font-display text-3xl font-bold mb-4">
                  {item.year}
                </p>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
            What the years taught us
          </h2>
          <p className="mt-6 text-lg text-secondary-600 leading-relaxed tracking-tight">
            Women in technology do not only need inspiration. They need access
            to rooms where decisions are made. They need sponsors who are
            willing to use their influence. They need visibility that leads to
            opportunity. They need companies and institutions to be accountable
            for the commitments they make.
          </p>
          <p className="mt-6 text-xl font-semibold text-brand-navy">
            That learning shaped GWTL 2.0.
          </p>
          <div className="mt-10">
            <Link href="/programs">
              <Button size="xlg" className="group">
                Explore the Current Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
