import Link from "next/link";
import { Linkedin, Twitter, Instagram, Youtube, Mail } from "lucide-react";

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
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">GWTL</span>
                <span className="block text-xs text-gray-400">
                  Global Women TechLeaders
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Empowering women tech leaders worldwide through networking,
              mentorship, and advocacy since 2017.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Organization */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Organization
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Leaders */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              For Leaders
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.forLeaders.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Companies */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              For Companies
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.forCompanies.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Programs
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Stay Updated
              </h3>
              <p className="mt-1 text-sm text-gray-400">
                Get the latest news, events, and opportunities.
              </p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Global Women TechLeaders. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/gdpr" className="hover:text-primary-400 transition-colors">
                GDPR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
