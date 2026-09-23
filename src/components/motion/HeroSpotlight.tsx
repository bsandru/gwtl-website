"use client";

import { useEffect, useRef } from "react";

// Soft teal glow that trails the cursor across the hero section.
export function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const section = el?.parentElement;
    if (!el || !section || !window.matchMedia("(pointer: fine)").matches) return;

    let frame = 0;
    let x = 0.5, y = 0.3, tx = x, ty = y;

    const loop = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      el.style.setProperty("--sx", `${x * 100}%`);
      el.style.setProperty("--sy", `${y * 100}%`);
      frame = Math.abs(tx - x) + Math.abs(ty - y) > 0.001 ? requestAnimationFrame(loop) : 0;
    };
    const onMove = (e: PointerEvent) => {
      const rect = section.getBoundingClientRect();
      tx = (e.clientX - rect.left) / rect.width;
      ty = (e.clientY - rect.top) / rect.height;
      el.style.opacity = "1";
      if (!frame) frame = requestAnimationFrame(loop);
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700"
      style={{
        background:
          "radial-gradient(600px circle at var(--sx, 50%) var(--sy, 30%), rgba(0, 163, 163, 0.12), transparent 60%)",
      }}
    />
  );
}
