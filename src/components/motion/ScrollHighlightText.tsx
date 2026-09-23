"use client";

import { useEffect, useRef } from "react";

interface ScrollHighlightTextProps {
  text: string;
  className?: string;
}

// Words light up one after another as the paragraph scrolls through the viewport.
export function ScrollHighlightText({ text, className }: ScrollHighlightTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const spans = Array.from(el.querySelectorAll<HTMLSpanElement>("[data-word]"));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      spans.forEach((s) => (s.style.opacity = "1"));
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the paragraph top sits at 85% of the viewport, 1 when its bottom reaches 45%
      const start = vh * 0.85;
      const end = vh * 0.45;
      const progress = Math.min(Math.max((start - rect.top) / (start - end + rect.height), 0), 1);
      const lit = progress * spans.length;
      spans.forEach((s, i) => {
        s.style.opacity = String(0.18 + 0.82 * Math.min(Math.max(lit - i, 0), 1));
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [text]);

  return (
    <p ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} data-word className="transition-opacity duration-300" style={{ opacity: 0.18 }}>
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
