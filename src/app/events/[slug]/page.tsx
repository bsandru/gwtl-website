import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, MapPin, ExternalLink } from "lucide-react";
import { getAllEvents, getEventItem } from "@/lib/content";

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
    title: event.title,
    description: event.excerpt,
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = await getEventItem(slug);

  if (!event) {
    notFound();
  }

  const eventDate = new Date(event.date);
  const isPastEvent = eventDate < new Date();

  return (
    <div className="pt-20">
      {/* Back Link */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>
        </div>
      </div>

      {/* Event Header */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium">
              {event.category}
            </span>
            {isPastEvent && (
              <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-600 text-sm font-medium">
                Past Event
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {event.title}
          </h1>
          <p className="mt-4 text-lg text-gray-600">{event.excerpt}</p>
          
          {/* Event Meta */}
          <div className="mt-6 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="h-5 w-5 text-primary-600" />
              <span>
                {eventDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
                {event.endDate && (
                  <>
                    {" - "}
                    {new Date(event.endDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </>
                )}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="h-5 w-5 text-primary-600" />
              <span>{event.location}</span>
            </div>
          </div>

          {/* Registration Button */}
          {event.registrationUrl && !isPastEvent && (
            <div className="mt-8">
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
              >
                Register Now
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Event Content */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <article
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary-600 prose-strong:text-gray-900 prose-ul:text-gray-600 prose-li:text-gray-600 prose-table:text-gray-600"
            dangerouslySetInnerHTML={{ __html: event.content }}
          />
        </div>
      </section>

      {/* Back to Events */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors"
          >
            View All Events
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}
