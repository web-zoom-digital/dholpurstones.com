import React from "react";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}

/** One heading style for every section, so type scale stays consistent. */
export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  className = "",
}: SectionHeaderProps) {
  const center = align === "center";
  return (
    <Reveal
      className={`mb-9 sm:mb-12 ${center ? "text-center mx-auto" : "text-left"} max-w-3xl ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] mb-3 ${
            tone === "dark" ? "text-gold" : "text-gold-deep"
          }`}
        >
          <span className="h-px w-6 bg-current opacity-60" />
          {eyebrow}
          {center && <span className="h-px w-6 bg-current opacity-60" />}
        </span>
      )}
      <h2
        className={`font-heading text-[1.65rem] leading-[1.2] sm:text-4xl lg:text-[2.6rem] font-bold uppercase tracking-[0.03em] ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3.5 text-[15px] sm:text-base leading-relaxed ${
            tone === "dark" ? "text-white/70" : "text-muted"
          } ${center ? "mx-auto" : ""} max-w-2xl`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
