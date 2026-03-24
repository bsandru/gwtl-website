import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Global Women TechLeaders",
  description:
    "Read the Terms of Service for Global Women TechLeaders — the conditions governing your use of our website, platform, programs, and services.",
};

const sections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "eligibility", title: "2. Eligibility" },
  { id: "changes-to-terms", title: "3. Changes to Terms" },
  { id: "user-accounts", title: "4. User Accounts" },
  { id: "user-content", title: "5. User Content" },
  { id: "fees", title: "6. Fees and Payment" },
  { id: "prohibited", title: "7. Prohibited Conduct" },
  { id: "privacy", title: "8. Privacy and Data Protection" },
  { id: "intellectual-property", title: "9. Intellectual Property" },
  { id: "third-party", title: "10. Third-Party Services" },
  { id: "liability", title: "11. Limitation of Liability" },
  { id: "indemnification", title: "12. Indemnification" },
  { id: "disclaimers", title: "13. Disclaimers" },
  { id: "governing-law", title: "14. Governing Law" },
  { id: "dispute", title: "15. Dispute Resolution &amp; Arbitration" },
  { id: "changes-to-service", title: "16. Changes to Service" },
  { id: "general", title: "17. General" },
  { id: "contact", title: "18. Contact Us" },
];

export default function TermsOfServicePage() {
  return (
    <div className="pt-20 min-h-screen bg-white text-slate-800">
      {/* ── Hero ── */}
      <section className="border-b border-slate-100 bg-linear-to-b from-slate-50/60 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-6 border border-teal-600/25 bg-teal-600/6 text-teal-700 font-mono uppercase tracking-wider">
              Legal
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-brand-navy mb-4 leading-tight">
              Terms of Service
            </h1>
            <p className="text-slate-500 text-sm font-mono">
              Updated on March 1, 2024 · Effective from March 1, 2024
            </p>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            This Terms of Service Agreement (&ldquo;Agreement&rdquo;) is entered into
            between Global Women TechLeaders (&ldquo;GWTL&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a non-profit organization
            incorporated under the laws of Romania, and you, the user
            (&ldquo;User&rdquo;, &ldquo;you&rdquo;, or &ldquo;your&rdquo;) who
            intends to use the services offered by GWTL.
          </p>

          {/* Callout banner */}
          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50/60 px-5 py-4 text-sm text-amber-800 leading-relaxed">
            <strong>Please read carefully.</strong> These Terms limit our liability
            (Section 11) and contain a binding arbitration provision (Section 15)
            that affects your rights. By using our Services you acknowledge and
            agree to these Terms.
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto lg:grid lg:grid-cols-[220px_1fr] lg:gap-16">
          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-4">
                Contents
              </p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-xs text-slate-500 hover:text-teal-700 transition-colors py-1 leading-snug"
                    dangerouslySetInnerHTML={{ __html: s.title }}
                  />
                ))}
              </nav>
              <div className="mt-8 pt-8 border-t border-slate-100">
                <Link
                  href="/privacy"
                  className="block text-xs text-teal-700 hover:underline"
                >
                  Privacy Policy →
                </Link>
              </div>
            </div>
          </aside>

          {/* Content */}
          <article className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-brand-navy prose-a:text-teal-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800">

            {/* ── 1 ── */}
            <section id="acceptance" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                By accessing and using the Global Women TechLeaders (GWTL) website,
                platform, programs, events, and related services (collectively, the
                &ldquo;Service&rdquo;), you agree to be bound by these Terms of
                Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms,
                please do not use our Service.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our Services are diverse — including the Women in Tech Leadership
                Program, Ambassador Program, Strategic Council, sponsored events,
                conferences, newsletters, and the GWTL online platform — and
                additional terms or requirements (including age requirements) may
                apply to specific services. Where additional terms are available,
                they become part of your agreement with us when you use those
                Services.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 2 ── */}
            <section id="eligibility" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                2. Eligibility
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You may only use GWTL Services if:
              </p>
              <ul className="space-y-3 text-slate-600">
                {[
                  "You are at least the age of majority in your jurisdiction; and",
                  "You have the legal capacity and authority to enter into these Terms.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Participation in specific programs such as the Women in Tech
                Leadership Program or Ambassador Program may be subject to
                additional eligibility criteria outlined in those program&apos;s
                respective application materials.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 3 ── */}
            <section id="changes-to-terms" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                3. Changes to Terms
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. We will
                notify users of any significant changes via email or a prominent
                notice on our website. Your continued use of the Service after
                changes have been posted constitutes your acceptance of the updated
                Terms. We encourage you to review these Terms periodically.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 4 ── */}
            <section id="user-accounts" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                4. User Accounts
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                To access certain features of the Service — including the GWTL
                platform, program applications, member directory, and event
                registration — you may be required to create an account. You are
                responsible for:
              </p>
              <ul className="space-y-3 text-slate-600">
                {[
                  "Maintaining the confidentiality of your account credentials (username and password).",
                  "All activities that occur under your account, whether or not authorized by you.",
                  "Notifying us immediately at contact@globalwomentechleaders.com of any unauthorized use of your account or any other breach of security.",
                  "Ensuring your account information remains accurate and up to date.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-slate-600 leading-relaxed">
                GWTL reserves the right to suspend or terminate accounts that
                violate these Terms or that have been inactive for an extended period,
                with reasonable notice where practicable.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 5 ── */}
            <section id="user-content" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                5. User Content
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You retain all ownership rights in any data, files, or other content
                (&ldquo;User Content&rdquo;) you upload, submit, store, or send
                through the Services. By posting User Content, you grant GWTL a
                non-exclusive, worldwide, royalty-free license to use, host, store,
                reproduce, modify, create derivative works from, communicate,
                publish, publicly perform, publicly display, and distribute such
                content solely to provide and improve the Services.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                GWTL does not own or claim any rights to User Content beyond what
                is necessary to operate the Services, and will not use, modify, or
                disclose User Content except as required to provide the Services or
                as required by law.
              </p>
              <p className="text-slate-600 leading-relaxed">
                You are solely responsible for ensuring that your User Content does
                not infringe any third-party intellectual property rights or violate
                any applicable laws or regulations. GWTL reserves the right to
                remove User Content that violates these Terms.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 6 ── */}
            <section id="fees" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                6. Fees and Payment
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                While many GWTL resources and community features are available at
                no cost, GWTL reserves the right to charge fees for certain Services,
                including program enrollment, event registration, and platform
                features.
              </p>
              <ul className="space-y-3 text-slate-600">
                {[
                  "You agree to pay all fees and charges incurred in connection with your use of paid Services in a timely manner.",
                  "All fees are stated and billed in the applicable currency and are non-refundable unless otherwise specified in the relevant program terms or required by applicable law.",
                  "GWTL reserves the right to modify its fees and payment policies at any time, with reasonable advance notice to affected users.",
                  "Any sponsorship, partnership, or program-related payment obligations are governed by separate agreements entered into with GWTL.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 7 ── */}
            <section id="prohibited" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                7. Prohibited Conduct
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You agree not to engage in any of the following prohibited
                activities in connection with your use of the Services:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Violating any applicable laws or regulations",
                  "Infringing the intellectual property rights of others",
                  "Posting or transmitting harmful or malicious code",
                  "Impersonating any person or entity",
                  "Interfering with the proper functioning of the Service",
                  "Harassing, abusing, or threatening other members",
                  "Collecting member data without consent",
                  "Using the platform to send unsolicited commercial messages",
                  "Attempting to gain unauthorized access to any part of the Service",
                  "Engaging in conduct inconsistent with GWTL's mission of empowering women in technology",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50/60 px-4 py-3"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-rose-400 shrink-0" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-slate-600 leading-relaxed">
                GWTL reserves the right to investigate and take appropriate action
                against violations, including removing content, suspending or
                terminating accounts, and reporting conduct to law enforcement.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 8 ── */}
            <section id="privacy" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                8. Privacy and Data Protection
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our{" "}
                <Link href="/privacy" className="text-teal-700 hover:underline">
                  Privacy Policy
                </Link>{" "}
                explains how we collect, treat, and protect your personal data when
                you use our Services. By using our Services, you agree that GWTL
                may use such data in accordance with our Privacy Policy.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We comply with applicable data protection laws, including the General
                Data Protection Regulation (GDPR) where applicable, given that GWTL
                is headquartered in Romania, an EU member state. For details on your
                rights and how to exercise them, please review our{" "}
                <Link href="/privacy#gdpr" className="text-teal-700 hover:underline">
                  GDPR section
                </Link>
                .
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 9 ── */}
            <section id="intellectual-property" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                9. Intellectual Property
              </h2>
              <div className="space-y-6">
                <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-5">
                  <h3 className="font-semibold text-slate-800 mb-2">Ownership</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    GWTL and its licensors own all rights, title, and interest in
                    and to the Service, including any underlying software, technology,
                    brand assets, program frameworks, curriculum materials, and
                    content (excluding User Content). The GWTL name, logo, and all
                    related marks are trademarks of Global Women TechLeaders.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-5">
                  <h3 className="font-semibold text-slate-800 mb-2">User Content License</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    By submitting User Content to GWTL, you grant GWTL a
                    non-exclusive, worldwide, royalty-free, sublicensable, and
                    transferable license to store, display, process, and use your
                    User Content in connection with providing and improving the
                    Service.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-5">
                  <h3 className="font-semibold text-slate-800 mb-2">Trademarks</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    All trademarks, service marks, logos, trade names, and
                    proprietary designations belonging to GWTL are trademarks of
                    Global Women TechLeaders. You may not use them without prior
                    written consent.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-5">
                  <h3 className="font-semibold text-slate-800 mb-2">Program Materials</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Curriculum, frameworks, reports, and materials developed by
                    GWTL for its programs (including the Women in Tech Leadership
                    Program and AI Governance Framework) are proprietary to GWTL.
                    You may not reproduce, distribute, or create derivative works
                    from these materials without prior written permission.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 10 ── */}
            <section id="third-party" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                10. Third-Party Services
              </h2>
              <p className="text-slate-600 leading-relaxed">
                GWTL may integrate, incorporate, or otherwise link to third-party
                services or content — including event platforms, payment processors,
                learning management systems, video conferencing tools, and partner
                organization websites — that are not owned or controlled by us. We
                do not endorse or assume any responsibility for such third-party
                services, their content, or their privacy and security practices.
                Your interactions with these services are governed by their own
                terms and policies, and we encourage you to review them before use.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 11 ── */}
            <section id="liability" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                11. Limitation of Liability
              </h2>
              <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-5 mb-6">
                <p className="text-sm text-amber-800 leading-relaxed font-medium">
                  Please read this section carefully as it limits GWTL&apos;s
                  liability to you.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                To the fullest extent permitted by applicable law, in no event shall
                GWTL, nor its directors, employees, partners, ambassadors, strategic
                council members, sponsors, or affiliates, be liable for any indirect,
                incidental, special, consequential, or punitive damages, including
                without limitation:
              </p>
              <ul className="space-y-3 text-slate-600 mb-6">
                {[
                  "Loss of profits, data, use, goodwill, or other intangible losses",
                  "Damages resulting from your access to, use of, or inability to access or use the Service",
                  "Any conduct or content of any third party on the Service",
                  "Any content obtained from the Service",
                  "Unauthorized access, use, or alteration of your transmissions or content",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 leading-relaxed">
                These limitations apply whether based on warranty, contract, tort
                (including negligence), or any other legal theory, and whether or
                not GWTL has been informed of the possibility of such damage. GWTL
                shall not be liable for any damages arising from unauthorized access
                to or use of User Content.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 12 ── */}
            <section id="indemnification" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                12. Indemnification
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You agree to defend, indemnify, and hold harmless GWTL, its
                affiliates, licensors, and service providers, and their respective
                officers, directors, employees, contractors, agents, suppliers,
                successors, and assigns from and against any claims, liabilities,
                damages, judgments, awards, losses, costs, expenses, or fees
                (including reasonable attorneys&apos; fees) arising out of or
                relating to:
              </p>
              <ul className="space-y-3 text-slate-600">
                {[
                  "Your use of GWTL Services or any activities under your account.",
                  "Your breach or alleged breach of these Terms.",
                  "Your violation of any law or the rights of a third party.",
                  "Any User Content you submit, post, or transmit through the Services.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 13 ── */}
            <section id="disclaimers" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                13. Disclaimers
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The Service is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS
                AVAILABLE&rdquo; basis without warranties of any kind, whether
                express or implied. GWTL does not warrant that:
              </p>
              <ul className="space-y-3 text-slate-600 mb-4">
                {[
                  "The Services will meet your requirements or expectations.",
                  "The Services will be uninterrupted, timely, secure, or error-free.",
                  "The results obtained from use of the Services will be accurate or reliable.",
                  "Any errors in the Services will be corrected.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 leading-relaxed">
                GWTL makes no representations regarding the suitability of the
                Services for any particular purpose. Program outcomes, including
                career advancement, networking results, or business opportunities,
                are not guaranteed and depend on individual effort and circumstance.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 14 ── */}
            <section id="governing-law" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                14. Governing Law
              </h2>
              <p className="text-slate-600 leading-relaxed">
                These Terms shall be governed and construed in accordance with the
                laws of Romania, without regard to its conflict of law provisions.
                To the extent any dispute cannot be resolved through arbitration as
                described in Section 15, you consent to the exclusive jurisdiction
                of courts located in Brașov, Romania.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 15 ── */}
            <section id="dispute" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                15. Dispute Resolution and Arbitration
              </h2>
              <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-5 mb-6">
                <p className="text-sm text-amber-800 leading-relaxed font-medium">
                  This section contains a binding arbitration provision that affects
                  your legal rights. Please read it carefully.
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Any dispute arising out of or relating to these Terms, including
                their formation, interpretation, breach, or termination, will be
                resolved through final and binding arbitration administered by the
                Romanian Court of International Commercial Arbitration in accordance
                with its rules. The arbitration will be conducted by a single
                arbitrator, in the English language, in Bucharest, Romania. The
                decision of the arbitrator will be final and binding, and judgment
                on the award rendered by the arbitrator may be entered in any court
                of competent jurisdiction.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 16 ── */}
            <section id="changes-to-service" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                16. Changes to Service
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to modify, suspend, or discontinue our Service
                (in whole or in part) at any time, with or without notice to you.
                We will not be liable if any part of the Service is unavailable at
                any time or for any period. From time to time, we may restrict
                access to parts of the Service — including program portals, member
                directories, or event platforms — to all users or to specific user
                segments, including registered users.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 17 ── */}
            <section id="general" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                17. General
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "Severability",
                    body: "If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions will continue in full force and effect.",
                  },
                  {
                    title: "No Waiver",
                    body: "Any failure by GWTL to enforce any right or provision under these Terms does not constitute a waiver of future enforcement of that right or provision.",
                  },
                  {
                    title: "Entire Agreement",
                    body: "These Terms, together with the Privacy Policy and any other agreements referenced herein, constitute the entire agreement between you and Global Women TechLeaders regarding your use of the Services and supersede all prior agreements and understandings.",
                  },
                  {
                    title: "Assignment",
                    body: "You may not assign or transfer these Terms or any rights or obligations herein without our prior written consent. GWTL may freely assign or transfer these Terms without restriction.",
                  },
                  {
                    title: "Language",
                    body: "These Terms were written in English. To the extent any translated version conflicts with the English version, the English version shall govern.",
                  },
                ].map(({ title, body }) => (
                  <div
                    key={title}
                    className="rounded-xl border border-slate-100 bg-slate-50/60 p-5"
                  >
                    <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 18 ── */}
            <section id="contact" className="scroll-mt-28 mb-4">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                18. Contact Us
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                If you have any questions about these Terms or need further
                clarification, please contact us. We are committed to addressing
                your concerns promptly.
              </p>

              <div className="rounded-2xl border border-teal-600/20 bg-teal-50/30 p-6 sm:p-8">
                <p className="text-sm font-mono uppercase tracking-widest text-teal-700 mb-4">
                  Get in Touch
                </p>
                <h3 className="text-xl font-bold text-brand-navy mb-2">
                  Global Women TechLeaders
                </h3>
                <p className="text-slate-600 text-sm mb-1">Brașov, Romania</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:contact@globalwomentechleaders.com"
                    className="inline-flex items-center gap-2 rounded-xl border border-teal-600/30 bg-white px-5 py-3 text-sm font-semibold text-teal-700 hover:bg-teal-50 transition-colors"
                  >
                    contact@globalwomentechleaders.com
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Contact Form →
                  </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-teal-600/10">
                  <p className="text-xs text-slate-500">
                    Also see our{" "}
                    <Link href="/privacy" className="text-teal-700 hover:underline">
                      Privacy Policy
                    </Link>{" "}
                    for information on how we handle your personal data.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}
