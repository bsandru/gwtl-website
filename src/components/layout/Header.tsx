"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const navigation = [
  {
    name: "About",
    href: "/about",
    children: [
      { name: "Our Story", href: "/about", description: "Who we are and why we exist" },
      { name: "Our Team", href: "/team", description: "Meet the leadership" },
      { name: "Ambassadors", href: "/about#ambassadors", description: "Our global ambassador network" },
    ],
  },
  {
    name: "Programs",
    href: "/programs",
    children: [
      { name: "Power Tables", href: "/programs#power-tables", description: "Curated peer-learning circles" },
      { name: "Sponsor Match", href: "/programs#sponsor-match", description: "AI-powered sponsorship pairing" },
      { name: "Global Shift Summit", href: "/programs#global-shift-summit", description: "Our flagship annual event" },
    ],
  },
  { name: "Events", href: "/events" },
  { name: "Partnerships", href: "/sponsorship" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "py-2"
        : "py-4"
        }`}
    >
      {/* Background blur layer */}
      <div
        className={"absolute inset-0 transition-all duration-500 bg-white/90 backdrop-blur-2xl border-b border-black/5 shadow-lg shadow-black/5"}
      />

      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="Global Women TechLeaders"
                width={80}
                height={64}
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-brand-teal text-xl font-semibold tracking-tight">
                Global Women TechLeaders
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="group flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 text-brand-navy hover:text-brand-teal hover:bg-brand-teal/5"
                >
                  <span>{item.name}</span>
                  {item.children && (
                    <ChevronDown className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 w-72 pt-2">
                    <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-secondary-100 shadow-xl shadow-black/10 py-3 animate-fade-in-scale origin-top-left">
                      <div className="absolute -top-0.5 left-6 w-4 h-4 bg-white border-l border-t border-secondary-100 rotate-45" />

                      <div className="relative">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="group block px-5 py-3 transition-colors hover:bg-brand-teal/5"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-semibold text-brand-navy group-hover:text-brand-teal transition-colors">
                                  {child.name}
                                </p>
                                <p className="text-xs text-secondary-500 mt-0.5">
                                  {child.description}
                                </p>
                              </div>
                              <ArrowRight className="h-4 w-4 text-secondary-300 group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            {/* <button
              className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                scrolled
                  ? "text-brand-navy hover:bg-brand-navy/5"
                  : "text-brand-navy hover:bg-white/50"
              }`}
            >
              Sign In
            </button> */}
            <Link href="/contact">
              <button className="magnetic-btn group relative h-11 px-6 rounded-xl text-sm font-bold overflow-hidden bg-brand-navy text-white shadow-lg shadow-brand-navy/20">
                <span className="relative z-10 flex items-center gap-2">
                  Apply / Partner
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={`lg:hidden p-2.5 rounded-xl transition-colors ${scrolled ? "hover:bg-brand-navy/5" : "hover:bg-white/50"
              }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-brand-navy" />
            ) : (
              <Menu className="h-6 w-6 text-brand-navy" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-brand-navy/20 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl hover:bg-secondary-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-brand-navy" />
            </button>
          </div>

          {/* Navigation links */}
          <div className="px-6 py-4">
            <div className="space-y-1">
              {navigation.map((item, idx) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-4 text-lg font-semibold text-brand-navy rounded-xl transition-colors hover:bg-brand-teal/5  animate-fade-in-up"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1 mt-1 mb-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-secondary-600 rounded-lg transition-colors hover:text-brand-teal hover:bg-brand-teal/5"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTAs */}
            <div className="mt-8 pt-8 space-y-3 border-t border-secondary-200">
              {/* <button className="w-full py-3.5 px-6 rounded-xl font-semibold border-2 border-brand-navy text-brand-navy transition-all hover:bg-brand-navy hover:text-white">
                Sign In
              </button> */}
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full py-3.5 px-6 rounded-xl font-bold bg-brand-navy text-white shadow-lg shadow-brand-navy/20 hover:bg-brand-teal transition-colors flex items-center justify-center gap-2">
                  Apply / Partner
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
