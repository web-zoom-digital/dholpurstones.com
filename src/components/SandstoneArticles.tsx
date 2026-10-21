"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  LuArrowRight as ArrowRight,
  LuX as X,
  LuMaximize2 as Maximize2,
  LuSparkles as Sparkles
} from "react-icons/lu";
import WhatsAppIcon from "./WhatsAppIcon";

function AnimDiv({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("gcl-visible"), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`gcl-animate ${className}`}>
      {children}
    </div>
  );
}

const articles = [
  {
    id: "peacock",
    title: "PEACOCK SCULPTURE",
    desc: "Intricately detailed hand-carved natural sandstone sculpture for grand entrances, courtyards & luxury estate gardens.",
    tag: "CUSTOM / PROJECT-SPECIFIC WORK",
    image: "/assets/garg/peacock_sculpture.jpg",
    waMsg: "Hello Dholpurestones.com, I would like to inquire about the Hand-Carved Peacock Sandstone Sculpture.",
    details: "Masterfully hand-carved twin peacocks with elaborate plumage perched upon a blooming lotus pedestal, crafted from premium weather-resistant Dholpur sandstone.",
  },
  {
    id: "lantern",
    title: "STONE LANTERN",
    desc: "Decorative carved sandstone lantern lamp post with traditional jali lattice work for ambient estate and landscape illumination.",
    tag: "CUSTOM / PROJECT-SPECIFIC WORK",
    image: "/assets/garg/stone_lantern.jpg",
    waMsg: "Hello Dholpurestones.com, I would like to inquire about the Decorative Sandstone Lanterns & Lamp Posts.",
    details: "Monolithic vertical sandstone lighting post with perforated geometric jali patterns, engineered for integrated warm ambient lighting along grand walkways and gardens.",
  },
  {
    id: "lion",
    title: "LION SCULPTURE",
    desc: "Majestic monumental sandstone guardian lion sculpture carved from monolithic stone blocks for prestige gates and institutions.",
    tag: "CUSTOM / PROJECT-SPECIFIC WORK",
    image: "/assets/garg/lion_sculpture.jpg",
    waMsg: "Hello Dholpurestones.com, I would like to inquire about the Monumental Sandstone Lion Sculpture.",
    details: "Regal guardian lion perched upon a floral relief carved pedestal, symbolizing power, protection and architectural permanence.",
  },
];

export default function SandstoneArticles() {
  const [activeModal, setActiveModal] = useState<(typeof articles)[0] | null>(null);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  return (
    <section id="articles" className="bg-[#FAF7F2] py-10 sm:py-20 border-b border-black/6 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-[1280px] mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header Label */}
        <AnimDiv className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-black/8 mb-6 sm:mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C29B38]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold tracking-[0.16em] text-[#141A17] uppercase">
              DHOLPURESTONES.COM
            </span>
          </div>
          <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#C29B38] tracking-widest">
            04
          </span>
        </AnimDiv>

        {/* Section Title */}
        <AnimDiv delay={0} className="mb-6 sm:mb-10">
          <span className="text-[10px] sm:text-xs font-bold text-[#C29B38] uppercase tracking-[0.18em] block mb-1.5 sm:mb-2">
            Artisanal Heritage
          </span>
          <h2 className="font-['Cinzel',serif] text-xl sm:text-3xl lg:text-4xl font-bold text-[#141A17] uppercase tracking-wide mb-2 sm:mb-3">
            Sandstone Articles
          </h2>
          <div className="w-10 sm:w-12 h-1 bg-[#C29B38] rounded-full mb-2.5 sm:mb-3" />
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#68726E] max-w-2xl">
            Decorative sandstone articles and architectural elements for premium residences, hotels, gardens, temples and landmark projects.
          </p>
        </AnimDiv>

        {/* 3-Column Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {articles.map((a, i) => (
            <AnimDiv key={a.id} delay={i * 100}>
              <div className="bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-black/8 hover:border-[#C29B38]/60 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
                {/* Image */}
                <div
                  onClick={() => setActiveModal(a)}
                  className="relative aspect-square w-full overflow-hidden bg-[#F5F2EC] shrink-0 cursor-pointer"
                >
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0D1311]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="text-[9px] font-bold text-[#C29B38] uppercase tracking-widest">
                      {a.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm p-1.5 rounded-full text-white/90 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C29B38]" />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col flex-1 p-4 sm:p-5 justify-between">
                  <div>
                    <h3 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#141A17] uppercase tracking-wider mb-2 group-hover:text-[#134e3f] transition-colors">
                      {a.title}
                    </h3>
                    <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#68726E] leading-relaxed mb-4">
                      {a.desc}
                    </p>
                  </div>

                  {/* Direct WhatsApp Inquiry for this article */}
                  <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                    <a
                      href={`https://wa.me/919414945457?text=${encodeURIComponent(a.waMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#134e3f] hover:text-[#25D366] transition-colors"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" size={14} />
                      <span>Inquire on WhatsApp</span>
                    </a>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C29B38] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </AnimDiv>
          ))}
        </div>

        {/* Natural Stone Craftsmanship Banner */}
        <AnimDiv delay={250}>
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-black/8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <span className="font-['Cinzel',serif] text-[10px] font-bold text-[#C29B38] tracking-[0.2em] uppercase block mb-1">
                Custom Architectural Carving
              </span>
              <h3 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-[#141A17] uppercase tracking-wider mb-1">
                Natural Stone Craftsmanship
              </h3>
              <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-[#68726E] leading-relaxed max-w-2xl">
                The supplied references showcase carved stone work for entrances, gardens, temples, hospitality spaces and landmark architectural projects.
              </p>
            </div>
            <a
              href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20to%20discuss%20custom%20stone%20craftsmanship"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-[#0D1311] hover:bg-white font-bold text-xs uppercase px-5 py-2.5 rounded-full transition-colors shrink-0 shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#0D1311]" size={16} />
              <span>Commission Custom Work</span>
            </a>
          </div>
        </AnimDiv>

        {/* Running Footer Bar */}
        <div className="mt-10 sm:mt-12 pt-4 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] font-semibold text-[#68726E] uppercase tracking-wider text-center sm:text-left">
          <span>Natural Stone &bull; Mines &bull; Manufacturing &bull; Export &bull; Contracting</span>
          <span className="font-['Cinzel',serif] text-[#141A17]">DHOLPURESTONES.COM</span>
        </div>
      </div>

      {/* Lightbox / High-Res Image Modal */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-[#161D1A] border border-white/10 rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto text-white shadow-2xl relative scrollbar-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image */}
            <div className="relative h-60 sm:h-96 w-full bg-[#0D1311]">
              <Image
                src={activeModal.image}
                alt={activeModal.title}
                fill
                sizes="(max-width:768px) 100vw, 672px"
                className="object-contain"
              />
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C29B38]" />
                <span className="text-[10px] font-bold text-[#C29B38] uppercase tracking-[0.2em]">
                  {activeModal.tag}
                </span>
              </div>
              <h3 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold text-white uppercase tracking-wider mb-2">
                {activeModal.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-5">
                {activeModal.details}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10">
                <span className="text-[11px] text-white/60">
                  Direct Stone Master Artisan Consultation
                </span>
                <a
                  href={`https://wa.me/919414945457?text=${encodeURIComponent(activeModal.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] text-[#0D1311] font-bold text-xs uppercase px-5 py-2.5 rounded-full hover:bg-white transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-[#0D1311]" size={16} />
                  <span>Request Custom Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
