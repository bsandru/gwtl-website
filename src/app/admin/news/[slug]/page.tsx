"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import { WYSIWYGEditor } from "@/components/admin/Editor";
import { DatePicker } from "@/components/ui/date-picker";
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

interface NewsFormData {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  featured: boolean;
  image: string;
  content: string;
}

export default function EditNewsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();
  const isNew = slug === "new";

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<NewsFormData>({
    title: "",
    excerpt: "",
    date: new Date().toISOString().split("T")[0],
    category: "News",
    featured: false,
    image: "",
    content: "",
  });

  useEffect(() => {
    if (!isNew) {
      fetch(`/api/admin/news/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert("Article not found");
            router.push("/admin/news");
            return;
          }
          setFormData({
            title: data.title || "",
            excerpt: data.excerpt || "",
            date: data.date || new Date().toISOString().split("T")[0],
            category: data.category || "News",
            featured: data.featured || false,
            image: data.image || "",
            content: data.content || "",
          });
          setLoading(false);
        })
        .catch(() => {
          alert("Failed to load article");
          router.push("/admin/news");
        });
    }
  }, [slug, isNew, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch(`/api/admin/news/${isNew ? "new" : slug}`, {
        method: isNew ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        router.push("/admin/news");
      } else {
        alert(result.error || "Failed to save");
      }
    } catch {
      alert("Failed to save article");
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
          href="/admin/news"
          className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {isNew ? "New Article" : "Edit Article"}
          </h1>
          <p className="text-muted-foreground mt-1">
            {isNew ? "Create a new news article" : `Editing: ${formData.title}`}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Title
              </label>
              <Input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder="Article title"
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
                placeholder="Brief description of the article"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Content
              </label>
              <WYSIWYGEditor
                content={formData.content}
                onChange={(markdown) => setFormData({ ...formData, content: markdown })}
                placeholder="Write your article content..."
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 sticky top-6 self-start">
            <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Settings</h3>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Date
                </label>
                <DatePicker
                  value={formData.date}
                  onChange={(value) =>
                    setFormData({ ...formData, date: value })
                  }
                  placeholder="Select date"
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
                    <SelectItem value="News">News</SelectItem>
                    <SelectItem value="Events">Events</SelectItem>
                    <SelectItem value="Announcements">Announcements</SelectItem>
                    <SelectItem value="Press">Press</SelectItem>
                    <SelectItem value="Partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
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
                  placeholder="Click or drag article image"
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
                  Featured article
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
              {saving ? "Saving..." : "Save Article"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
