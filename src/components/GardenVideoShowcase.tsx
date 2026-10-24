"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  LuPlay as Play,
  LuPause as Pause,
  LuMaximize2 as Maximize,
  LuX as CloseIcon,
  LuChevronLeft as Left,
  LuChevronRight as Right,
  LuSparkles as Sparkles,
  LuShieldCheck as ShieldCheck,
  LuClock as Clock,
  LuCheck as Check,
  LuVolume2 as VolumeUp,
  LuVolumeX as VolumeMute,
  LuPhone as Phone,
} from "react-icons/lu";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import SectionHeader from "@/components/ui/SectionHeader";
import { gardenVideos, videoCategories, type GardenVideo } from "@/data/gardenVideos";

export default function GardenVideoShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedVideo, setSelectedVideo] = useState<GardenVideo>(gardenVideos[0]);
  const [modalVideoIndex, setModalVideoIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const mainVideoRef = useRef<HTMLVideoElement | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  // Filter videos based on category
  const filteredVideos =
    activeCategory === "all"
      ? gardenVideos
      : gardenVideos.filter((v) => v.category === activeCategory);

  // Synchronize main video play/pause
  const toggleMainPlay = () => {
    if (!mainVideoRef.current) return;
    if (mainVideoRef.current.paused) {
      mainVideoRef.current.play().catch(() => {});
      setIsPlaying(true);
    } else {
      mainVideoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMainMute = () => {
    if (!mainVideoRef.current) return;
    mainVideoRef.current.muted = !mainVideoRef.current.muted;
    setIsMuted(mainVideoRef.current.muted);
  };

  // Keyboard navigation for full-screen modal
  const handleModalNavigate = useCallback(
    (direction: 1 | -1) => {
      if (modalVideoIndex === null) return;
      const nextIdx =
        (modalVideoIndex + direction + gardenVideos.length) % gardenVideos.length;
      setModalVideoIndex(nextIdx);
    },
    [modalVideoIndex]
  );

  useEffect(() => {
    if (modalVideoIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalVideoIndex(null);
      if (e.key === "ArrowRight") handleModalNavigate(1);
      if (e.key === "ArrowLeft") handleModalNavigate(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [modalVideoIndex, handleModalNavigate]);

  useEffect(() => {
    if (mainVideoRef.current) {
      mainVideoRef.current.load();
      setIsPlaying(false);
    }
  }, [selectedVideo]);

  const modalVideo = modalVideoIndex !== null ? gardenVideos[modalVideoIndex] : null;

  return (
    <section
      id="stone-videos"
      className="section-y relative overflow-hidden bg-[#FAF8F3] border-b border-[#123D32]/10"
      aria-label="Stone Fountains and Water Features in Motion"
    >
      <div
        className="pointer-events-none absolute -left-48 top-20 h-96 w-96 rounded-full bg-[#C5A15B]/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-48 bottom-40 h-96 w-96 rounded-full bg-[#123D32]/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative z-10">
        <SectionHeader
          eyebrow="Craftsmanship In Motion"
          title="Live Water Fountains & Cascades in Motion"
          subtitle="Real-world water flow demonstrations of our hand-sculpted sandstone fountains, illuminated rain curtains, and architectural waterfalls — filmed live at our Sikandra ateliers and client farm house installations."
        />

        
        <div className="mb-14 overflow-hidden rounded-[2rem] transition-all duration-500">
          <div className="grid items-center gap-0 lg:grid-cols-12">
            <div className="relative bg-black lg:col-span-7 xl:col-span-8">
              
            </div>
          </div>
        </div>

        

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-5">
          {filteredVideos.map((video, idx) => {
            const isSelected = selectedVideo.id === video.id;
            return (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.05 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isSelected
                    ? "border-[#C5A15B] ring-2 ring-[#C5A15B]/50 shadow-md"
                    : "border-[#123D32]/10 hover:border-[#123D32]/30"
                }`}
              >
                {/* Poster & Play Overlay */}
                <div
                  className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden bg-black"
                  onClick={() => {
                    setSelectedVideo(video);
                    // scroll slightly to spotlight on mobile
                    if (window.innerWidth < 1024) {
                      const spotlight = document.getElementById("stone-videos");
                      spotlight?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <Image
                    src={video.posterSrc}
                    alt={video.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Gradient bottom overlay */}

                  {/* Badges on poster */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="rounded-md bg-[#123D32]/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#C5A15B] backdrop-blur-sm">
                      {video.categoryLabel.split(" ")[0]}
                    </span>
                  </div>

                  <div className="absolute top-2.5 right-2.5">
                    <span className="flex items-center gap-1 rounded-md bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white/90 backdrop-blur-sm">
                      <Clock className="h-3 w-3 text-[#C5A15B]" />
                      {video.duration}
                    </span>
                  </div>

                  {/* Center Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 ${
                        isSelected
                          ? "bg-[#C5A15B] text-[#123D32] ring-2 ring-white"
                          : "bg-white/90 text-[#123D32] group-hover:bg-[#C5A15B]"
                      }`}
                    >
                      <Play className="ml-0.5 h-5 w-5 fill-current" />
                    </span>
                  </div>

                  {/* Active playing indicator */}
                  
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-4">
                  <div>
                    <h5 className="font-heading text-sm font-bold uppercase tracking-tight text-[#1F2A24] line-clamp-1 group-hover:text-[#123D32]">
                      {video.title}
                    </h5>
                    <p className="mt-1 text-[11px] font-medium text-[#C5A15B] uppercase tracking-wider">
                      {video.stoneType}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-[#1F2A24]/75 line-clamp-2">
                      {video.description}
                    </p>
                  </div>

                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Cinematic Video Lightbox Modal */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            className="fixed inset-0 z-[350] flex items-center justify-center bg-black/95 p-3 backdrop-blur-md sm:p-6 lg:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Video theater player"
            onClick={() => setModalVideoIndex(null)}
          >
            {/* Top Close Button */}
            <button
              type="button"
              onClick={() => setModalVideoIndex(null)}
              className="absolute right-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#C5A15B] hover:text-[#123D32]"
              aria-label="Close theater"
            >
              <CloseIcon className="h-6 w-6" />
            </button>

            {/* Navigation Left */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleModalNavigate(-1);
              }}
              className="absolute left-2 sm:left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-[#C5A15B] hover:text-[#123D32]"
              aria-label="Previous video"
            >
              <Left className="h-6 w-6" />
            </button>

            {/* Navigation Right */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleModalNavigate(1);
              }}
              className="absolute right-2 sm:right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-[#C5A15B] hover:text-[#123D32]"
              aria-label="Next video"
            >
              <Right className="h-6 w-6" />
            </button>

            {/* Modal Dialog Content Container */}
            <div
              className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-[#0F1E19] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Responsive Video Container */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
                <video
                  ref={modalVideoRef}
                  key={modalVideo.videoSrc}
                  src={modalVideo.videoSrc}
                  poster={modalVideo.posterSrc}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Modal Metadata & CTA Bar */}
              <div className="flex flex-col justify-between gap-4 bg-gradient-to-b from-[#0F1E19] to-[#071310] p-4 sm:p-6 sm:flex-row sm:items-center">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A15B]">
                      {modalVideo.categoryLabel}
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="text-[11px] font-medium text-white/70">
                      {modalVideo.stoneType}
                    </span>
                  </div>
                  <h4 className="mt-1 font-heading text-lg sm:text-xl font-bold uppercase text-white">
                    {modalVideo.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-white/80 line-clamp-2">
                    {modalVideo.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/919414034432?text=${encodeURIComponent(
                      modalVideo.waMsg
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg transition hover:bg-[#1EBE5D]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    <span>Inquire via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedVideo(modalVideo);
                      setModalVideoIndex(null);
                    }}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs sm:text-sm font-bold text-white transition hover:bg-white hover:text-[#123D32]"
                  >
                    <span>Set in Page View</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Schema.org VideoObject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": gardenVideos.map((vid) => ({
              "@type": "VideoObject",
              "name": vid.title,
              "description": vid.description,
              "thumbnailUrl": [
                `https://www.dholpurstones.com${vid.posterSrc}`
              ],
              "uploadDate": "2026-10-24T12:00:00+05:30",
              "contentUrl": `https://www.dholpurstones.com${vid.videoSrc}`,
              "embedUrl": `https://www.dholpurstones.com/farmhouse-gardens#${vid.id}`
            }))
          })
        }}
      />
    </section>
  );
}
