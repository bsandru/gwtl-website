import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Linkedin, Twitter, Globe, Building2 } from "lucide-react";
import { getAllTeamMembers, getTeamMember } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const team = getAllTeamMembers();
  return team.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const member = await getTeamMember(slug);

  if (!member) {
    return {
      title: "Team Member Not Found",
    };
  }

  return {
    title: `${member.name} - ${member.role}`,
    description: member.bio,
  };
}

export default async function TeamMemberPage({ params }: Props) {
  const { slug } = await params;
  const member = await getTeamMember(slug);

  if (!member) {
    notFound();
  }

  return (
    <div className="pt-20">
      {/* Back Link */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-brand-teal transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Team
          </Link>
        </div>
      </div>

      {/* Member Header */}
      <section className="py-12 bg-linear-to-br from-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Photo */}
            <div className="w-44 h-44 rounded-2xl overflow-hidden flex-shrink-0 shadow-elegant border border-gray-100">
              {member.image ? (
                <div className="relative w-full h-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="176px"
                  />
                </div>
              ) : (
                <div className="w-full h-full bg-linear-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <span className="text-5xl font-bold text-brand-teal/40">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-navy">
                {member.name}
              </h1>
              <p className="mt-2 text-xl text-brand-teal font-semibold">
                {member.role}
              </p>

              <div className="mt-3 flex flex-wrap gap-3">
                {member.company && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-secondary-100 text-sm font-medium text-secondary-700">
                    <Building2 className="h-3.5 w-3.5" />
                    {member.company}
                  </span>
                )}
                {member.country && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-primary-100 text-sm font-medium text-primary-700">
                    <Globe className="h-3.5 w-3.5" />
                    {member.country}
                  </span>
                )}
              </div>

              <p className="mt-4 text-lg text-secondary-600 leading-relaxed">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="mt-6 flex gap-3">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5]/20 transition-colors text-sm font-medium"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary-100 text-secondary-700 hover:bg-secondary-200 transition-colors text-sm font-medium"
                  >
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Content */}
      {member.content && member.content.trim() !== "" && (
        <section className="py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <article
              className="prose prose-lg max-w-none prose-headings:text-brand-navy prose-headings:font-display prose-p:text-secondary-600 prose-a:text-brand-teal prose-strong:text-brand-navy prose-ul:text-secondary-600 prose-li:text-secondary-600 prose-blockquote:text-secondary-600 prose-blockquote:border-brand-teal"
              dangerouslySetInnerHTML={{ __html: member.content }}
            />
          </div>
        </section>
      )}

      {/* Back to Team */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-teal text-white rounded-xl font-medium hover:bg-brand-teal-dark transition-colors"
          >
            View All Team Members
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}
