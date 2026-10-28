import Link from "next/link";
import { Plus, Edit, Trash2, Building2 } from "lucide-react";
import { getAllTeamMembers } from "@/lib/content";
import { deleteTeamMember } from "@/lib/actions";

export default function AdminTeamPage() {
  const members = getAllTeamMembers();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Team</h1>
          <p className="text-muted-foreground mt-1">Manage team members</p>
        </div>
        <Link
          href="/admin/team/new"
          className="flex items-center gap-2 px-4 py-2 bg-brand-teal hover:bg-brand-teal-light text-white rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          New Member
        </Link>
      </div>

      <div className="bg-card border border-border rounded-2xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-4 text-muted-foreground font-medium">Name</th>
              <th className="text-left p-4 text-muted-foreground font-medium">Role</th>
              <th className="text-left p-4 text-muted-foreground font-medium">Company</th>
              <th className="text-left p-4 text-muted-foreground font-medium">Category</th>
              <th className="text-left p-4 text-muted-foreground font-medium">Order</th>
              <th className="text-right p-4 text-muted-foreground font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr
                key={member.slug}
                className="border-b border-border hover:bg-accent transition-colors"
              >
                <td className="p-4">
                  <Link
                    href={`/admin/team/${member.slug}`}
                    className="text-foreground hover:text-brand-teal font-medium"
                  >
                    {member.name}
                  </Link>
                </td>
                <td className="p-4 text-muted-foreground">{member.role}</td>
                <td className="p-4">
                  {member.company && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="w-4 h-4" />
                      {member.company}
                    </div>
                  )}
                </td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground capitalize">
                    {member.category}
                  </span>
                </td>
                <td className="p-4 text-muted-foreground">{member.order}</td>
                <td className="p-4">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/admin/team/${member.slug}`}
                      className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <form action={deleteTeamMember.bind(null, member.slug)}>
                      <button
                        type="submit"
                        className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
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

        {members.length === 0 && (
          <div className="p-12 text-center text-muted-foreground">
            No team members yet.{" "}
            <Link href="/admin/team/new" className="text-brand-teal hover:underline">
              Add your first team member
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
