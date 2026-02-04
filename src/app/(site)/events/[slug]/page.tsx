import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  MapPin,
  ExternalLink,
  Clock,
  Users,
  Share2,
} from "lucide-react";
import { getAllEvents, getEventItem, getUpcomingEvents } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const events = getAllEvents();
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventItem(slug);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: `${event.title} | GWTL Events`,
    description: event.excerpt,
  };
}

// Default images for events without images
const defaultImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=800&fit=crop",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1200&h=800&fit=crop",
];

function getDefaultImage(slug: string): string {
  const index = slug.length % defaultImages.length;
  return defaultImages[index];
}

function formatDateRange(start: string, end?: string): string {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : null;

  const formatOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  if (!endDate) {
    return startDate.toLocaleDateString("en-US", formatOptions);
  }

  const sameMonth = startDate.getMonth() === endDate.getMonth();
  const sameYear = startDate.getFullYear() === endDate.getFullYear();

  if (sameMonth && sameYear) {
    return `${startDate.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })} - ${endDate.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      year: "numeric",
    })}`;
  }

  return `${startDate.toLocaleDateString(
    "en-US",
    formatOptions
  )} - ${endDate.toLocaleDateString("en-US", formatOptions)}`;
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

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = await getEventItem(slug);

  if (!event) {
    notFound();
  }

  const eventDate = new Date(event.date);
  const isPastEvent = eventDate < new Date();
  const daysUntil = getDaysUntil(event.date);

  // Get related upcoming events (excluding current)
  const relatedEvents = getUpcomingEvents()
    .filter((e) => e.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative pt-20">
        {/* Back Link */}
        <div className="absolute top-24 left-0 right-0 z-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium text-brand-navy hover:bg-white transition-colors shadow-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              All Events
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[50vh] min-h-[400px] max-h-[600px]">
          <Image
            src={event.image || getDefaultImage(slug)}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-brand-navy/20" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-12">
              <div className="max-w-3xl">
                {/* Badges */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-teal text-white">
                    {event.category}
                  </span>
                  {isPastEvent ? (
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-secondary-500/80 backdrop-blur-sm text-white">
                      Past Event
                    </span>
                  ) : (
                    daysUntil > 0 && (
                      <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm text-white border border-white/30">
                        {daysUntil} days to go
                      </span>
                    )
                  )}
                </div>

                {/* Title */}
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  {event.title}
                </h1>

                {/* Excerpt */}
                <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                  {event.excerpt}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Bar */}
      <section className="bg-white border-b border-secondary-100 sticky top-16 z-20 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 py-4">
            {/* Date & Location */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-brand-navy">
                <div className="h-10 w-10 rounded-xl bg-brand-teal/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-brand-teal" />
                </div>
                <div>
                  <div className="text-xs text-secondary-500 uppercase tracking-wider">
                    Date
                  </div>
                  <div className="font-semibold text-sm">
                    {formatDateRange(event.date, event.endDate)}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-brand-navy">
                <div className="h-10 w-10 rounded-xl bg-brand-teal/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-brand-teal" />
                </div>
                <div>
                  <div className="text-xs text-secondary-500 uppercase tracking-wider">
                    Location
                  </div>
                  <div className="font-semibold text-sm">{event.location}</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="p-3 rounded-xl border border-secondary-200 text-secondary-600 hover:bg-secondary-50 transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
              {event.registrationUrl && !isPastEvent && (
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-teal to-brand-teal-light text-brand-navy font-bold rounded-xl hover:shadow-lg hover:shadow-brand-teal/30 transition-all"
                >
                  Register Now
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-2">
              <article
                className="prose prose-lg max-w-none 
                  prose-headings:font-display prose-headings:text-brand-navy prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-secondary-600 prose-p:leading-relaxed
                  prose-a:text-brand-teal prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-brand-navy prose-strong:font-semibold
                  prose-ul:text-secondary-600 prose-ul:my-4
                  prose-ol:text-secondary-600 prose-ol:my-4
                  prose-li:text-secondary-600 prose-li:my-1
                  prose-table:text-secondary-600
                  prose-th:text-brand-navy prose-th:font-semibold prose-th:bg-secondary-50 prose-th:p-3
                  prose-td:p-3 prose-td:border-secondary-200
                  prose-blockquote:border-l-brand-teal prose-blockquote:bg-secondary-50 prose-blockquote:rounded-r-xl prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic
                  prose-code:text-brand-teal prose-code:bg-brand-teal/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-normal prose-code:before:content-none prose-code:after:content-none"
                dangerouslySetInnerHTML={{ __html: event.content }}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-36 space-y-6">
                {/* Event Card */}
                <div className="rounded-2xl bg-white border border-secondary-100 p-6 shadow-sm">
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-4">
                    Event Details
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="h-5 w-5 text-brand-teal" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary-500 uppercase tracking-wider mb-1">
                          When
                        </div>
                        <div className="text-brand-navy font-medium">
                          {formatDateRange(event.date, event.endDate)}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-brand-teal" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary-500 uppercase tracking-wider mb-1">
                          Where
                        </div>
                        <div className="text-brand-navy font-medium">
                          {event.location}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                        <Users className="h-5 w-5 text-brand-teal" />
                      </div>
                      <div>
                        <div className="text-xs text-secondary-500 uppercase tracking-wider mb-1">
                          Category
                        </div>
                        <div className="text-brand-navy font-medium">
                          {event.category}
                        </div>
                      </div>
                    </div>
                  </div>

                  {event.registrationUrl && !isPastEvent && (
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 w-full magnetic-btn inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-brand-teal to-brand-teal-light text-brand-navy font-bold rounded-xl hover:shadow-lg hover:shadow-brand-teal/30 transition-all"
                    >
                      Register Now
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}

                  {isPastEvent && (
                    <div className="mt-6 p-4 rounded-xl bg-secondary-50 text-center">
                      <p className="text-secondary-500 text-sm">
                        This event has ended. Check out our upcoming events!
                      </p>
                    </div>
                  )}
                </div>

                {/* Share Card */}
                <div className="rounded-2xl bg-white border border-secondary-100 p-6 shadow-sm">
                  <h3 className="font-display text-lg font-bold text-brand-navy mb-4">
                    Share Event
                  </h3>
                  <div className="flex gap-3">
                    <button className="flex-1 p-3 rounded-xl border border-secondary-200 text-secondary-600 hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-all text-sm font-medium">
                      LinkedIn
                    </button>
                    <button className="flex-1 p-3 rounded-xl border border-secondary-200 text-secondary-600 hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-all text-sm font-medium">
                      Twitter
                    </button>
                    <button className="flex-1 p-3 rounded-xl border border-secondary-200 text-secondary-600 hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-all text-sm font-medium">
                      Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events */}
      {relatedEvents.length > 0 && (
        <section className="py-16 lg:py-20 bg-secondary-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-navy">
                More Upcoming Events
              </h2>
              <Link
                href="/events"
                className="hidden sm:inline-flex items-center gap-2 text-brand-teal font-semibold hover:gap-3 transition-all"
              >
                View all events
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedEvents.map((relatedEvent) => (
                <Link
                  key={relatedEvent.slug}
                  href={`/events/${relatedEvent.slug}`}
                  className="group block rounded-2xl bg-white p-6 hover:shadow-lg hover:shadow-black/5 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-brand-teal/10 text-brand-teal">
                      {relatedEvent.category}
                    </span>
                    <span className="text-sm text-secondary-400">
                      {new Date(relatedEvent.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-navy group-hover:text-brand-teal transition-colors mb-2">
                    {relatedEvent.title}
                  </h3>
                  <p className="text-secondary-500 text-sm flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {relatedEvent.location}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-brand-teal font-semibold"
              >
                View all events
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Back to Events CTA */}
      <section className="py-16 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-brand-teal/20 to-transparent blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Explore More Events
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Discover all our upcoming conferences, summits, and networking
            opportunities.
          </p>
          <Link
            href="/events"
            className="magnetic-btn inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-teal to-brand-teal-light text-brand-navy font-bold rounded-xl hover:shadow-lg hover:shadow-brand-teal/30 transition-all"
          >
            View All Events
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
