"use client";

import { useState, useEffect } from 'react';

const SECTION_IDS = ['story', 'work', 'craft', 'ai', 'connect'] as const;
export type SectionId = typeof SECTION_IDS[number];

export function useActiveSection(): SectionId {
  const [active, setActive] = useState<SectionId>('story');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { rootMargin: '-40% 0px -40% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}
