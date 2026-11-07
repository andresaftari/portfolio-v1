"use client";

import { useEffect, useState } from "react";

/** Tracks which top-level `<main>` section is currently in view. */
export function useActiveSection(initial = "home"): string {
  const [active, setActive] = useState(initial);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    for (const el of document.querySelectorAll("main > section[id]")) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
  return active;
}
