import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Global Women TechLeaders",
  description:
    "Learn how Global Women TechLeaders collects, uses, and protects your personal information when you use our platform, programs, and services.",
};

const sections = [
  { id: "scope", title: "1. Scope of this Privacy Policy" },
  { id: "information-you-provide", title: "2. Information You Provide To Us" },
  { id: "automatic-collection", title: "3. Automatic Data Collection" },
  { id: "how-we-use", title: "4. How We Use Your Information" },
  { id: "disclosure", title: "5. Disclosure of Your Information" },
  { id: "third-party", title: "6. Third-Party Links & Services" },
  { id: "do-not-track", title: "7. Do Not Track Signals" },
  { id: "choices", title: "8. Your Choices About Your Information" },
  { id: "security", title: "9. Security & Data Retention" },
  { id: "children", title: "10. Protection for Children" },
  { id: "other-services", title: "11. Other Services" },
  { id: "changes", title: "12. Changes to this Privacy Policy" },
  { id: "opt-out", title: "13. Opt-Out Process" },
  { id: "communications", title: "14. Communications with GWTL" },
  { id: "terms", title: "15. Site Terms of Use" },
  { id: "gdpr", title: "16. European Citizens – GDPR Rights" },
  { id: "contact", title: "17. Contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20 min-h-screen bg-white text-slate-800">
      {/* ── Hero ── */}
      <section className="border-b border-slate-100 bg-linear-to-b from-teal-50/40 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-6 border border-teal-600/25 bg-teal-600/6 text-teal-700 font-mono uppercase tracking-wider">
              Legal
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-brand-navy mb-4 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-sm font-mono">
              Updated on March 1, 2024 · Effective from March 1, 2024
            </p>
          </div>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Global Women TechLeaders (GWTL, &ldquo;us&rdquo;, &ldquo;we&rdquo;, or
            &ldquo;our&rdquo;) is committed to protecting your personal privacy. This
            Privacy Policy explains how we collect, use, maintain, and disclose your
            information when you interact with our website at{" "}
            <a
              href="https://globalwomentechleaders.com"
              className="text-teal-700 hover:underline"
            >
              globalwomentechleaders.com
            </a>
            , our platform, programs, events, and related services (collectively, the
            &ldquo;Services&rdquo;).
          </p>
          <p className="mt-4 text-slate-600 text-sm leading-relaxed">
            By using or accessing our Services, you signify your agreement to be bound
            by this Privacy Policy.<br />
            <strong className="text-slate-800">
              IF YOU DO NOT AGREE TO THIS PRIVACY POLICY YOU MAY NOT ACCESS OR
              OTHERWISE USE OUR SERVICES OR PARTICIPATE IN OUR PROGRAMS.
            </strong>
          </p>
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
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <article className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-brand-navy prose-a:text-teal-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800">
            {/* ── 1 ── */}
            <section id="scope" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                1. Scope of this Privacy Policy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                This Privacy Policy applies solely to your use of the GWTL Websites,
                platform, programs (including leadership programs, ambassador
                programs, strategic council engagement, and sponsored events), and
                any other Services we offer. It does not extend to any third-party
                websites or services that may be referenced or linked from our
                Services. Your use of any third-party service is governed by that
                party&apos;s own privacy policy, and we have no control over how your
                data is collected, used, or stored by them. You are advised to
                review the privacy policies of any such services before submitting
                data.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 2 ── */}
            <section id="information-you-provide" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                2. Information You Provide To Us
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The information we collect on or through the Services may include:
              </p>
              <ul className="space-y-3 text-slate-600">
                {[
                  "Information provided when filling in forms on our website or platform — including at the time of registering for an account, applying to a program, subscribing to our newsletter, requesting services, or entering a GWTL-sponsored contest or promotion.",
                  "Records and copies of your correspondence (including email addresses) if you contact us directly.",
                  "Your responses to surveys, feedback forms, or research questionnaires we may ask you to complete.",
                  "Details of transactions you carry out through our Services, including any financial information provided when registering for paid programs or events.",
                  "Your search queries on the Websites or via the Service.",
                  "Your name, contact information (including address and email address), professional title, organization, photograph, and information for your public profile on our platform.",
                  "Content you post or publish on public areas of the Services, including community contributions, event discussions, or materials transmitted to other members (collectively, \"User Contributions\"). User Contributions are posted at your own risk; while we implement access controls, no security measure is perfectly impenetrable.",
                  "Information provided when applying to or participating in the GWTL Women in Tech Leadership Program, Ambassador Program, or Strategic Council, including professional background, goals, and recommendations.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 3 ── */}
            <section id="automatic-collection" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                3. Information We Collect Through Automatic Data Collection Technologies
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                As you navigate through and interact with our Services, we may use
                automatic data collection technologies to collect certain information
                about your device, browsing actions, and patterns, including:
              </p>
              <ul className="space-y-3 text-slate-600 mb-6">
                {[
                  "Details of your visits to our Services, including traffic data, location data, logs, and the resources you access.",
                  "Information about your computer and internet connection, including IP address, operating system, and browser type.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 leading-relaxed mb-6">
                This data helps us improve our Services, understand usage patterns,
                and deliver a more personalized experience. The technologies we use
                for automatic data collection include:
              </p>

              <div className="space-y-6">
                <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-5">
                  <h3 className="font-semibold text-slate-800 mb-2">Browser Cookies</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Small files placed on your device&apos;s hard drive. You may refuse
                    cookies via your browser settings, though doing so may affect
                    access to some areas of our Services. Our system issues cookies
                    when you direct your browser to our Websites.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-5">
                  <h3 className="font-semibold text-slate-800 mb-2">Flash Cookies</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Certain features may use local stored objects (Flash cookies) to
                    collect information about your preferences and navigation. These
                    are managed separately from browser cookies.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-5">
                  <h3 className="font-semibold text-slate-800 mb-2">Web Beacons</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Pages of our Websites and our emails may contain small electronic
                    files known as web beacons (clear gifs, pixel tags, single-pixel
                    gifs) that allow us to count users who have visited those pages or
                    opened an email and for related website statistics.
                  </p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-5">
                  <h3 className="font-semibold text-slate-800 mb-2">Google Analytics</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We use Google Analytics to understand how visitors engage with our
                    Services. Google Analytics uses first-party cookies to collect
                    information anonymously and reports website trends without
                    identifying individual visitors. You may opt out at{" "}
                    <a
                      href="https://tools.google.com/dlpage/gaoptout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-700 hover:underline"
                    >
                      tools.google.com/dlpage/gaoptout
                    </a>
                    . We may also use Google conversion tracking or similar services
                    to understand user interactions with our Services.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-slate-600 text-sm leading-relaxed">
                If you believe we have inadvertently collected your personal
                information through automatic means, please notify us at{" "}
                <a
                  href="mailto:contact@globalwomentechleaders.com"
                  className="text-teal-700 hover:underline"
                >
                  contact@globalwomentechleaders.com
                </a>
                .
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 4 ── */}
            <section id="how-we-use" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                4. How We Use Your Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use the information we collect about you to:
              </p>
              <ul className="space-y-3 text-slate-600">
                {[
                  "Present and operate our Websites, platform, and Services.",
                  "Create and maintain your GWTL account and member profile.",
                  "Process your applications to our programs, including the Women in Tech Leadership Program, Ambassador Program, and Strategic Council.",
                  "Provide you with information, products, or services you request from us.",
                  "Send you notices about your account or subscription, including expiration, renewal, and program updates.",
                  "Fulfill any contracts entered into between you and us, including billing and collection.",
                  "Notify you about changes to our Services, programs, or events.",
                  "Enable your participation in interactive features, community forums, events, and networking opportunities.",
                  "Match you with sponsorship, mentorship, or partnership opportunities relevant to your profile.",
                  "Send communications about GWTL events (conferences, summits, workshops), news, and partner opportunities that may interest you.",
                  "For any other purpose described when you provide the information, or for which you provide consent.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-slate-600 leading-relaxed">
                We may also use your information to contact you about goods and
                services from third-party partners that may be of interest to you. If
                you do not want us to use your information in this way, please email{" "}
                <a
                  href="mailto:contact@globalwomentechleaders.com"
                  className="text-teal-700 hover:underline"
                >
                  contact@globalwomentechleaders.com
                </a>
                .
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 5 ── */}
            <section id="disclosure" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                5. Disclosure of Your Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may disclose aggregated, anonymized information about our users
                without restriction. We may disclose personal information we collect
                or that you provide:
              </p>
              <ul className="space-y-3 text-slate-600">
                {[
                  "To our subsidiaries and affiliates.",
                  "To contractors, service providers, and other third parties we engage to support our operations, who are bound by contractual obligations to keep information confidential and use it only for the purposes for which we disclose it.",
                  "To GWTL program sponsors, partners, and corporate supporters — solely to the extent necessary to facilitate program delivery, event participation, or partnership opportunities, and only with your awareness or consent.",
                  "To a buyer or successor in the event of a merger, acquisition, divestiture, restructuring, or sale of assets, where personal information held by GWTL is among the assets transferred.",
                  "To fulfill the purpose for which you provide the information (e.g., sharing your contact details with a mentor you are matched with).",
                  "For any other purpose disclosed when you provide the information.",
                  "With your consent.",
                  "To comply with any court order, law, or legal process, including responding to any government or regulatory request.",
                  "To enforce or apply our Terms of Use and other agreements.",
                  "To protect the rights, property, or safety of GWTL, our members, or others.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 6 ── */}
            <section id="third-party" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                6. Third-Party Links &amp; Services
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our Services may contain links to or integrations with third-party
                services, including event platforms, payment processors, social
                networks, and partner organizations. We are not responsible for the
                privacy practices or content of these third-party sites or services.
                When you leave our Services, you do so at your own risk and we
                encourage you to review the privacy policies of any site you visit.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 7 ── */}
            <section id="do-not-track" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                7. Do Not Track Signals
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Some web browsers may transmit &ldquo;do-not-track&rdquo; signals to
                websites. Because there is not yet a common understanding of how to
                interpret these signals, our Services do not currently respond to
                browser do-not-track signals. We will continue to monitor developments
                in this area and update our practices if a standard emerges.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 8 ── */}
            <section id="choices" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                8. Your Choices About Your Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We strive to provide you with choices regarding the personal
                information you provide to us:
              </p>
              <ul className="space-y-3 text-slate-600">
                {[
                  "You may review and update your account information by logging into your GWTL account and visiting your profile settings.",
                  "You may opt out of receiving promotional communications from us by following the unsubscribe link in any email or by contacting us directly.",
                  "You may request deletion of your personal data at any time by contacting us at contact@globalwomentechleaders.com.",
                  "California residents may have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete personal information, and the right to opt out of the sale of personal information. We do not sell personal information.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 9 ── */}
            <section id="security" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                9. Security &amp; Data Retention
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We have implemented commercially reasonable technical and
                organizational measures to protect your personal information from
                accidental loss, unauthorized access, use, alteration, and
                disclosure. Specific steps include:
              </p>
              <ul className="space-y-3 text-slate-600 mb-6">
                {[
                  "Encrypting the connection between our website and your device (TLS/HTTPS).",
                  "Ensuring the physical and digital security of the servers that hold your data.",
                  "Controlling staff and contractor access to data so that only authorized personnel may access it.",
                  "Conducting regular security assessments and audits of our platform.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                The safety and security of your information also depends on you.
                Where we have given you a password for access to our platform, you
                are responsible for keeping it confidential and not sharing it.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Unfortunately, no transmission of data over the internet is completely
                secure. Although we do our best to protect your information, we
                cannot guarantee the security of information transmitted to our
                Services. Any transmission is at your own risk.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We only keep your data for as long as necessary to fulfill the
                purposes described in this Policy, or for as long as we have your
                permission to keep it. We conduct an annual review to assess whether
                retained data remains necessary. Data no longer required will be
                deleted in accordance with our Data Retention Policy.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Some or all of your data may be stored or transferred outside of the
                European Economic Area (EEA). We will take all reasonable steps to
                ensure such data is treated as safely and securely as it would be
                within the EEA, including through legally binding contractual
                arrangements and EU-approved Model Contractual Clauses.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 10 ── */}
            <section id="children" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                10. Protection for Children
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Our Services are not directed to children under the age of 13, and we
                do not knowingly collect personally identifiable information from
                children under 13. If we learn that we have inadvertently collected
                personal information from a child under 13 without verified parental
                consent, we will use all reasonable efforts to delete such information
                promptly. If you believe your child has provided us information without
                your consent, please contact us immediately at{" "}
                <a
                  href="mailto:contact@globalwomentechleaders.com"
                  className="text-teal-700 hover:underline"
                >
                  contact@globalwomentechleaders.com
                </a>
                .
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 11 ── */}
            <section id="other-services" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                11. Other Services
              </h2>
              <p className="text-slate-600 leading-relaxed">
                As a convenience, we may provide links to third-party services from
                within our Services, including event registration platforms, payment
                gateways, learning management systems, and partner organization
                websites. We are not responsible for the privacy practices or content
                of these third-party sites. When you navigate away from our Services,
                you do so at your own risk.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 12 ── */}
            <section id="changes" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                12. Changes to this Privacy Policy
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to change, modify, add, or remove portions from
                this Privacy Policy at any time. If we plan to use information in a
                way that materially differs from this Policy — including sharing with
                additional third parties — we will post such changes here and provide
                you the opportunity to opt out of such differing uses. Your continued
                use of our Services following the posting of any changes constitutes
                your acceptance of those changes.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 13 ── */}
            <section id="opt-out" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                13. Opt-Out Process
              </h2>
              <p className="text-slate-600 leading-relaxed">
                All unsubscribe or opt-out requests may be made by clicking the
                &ldquo;unsubscribe&rdquo; link at the bottom of any email we send you,
                by updating your email preferences in your account settings, or by
                contacting us directly. We will process your request within a
                reasonable time after receipt. Please note that we may be unable to
                remove your information from lists already shared with third parties
                in accordance with this Policy or your prior consent — you should
                contact such parties directly. To update or correct any personally
                identifiable information, email us at{" "}
                <a
                  href="mailto:contact@globalwomentechleaders.com"
                  className="text-teal-700 hover:underline"
                >
                  contact@globalwomentechleaders.com
                </a>{" "}
                and we will update such information within a reasonable time after
                confirming your identity.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 14 ── */}
            <section id="communications" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                14. Communications with GWTL
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                By providing your email address, phone number, and/or social media
                information to us, you expressly consent to receive communications
                from GWTL. We may use these channels to send you information you
                have requested or information about other products, services, events,
                and programs developed by us or our business partners. We will not
                give your contact information to a third party to promote their
                products or services directly to you without your consent or as set
                forth in this Privacy Policy.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Any communication or material you transmit to us — including data,
                questions, comments, suggestions, or ideas — may be used by us for
                any lawful purpose, including reproduction, disclosure, transmission,
                publication, and broadcasting, except as expressly covered by this
                Privacy Policy.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 15 ── */}
            <section id="terms" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                15. Site Terms of Use
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Use of our Services is governed by, and subject to, our Terms of
                Use. This Privacy Policy is incorporated into those Terms. Your use
                of or access to our Services constitutes your agreement to be bound
                by both documents.{" "}
                <strong className="text-slate-800">
                  IF YOU DO NOT AGREE TO THE TERMS OF USE AND THIS PRIVACY POLICY,
                  YOU MAY NOT ACCESS OR OTHERWISE USE THE SERVICES.
                </strong>
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 16 ── */}
            <section id="gdpr" className="scroll-mt-28 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                16. European Citizens – Your Rights Under GDPR
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                All personal data is stored securely in accordance with the EU
                General Data Protection Regulation (GDPR, Regulation (EU) 2016/679).
                GWTL is headquartered in Romania, an EU member state, and processes
                personal data in compliance with applicable European data protection
                law.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We process your personal data only where at least one of the
                following lawful bases applies:
              </p>
              <ul className="space-y-3 text-slate-600 mb-6">
                {[
                  "You have given consent to processing for one or more specific purposes.",
                  "Processing is necessary for the performance of a contract to which you are a party, or to take steps at your request prior to entering into a contract.",
                  "Processing is necessary for compliance with a legal obligation to which we are subject.",
                  "Processing is necessary to protect your vital interests or those of another natural person.",
                  "Processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority.",
                  "Processing is necessary for the purposes of legitimate interests pursued by us or a third party, where those interests are not overridden by your fundamental rights and freedoms.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                Under the GDPR, if you are located in the EEA, you have the right to:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Request access to your personal data",
                  "Request correction of inaccurate data",
                  "Request deletion of your personal data",
                  "Restrict processing of your data",
                  "Data portability",
                  "Object to processing of your data",
                  "Rights related to automated decision-making and profiling",
                  "Lodge a complaint with a supervisory authority",
                ].map((right, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50/60 px-4 py-3"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500 shrink-0" />
                    <span className="text-sm text-slate-600">{right}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-slate-600 leading-relaxed">
                Non-personally identifiable or aggregate information may be used for
                any purposes permitted by law and shared with any number of parties,
                provided it does not specifically identify you. To exercise any of
                the foregoing rights or raise concerns about how we process your
                data, please contact us using the details in section 17.
              </p>
            </section>

            <hr className="border-slate-100 mb-12" />

            {/* ── 17 ── */}
            <section id="contact" className="scroll-mt-28 mb-4">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                17. Contact
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                This Privacy Policy and our legal obligations are subject to the laws
                of Romania, regardless of your location. You consent to the exclusive
                jurisdiction of courts located in Romania for all disputes arising out
                of or relating to the Services.
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
              </div>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}
