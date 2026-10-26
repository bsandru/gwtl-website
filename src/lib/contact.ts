export const contactSubjects = {
  ambassador: "Become an Ambassador",
  "strategic-council": "Apply for the Strategic Council",
  "power-tables": "Power Tables — Apply / Register Interest",
  "sponsor-match-participant": "Sponsor Match — Apply as Participant",
  "sponsor-match-sponsor": "Sponsor Match — Apply as Sponsor",
  sponsorship: "Corporate Sponsorship",
  summit: "Summit — Register Early Interest",
  event: "Event Inquiry",
  newsletter: "Subscribe to Newsletter",
  team: "Join the Team",
  general: "General Inquiry",
} as const;

export type ContactSubject = keyof typeof contactSubjects;

export function resolveContactSubject(value: string | string[] | undefined): ContactSubject {
  return typeof value === "string" && Object.hasOwn(contactSubjects, value)
    ? (value as ContactSubject)
    : "general";
}

export function contactHref(subject: ContactSubject): string {
  return `/contact?subject=${subject}`;
}

// Multi-purpose pages use General Inquiry; their specific CTAs supply a subject.
export function contactSubjectForPath(pathname: string): ContactSubject {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/about/ambassadors") return "ambassador";
  if (path === "/about/strategic-council") return "strategic-council";
  if (path === "/sponsorship") return "sponsorship";
  if (path === "/events" || path.startsWith("/events/")) return "event";
  if (path === "/team") return "team";
  return "general";
}
