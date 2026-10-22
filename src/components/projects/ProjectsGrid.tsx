"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { LuLandmark as Landmark, LuMapPin as MapPin } from "react-icons/lu";
import EnquiryButton from "../ui/EnquiryButton";
import { projects, type ProjectType } from "@/data/catalog";

const filters: ("All" | ProjectType)[] = ["All", "Government", "Spiritual", "Corporate", "Diplomatic", "Public & Residential"];

export default function ProjectsGrid() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list = useMemo(() => (active === "All" ? projects : projects.filter((p) => p.type === active)), [active]);

  return (
    <div>
      <div className="scrollbar-none -mx-4 mb-8 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`relative shrink-0 rounded-full border px-4 py-2 text-[13px] font-bold transition-colors ${
              active === f ? "border-gold text-forest" : "border-black/10 bg-white text-ink/65 hover:border-gold/60"
            }`}
          >
            {active === f && (
              <motion.span
                layoutId="project-filter"
                className="absolute inset-0 rounded-full bg-gold/30"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-black/[0.06] bg-white shadow-[0_10px_30px_-18px_rgba(18,61,50,0.35)] transition-shadow hover:border-gold/50 hover:shadow-[0_26px_50px_-22px_rgba(18,61,50,0.4)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-forest">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`${p.name}, ${p.place} — natural stone by Dholpurestones`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-forest via-forest-soft to-forest-deep bg-stone-grain">
                    <Landmark className="h-12 w-12 text-gold/60" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-forest-deep/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold backdrop-blur">
                  {p.type}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-[15px] font-bold uppercase leading-snug tracking-wide text-ink">{p.name}</h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-[13px] font-semibold text-gold-deep">
                  <MapPin className="h-3.5 w-3.5" />
                  {p.place}
                </p>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">{p.scope}</p>
                <div className="mt-5 border-t border-black/[0.06] pt-4">
                  <EnquiryButton
                    variant="forest"
                    className="w-full"
                    product={`Project similar to ${p.name}`}
                    cta={`Projects: ${p.name}`}
                  >
                    Plan a Similar Project
                  </EnquiryButton>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
