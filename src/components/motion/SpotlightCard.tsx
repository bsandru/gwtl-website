"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Max tilt in degrees; 0 disables the 3D tilt */
  tilt?: number;
}

// Card with a cursor-following spotlight glow and a subtle 3D tilt.
export function SpotlightCard({ children, className = "", style, tilt = 6 }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.style.setProperty("--rx", `${(0.5 - y) * tilt}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * tilt}deg`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`spotlight-card ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
