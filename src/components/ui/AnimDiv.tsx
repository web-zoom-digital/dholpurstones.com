"use client";

import React from "react";
import { Reveal } from "./Reveal";

/**
 * Drop-in replacement for the old per-file IntersectionObserver AnimDiv.
 * `delay` is in milliseconds (kept for compatibility with existing call sites).
 */
export default function AnimDiv({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal className={className} delay={Math.min(delay, 400) / 1000}>
      {children}
    </Reveal>
  );
}
