import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  MapPin,
  Sparkles,
  Users,
  Globe,
  ExternalLink,
} from "lucide-react";
import { getUpcomingEvents, getPastEvents, getAllEvents } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events | GWTL",
  description:
    "Join GWTL at conferences, summits, and networking events worldwide. Connect with women tech leaders and advance your career.",
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

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

function formatFullDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    weekday: "short",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatDateRange(start: string, end?: string): string {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : null;

  if (!endDate) {
    return formatFullDate(start);
  }

  const sameMonth = startDate.getMonth() === endDate.getMonth();
  const sameYear = startDate.getFullYear() === endDate.getFullYear();

  if (sameMonth && sameYear) {
    return `${startDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    })} - ${endDate.getDate()}, ${endDate.getFullYear()}`;
  }

  return `${formatDate(start)} - ${formatDate(end || "")}, ${endDate.getFullYear()}`;
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

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();
  const allEvents = getAllEvents();

  // Get the main featured event and secondary featured
  const featuredUpcoming = upcomingEvents.filter((e) => e.featured);
  const mainFeatured = featuredUpcoming[0] || upcomingEvents[0];
  const otherUpcoming = upcomingEvents.filter((e) => e.slug !== mainFeatured?.slug);

  return (
    <div className="pt-10 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-24">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-[300px] -right-[200px] w-[700px] h-[700px] rounded-full bg-linear-to-br from-brand-teal/15 via-brand-teal-light/10 to-transparent blur-3xl" />
          <div className="absolute -bottom-[200px] -left-[200px] w-[500px] h-[500px] rounded-full bg-linear-to-tr from-brand-navy/5 to-transparent blur-3xl" />
          <div className="absolute inset-0 bg-pattern-dots opacity-20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/10 mb-6 animate-fade-in-up opacity-0 [animation-delay:0.1s]">
              <Sparkles className="h-4 w-4 text-brand-teal" />
              <span className="text-sm font-semibold text-brand-teal">
                Connect & Grow
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-brand-navy leading-[0.95] tracking-tight animate-fade-in-up opacity-0 [animation-delay:0.2s]">
              Upcoming{" "}
              <span className="gradient-text-teal">Events</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-secondary-600 leading-relaxed max-w-2xl animate-fade-in-up opacity-0 [animation-delay:0.3s]">
              Join the global community of women tech leaders at our conferences,
              summits, and networking events. Build connections that accelerate
              your career.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl mb-16 animate-fade-in-up opacity-0 [animation-delay:0.4s]">
            <div>
              <div className="font-display text-4xl font-bold text-brand-navy">
                {upcomingEvents.length}
              </div>
              <div className="text-secondary-500 text-sm mt-1">
                Upcoming Events
              </div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-brand-navy">
                {pastEvents.length}+
              </div>
              <div className="text-secondary-500 text-sm mt-1">
                Past Events
              </div>
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-brand-navy">
                15+
              </div>
              <div className="text-secondary-500 text-sm mt-1">
                Countries
              </div>
            </div>
          </div>

          {/* Featured Event */}
          {mainFeatured && (
            <div className="animate-fade-in-up opacity-0 [animation-delay:0.5s]">
              <Link
                href={`/events/${mainFeatured.slug}`}
                className="group relative block rounded-4xl overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-[400px] lg:h-[500px]">
                  <Image
                    src={mainFeatured.image || getDefaultImage(0)}
                    alt={mainFeatured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/60 to-brand-navy/20" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12">
                  {/* Badges */}
                  <div className="absolute top-6 left-6 flex items-center gap-3">
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal text-white shadow-lg">
                      {mainFeatured.category}
                    </span>
                    {mainFeatured.featured && (
                      <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white border border-white/20">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Days until */}
                  {getDaysUntil(mainFeatured.date) > 0 && (
                    <div className="absolute top-6 right-6">
                      <div className="px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                        <div className="text-3xl font-bold text-white">
                          {getDaysUntil(mainFeatured.date)}
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
                        {formatDateRange(mainFeatured.date, mainFeatured.endDate)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        {mainFeatured.location}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-4 group-hover:text-brand-teal-light transition-colors leading-tight">
                      {mainFeatured.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-white/70 leading-relaxed mb-6 max-w-2xl line-clamp-2 text-lg">
                      {mainFeatured.excerpt}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-6">
                      <span className="inline-flex items-center gap-2 text-brand-teal-light font-semibold text-lg">
                        <span>View Details</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                      </span>
                      {mainFeatured.registrationUrl && (
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
        </div>
      </section>

      {/* Other Upcoming Events */}
      {otherUpcoming.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy">
                  More Upcoming Events
                </h2>
                <p className="mt-2 text-secondary-600">
                  Don&apos;t miss these opportunities to connect and learn
                </p>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-6xl font-bold text-secondary-100">
                  {String(otherUpcoming.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Events Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherUpcoming.map((event, idx) => (
                <Link
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  className="group relative rounded-[1.5rem] overflow-hidden bg-secondary-50 hover:bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/10 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${0.1 * idx}s` }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={event.image || getDefaultImage(idx + 1)}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-brand-navy/80 via-brand-navy/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Category tag */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-brand-navy">
                        {event.category}
                      </span>
                    </div>

                    {/* Days countdown */}
                    {getDaysUntil(event.date) > 0 && getDaysUntil(event.date) <= 30 && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-brand-teal text-white">
                          {getDaysUntil(event.date)} days
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-3 text-secondary-500 text-sm mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDateRange(event.date, event.endDate)}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 text-secondary-500 text-sm mb-3">
                      <MapPin className="h-3.5 w-3.5" />
                      {event.location}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors leading-snug line-clamp-2">
                      {event.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-secondary-600 text-sm leading-relaxed line-clamp-2 mb-4">
                      {event.excerpt}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center justify-between">
                      <span className="text-brand-teal font-semibold text-sm group-hover:text-brand-teal-dark transition-colors">
                        View details
                      </span>
                      <div className="h-8 w-8 rounded-full bg-brand-teal/10 flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-all">
                        <ArrowUpRight className="h-4 w-4 text-brand-teal group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state for no upcoming events */}
      {upcomingEvents.length === 0 && (
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-secondary-100 mb-6">
              <Calendar className="h-10 w-10 text-secondary-400" />
            </div>
            <h2 className="font-display text-2xl font-bold text-brand-navy mb-3">
              No upcoming events
            </h2>
            <p className="text-secondary-500 max-w-md mx-auto mb-8">
              We&apos;re planning exciting events. Subscribe to our newsletter to be
              the first to know when new events are announced.
            </p>
          </div>
        </section>
      )}

      {/* Past Events */}
      {pastEvents.length > 0 && (
        <section className="py-20 lg:py-28 bg-secondary-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy">
                  Past Events
                </h2>
                <p className="mt-2 text-secondary-600">
                  Explore highlights from our previous gatherings
                </p>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-6xl font-bold text-secondary-200">
                  {String(pastEvents.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Past Events List */}
            <div className="space-y-4">
              {pastEvents.map((event, idx) => (
                <Link
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 p-6 rounded-2xl bg-white hover:shadow-lg hover:shadow-black/5 transition-all duration-300 animate-fade-in-up opacity-0"
                  style={{ animationDelay: `${0.05 * idx}s` }}
                >
                  {/* Date block */}
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="text-3xl font-bold text-secondary-300">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-sm text-secondary-400 uppercase tracking-wider">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </div>
                    <div className="text-xs text-secondary-300">
                      {new Date(event.date).getFullYear()}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-secondary-100 text-secondary-600 text-xs font-medium">
                        {event.category}
                      </span>
                      <span className="text-sm text-secondary-400 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-brand-navy group-hover:text-brand-teal transition-colors">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-secondary-500 text-sm line-clamp-1">
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
      )}

      {/* Newsletter CTA */}
      <section className="py-20 lg:py-28 bg-brand-navy relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-linear-to-br from-brand-teal/20 to-transparent blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-linear-to-tl from-brand-teal-light/15 to-transparent blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/10 mb-6">
            <Globe className="h-8 w-8 text-brand-teal-light" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Never Miss an Event
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about upcoming
            events, exclusive invitations, and early-bird registration.
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
        </div>
      </section>
    </div>
  );
}
