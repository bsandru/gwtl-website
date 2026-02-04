import { Metadata } from "next";
import Link from "next/link";
import { Linkedin, Twitter, Users, Sparkles, ArrowRight, Heart } from "lucide-react";
import { getAllTeamMembers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the team behind Global Women TechLeaders.",
};

// Color palettes for team member cards
const cardGradients = [
  "from-brand-teal to-emerald-600",
  "from-brand-navy to-indigo-600",
  "from-rose-500 to-pink-600",
  "from-amber-500 to-orange-600",
  "from-violet-500 to-purple-600",
  "from-cyan-500 to-blue-600",
];

export default function TeamPage() {
  const team = getAllTeamMembers();

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center py-20 lg:py-28">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50" />
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl bg-gradient-to-br from-brand-teal to-brand-teal-light" />
        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full opacity-20 blur-3xl bg-gradient-to-br from-brand-navy to-brand-navy-light" />
        <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] rounded-full opacity-10 blur-2xl bg-gradient-to-br from-violet-500 to-purple-600" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 bg-brand-teal/10 text-brand-teal border border-brand-teal/20 animate-fade-in-up opacity-0 [animation-delay:0.1s]">
              <Users className="h-4 w-4" />
              Meet Our Team
            </div>

            {/* Decorative line */}
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
                    <linearGradient id="team-underline" x1="0" y1="0" x2="300" y2="0">
                      <stop stopColor="#00A3A3" />
                      <stop offset="1" stopColor="#1C2541" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="mt-8 text-xl lg:text-2xl leading-relaxed text-secondary-600 max-w-3xl animate-fade-in-up opacity-0 [animation-delay:0.3s]">
              Meet the passionate individuals driving our mission to empower women in technology leadership across the globe.
            </p>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap gap-8 animate-fade-in-up opacity-0 [animation-delay:0.4s]">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-brand-teal to-brand-teal-dark">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-brand-navy">{team.length}+</p>
                  <p className="text-sm text-secondary-500">Team Members</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-brand-navy to-brand-navy-light">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-brand-navy">50+</p>
                  <p className="text-sm text-secondary-500">Countries Reached</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid - Creative cards */}
      <section className="relative py-20 lg:py-28">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/20 to-white" />
        
        {/* Floating decorative elements */}
        <div className="absolute top-40 -left-20 w-[300px] h-[300px] rounded-full opacity-15 blur-3xl bg-gradient-to-br from-brand-teal to-brand-teal-light animate-float" />
        <div className="absolute bottom-40 -right-20 w-[250px] h-[250px] rounded-full opacity-10 blur-3xl bg-gradient-to-br from-brand-navy to-brand-navy-light animate-float [animation-delay:2s]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-navy">
              Leadership & <span className="gradient-text">Core Team</span>
            </h2>
            <p className="mt-4 text-secondary-500 max-w-2xl mx-auto">
              Dedicated professionals working together to create meaningful impact
            </p>
          </div>

          {/* Team grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {team.map((member, index) => {
              const gradientClass = cardGradients[index % cardGradients.length];
              
              return (
                <Link
                  key={member.slug}
                  href={`/team/${member.slug}`}
                  className="group animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <div className="relative h-full">
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-40 blur-xl transition-all duration-700`} />
                    
                    <div className="relative h-full bg-white rounded-[2rem] overflow-hidden shadow-elegant group-hover:shadow-elegant-lg transition-all duration-500 group-hover:-translate-y-2 border border-gray-100/50">
                      {/* Avatar section with gradient */}
                      <div className={`relative aspect-[4/3] bg-gradient-to-br ${gradientClass} overflow-hidden`}>
                        {/* Decorative pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                            <circle cx="80" cy="20" r="30" fill="white" fillOpacity="0.3" />
                            <circle cx="20" cy="80" r="20" fill="white" fillOpacity="0.2" />
                          </svg>
                        </div>
                        
                        {/* Initials */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative">
                            <span className="text-7xl font-display font-bold text-white/90 group-hover:scale-110 transition-transform duration-500 inline-block">
                              {member.name.split(" ").map((n) => n[0]).join("")}
                            </span>
                          </div>
                        </div>

                        {/* Bottom gradient overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                      
                      {/* Info */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-teal transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className={`mt-1 text-sm font-semibold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}>
                          {member.role}
                        </p>
                        <p className="mt-3 text-secondary-500 text-sm leading-relaxed line-clamp-2">
                          {member.bio}
                        </p>
                        
                        {/* Footer with social & arrow */}
                        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                          {/* Social Links */}
                          <div className="flex gap-2">
                            {member.linkedin && (
                              <span className="h-8 w-8 rounded-lg flex items-center justify-center bg-gray-50 text-secondary-400 group-hover:bg-brand-teal/10 group-hover:text-brand-teal transition-all duration-300">
                                <Linkedin className="h-4 w-4" />
                              </span>
                            )}
                            {member.twitter && (
                              <span className="h-8 w-8 rounded-lg flex items-center justify-center bg-gray-50 text-secondary-400 group-hover:bg-brand-teal/10 group-hover:text-brand-teal transition-all duration-300">
                                <Twitter className="h-4 w-4" />
                              </span>
                            )}
                          </div>
                          
                          {/* View profile arrow */}
                          <span className="text-sm font-medium text-secondary-400 group-hover:text-brand-teal transition-colors duration-300 flex items-center gap-1">
                            View
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Empty State */}
          {team.length === 0 && (
            <div className="text-center py-20 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-[2rem] border border-gray-100">
              <div className="h-16 w-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-brand-teal to-brand-teal-dark">
                <Users className="h-8 w-8 text-white" />
              </div>
              <p className="text-xl font-semibold text-brand-navy">Team information coming soon!</p>
              <p className="mt-2 text-secondary-500">We&apos;re updating our team profiles.</p>
            </div>
          )}
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-dark to-brand-navy" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl bg-brand-teal" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl bg-brand-teal-light" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%221%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 bg-brand-teal/20 text-brand-teal-light">
            <Sparkles className="h-4 w-4" />
            Join the Movement
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight">
            Want to Make an Impact?
          </h2>
          
          <p className="mt-6 text-xl text-white/70 max-w-2xl mx-auto">
            We&apos;re always looking for passionate individuals to help advance our mission of empowering women in tech leadership.
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

          {/* Decorative bottom element */}
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
