"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  LuX as X,
  LuCircleCheck as Check,
  LuZoomIn as Zoom,
  LuArrowRight as ArrowRight,
  LuChevronLeft as ChevronLeft,
  LuChevronRight as ChevronRight,
  LuImages as ImagesIcon,
} from "react-icons/lu";
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
  categoryGroup?: string;
  subtitle?: string;
  image: string;
  images?: string[];
  desc: string;
  specs: { label: string; value: string }[];
  highlights: string[];
  waMsg: string;
}

/** Card thumbnail with auto-slide when multiple images are present */
function CatalogCardImage({
  it,
  onOpen,
}: {
  it: CatalogItem;
  onOpen: (it: CatalogItem, initialIdx?: number) => void;
}) {
  const images = it.images && it.images.length > 0 ? it.images : [it.image];
  const [cardIdx, setCardIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isHovered) return;
    const timer = setInterval(() => {
      setCardIdx((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length, isHovered]);

  return (
    <div
      onClick={() => onOpen(it, cardIdx)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative block aspect-[4/3] w-full cursor-pointer overflow-hidden bg-forest text-left"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onOpen(it, cardIdx);
      }}
      aria-label={`View details of ${it.name}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={cardIdx}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <Image
            src={images[cardIdx]}
            alt={it.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        </motion.div>
      </AnimatePresence>
      <span className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 via-transparent to-transparent pointer-events-none" />
      <span className="absolute left-3 top-3 rounded-full bg-forest-deep/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-gold backdrop-blur">
        {it.badge}
      </span>

      {images.length > 1 && (
        <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-forest-deep/85 px-3 py-1 text-[11px] font-bold text-gold backdrop-blur border border-gold/30">
          <ImagesIcon className="h-3.5 w-3.5 text-gold" />
          <span>
            {cardIdx + 1} / {images.length}
          </span>
        </span>
      )}

      <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
        <Zoom className="h-4 w-4" />
      </span>
    </div>
  );
}

/** Card grid + detail dialog shared by Sandstone, Semi-Precious and Stone Articles. */
export default function CatalogGrid({
  items,
  ctaPrefix,
  cols = "sm:grid-cols-2 lg:grid-cols-3",
  filterCategories,
}: {
  items: CatalogItem[];
  ctaPrefix: string;
  cols?: string;
  filterCategories?: string[];
}) {
  const [active, setActive] = useState<CatalogItem | null>(null);
  const [activeImgIdx, setActiveImgIdx] = useState<number>(0);
  const [isModalPaused, setIsModalPaused] = useState<boolean>(false);
  const [selectedCat, setSelectedCat] = useState<string>("All");

  const visibleItems =
    selectedCat === "All"
      ? items
      : items.filter(
          (it) =>
            it.categoryGroup === selectedCat ||
            it.badge.toLowerCase().includes(selectedCat.toLowerCase()) ||
            (it.meta && it.meta.toLowerCase().includes(selectedCat.toLowerCase()))
        );

  const activeImages =
    active?.images && active.images.length > 0 ? active.images : active ? [active.image] : [];

  const openItem = (it: CatalogItem, initialIdx: number = 0) => {
    setActive(it);
    setActiveImgIdx(initialIdx);
    setIsModalPaused(false);
  };

  // Keyboard navigation inside modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActive(null);
      } else if (active && activeImages.length > 1) {
        if (e.key === "ArrowRight") {
          setActiveImgIdx((prev) => (prev + 1) % activeImages.length);
        } else if (e.key === "ArrowLeft") {
          setActiveImgIdx((prev) => (prev - 1 + activeImages.length) % activeImages.length);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, activeImages.length]);

  // Modal auto-slider: automatically changes photo every 3 seconds unless hovered
  useEffect(() => {
    if (!active || activeImages.length <= 1 || isModalPaused) return;
    const interval = setInterval(() => {
      setActiveImgIdx((prev) => (prev + 1) % activeImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [active, activeImages.length, isModalPaused]);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      {filterCategories && filterCategories.length > 0 && (
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {["All", ...filterCategories].map((cat) => {
            const count =
              cat === "All"
                ? items.length
                : items.filter(
                    (it) =>
                      it.categoryGroup === cat ||
                      it.badge.toLowerCase().includes(cat.toLowerCase()) ||
                      (it.meta && it.meta.toLowerCase().includes(cat.toLowerCase()))
                  ).length;
            const isSelected = selectedCat === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCat(cat)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  isSelected
                    ? "bg-forest text-gold shadow-md ring-2 ring-gold/40 scale-105"
                    : "bg-white/90 text-ink/75 hover:bg-white hover:text-ink border border-black/5 hover:border-gold/40 shadow-sm"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] rounded-full px-1.5 py-0.5 ${
                    isSelected ? "bg-gold/25 text-gold font-extrabold" : "bg-black/5 text-muted"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <Stagger key={selectedCat} className={`grid grid-cols-1 gap-5 sm:gap-6 ${cols}`}>
        {visibleItems.map((it) => (
          <StaggerItem key={it.id}>
            <article
              id={it.id}
              className="group flex h-full scroll-mt-32 flex-col overflow-hidden rounded-[1.6rem] border border-black/[0.06] bg-white shadow-[0_12px_34px_-20px_rgba(18,61,50,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_30px_56px_-24px_rgba(18,61,50,0.45)]"
            >
              <CatalogCardImage it={it} onOpen={openItem} />

              <div className="flex flex-1 flex-col p-5">
                {it.meta && (
                  <p className="text-[11px] font-bold uppercase tracking-wider text-gold-deep">
                    {it.meta}
                  </p>
                )}
                <h3 className="mt-1 font-heading text-[16px] font-bold uppercase leading-snug tracking-wide text-ink">
                  {it.name}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-[14px] leading-relaxed text-muted">
                  {it.desc}
                </p>
                <div className="mt-5 flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => openItem(it)}
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

      {/* Detail Dialog Modal with Auto-Slider */}
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
            <div
              className="absolute inset-0 bg-forest-deep/80 backdrop-blur-sm"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="relative flex max-h-[95svh] w-full max-w-4xl lg:max-w-5xl flex-col overflow-hidden rounded-t-[2rem] border border-gold/40 bg-forest shadow-2xl sm:rounded-[2rem]"
            >
              {/* Main Image Header (with Auto-Slider) */}
              <div
                className="relative h-[300px] sm:h-[420px] md:h-[480px] w-full shrink-0 bg-black/95 overflow-hidden"
                onMouseEnter={() => setIsModalPaused(true)}
                onMouseLeave={() => setIsModalPaused(false)}
                onTouchStart={() => setIsModalPaused(true)}
                onTouchEnd={() => setIsModalPaused(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImgIdx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeImages[activeImgIdx] || active.image}
                      alt={`${active.name} - image ${activeImgIdx + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1200px"
                      className="object-contain p-2 sm:p-4"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-transparent to-transparent" />

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="absolute right-3.5 top-3.5 z-30 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur transition hover:bg-gold hover:text-forest active:scale-90 shadow-lg"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Photo Counter & Auto-slide Badge */}
                {activeImages.length > 1 && (
                  <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full bg-black/75 px-3.5 py-1.5 text-xs font-bold text-gold backdrop-blur border border-gold/30 shadow-md">
                    <ImagesIcon className="h-4 w-4 text-gold" />
                    <span>Photo {activeImgIdx + 1} of {activeImages.length}</span>
                  </div>
                )}

                {/* Left/Right Arrows */}
                {activeImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImgIdx(
                          (prev) => (prev - 1 + activeImages.length) % activeImages.length
                        );
                      }}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur transition hover:bg-gold hover:text-forest active:scale-90 shadow-xl border border-white/10"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImgIdx((prev) => (prev + 1) % activeImages.length);
                      }}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur transition hover:bg-gold hover:text-forest active:scale-90 shadow-xl border border-white/10"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Title & Badges on Image Overlay */}
                <div className="absolute inset-x-5 bottom-4 sm:inset-x-7 sm:bottom-5 text-white">
                  <p className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-gold">
                    {active.badge}
                    {active.meta ? ` • ${active.meta}` : ""}
                  </p>
                  <h3 className="mt-1 font-heading text-xl font-bold leading-tight sm:text-2xl md:text-3xl">
                    {active.name}
                  </h3>
                  {active.subtitle && (
                    <p className="mt-0.5 text-[13px] sm:text-sm text-white/80">{active.subtitle}</p>
                  )}
                </div>
              </div>

              {/* Multiple Images Expanded Thumbnail Strip */}
              {activeImages.length > 1 && (
                <div className="flex flex-col gap-2.5 border-y border-white/15 bg-black/60 px-4 py-3.5 sm:px-6 sm:py-4 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-gold">
                      <ImagesIcon className="h-4 w-4 text-gold" />
                      All Photos ({activeImages.length}):
                    </span>
                  </div>
                  <div className="flex items-center gap-3 overflow-x-auto pb-1.5 pt-1 scrollbar-thin scrollbar-thumb-gold/30">
                    {activeImages.map((img, idx) => {
                      const isCur = activeImgIdx === idx;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setActiveImgIdx(idx);
                            setIsModalPaused(true);
                          }}
                          className={`group/thumb relative h-20 w-28 sm:h-24 sm:w-36 md:h-28 md:w-40 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                            isCur
                              ? "border-gold ring-4 ring-gold/45 shadow-[0_0_24px_rgba(197,161,91,0.5)] scale-105 opacity-100"
                              : "border-white/25 opacity-80 hover:opacity-100 hover:border-gold/60"
                          }`}
                          aria-label={`View photo ${idx + 1}`}
                        >
                          <Image
                            src={img}
                            alt={`${active.name} thumbnail ${idx + 1}`}
                            fill
                            sizes="(max-width: 640px) 120px, 160px"
                            className="object-cover transition-transform duration-300 group-hover/thumb:scale-105"
                          />
                          {isCur && (
                            <span className="absolute top-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-forest shadow-md">
                              <Check className="h-3.5 w-3.5 stroke-[3]" />
                            </span>
                          )}
                          <span className="absolute bottom-1.5 left-1.5 rounded-md bg-black/75 px-1.5 py-0.5 text-[10px] font-bold text-white/90 backdrop-blur">
                            #{idx + 1}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
