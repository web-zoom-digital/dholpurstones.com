"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { LuChevronLeft as Left, LuChevronRight as Right, LuX as X, LuZoomIn as Zoom } from "react-icons/lu";

interface Photo {
  src: string;
  alt: string;
}

/** Masonry-style photo wall with a full-screen viewer (keyboard and swipe friendly). */
export default function PhotoGallery({ photos }: { photos: Photo[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, go]);

  return (
    <>
      <div className="columns-2 gap-3 sm:gap-4 lg:columns-3 xl:columns-4 [&>*]:mb-3 sm:[&>*]:mb-4">
        {photos.map((p, i) => (
          <motion.button
            key={p.src}
            type="button"
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
            whileTap={{ scale: 0.98 }}
            className="group relative block w-full break-inside-avoid overflow-hidden rounded-[1.25rem] bg-forest shadow-[0_10px_28px_-16px_rgba(18,61,50,0.45)]"
            aria-label={`View photo: ${p.alt}`}
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={800}
              height={1000}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            />
            <span className="absolute right-2.5 top-2.5 flex h-8 w-8 items-center justify-center rounded-full bg-forest-deep/70 text-gold opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
              <Zoom className="h-4 w-4" />
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[320] flex items-center justify-center bg-forest-deep/95 p-3 backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            onClick={() => setOpen(null)}
          >
            <button
              type="button"
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white sm:left-6"
              aria-label="Previous photo"
            >
              <Left className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); go(1); }}
              className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white sm:right-6"
              aria-label="Next photo"
            >
              <Right className="h-5 w-5" />
            </button>
            <motion.div
              key={open}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1);
                if (info.offset.x > 60) go(-1);
              }}
              className="relative h-full w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={photos[open].src} alt={photos[open].alt} fill sizes="100vw" className="object-contain" priority />
            </motion.div>
            <p className="absolute inset-x-0 bottom-4 px-14 text-center text-[13px] text-white/75">{photos[open].alt}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
