import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  MapPin,
  ExternalLink,
  Crown,
  Landmark,
  Handshake,
  Mail,
} from "lucide-react";
import { getUpcomingEvents, getPastEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events | GWTL",
  description:
    "GWTL events are structured sessions designed to produce outcomes: board introductions, funding conversations, and public commitments.",
};

// Default images for events without images
const defaultImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop",
];

function getDefaultImage(index: number): string {
  return defaultImages[index % defaultImages.length];
}

function formatDateRange(start: string, end?: string): string {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : null;

  if (!endDate) {
    return startDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  const sameMonth = startDate.getMonth() === endDate.getMonth();
  const sameYear = startDate.getFullYear() === endDate.getFullYear();

  if (sameMonth && sameYear) {
    return `${startDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    })}–${endDate.getDate()}, ${endDate.getFullYear()}`;
  }

  return `${startDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })} – ${endDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  })}, ${endDate.getFullYear()}`;
}

function getDaysUntil(dateString: string): number {
  const eventDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);
  return Math.ceil(
    (eventDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );
}

function getDaysLabel(days: number): string {
  if (days === 0) return "Today";
  if (days === 1) return "Tomorrow";
  return `${days} days away`;
}

/* ─── Hero ─────────────────────────────────────────────────────────────────── */
function EventsHero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-secondary-50 via-white to-primary-50" />

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-30 animate-float bg-radial-teal" />
      <div
        className="absolute bottom-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-15 animate-float [animation-delay:3s]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,163,163,0.3) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-3 px-5 py-2.5 rounded-full shadow-lg mb-8 glass-badge opacity-0 stagger-1">
            <Calendar className="h-4 w-4 text-primary-500" />
            <span className="text-sm font-medium text-secondary-800">
              Events
            </span>
             <span className="text-xs px-2 py-0.5 rounded-full bg-teal-100 text-teal-700 font-semibold">
              Conferences / Webinars
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] stagger-2 opacity-0">
            <span className="text-secondary-800">Where Leaders</span>
            <br />
            <span className="relative inline-block gradient-text-hero">
              Meet Leaders.
              {/* Decorative underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 400 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.5C50 2.5 150 2.5 200 8.5C250 14.5 350 2.5 398 8.5"
                  stroke="url(#underline-gradient-events)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="underline-gradient-events"
                    x1="0"
                    y1="0"
                    x2="400"
                    y2="0"
                  >
                    <stop stopColor="#00A3A3" />
                    <stop offset="0.5" stopColor="#2dd4bf" />
                    <stop offset="1" stopColor="#00A3A3" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          <p className="animate-fade-in-up mt-8 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-secondary-600 stagger-3 opacity-0">
            GWTL events are not networking evenings. They are structured sessions
            designed to produce outcomes: board introductions, funding
            conversations, and public commitments. Every event feeds the
            Accountability Report.
          </p>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

/* ─── Upcoming Events ──────────────────────────────────────────────────────── */
function UpcomingEvents() {
  const upcomingEvents = getUpcomingEvents();
  const featuredEvent = upcomingEvents.find((e) => e.featured) || upcomingEvents[0];
  const otherUpcoming = upcomingEvents.filter(
    (e) => e.slug !== featuredEvent?.slug
  );

  if (upcomingEvents.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-secondary-100 mb-6">
            <Calendar className="h-10 w-10 text-secondary-400" />
          </div>
          <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">
            No upcoming events
          </h2>
          <p className="text-secondary-500 max-w-md mx-auto mb-8">
            We&apos;re planning exciting events. Subscribe to our newsletter to
            be the first to know when new events are announced.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-800 mb-2">
            Upcoming Events
          </h2>
          <div className="w-20 h-1 rounded-full bg-linear-to-r from-primary-500 to-primary-300 mt-4" />
        </div>

        {/* Featured Event */}
        {featuredEvent && (
          <div className="mb-12 animate-fade-in-up opacity-0 [animation-delay:0.2s]">
            <Link
              href={`/events/${featuredEvent.slug}`}
              className="group relative block rounded-3xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-[420px] lg:h-[520px]">
                <Image
                  src={featuredEvent.image || getDefaultImage(0)}
                  alt={featuredEvent.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/60 to-brand-navy/20" />
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                {/* Top badges */}
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal text-white shadow-lg">
                    {featuredEvent.category}
                  </span>
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white border border-white/20">
                    Featured
                  </span>
                </div>

                {/* Days countdown */}
                {getDaysUntil(featuredEvent.date) >= 0 && (
                  <div className="absolute top-6 right-6">
                    <div className="px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                      <div className="text-3xl font-bold text-white">
                        {getDaysUntil(featuredEvent.date)}
                      </div>
                      <div className="text-xs text-white/70 uppercase tracking-wider">
                        days to go
                      </div>
                    </div>
                  </div>
                )}

                <div className="max-w-3xl">
                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {formatDateRange(
                        featuredEvent.date,
                        featuredEvent.endDate
                      )}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {featuredEvent.location}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-3xl lg:text-5xl font-bold text-white mb-4 group-hover:text-brand-teal-light transition-colors leading-tight">
                    {featuredEvent.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-white/70 leading-relaxed mb-6 max-w-2xl text-lg">
                    {featuredEvent.excerpt}
                  </p>

                  {/* CTAs */}
                  <div className="flex items-center gap-6">
                    <span className="inline-flex items-center gap-2 text-brand-teal-light font-semibold text-lg">
                      <span>View Details</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                    {featuredEvent.registrationUrl && (
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-colors">
                        <span>Register</span>
                        <ExternalLink className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Other upcoming events */}
        {otherUpcoming.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherUpcoming.map((event, idx) => {
              const daysUntil = getDaysUntil(event.date);
              return (
                <Link
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  className="group relative rounded-[1.5rem] overflow-hidden bg-secondary-50 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${0.3 + 0.1 * idx}s` }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={event.image || getDefaultImage(idx + 1)}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brand-navy/80 via-brand-navy/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Category tag */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-brand-navy">
                        {event.category}
                      </span>
                    </div>

                    {/* Days countdown */}
                    {daysUntil >= 0 && daysUntil <= 60 && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-brand-teal text-white">
                          {getDaysLabel(daysUntil)}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3 text-secondary-500 text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDateRange(event.date, event.endDate)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-secondary-500 text-sm mb-3">
                      <MapPin className="h-3.5 w-3.5" />
                      {event.location}
                    </div>
                    <h3 className="font-display text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors leading-snug line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-secondary-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {event.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-brand-teal font-semibold text-sm group-hover:text-brand-teal-dark transition-colors">
                        View Details →
                      </span>
                      <div className="h-8 w-8 rounded-full bg-brand-teal/10 flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-all">
                        <ArrowUpRight className="h-4 w-4 text-brand-teal group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Event Types ──────────────────────────────────────────────────────────── */
function EventTypes() {
  const types = [
    {
      icon: Crown,
      title: "Power Tables",
      colorFrom: "from-amber-400",
      colorTo: "to-orange-500",
      badgeColor: "bg-amber-100 text-amber-700",
      description:
        "Invite-only. 25 leaders + 25 decision-makers. Structured conversations. Public commitment log. The highest-impact format we run.",
      cta: "Request an Invitation",
      ctaHref: "/contact",
    },
    {
      icon: Landmark,
      title: "Summits",
      colorFrom: "from-primary-400",
      colorTo: "to-primary-600",
      badgeColor: "bg-teal-100 text-teal-700",
      description:
        "Annual and regional flagship events. Accountability Report release. Keynote conversations. The biggest gathering of the GWTL community.",
      cta: "Register Interest",
      ctaHref: "/contact",
    },
    {
      icon: Handshake,
      title: "Partner Events",
      colorFrom: "from-violet-400",
      colorTo: "to-violet-600",
      badgeColor: "bg-violet-100 text-violet-700",
      description:
        "GWTL presence at global tech conferences. Curated gatherings for corporate sponsors and their leadership teams.",
      cta: "For Partners",
      ctaHref: "/sponsorship",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-secondary-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-800 mb-2">
            How Our Events Work
          </h2>
          <div className="w-20 h-1 rounded-full bg-linear-to-r from-primary-500 to-primary-300 mt-4" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {types.map((type, idx) => (
            <div
              key={type.title}
              className="group premium-card p-8 flex flex-col hover:-translate-y-2 transition-all duration-500 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.1 * idx}s` }}
            >
              {/* Icon */}
              <div
                className={`h-14 w-14 rounded-2xl flex items-center justify-center bg-linear-to-br ${type.colorFrom} ${type.colorTo} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <type.icon className="h-7 w-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold text-secondary-800 mb-4">
                {type.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed flex-1 mb-8">
                {type.description}
              </p>

              {/* CTA */}
              <Link
                href={type.ctaHref}
                className="inline-flex items-center gap-2 font-semibold text-primary-500 hover:text-primary-600 transition-colors group/link"
              >
                <span>{type.cta}</span>
                <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Past Events ──────────────────────────────────────────────────────────── */
function PastEvents() {
  const pastEvents = getPastEvents();

  if (pastEvents.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-800 mb-2">
              Recent Events
            </h2>
            <div className="w-20 h-1 rounded-full bg-linear-to-r from-primary-500 to-primary-300 mt-4" />
          </div>
          <div className="hidden sm:block">
            <span className="font-display text-6xl font-bold text-secondary-100">
              {String(pastEvents.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Past events list */}
        <div className="space-y-4">
          {pastEvents.map((event, idx) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 p-6 rounded-2xl bg-secondary-50 hover:bg-white hover:shadow-lg hover:shadow-black/5 transition-all duration-300 animate-fade-in-up opacity-0"
              style={{ animationDelay: `${0.05 * idx}s` }}
            >
              {/* Date block */}
              <div className="flex-shrink-0 w-28">
                <div className="text-sm font-semibold text-secondary-800">
                  {new Date(event.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </div>

              {/* Separator */}
              <div className="hidden sm:block w-px h-12 bg-secondary-200" />

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3 className="font-display text-lg font-bold text-brand-navy group-hover:text-brand-teal transition-colors">
                    {event.title}
                  </h3>
                  <span className="text-sm text-secondary-400">|</span>
                  <span className="text-sm text-secondary-500 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {event.location}
                  </span>
                </div>
                <p className="mt-1 text-secondary-500 text-sm italic line-clamp-1">
                  {event.excerpt}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex-shrink-0 hidden sm:block">
                <ArrowRight className="h-5 w-5 text-secondary-300 group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Newsletter Signup ────────────────────────────────────────────────────── */
function NewsletterSignup() {
  return (
    <section className="py-20 lg:py-28 bg-brand-navy relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-linear-to-br from-brand-teal/20 to-transparent blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-linear-to-tl from-brand-teal-light/15 to-transparent blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/10 mb-6">
          <Mail className="h-8 w-8 text-brand-teal-light" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Never Miss an Event
        </h2>
        <p className="text-white/60 text-lg mb-3 max-w-2xl mx-auto">
          Power Tables are announced with 4–6 weeks notice. Global Shift Summit
          invitations are limited. Sponsors get first access.
        </p>
        <p className="text-white/50 text-base mb-10 max-w-2xl mx-auto">
          Subscribe to be the first to know.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/50 transition-all bg-white/10 border border-white/10 text-white placeholder:text-white/40"
          />
          <button
            type="submit"
            className="magnetic-btn px-8 py-4 font-bold rounded-xl transition-all duration-300 bg-linear-to-r from-brand-teal to-brand-teal-light text-brand-navy hover:shadow-lg hover:shadow-brand-teal/30 flex items-center justify-center gap-2"
          >
            <span>Subscribe</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-6 text-white/30 text-sm">
          One email per month. No fluff.
        </p>
      </div>
    </section>
  );
}

/* ─── Page ─────────────────────────────────────────────────────────────────── */
export default function EventsPage() {
  return (
    <div className="pt-20 overflow-hidden">
      <EventsHero />
      <UpcomingEvents />
      <EventTypes />
      <PastEvents />
      <NewsletterSignup />
    </div>
  );
}
