"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Loader2 } from "lucide-react";
import { WYSIWYGEditor } from "@/components/admin/Editor";
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
import { getTeamMemberAction, saveTeamMember } from "@/lib/actions";

interface TeamFormData {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  twitter: string;
  order: number;
  category: string;
  company: string;
  country: string;
  content: string;
}

export default function EditTeamMemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const router = useRouter();
  const isNew = slug === "new";

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<TeamFormData>({
    name: "",
    role: "",
    bio: "",
    image: "",
    linkedin: "",
    twitter: "",
    order: 999,
    category: "leadership",
    company: "",
    country: "",
    content: "",
  });

  useEffect(() => {
    if (!isNew) {
      getTeamMemberAction(slug)
        .then((data) => {
          if ("error" in data) {
            alert("Team member not found");
            router.push("/admin/team");
            return;
          }
          setFormData({
            name: data.name || "",
            role: data.role || "",
            bio: data.bio || "",
            image: data.image || "",
            linkedin: data.linkedin || "",
            twitter: data.twitter || "",
            order: data.order || 999,
            category: data.category || "leadership",
            company: data.company || "",
            country: data.country || "",
            content: data.content || "",
          });
          setLoading(false);
        })
        .catch(() => {
          alert("Failed to load team member");
          router.push("/admin/team");
        });
    }
  }, [slug, isNew, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const result = await saveTeamMember(formData, isNew ? undefined : slug);

      if ("success" in result) {
        router.push("/admin/team");
      } else {
        alert(result.error || "Failed to save");
      }
    } catch {
      alert("Failed to save team member");
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
          href="/admin/team"
          className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            {isNew ? "New Team Member" : "Edit Team Member"}
          </h1>
          <p className="text-muted-foreground mt-1">
            {isNew
              ? "Add a new team member"
              : `Editing: ${formData.name}`}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Full Name
              </label>
              <Input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="e.g. Jane Smith"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Role / Title
                </label>
                <Input
                  type="text"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  placeholder="e.g. CEO, Advisory Board Member"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Company
                </label>
                <Input
                  type="text"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="e.g. Google"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Short Bio
              </label>
              <Textarea
                value={formData.bio}
                onChange={(e) =>
                  setFormData({ ...formData, bio: e.target.value })
                }
                rows={3}
                placeholder="Brief bio for the team member"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Full Bio / Description
              </label>
              <WYSIWYGEditor
                content={formData.content}
                onChange={(markdown) =>
                  setFormData({ ...formData, content: markdown })
                }
                placeholder="Detailed bio content..."
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 sticky top-6 self-start">
            <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Member Details
              </h3>

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
                    <SelectItem value="leadership">Leadership</SelectItem>
                    <SelectItem value="advisory">Advisory Board</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Country
                </label>
                <Input
                  type="text"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  placeholder="e.g. Romania"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Display Order
                </label>
                <Input
                  type="number"
                  value={formData.order}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      order: parseInt(e.target.value) || 999,
                    })
                  }
                  placeholder="999"
                  min={0}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  LinkedIn URL
                </label>
                <Input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) =>
                    setFormData({ ...formData, linkedin: e.target.value })
                  }
                  placeholder="https://linkedin.com/in/..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Twitter URL
                </label>
                <Input
                  type="url"
                  value={formData.twitter}
                  onChange={(e) =>
                    setFormData({ ...formData, twitter: e.target.value })
                  }
                  placeholder="https://twitter.com/..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-2">
                  Profile Image
                </label>
                <ImageUpload
                  value={formData.image}
                  onChange={(url) =>
                    setFormData({ ...formData, image: url })
                  }
                  placeholder="Click or drag profile image"
                />
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
              {saving ? "Saving..." : "Save Member"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
