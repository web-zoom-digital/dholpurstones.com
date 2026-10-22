"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SubNavItem {
  id: string;
  label: string;
}

/** Sticky chip bar that jumps between a page's sub-categories. */
export default function SubNav({ items }: { items: SubNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    items.forEach((i) => {
      const el = document.getElementById(i.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [items]);

  return (
    <div className="sticky top-[64px] z-40 border-b border-black/[0.06] bg-ivory/92 backdrop-blur-xl lg:top-[68px]">
      <div className="container-x">
        <div className="scrollbar-none flex gap-2 overflow-x-auto py-3 sm:justify-center">
          {items.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className={`relative shrink-0 rounded-full px-4 py-2 text-[13px] font-bold transition-colors ${
                active === i.id ? "text-forest" : "text-ink/60 hover:text-forest"
              }`}
            >
              {active === i.id && (
                <motion.span
                  layoutId="subnav-pill"
                  className="absolute inset-0 rounded-full bg-gold/25 ring-1 ring-gold/50"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{i.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
