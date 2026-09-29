"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { contactHref, contactSubjectForPath } from "@/lib/contact";

/** Shared navigation preserves the referring page in Contact links. */
export function SiteLink({ href, ...props }: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      href={href === "/contact" ? contactHref(contactSubjectForPath(pathname)) : href}
    />
  );
}
