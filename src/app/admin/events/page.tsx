import Link from "next/link";
import { Plus, Edit, Trash2, MapPin } from "lucide-react";
import { getAllEvents } from "@/lib/content";

export default function AdminEventsPage() {
  const events = getAllEvents();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Events</h1>
          <p className="text-white/50 mt-1">Manage events</p>
        </div>
        <Link
          href="/admin/events/new"
          className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Event
        </Link>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left p-4 text-white/50 font-medium">Event</th>
              <th className="text-left p-4 text-white/50 font-medium">Location</th>
              <th className="text-left p-4 text-white/50 font-medium">Date</th>
              <th className="text-left p-4 text-white/50 font-medium">Category</th>
              <th className="text-right p-4 text-white/50 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((item) => (
              <tr
                key={item.slug}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="p-4">
                  <Link
                    href={`/admin/events/${item.slug}`}
                    className="text-white hover:text-emerald-400 font-medium"
                  >
                    {item.title}
                  </Link>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2 text-white/50">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </div>
                </td>
                <td className="p-4 text-white/50">
                  {new Date(item.date).toLocaleDateString()}
                  {item.endDate && (
                    <span> - {new Date(item.endDate).toLocaleDateString()}</span>
                  )}
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/70">
                    {item.category}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/events/${item.slug}`}
                      className="p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <form action={`/api/admin/events/${item.slug}/delete`} method="POST">
                      <button
                        type="submit"
                        className="p-2 text-white/50 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {events.length === 0 && (
          <div className="p-12 text-center text-white/50">
            No events yet.{" "}
            <Link href="/admin/events/new" className="text-emerald-400 hover:underline">
              Create your first event
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
