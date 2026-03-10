import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Instagram, Youtube, ArrowUpRight, Heart } from "lucide-react";
import { SubscribeForm } from "@/components/SubscribeForm";

const footerLinks = {
  about: [
    { name: "Our Story", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Ambassadors", href: "/about/ambassadors" },
    { name: "Contact", href: "/contact" },
  ],
  organization: [
    { name: "Strategic Council", href: "/about/strategic-council" },
    { name: "Partnerships", href: "/about/partnerships" },
    { name: "Events", href: "/events" },
    { name: "News", href: "/news" },
  ],
  programs: [
    { name: "Power Tables", href: "/programs#power-tables" },
    { name: "Erasmus+ Initiative", href: "/programs#erasmus" },
    { name: "Sponsor Match", href: "/programs#sponsor-match" },
    { name: "Global Shift Summit", href: "/programs#global-shift-summit" },
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
      {/* Decorative gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-brand-teal via-brand-teal-light to-brand-teal" />

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[400px] -right-[200px] w-[800px] h-[800px] rounded-full bg-linear-to-br from-brand-teal/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-[300px] -left-[200px] w-[600px] h-[600px] rounded-full bg-linear-to-tr from-brand-teal-light/5 to-transparent blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-12 justify-items-end">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <Image
                src="/images/logo.png"
                alt="Global Women TechLeaders"
                width={48}
                height={48}
                className="group-hover:scale-105 transition-transform brightness-0 invert"
              />
              <div>
                <span className="font-display text-xl font-bold text-white">GWTL</span>
                <span className="block text-xs text-white/40 mt-0.5">
                  Global Women TechLeaders
                </span>
              </div>
            </Link>
            <p className="mt-6 text-sm max-w-md leading-relaxed text-white/50">
              GWTL accelerates women into tech leadership through board placements, capital connections, and corporate accountability. <br />AI-native. Outcomes-driven. Global.
              <span className="block mt-2 text-brand-teal-light">Led by humans. Run by AI agents.</span>
            </p>

            {/* Social links */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group h-11 w-11 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-1 bg-white/5 hover:bg-brand-teal/20 border border-white/10 hover:border-brand-teal/30"
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5 text-white/60 group-hover:text-brand-teal-light transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Organization */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-brand-teal-light">
              About
            </h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group text-sm text-white/50 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Leaders */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-brand-teal-light">
              Organization
            </h3>
            <ul className="space-y-3">
              {footerLinks.organization.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group text-sm text-white/50 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          {/* Programs */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-brand-teal-light">
              Programs
            </h3>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group text-sm text-white/50 hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Stay in the Loop
              </h3>
              <p className="mt-2 text-white/50">
                Get the latest news, events, and opportunities delivered weekly.
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <SubscribeForm source="footer" variant="dark" showIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-sm flex flex-wrap gap-1.5 text-white/40">
              © {new Date().getFullYear()} Global Women TechLeaders. <span className="flex items-center gap-1">Made with
                <Heart className="h-4 w-4 text-brand-teal fill-brand-teal" />
                worldwide.</span>
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-white/40 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/40 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-white/40 hover:text-white transition-colors"
              >
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
