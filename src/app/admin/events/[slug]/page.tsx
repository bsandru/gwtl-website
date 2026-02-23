"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import { WYSIWYGEditor } from "@/components/admin/Editor";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImageUpload } from "@/components/ui/image-upload";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getEvent, saveEvent } from "@/lib/actions";

interface EventFormData {
  title: string;
  excerpt: string;
  date: string;
  endDate: string;
  location: string;
  category: string;
  featured: boolean;
  image: string;
  registrationUrl: string;
  content: string;
}

export default function EditEventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();
  const isNew = slug === "new";

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<EventFormData>({
    title: "",
    excerpt: "",
    date: new Date().toISOString().split("T")[0],
    endDate: "",
    location: "",
    category: "Conference",
    featured: false,
    image: "",
    registrationUrl: "",
    content: "",
  });

  useEffect(() => {
    if (!isNew) {
      getEvent(slug)
        .then((data) => {
          if ("error" in data) {
            alert("Event not found");
            router.push("/admin/events");
            return;
          }
          setFormData({
            title: data.title || "",
            excerpt: data.excerpt || "",
            date: data.date || new Date().toISOString().split("T")[0],
            endDate: data.endDate || "",
            location: data.location || "",
            category: data.category || "Conference",
            featured: data.featured || false,
            image: data.image || "",
            registrationUrl: data.registrationUrl || "",
            content: data.content || "",
          });
          setLoading(false);
        })
        .catch(() => {
          alert("Failed to load event");
          router.push("/admin/events");
        });
    }
  }, [slug, isNew, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const result = await saveEvent(formData, isNew ? undefined : slug);

      if ("success" in result) {
        router.push("/admin/events");
      } else {
        alert(result.error || "Failed to save");
      }
    } catch {
      alert("Failed to save event");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 text-brand-teal animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/admin/events"
          className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {isNew ? "New Event" : "Edit Event"}
          </h1>
          <p className="text-muted-foreground mt-1">
            {isNew ? "Create a new event" : `Editing: ${formData.title}`}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Event Title
              </label>
              <Input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Event title"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Excerpt
              </label>
              <Textarea
                value={formData.excerpt}
                onChange={(e) =>
                  setFormData({ ...formData, excerpt: e.target.value })
                }
                rows={3}
                placeholder="Brief description of the event"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Event Details
              </label>
              <WYSIWYGEditor
                content={formData.content}
                onChange={(markdown) => setFormData({ ...formData, content: markdown })}
                placeholder="Write the event details..."
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 sticky top-6 self-start">
            <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Event Details</h3>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Event Dates
                </label>
                <DateRangePicker
                  from={formData.date}
                  to={formData.endDate}
                  onChange={(from, to) =>
                    setFormData({ ...formData, date: from, endDate: to })
                  }
                  placeholder="Select event dates"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Location
                </label>
                <Input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                  placeholder="City, Country"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Category
                </label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Conference">Conference</SelectItem>
                    <SelectItem value="Webinar">Webinar</SelectItem>
                    <SelectItem value="Workshop">Workshop</SelectItem>
                    <SelectItem value="Meetup">Meetup</SelectItem>
                    <SelectItem value="Summit">Summit</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Registration URL
                </label>
                <Input
                  type="url"
                  value={formData.registrationUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, registrationUrl: e.target.value })
                  }
                  placeholder="https://example.com/register"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Featured Image
                </label>
                <ImageUpload
                  value={formData.image}
                  onChange={(url) =>
                    setFormData({ ...formData, image: url })
                  }
                  placeholder="Click or drag event image"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) =>
                    setFormData({ ...formData, featured: e.target.checked })
                  }
                  className="w-5 h-5 rounded bg-input border-border text-brand-teal focus:ring-brand-teal"
                />
                <label htmlFor="featured" className="text-muted-foreground">
                  Featured event
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-brand-teal hover:bg-brand-teal-light disabled:bg-brand-teal/50 text-white font-medium rounded-xl transition-colors"
            >
              {saving ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Save className="w-5 h-5" />
              )}
              {saving ? "Saving..." : "Save Event"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
