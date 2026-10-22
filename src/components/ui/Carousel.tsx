"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

/**
 * Swipeable snap carousel on phones that also slides on its own, and a normal grid from `md` up.
 * Auto-slide pauses while the visitor is touching/hovering it or when it is off-screen.
 */
export default function Carousel({
  children,
  cols = "md:grid-cols-3",
  itemWidth = "w-[72%]",
  interval = 3200,
}: {
  children: React.ReactNode[];
  cols?: string;
  itemWidth?: string;
  interval?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  const nearest = useCallback(() => {
    const el = ref.current;
    if (!el) return 0;
    let best = 0;
    let bestDist = Infinity;
    Array.from(el.children).forEach((c, i) => {
      const d = Math.abs((c as HTMLElement).offsetLeft - el.scrollLeft - parseFloat(getComputedStyle(el).paddingLeft || "0"));
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    return best;
  }, []);

  const goTo = useCallback((i: number) => {
    const el = ref.current;
    const child = el?.children[i] as HTMLElement | undefined;
    if (!el || !child) return;
    const pad = parseFloat(getComputedStyle(el).paddingLeft || "0");
    el.scrollTo({ left: child.offsetLeft - pad, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || count < 2) return;
    let visible = false;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0.35 });
    io.observe(el);

    const timer = setInterval(() => {
      const mobile = window.matchMedia("(max-width: 767px)").matches;
      if (!mobile || !visible || paused.current || document.hidden) return;
      goTo((nearest() + 1) % count);
    }, interval);

    const pause = () => {
      paused.current = true;
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
    const resume = () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      resumeTimer.current = setTimeout(() => (paused.current = false), 4000);
    };
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume, { passive: true });
    el.addEventListener("pointerdown", pause);
    el.addEventListener("pointerup", resume);
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    return () => {
      clearInterval(timer);
      io.disconnect();
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("touchend", resume);
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("pointerup", resume);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, [count, interval, goTo, nearest]);

  return (
    <div>
      <div
        ref={ref}
        onScroll={() => setActive(nearest())}
        className={`scrollbar-none relative -mx-4 flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-4 pb-2 sm:-mx-6 sm:px-6 md:mx-0 md:grid md:gap-5 md:overflow-visible md:px-0 md:pb-0 ${cols}`}
      >
        {React.Children.map(children, (child) => (
          <div className={`${itemWidth} shrink-0 snap-start md:w-auto`}>{child}</div>
        ))}
      </div>
      {count > 1 && (
        <div className="mt-4 flex justify-center gap-1.5 md:hidden" aria-hidden>
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              tabIndex={-1}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${active === i ? "w-6 bg-gold" : "w-2 bg-forest/25"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
