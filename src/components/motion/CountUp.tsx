"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Display value such as "1,200+", "€150M+", "30%" or "78¢" */
  value: string;
  /** Starting number; defaults to 0 (use e.g. 2000 for years) */
  from?: number;
  duration?: number;
  className?: string;
}

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

export function CountUp({ value, from = 0, duration = 1800, className }: CountUpProps) {
  const match = value.match(/^(\D*)([\d,.]+)(.*)$/);
  const prefix = match?.[1] ?? "";
  const raw = match?.[2] ?? "";
  const suffix = match?.[3] ?? "";
  const target = Number(raw.replace(/,/g, ""));
  const grouped = raw.includes(",");

  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || Number.isNaN(target)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          setCurrent(from + (target - from) * easeOutExpo(t));
          if (t < 1) frame = requestAnimationFrame(tick);
        };
        setCurrent(from);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, from, duration]);

  const format = (n: number) => {
    const rounded = Math.round(n);
    return grouped ? rounded.toLocaleString("en-US") : String(rounded);
  };

  return (
    <span ref={ref} className={className}>
      {current === null ? value : `${prefix}${format(current)}${suffix}`}
    </span>
  );
}
