"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  { name: "About", href: "/about" },
  {
    name: "For Leaders",
    href: "/for-leaders",
    children: [
      { name: "Join the Network", href: "/for-leaders/join" },
      { name: "Mentoring Program", href: "/for-leaders/mentoring" },
      { name: "Events", href: "/events" },
      { name: "Resources", href: "/resources" },
    ],
  },
  {
    name: "For Companies",
    href: "/for-companies",
    children: [
      { name: "Corporate Membership", href: "/for-companies/membership" },
      { name: "Sponsorship", href: "/for-companies/sponsorship" },
      { name: "Speaking Bureau", href: "/for-companies/speakers" },
    ],
  },
  { name: "Programs", href: "/programs" },
  { name: "News", href: "/news" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 lg:h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/images/logo.png"
              alt="Global Women TechLeaders"
              width={50}
              height={50}
              className="group-hover:scale-105 transition-transform duration-300"
            />
            <div className="hidden sm:block">
              <span className="font-display text-brand-navy text-xl font-bold">Global Women TechLeaders</span>
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
                  className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-brand-navy transition-all duration-300 rounded-xl hover:bg-gray-100"
                >
                  {item.name}
                  {item.children && <ChevronDown className="h-4 w-4 opacity-50" />}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-white border border-secondary-100 shadow-xl py-3 animate-fade-in-scale">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-5 py-3 text-sm text-secondary-600 transition-colors hover:bg-gray-50"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <button className="px-4 py-2 text-sm font-semibold text-brand-navy rounded-xl transition-colors hover:bg-gray-100">
              Sign In
            </button>
            <button className="h-10 px-6 rounded-xl text-sm font-bold bg-brand-teal text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-teal-dark">
              Join Community
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-brand-navy" />
            ) : (
              <Menu className="h-6 w-6 text-brand-navy" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 animate-fade-in-scale rounded-b-2xl bg-white/98 border-t border-secondary-200">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3.5 text-base font-medium text-brand-navy rounded-xl transition-colors hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1 mt-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-secondary-500 transition-colors hover:text-brand-navy"
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
            <div className="mt-6 pt-6 space-y-3 px-4 border-t border-secondary-200">
              <button className="w-full py-3 px-6 rounded-xl font-semibold border-2 border-brand-navy text-brand-navy transition-colors hover:bg-brand-navy hover:text-white">
                Sign In
              </button>
              <button className="w-full py-3 px-6 rounded-xl font-bold bg-brand-teal text-white transition-colors hover:bg-brand-teal-dark">
                Join Community
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
