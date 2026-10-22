"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { LuX as X, LuCircleCheck as Check, LuZoomIn as Zoom, LuArrowRight as ArrowRight } from "react-icons/lu";
import WhatsAppIcon from "../WhatsAppIcon";
import ContactActions from "../ui/ContactActions";
import { Stagger, StaggerItem } from "../ui/Reveal";
import { waLink } from "@/data/catalog";

export interface CatalogItem {
  id: string;
  name: string;
  badge: string;
  /** Small gold line above the title, e.g. origin or material. */
  meta?: string;
  subtitle?: string;
  image: string;
  desc: string;
  specs: { label: string; value: string }[];
  highlights: string[];
  waMsg: string;
}

/** Card grid + detail dialog shared by Sandstone, Semi-Precious and Stone Articles. */
export default function CatalogGrid({
  items,
  ctaPrefix,
  cols = "sm:grid-cols-2 lg:grid-cols-3",
}: {
  items: CatalogItem[];
  ctaPrefix: string;
  cols?: string;
}) {
  const [active, setActive] = useState<CatalogItem | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <Stagger className={`grid grid-cols-1 gap-5 sm:gap-6 ${cols}`}>
        {items.map((it) => (
          <StaggerItem key={it.id}>
            <article
              id={it.id}
              className="group flex h-full scroll-mt-32 flex-col overflow-hidden rounded-[1.6rem] border border-black/[0.06] bg-white shadow-[0_12px_34px_-20px_rgba(18,61,50,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_30px_56px_-24px_rgba(18,61,50,0.45)]"
            >
              <button
                type="button"
                onClick={() => setActive(it)}
                className="relative block aspect-[4/3] w-full overflow-hidden bg-forest"
                aria-label={`View details of ${it.name}`}
              >
                <Image
                  src={it.image}
                  alt={it.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-forest-deep/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold backdrop-blur">
                  {it.badge}
                </span>
                <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                  <Zoom className="h-4 w-4" />
                </span>
              </button>

              <div className="flex flex-1 flex-col p-5">
                {it.meta && <p className="text-[11px] font-bold uppercase tracking-wider text-gold-deep">{it.meta}</p>}
                <h3 className="mt-1 font-heading text-[16px] font-bold uppercase leading-snug tracking-wide text-ink">{it.name}</h3>
                <p className="mt-2 line-clamp-3 flex-1 text-[14px] leading-relaxed text-muted">{it.desc}</p>
                <div className="mt-5 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => setActive(it)}
                    className="flex min-h-[46px] flex-1 items-center justify-center gap-2 rounded-full bg-forest px-5 text-[14px] font-bold text-white transition-colors hover:bg-forest-soft active:scale-[0.97]"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4 text-gold" />
                  </button>
                  <a
                    href={waLink(it.waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp enquiry about ${it.name}`}
                    className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform hover:scale-105 active:scale-95"
                  >
                    <WhatsAppIcon className="h-[22px] w-[22px] fill-white" size={22} />
                  </a>
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[250] flex items-end justify-center sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={active.name}
          >
            <div className="absolute inset-0 bg-forest-deep/80 backdrop-blur-sm" onClick={() => setActive(null)} />
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="relative flex max-h-[94svh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[2rem] border border-gold/30 bg-forest shadow-2xl sm:rounded-[2rem]"
            >
              <div className="relative aspect-[16/11] w-full shrink-0 bg-forest-deep sm:aspect-[16/9]">
                <Image src={active.image} alt={active.name} fill sizes="768px" className="object-contain p-2" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-transparent to-transparent" />
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white active:scale-90"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="absolute inset-x-5 bottom-4 text-white">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-gold">{active.badge}{active.meta ? ` • ${active.meta}` : ""}</p>
                  <h3 className="mt-1 font-heading text-xl font-bold leading-tight sm:text-2xl">{active.name}</h3>
                  {active.subtitle && <p className="mt-0.5 text-[13px] text-white/75">{active.subtitle}</p>}
                </div>
              </div>

              <div className="space-y-5 overflow-y-auto p-5 text-white sm:p-7">
                <div>
                  <h4 className="font-heading text-[13px] font-bold uppercase tracking-wider text-gold">Overview</h4>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-white/80">{active.desc}</p>
                </div>
                <div>
                  <h4 className="font-heading text-[13px] font-bold uppercase tracking-wider text-gold">Specifications</h4>
                  <dl className="mt-2 grid gap-2 sm:grid-cols-2">
                    {active.specs.map((s) => (
                      <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
                        <dt className="text-[11px] font-semibold uppercase tracking-wider text-white/55">{s.label}</dt>
                        <dd className="mt-0.5 text-[14px] font-medium text-white">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <h4 className="font-heading text-[13px] font-bold uppercase tracking-wider text-gold">Highlights</h4>
                  <ul className="mt-2 space-y-2">
                    {active.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5 text-[14px] leading-relaxed text-white/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <ContactActions cta={`${ctaPrefix}: ${active.name}`} product={active.name} size="md" layout="row" className="pt-1" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
