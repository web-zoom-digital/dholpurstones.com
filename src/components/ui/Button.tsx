"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export type Variant = "gold" | "forest" | "outline" | "outline-light" | "whatsapp" | "ghost";

const styles: Record<Variant, string> = {
  gold: "bg-gold text-forest hover:bg-[#d4b574] shadow-[0_6px_20px_-6px_rgba(197,161,91,0.7)]",
  forest: "bg-forest text-white hover:bg-forest-soft shadow-[0_6px_20px_-8px_rgba(18,61,50,0.6)]",
  outline: "bg-transparent text-forest border border-forest/30 hover:border-forest hover:bg-forest hover:text-white",
  "outline-light": "bg-white/10 text-white border border-white/30 backdrop-blur-md hover:bg-white hover:text-forest",
  whatsapp: "bg-[#25D366] text-white hover:bg-[#1fb957] shadow-[0_6px_20px_-6px_rgba(37,211,102,0.6)]",
  ghost: "bg-transparent text-forest hover:bg-forest/8",
};

export function buttonClasses(variant: Variant = "gold", size: "md" | "lg" = "md", extra = "") {
  return `inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-wide whitespace-nowrap transition-colors duration-300 ${
    size === "lg" ? "px-7 py-3.5 text-sm" : "px-5 py-3 text-[13px]"
  } ${styles[variant]} ${extra}`;
}

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: "md" | "lg";
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

const MotionLink = motion.create(Link);

/** Pill button used everywhere — same radius, weight and press feedback. */
export default function Button({
  href,
  children,
  variant = "gold",
  size = "md",
  external,
  className = "",
  onClick,
}: ButtonProps) {
  const cls = buttonClasses(variant, size, className);

  if (external || /^(https?:|tel:|mailto:)/.test(href)) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={cls}
        whileTap={{ scale: 0.96 }}
        whileHover={{ y: -2 }}
        onClick={onClick}
      >
        {children}
      </motion.a>
    );
  }
  return (
    <MotionLink href={href} className={cls} whileTap={{ scale: 0.96 }} whileHover={{ y: -2 }} onClick={onClick}>
      {children}
    </MotionLink>
  );
}
