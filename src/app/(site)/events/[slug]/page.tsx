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
  Users,
  Clock,
  Sparkles,
  Linkedin,
  Twitter,
  Facebook,
  Share2,
} from "lucide-react";
import { getAllEvents, getEventItem, getUpcomingEvents } from "@/lib/content";
import { Button } from "@/components/ui/button";

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

function getDefaultImage(slug: string): string {
  return "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop;"
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
      month: "long",
      year: "numeric",
    })}`;
  }

  return `${startDate.toLocaleDateString(
    "en-US",
    formatOptions
  )} - ${endDate.toLocaleDateString("en-US", formatOptions)}`;
}

function formatShortDate(dateString: string): { day: string; month: string; weekday: string } {
  const date = new Date(dateString);
  return {
    day: date.toLocaleDateString("en-US", { day: "numeric" }),
    month: date.toLocaleDateString("en-US", { month: "short" }).toUpperCase(),
    weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
  };
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
  const shortDate = formatShortDate(event.date);

  const relatedEvents = getUpcomingEvents()
    .filter((e) => e.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* ─── Hero ─── */}
      <section className="relative min-h-[60vh] flex flex-col">
        {/* Back navigation */}
        <div className="fixed top-26 left-4 right-0 z-30">
          {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> */}
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-navy/80 backdrop-blur-xl text-sm font-medium text-white hover:bg-brand-navy transition-all duration-300 border border-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
            All Events
          </Link>
          {/* </div> */}
        </div>

        {/* Full-bleed hero image */}
        <div className="absolute inset-0 pt-20 z-0">
          <Image
            src={event.image || getDefaultImage(slug)}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-brand-navy/50 to-brand-navy/20" />
          {/* Subtle noise texture */}
          <div className="absolute inset-0 noise-overlay" />
        </div>


        {/* Hero content */}
        <div className="relative flex-1 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20">
            <div className="grid lg:grid-cols-12 gap-8 items-end">
              {/* Left: Text content */}
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-in-up opacity-0 [animation-delay:0.1s]">
                  <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-teal/90 text-white backdrop-blur-xl">
                    {event.category}
                  </span>
                  {isPastEvent ? (
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-sm text-white/80 border border-white/20">
                      Past Event
                    </span>
                  ) : (
                    daysUntil > 0 && (
                      <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-navy/90 backdrop-blur-xl text-white/90 border border-white/20">
                        <Sparkles className="inline h-3 w-3 mr-1 -mt-0.5" />
                        {daysUntil === 1 ? "Tomorrow" : `${daysUntil} days to go`}
                      </span>
                    )
                  )}
                </div>

                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-6 animate-fade-in-up opacity-0 [animation-delay:0.2s]">
                  {event.title}
                </h1>

                <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl animate-fade-in-up opacity-0 [animation-delay:0.3s]">
                  {event.excerpt}
                </p>
              </div>

              {/* Right: Date card + CTA */}
              <div className="lg:col-span-4 flex lg:justify-end animate-fade-in-up opacity-0 [animation-delay:0.4s]">
                <div className="glass-card-dark rounded-3xl p-6 sm:p-8 w-full max-w-sm">
                  {/* Calendar visual */}
                  <div className="flex items-center gap-5 mb-6">
                    <div className="h-20 w-20 rounded-2xl bg-linear-to-br from-brand-teal to-brand-teal-light flex flex-col items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 leading-none">
                        {shortDate.month}
                      </span>
                      <span className="text-3xl font-bold text-white leading-none mt-0.5">
                        {shortDate.day}
                      </span>
                      <span className="text-[10px] font-medium text-white/60 leading-none mt-0.5">
                        {shortDate.weekday}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-white/60 text-sm mb-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        <Clock className="h-3.5 w-3.5" />
                        {formatDateRange(event.date, event.endDate)}
                      </div>
                    </div>
                  </div>

                  {event.registrationUrl && !isPastEvent ? (
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="magnetic-btn w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-brand-teal to-brand-teal-light text-brand-navy font-bold rounded-2xl hover:shadow-lg hover:shadow-brand-teal/30 transition-all text-base"
                    >
                      Register Now
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : isPastEvent ? (
                    <div className="w-full py-3.5 text-center rounded-2xl bg-white/5 border border-white/10">
                      <p className="text-white/50 text-sm font-medium">This event has ended</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ─── Main Content ─── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Article */}
            <div className="lg:col-span-7 xl:col-span-8">
              {/* Decorative line */}
              <div className="decorative-line mb-10 animate-line-grow" />

              <article
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: event.content }}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 xl:col-span-4">
              <div className="sticky top-36 space-y-6">
                {/* Event details card */}
                <div className="rounded-3xl bg-white border border-secondary-100 p-7 shadow-elegant">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-secondary-500 mb-5">
                    Event Details
                  </h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-2xl bg-linear-to-br from-brand-teal/10 to-brand-teal-light/10 flex items-center justify-center shrink-0">
                        <Calendar className="h-5 w-5 text-brand-teal" />
                      </div>
                      <div>
                        <div className="text-[11px] text-secondary-400 uppercase tracking-widest mb-1 font-medium">
                          When
                        </div>
                        <div className="text-brand-navy font-semibold text-sm leading-snug">
                          {formatDateRange(event.date, event.endDate)}
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-secondary-100" />

                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-2xl bg-linear-to-br from-brand-teal/10 to-brand-teal-light/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-brand-teal" />
                      </div>
                      <div>
                        <div className="text-[11px] text-secondary-400 uppercase tracking-widest mb-1 font-medium">
                          Where
                        </div>
                        <div className="text-brand-navy font-semibold text-sm leading-snug">
                          {event.location}
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-secondary-100" />

                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-2xl bg-linear-to-br from-brand-teal/10 to-brand-teal-light/10 flex items-center justify-center shrink-0">
                        <Users className="h-5 w-5 text-brand-teal" />
                      </div>
                      <div>
                        <div className="text-[11px] text-secondary-400 uppercase tracking-widest mb-1 font-medium">
                          Category
                        </div>
                        <div className="text-brand-navy font-semibold text-sm leading-snug">
                          {event.category}
                        </div>
                      </div>
                    </div>
                  </div>

                  {event.registrationUrl && !isPastEvent && (
                    <>
                      <div className="h-px bg-secondary-100 my-6" />
                      {/* <a
                        href={event.registrationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="magnetic-btn w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-linear-to-r from-brand-teal to-brand-teal-light text-brand-navy font-bold rounded-2xl hover:shadow-lg hover:shadow-brand-teal/30 transition-all"
                      >
                        Register Now
                        <ExternalLink className="h-4 w-4" />
                      </a> */}
                      <Link href={event.registrationUrl} target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="full"
                          size="xlg"
                        >
                          Details
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </Link>
                    </>
                  )}

                  {isPastEvent && (
                    <>
                      <div className="h-px bg-secondary-100 my-6" />
                      <div className="p-4 rounded-2xl bg-secondary-50 text-center">
                        <p className="text-secondary-500 text-sm">
                          This event has ended. Check out our upcoming events!
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Share card */}
                <div className="rounded-3xl bg-white border border-secondary-100 p-7 shadow-elegant">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-secondary-500 mb-4">
                    Share this event
                  </h3>
                  <div className="flex gap-3">
                    {[
                      { name: "LinkedIn", color: "#0077B5", icon: Linkedin },
                      { name: "Twitter", color: "#1DA1F2", icon: Twitter },
                      { name: "Facebook", color: "#1877F2", icon: Facebook },
                      { name: "Share", color: "#0077B5", icon: Share2 }
                    ].map((platform) => (
                      <button
                        key={platform.name}
                        className={`group h-10 w-10 rounded-xl bg-secondary-100 flex items-center justify-center transition-colors hover:bg-[${platform.color}]`}
                      >
                        {<platform.icon className={`h-4 w-4 text-secondary-600 group-hover:text-white transition-colors`} />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick nav for longer content */}
                <div className="rounded-3xl bg-linear-to-br from-brand-navy to-brand-navy-light p-7 text-white">
                  <h3 className="font-display text-lg font-bold mb-3">
                    Need Help?
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">
                    Have questions about this event? We&apos;re here to help.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-brand-teal-light text-sm font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Contact Us
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Related Events ─── */}
      {relatedEvents.length > 0 && (
        <section className="relative py-20 lg:py-28 overflow-hidden">
          {/* Bottom edge gradient for seamless transition */}
          <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-brand-teal/50 to-transparent" />
          {/* Background */}
          <div className="absolute inset-0 bg-brand-teal/2" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest text-brand-teal mb-3 block">
                  Don&apos;t Miss Out
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
                  More Upcoming Events
                </h2>
              </div>
              <Link
                href="/events"
                className="hidden sm:inline-flex items-center gap-2 text-brand-teal font-semibold hover:gap-3 transition-all duration-300"
              >
                View all events
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedEvents.map((relatedEvent, idx) => {
                const relDate = formatShortDate(relatedEvent.date);
                return (
                  <Link
                    key={relatedEvent.slug}
                    href={`/events/${relatedEvent.slug}`}
                    className="group block rounded-3xl bg-white overflow-hidden hover:shadow-elegant-lg transition-all duration-500"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {/* Card image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedEvent.image || getDefaultImage(relatedEvent.slug)}
                        alt={relatedEvent.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-brand-navy/60 to-transparent" />
                      {/* Date badge */}
                      <div className="absolute bottom-4 left-4">
                        <div className="h-14 w-14 rounded-xl bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center shadow-lg">
                          <span className="text-[10px] font-bold text-brand-teal uppercase leading-none">
                            {relDate.month}
                          </span>
                          <span className="text-lg font-bold text-brand-navy leading-none">
                            {relDate.day}
                          </span>
                        </div>
                      </div>
                      {/* Category badge */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-teal/90 text-white backdrop-blur-sm">
                          {relatedEvent.category}
                        </span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-6">
                      <h3 className="font-display text-lg font-bold text-brand-navy group-hover:text-brand-teal transition-colors duration-300 mb-2 line-clamp-2">
                        {relatedEvent.title}
                      </h3>
                      <p className="text-secondary-500 text-sm flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        {relatedEvent.location}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-10 text-center sm:hidden">
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

      {/* ─── Bottom CTA ─── */}
      <section className="relative py-24 overflow-hidden bg-brand-navy">
        {/* Atmospheric background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-linear-to-br from-brand-teal/15 to-transparent blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-linear-to-tl from-brand-teal-light/10 to-transparent blur-[100px]" />
          <div className="absolute inset-0 bg-pattern-dots opacity-10" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-bold uppercase tracking-widest text-brand-teal mb-4 animate-fade-in-up opacity-0 [animation-delay:0.1s]">
            Stay Connected
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
            Explore More Events
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Discover all our upcoming conferences, summits, and networking
            opportunities designed for women in tech.
          </p>
          <Link
            href="/events"
            className="magnetic-btn inline-flex items-center gap-3 px-10 py-5 bg-linear-to-r from-brand-teal to-brand-teal-light text-brand-navy font-bold rounded-2xl hover:shadow-lg hover:shadow-brand-teal/30 transition-all text-base"
          >
            View All Events
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
