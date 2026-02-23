import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Users, Sparkles, ArrowRight, Globe, Crown, Star, ExternalLink } from "lucide-react";
import { getAllTeamMembers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the team behind Global Women TechLeaders — leadership board and advisory board members driving our mission forward.",
};

export default function TeamPage() {
  const team = getAllTeamMembers();
  const leadership = team.filter((m) => m.category === "leadership");
  const advisory = team.filter((m) => m.category === "advisory");

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center py-20 lg:py-28">
        <div className="absolute inset-0 bg-linear-to-br from-primary-50 via-white to-secondary-50" />
        <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl bg-linear-to-br from-brand-teal to-brand-teal-light" />
        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full opacity-20 blur-3xl bg-linear-to-br from-brand-navy to-brand-navy-light" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 bg-brand-teal/10 text-brand-teal border border-brand-teal/20 animate-fade-in-up opacity-0 [animation-delay:0.1s]">
              <Users className="h-4 w-4" />
              Meet Our Team
            </div>

            <div className="decorative-line mb-8 animate-fade-in-up opacity-0 [animation-delay:0.15s]" />

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] animate-fade-in-up opacity-0 [animation-delay:0.2s]">
              <span className="text-brand-navy">The People </span>
              <span className="relative">
                <span className="gradient-text">Behind GWTL</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 8C75 2 225 2 298 8"
                    stroke="url(#team-underline)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="team-underline"
                      x1="0"
                      y1="0"
                      x2="300"
                      y2="0"
                    >
                      <stop stopColor="#00A3A3" />
                      <stop offset="1" stopColor="#1C2541" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="mt-8 text-xl lg:text-2xl leading-relaxed text-secondary-600 max-w-3xl animate-fade-in-up opacity-0 [animation-delay:0.3s]">
              Our team can help you at any stage of your growth. Meet the
              passionate individuals driving our mission to empower women in
              technology leadership across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Board */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-linear-to-br from-white via-primary-50/20 to-white" />
        <div className="absolute top-40 -left-20 w-[300px] h-[300px] rounded-full opacity-15 blur-3xl bg-linear-to-br from-brand-teal to-brand-teal-light animate-float" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
              <Crown className="h-4 w-4" />
              Leadership Board
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-brand-navy">
              Leadership & <span className="gradient-text">Core Team</span>
            </h2>
            <p className="mt-4 text-lg text-secondary-500 max-w-3xl mx-auto">
              Our Leadership Board counts savvy, proactive and dynamic
              professionals with studies or work experience in tech, that
              strongly contribute to GWTL&apos;s growth and success.
            </p>
            <div className="mt-6 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-brand-teal to-brand-teal-light" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <a
                key={member.slug}
                href={member.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group animate-fade-in-up opacity-0"
                style={{ animationDelay: `${0.1 + index * 0.08}s` }}
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-brand-teal to-brand-navy opacity-0 group-hover:opacity-30 blur-xl transition-all duration-700" />

                  <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-elegant group-hover:shadow-elegant-lg transition-all duration-500 group-hover:-translate-y-2 border border-gray-100/50">
                    <div className="relative aspect-[3/3.2] overflow-hidden bg-linear-to-br from-secondary-100 to-primary-100">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-6xl font-display font-bold text-brand-teal/30">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {member.linkedin && (
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                          <span className="h-9 w-9 rounded-xl flex items-center justify-center bg-white/90 backdrop-blur-sm text-[#0077B5] shadow-lg">
                            <Linkedin className="h-4 w-4" />
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-teal transition-colors duration-300 leading-tight flex items-center gap-1.5">
                        {member.name}
                        {member.linkedin && <ExternalLink className="h-3.5 w-3.5 opacity-0 group-hover:opacity-60 transition-opacity" />}
                      </h3>
                      {member.company && (
                        <p className="mt-1 text-xs font-semibold text-brand-teal uppercase tracking-wider">
                          {member.company}
                        </p>
                      )}
                      <p className="mt-1 text-sm text-secondary-500">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-linear-to-br from-white via-secondary-50/40 to-white" />
        <div className="absolute bottom-40 -right-20 w-[250px] h-[250px] rounded-full opacity-10 blur-3xl bg-linear-to-br from-brand-navy to-brand-navy-light animate-float [animation-delay:2s]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-brand-navy/10 text-brand-navy border border-brand-navy/20">
              <Star className="h-4 w-4" />
              Advisory Board
            </div>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-brand-navy">
              Strategic <span className="gradient-text">Advisors</span>
            </h2>
            <p className="mt-4 text-lg text-secondary-500 max-w-3xl mx-auto">
              Our Advisory Board brings together renowned leaders from the
              international and national tech business environment, with
              expertise in technology, entrepreneurship and leadership.
            </p>
            <div className="mt-6 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-brand-navy to-brand-teal" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            {advisory.map((member, index) => (
              <a
                key={member.slug}
                href={member.linkedin || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group animate-fade-in-up opacity-0"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-brand-navy to-brand-teal opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700" />

                  <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-elegant group-hover:shadow-elegant-lg transition-all duration-500 group-hover:-translate-y-1.5 border border-gray-100/50">
                    <div className="relative aspect-[4/4] overflow-hidden bg-linear-to-br from-secondary-50 to-primary-50">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-5xl font-display font-bold text-brand-navy/20">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {member.country && (
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-sm text-xs font-medium text-brand-navy shadow-sm">
                            <Globe className="h-3 w-3 text-brand-teal" />
                            {member.country}
                          </span>
                        </div>
                      )}

                      {member.linkedin && (
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                          <span className="h-8 w-8 rounded-lg flex items-center justify-center bg-white/90 backdrop-blur-sm text-[#0077B5] shadow-lg">
                            <Linkedin className="h-3.5 w-3.5" />
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="text-base font-bold text-brand-navy group-hover:text-brand-teal transition-colors duration-300 leading-tight flex items-center gap-1.5">
                        {member.name}
                        {member.linkedin && <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-60 transition-opacity" />}
                      </h3>
                      {member.company && (
                        <p className="mt-1 text-xs font-semibold text-brand-teal uppercase tracking-wider">
                          {member.company}
                        </p>
                      )}
                      <p className="mt-0.5 text-sm text-secondary-500">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Empty State */}
      {team.length === 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center py-20 bg-linear-to-br from-primary-50 to-secondary-50 rounded-4xl border border-gray-100">
              <div className="h-16 w-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-linear-to-br from-brand-teal to-brand-teal-dark">
                <Users className="h-8 w-8 text-white" />
              </div>
              <p className="text-xl font-semibold text-brand-navy">
                Team information coming soon!
              </p>
              <p className="mt-2 text-secondary-500">
                We&apos;re updating our team profiles.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Join the Team CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-brand-navy via-brand-navy-dark to-brand-navy" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl bg-brand-teal" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-brand-teal-light" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 bg-brand-teal/20 text-brand-teal-light">
            <Sparkles className="h-4 w-4" />
            Join the Movement
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            Want to Make an Impact?
          </h2>

          <p className="mt-6 text-xl text-white/70 max-w-2xl mx-auto">
            We&apos;re always looking for passionate individuals to help advance
            our mission of empowering women in tech leadership.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="group w-full sm:w-auto h-16 px-10 text-lg rounded-2xl font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl inline-flex items-center justify-center bg-brand-teal text-white hover:bg-brand-teal-dark">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="/about">
              <button className="w-full sm:w-auto h-16 px-10 text-lg rounded-2xl font-bold border-2 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 inline-flex items-center justify-center border-white/30 text-white bg-transparent">
                Learn About Us
              </button>
            </Link>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 rounded-full bg-brand-teal/30" />
              <div className="h-2 w-2 rounded-full bg-brand-teal" />
              <div className="h-1 w-12 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
