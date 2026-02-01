import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Instagram, Youtube, Mail, Heart } from "lucide-react";

const footerLinks = {
  organization: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about/team" },
    { name: "Advisory Board", href: "/about/advisory" },
    { name: "Partners", href: "/about/partners" },
    { name: "Contact", href: "/contact" },
  ],
  forLeaders: [
    { name: "Join the Network", href: "/for-leaders/join" },
    { name: "Mentoring Program", href: "/for-leaders/mentoring" },
    { name: "Events", href: "/events" },
    { name: "Resources", href: "/resources" },
    { name: "Success Stories", href: "/stories" },
  ],
  forCompanies: [
    { name: "Corporate Membership", href: "/for-companies/membership" },
    { name: "Sponsorship", href: "/for-companies/sponsorship" },
    { name: "Speaking Bureau", href: "/for-companies/speakers" },
    { name: "DEI Consulting", href: "/for-companies/consulting" },
  ],
  programs: [
    { name: "Leadership Cohorts", href: "/programs/cohorts" },
    { name: "Erasmus+ Initiative", href: "/programs/erasmus" },
    { name: "Executive Roundtables", href: "/programs/roundtables" },
    { name: "Global Conference", href: "/programs/conference" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com/company/globalwomentechleaders", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com/glowomentechlea", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com/globalwomentechleaders", icon: Instagram },
  { name: "YouTube", href: "https://youtube.com/@globalwomentechleaders", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-brand-teal via-brand-teal-light to-brand-teal" />

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <Image
                src="/images/logo.png"
                alt="Global Women TechLeaders"
                width={50}
                height={50}
                className="group-hover:scale-105 transition-transform brightness-0 invert"
              />
              <div>
                <span className="font-display text-xl font-bold text-white">GWTL</span>
                <span className="block text-xs text-secondary-400">
                  Global Women TechLeaders
                </span>
              </div>
            </Link>
            <p className="mt-6 text-sm max-w-xs leading-relaxed text-secondary-400">
              Where balanced, AI-powered leadership reshapes the future of tech. Empowering women tech leaders worldwide since 2017.
            </p>
            <div className="mt-8 flex space-x-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 bg-brand-navy-light"
                >
                  <item.icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Organization */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-brand-teal">
              Organization
            </h3>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:opacity-80 transition-opacity text-secondary-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Leaders */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-brand-teal">
              For Leaders
            </h3>
            <ul className="space-y-3">
              {footerLinks.forLeaders.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:opacity-80 transition-opacity text-secondary-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Companies */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-brand-teal">
              For Companies
            </h3>
            <ul className="space-y-3">
              {footerLinks.forCompanies.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:opacity-80 transition-opacity text-secondary-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-brand-teal">
              Programs
            </h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:opacity-80 transition-opacity text-secondary-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-10 border-t border-brand-navy-light">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Stay Updated
              </h3>
              <p className="mt-2 text-secondary-400">
                Get the latest news, events, and opportunities.
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 transition-all bg-brand-navy-light border border-secondary-700 text-white placeholder:text-secondary-400"
              />
              <button
                type="submit"
                className="px-8 py-4 font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 bg-brand-teal text-white"
              >
                <Mail className="h-5 w-5" />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-brand-navy-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-sm flex items-center gap-1.5 text-secondary-400">
              © {new Date().getFullYear()} Global Women TechLeaders. Made with{" "}
              <Heart className="h-4 w-4 text-brand-teal fill-brand-teal" /> worldwide.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy" className="hover:opacity-80 transition-opacity text-secondary-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:opacity-80 transition-opacity text-secondary-400">
                Terms of Service
              </Link>
              <Link href="/gdpr" className="hover:opacity-80 transition-opacity text-secondary-400">
                GDPR
              </Link>
              <Link href="/cookies" className="hover:opacity-80 transition-opacity text-secondary-400">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
