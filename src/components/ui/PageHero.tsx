"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuChevronRight as ChevronRight, LuHouse as HomeIcon } from "react-icons/lu";

interface Crumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  image: string;
  crumbs: Crumb[];
  stats?: { value: string; label: string }[];
  children?: React.ReactNode;
}

const ease = [0.16, 1, 0.3, 1] as const;

/** Shared hero for every inner page — same height, curve, type and spacing. */
export default function PageHero({
  eyebrow,
  title,
  accent,
  description,
  image,
  crumbs,
  stats,
  children,
}: PageHeroProps) {
  return (
    <section className="pattern-jali relative isolate overflow-hidden rounded-b-[2rem] bg-forest-deep sm:rounded-b-[3rem]">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-center" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-deep/80 via-forest-deep/70 to-forest-deep/95" />

      <div className="container-x pb-16 pt-12 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center justify-center gap-1.5 text-[12px] text-white/65 sm:justify-start"
        >
          <Link href="/" className="flex items-center gap-1 transition-colors hover:text-gold">
            <HomeIcon className="h-3.5 w-3.5" />
            Home
          </Link>
          {crumbs.map((c) => (
            <React.Fragment key={c.label}>
              <ChevronRight className="h-3.5 w-3.5 text-white/35" />
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-gold">
                  {c.label}
                </Link>
              ) : (
                <span className="font-semibold text-gold">{c.label}</span>
              )}
            </React.Fragment>
          ))}
        </motion.nav>

        <div className="mt-6 flex flex-col items-center text-center sm:items-start sm:text-left">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-forest-deep/60 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-gold backdrop-blur"
          >
            {eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-4 max-w-3xl font-heading text-[1.9rem] font-bold uppercase leading-[1.15] tracking-[0.03em] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.5)] sm:text-5xl"
          >
            {title} {accent && <span className="text-[#E8C987]">{accent}</span>}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease }}
            className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/80 sm:text-lg"
          >
            {description}
          </motion.p>
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.44, ease }}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              {children}
            </motion.div>
          )}
          {stats && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 flex flex-wrap justify-center gap-2.5 sm:justify-start"
            >
              {stats.map((s) => (
                <li
                  key={s.label}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur"
                >
                  <span className="font-heading text-sm font-bold text-gold">{s.value}</span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-white/75">{s.label}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </div>
      </div>
    </section>
  );
}
