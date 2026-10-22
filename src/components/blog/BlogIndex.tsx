"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { LuArrowUpRight as ArrowUpRight, LuClock as Clock } from "react-icons/lu";
import type { BlogPost } from "@/data/blogData";

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const categories = useMemo(() => ["All", ...Array.from(new Set(posts.map((p) => p.category)))], [posts]);
  const [active, setActive] = useState("All");
  const list = active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      <div className="scrollbar-none -mx-4 mb-8 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`relative shrink-0 rounded-full border px-4 py-2 text-[13px] font-bold transition-colors ${
              active === c ? "border-gold text-forest" : "border-black/10 bg-white text-ink/65 hover:border-gold/60"
            }`}
          >
            {active === c && (
              <motion.span layoutId="blog-filter" className="absolute inset-0 rounded-full bg-gold/30" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
            )}
            <span className="relative">{c}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-black/[0.06] bg-white shadow-[0_10px_30px_-18px_rgba(18,61,50,0.35)] transition-all hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_26px_50px_-22px_rgba(18,61,50,0.4)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-forest">
                  <Image
                    src={p.featuredImage}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-forest-deep/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold backdrop-blur">
                    {p.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-[15px] font-bold leading-snug tracking-wide text-ink">{p.title}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-[14px] leading-relaxed text-muted">{p.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-black/[0.06] pt-3 text-[13px] text-muted">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-gold-deep" />
                      {p.readTime}
                    </span>
                    <span className="flex items-center gap-1 font-bold text-forest group-hover:text-gold-deep">
                      Read <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
