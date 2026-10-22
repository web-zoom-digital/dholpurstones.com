"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuArrowUpRight as ArrowUpRight } from "react-icons/lu";

interface ImageCardProps {
  href: string;
  image: string;
  title: string;
  note?: string;
  badge?: string;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
  /** "overlay" puts text on the photo; "below" puts it in a white caption. */
  variant?: "overlay" | "below";
  fit?: "cover" | "contain";
  /** Show the description on phones too (use for wide carousel cards). */
  noteOnMobile?: boolean;
}

const MotionLink = motion.create(Link);

/** The one card used for every category, sub-category and product tile. */
export default function ImageCard({
  href,
  image,
  title,
  note,
  badge,
  aspect = "aspect-[4/5]",
  priority,
  sizes = "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw",
  variant = "overlay",
  fit = "cover",
  noteOnMobile = false,
}: ImageCardProps) {
  if (variant === "below") {
    return (
      <MotionLink
        href={href}
        whileHover={{ y: -6 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] bg-white border border-black/[0.06] shadow-[0_8px_28px_-14px_rgba(18,61,50,0.25)] hover:shadow-[0_22px_44px_-18px_rgba(18,61,50,0.35)] hover:border-gold/50 transition-shadow"
      >
        <div className={`relative ${aspect} overflow-hidden bg-ivory`}>
          <Image
            src={image}
            alt={title}
            fill
            priority={priority}
            sizes={sizes}
            className={`${fit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.06]`}
          />
          {badge && (
            <span className="absolute left-3 top-3 rounded-full bg-forest-deep/80 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-gold backdrop-blur">
              {badge}
            </span>
          )}
        </div>
        <div className="flex flex-1 items-start justify-between gap-3 p-4">
          <div className="min-w-0">
            <h3 className="font-heading text-[14px] sm:text-[15px] font-bold uppercase tracking-wide text-ink leading-snug">
              {title}
            </h3>
            {note && <p className="mt-1.5 text-[13px] leading-relaxed text-muted line-clamp-3">{note}</p>}
          </div>
          <span className="mt-0.5 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest text-gold transition-colors group-hover:bg-gold group-hover:text-forest sm:flex">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </MotionLink>
    );
  }

  return (
    <MotionLink
      href={href}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className={`group relative block overflow-hidden rounded-[1.4rem] bg-forest ${aspect} shadow-[0_10px_30px_-14px_rgba(18,61,50,0.5)] hover:shadow-[0_24px_48px_-18px_rgba(18,61,50,0.55)] transition-shadow`}
    >
      <Image
        src={image}
        alt={title}
        fill
        priority={priority}
        sizes={sizes}
        className={`${fit === "contain" ? "object-contain bg-ivory" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-[1.07]`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/25 to-transparent" />
      {badge && (
        <span className="absolute left-3 top-3 rounded-full bg-forest-deep/75 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-gold backdrop-blur-md border border-gold/30">
          {badge}
        </span>
      )}
      <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md border border-white/20 transition-all group-hover:bg-gold group-hover:text-forest">
        <ArrowUpRight className="h-4 w-4" />
      </span>
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <h3 className="font-heading text-[15px] sm:text-base font-bold uppercase tracking-wide text-white leading-snug">
          {title}
        </h3>
        {note && (
          <p className={`mt-1.5 text-[12.5px] sm:text-[13px] leading-snug text-white/75 ${noteOnMobile ? "line-clamp-2" : "hidden sm:line-clamp-2"}`}>{note}</p>
        )}
      </div>
    </MotionLink>
  );
}
