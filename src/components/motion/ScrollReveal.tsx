"use client";

import { useEffect } from "react";

// Entrance animations are plain CSS classes that start on page load. For anything
// below the fold that means the animation has already finished by the time the
// visitor scrolls to it. This component rewinds and pauses those animations after
// hydration and plays them when the element actually enters the viewport.
// Without JS the CSS animations simply run as before.
const SELECTOR = ".animate-fade-in-up, .animate-fade-in-scale, .animate-reveal-left, .animate-reveal-right";
const NAMES = new Set(["fadeInUp", "fadeInScale", "revealLeft", "revealRight"]);

function entranceAnimations(el: Element) {
  return el
    .getAnimations()
    .filter((a): a is CSSAnimation => a instanceof CSSAnimation && NAMES.has(a.animationName));
}

export function ScrollReveal() {
  useEffect(() => {
    const root = document.querySelector("main");
    if (!root || !("IntersectionObserver" in window) || !Element.prototype.getAnimations) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entranceAnimations(entry.target).forEach((a) => a.play());
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    const hold = (el: HTMLElement) => {
      if (el.dataset.revealed) return;
      el.dataset.revealed = "1";
      // Already on screen: let it keep playing untouched
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      const animations = entranceAnimations(el);
      if (!animations.length) return;
      animations.forEach((a) => {
        a.pause();
        a.currentTime = 0;
      });
      io.observe(el);
    };

    const scan = (scope: Element) => {
      if (scope.matches(SELECTOR)) hold(scope as HTMLElement);
      scope.querySelectorAll<HTMLElement>(SELECTOR).forEach(hold);
    };

    scan(root);

    // Pick up content rendered after client-side navigation
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) scan(node);
        });
      }
    });
    mo.observe(root, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
