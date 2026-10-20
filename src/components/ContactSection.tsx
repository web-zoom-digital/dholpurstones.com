"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Award,
  Sparkles,
  Building2,
  ShieldCheck,
  Clock,
  Eye,
  Copy,
  Check,
  Compass,
  FileCheck,
  Globe,
  X,
} from "lucide-react";
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
      { threshold: 0.06 }
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

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    stoneType: "Luxury Farm House & Garden Landscaping",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [previewCard, setPreviewCard] = useState<{
    src: string;
    title: string;
    subtitle: string;
    entity: string;
    details: string[];
    phone?: string;
    email?: string;
  } | null>(null);

  const handleCopy = (text: string, label: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedText(label);
      setTimeout(() => setCopiedText(null), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[#FAF7F2]">
      {/* 1. Dark Dramatic Header */}
      <div className="bg-[#0D1311] text-white py-14 sm:py-20 px-4 text-center border-b border-white/8 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C29B38]/10 rounded-full blur-3xl pointer-events-none" />
        <AnimDiv delay={0} className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C29B38]/15 border border-[#C29B38]/30 mb-3">
            <Sparkles className="w-3 h-3 text-[#C29B38]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold text-[#C29B38] tracking-[0.25em] uppercase">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="font-['Cinzel',serif] font-bold text-white uppercase tracking-[0.08em] leading-tight text-3xl sm:text-4xl lg:text-5xl">
            Let&apos;s Build With Stone
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-white/70 tracking-wider uppercase mt-3">
            Connect for stone inquiries, tenders, export supplies &amp; architectural collaborations.
          </p>
        </AnimDiv>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Section Header Label */}
        <AnimDiv className="flex items-center justify-between pb-3 border-b border-black/8 mb-8 sm:mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C29B38]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold tracking-[0.16em] text-[#141A17] uppercase">
              DHOLPURESTONES.COM
            </span>
          </div>
          <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#C29B38] tracking-widest">
            08
          </span>
        </AnimDiv>

        {/* =========================================================================
            2. ULTRA-LUXURY COMPANY CREDENTIALS & STATUTORY REGISTRY (Estd. 1953)
            ========================================================================= */}
        <div className="mb-14 sm:mb-20">
          {/* Section Header */}
          <AnimDiv delay={40} className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C29B38]/10 border border-[#C29B38]/30 mb-3.5 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C29B38]" />
              <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold text-[#C29B38] tracking-[0.22em] uppercase">
                Official Identification &bull; Estd. 1953
              </span>
            </div>

            <h3 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141A17] uppercase tracking-wide">
              Company Credentials
            </h3>

            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#C29B38] to-transparent rounded-full mx-auto my-3" />

            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#4A5550] max-w-2xl mx-auto leading-relaxed">
              Official statutory lineage incorporating <span className="font-semibold text-[#141A17]">Saroj Stone Industries</span> (Pioneer Entity Estd. 1953) and <span className="font-semibold text-[#141A17]">Garg Corporation Ltd.</span> (Govt. Awarded Director Arvind Garg), operating proprietary Sarmathura quarries, automated CNC hubs, and turnkey global export infrastructure.
            </p>
          </AnimDiv>

          {/* Dual Executive Credential Dossiers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-8 sm:mb-10">
            {/* Dossier 1: Garg Corporation Ltd. */}
            <AnimDiv delay={80}>
              <div className="bg-white rounded-3xl overflow-hidden border border-[#C29B38]/30 shadow-lg hover:shadow-2xl hover:border-[#C29B38] transition-all duration-300 flex flex-col h-full group relative">
                {/* Decorative Top Accent Glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C29B38] via-[#E0BA55] to-[#134e3f]" />

                {/* Header Banner */}
                <div className="bg-gradient-to-r from-[#134e3f] via-[#0f3d32] to-[#0A261F] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#C29B38]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#C29B38]/20 border border-[#C29B38]/40 flex items-center justify-center shrink-0 shadow-inner">
                      <Building2 className="w-5 h-5 text-[#E0BA55]" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#C29B38] block">
                        FLAGSHIP CONTRACTING &bull; EXPORTS
                      </span>
                      <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                        Garg Corporation Ltd.
                      </h4>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-[#C29B38]/20 border border-[#C29B38]/40 px-3 py-1 rounded-full text-[10px] font-bold text-[#FAF7F2] uppercase tracking-wider shadow-xs">
                    <Award className="w-3.5 h-3.5 text-[#E0BA55]" />
                    <span className="hidden sm:inline">Govt. Awarded</span>
                  </span>
                </div>

                {/* Card Showcase Matting */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#FAF7F2]/60 to-white">
                  {/* Interactive Visiting Card Frame */}
                  <div
                    onClick={() =>
                      setPreviewCard({
                        src: "/assets/garg/card_gcl.jpg",
                        title: "Garg Corporation Ltd.",
                        subtitle: "Arvind Garg (Director) • Awarded by Govt. of India",
                        entity: "Corporate Flagship & Global Export House",
                        phone: "+91 94149 45457 / +91 90573 55232",
                        email: "gargcorporationltd@gmail.com",
                        details: [
                          "Works: B P Garg & Sons, Near RAC line, Mothiyapura road, Sarmathura 328026 Dholpur, Raj. INDIA",
                          "Director Mr. Arvind Garg awarded by Government of India for Natural Stone Excellence",
                          "Direct quarry concessions in Sarmathura & Sikandra (Dholpur, Rajasthan)",
                          "Automated 8-axis CNC processing & international ISPM-15 seaworthy crated logistics",
                          "Registered corporate vendor for embassies, state assemblies & iconic temple trusts",
                        ],
                      })
                    }
                    className="relative aspect-[1.85/1] w-full bg-white rounded-2xl p-2.5 sm:p-3 border border-black/10 shadow-sm group-hover:shadow-md group-hover:border-[#C29B38]/60 transition-all duration-300 cursor-pointer overflow-hidden mb-5"
                  >
                    {/* Corner Crosshairs */}
                    <span className="absolute top-2 left-2 text-[10px] text-[#C29B38] font-mono pointer-events-none">+</span>
                    <span className="absolute top-2 right-2 text-[10px] text-[#C29B38] font-mono pointer-events-none">+</span>
                    <span className="absolute bottom-2 left-2 text-[10px] text-[#C29B38] font-mono pointer-events-none">+</span>
                    <span className="absolute bottom-2 right-2 text-[10px] text-[#C29B38] font-mono pointer-events-none">+</span>

                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#FAF7F2]">
                      <Image
                        src="/assets/garg/card_gcl.jpg"
                        alt="Garg Corporation Ltd Business Card - Arvind Garg"
                        fill
                        sizes="(max-width:640px) 100vw, 50vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Interactive Inspect Hover Badge */}
                    <div className="absolute inset-0 bg-[#0D1311]/55 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white">
                      <div className="bg-[#134e3f] border border-[#C29B38] text-white px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                        <Eye className="w-3.5 h-3.5 text-[#C29B38]" />
                        <span>Inspect Official Card</span>
                      </div>
                    </div>
                  </div>

                  {/* Executive Credentials Details */}
                  <div className="space-y-3 pt-1">
                    {/* Director Badge */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-black/6 shadow-2xs">
                      <div>
                        <span className="text-[9px] uppercase font-bold tracking-widest text-[#68726E] block">
                          MANAGING LEADERSHIP
                        </span>
                        <span className="font-['Cinzel',serif] text-sm font-bold text-[#141A17] block">
                          Mr. Arvind Garg
                        </span>
                        <span className="text-[10px] text-[#134e3f] font-semibold">
                          Awarded by Govt. of India &bull; Director
                        </span>
                      </div>
                      <a
                        href="https://wa.me/919414945457?text=Hello%20Arvind%20Garg%20ji,%20I%20am%20contacting%20you%20from%20Dholpurestones.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/10 text-[#134e3f] hover:bg-[#25D366] hover:text-white transition-all text-[11px] font-bold"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366] group-hover:fill-white" size={14} />
                        <span>Direct WhatsApp</span>
                      </a>
                    </div>

                    {/* Contact & Email Bar */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-white border border-black/6 flex items-center justify-between">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <Phone className="w-3.5 h-3.5 text-[#C29B38] shrink-0" />
                          <div className="flex flex-col min-w-0">
                            <a
                              href="tel:+919414945457"
                              className="font-bold text-[#141A17] hover:text-[#134e3f] text-[11px] truncate leading-tight"
                            >
                              +91 94149 45457
                            </a>
                            <a
                              href="tel:+919057355232"
                              className="font-medium text-[#4A5550] hover:text-[#134e3f] text-[10px] truncate leading-tight"
                            >
                              +91 90573 55232
                            </a>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy("+919414945457", "gcl-phone")}
                          className="text-[10px] font-bold text-[#134e3f] hover:text-[#C29B38] p-1 shrink-0 cursor-pointer"
                          title="Copy Primary Phone Number"
                        >
                          {copiedText === "gcl-phone" ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white border border-black/6 flex items-center justify-between">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <Mail className="w-3.5 h-3.5 text-[#C29B38] shrink-0" />
                          <span className="font-semibold text-[#141A17] text-[11px] truncate">
                            gargcorporationltd@gmail.com
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy("gargcorporationltd@gmail.com", "gcl-email")}
                          className="text-[10px] font-bold text-[#134e3f] hover:text-[#C29B38] p-1 shrink-0 cursor-pointer"
                          title="Copy Email"
                        >
                          {copiedText === "gcl-email" ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Operational Scope */}
                    <div className="pt-2 border-t border-black/6 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] bg-[#FAF7F2] text-[#134e3f] font-bold px-2.5 py-1 rounded-md border border-black/6">
                        CNC 8-Axis Hub
                      </span>
                      <span className="text-[10px] bg-[#FAF7F2] text-[#134e3f] font-bold px-2.5 py-1 rounded-md border border-black/6">
                        ISPM-15 Timber Crating
                      </span>
                      <span className="text-[10px] bg-[#FAF7F2] text-[#134e3f] font-bold px-2.5 py-1 rounded-md border border-black/6">
                        Export to 40+ Ports
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimDiv>

            {/* Dossier 2: Saroj Stone Industries */}
            <AnimDiv delay={160}>
              <div className="bg-white rounded-3xl overflow-hidden border border-black/10 shadow-lg hover:shadow-2xl hover:border-[#C29B38] transition-all duration-300 flex flex-col h-full group relative">
                {/* Decorative Top Accent Glow */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#141A17] via-[#C29B38] to-[#141A17]" />

                {/* Header Banner */}
                <div className="bg-gradient-to-r from-[#141A17] via-[#1D2521] to-[#25302A] text-white p-5 sm:p-6 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#C29B38]/20 border border-[#C29B38]/40 flex items-center justify-center shrink-0 shadow-inner">
                      <Compass className="w-5 h-5 text-[#E0BA55]" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#C29B38] block">
                        FOUNDATIONAL QUARRY HERITAGE &bull; ESTD. 1953
                      </span>
                      <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                        Saroj Stone Industries
                      </h4>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3 py-1 rounded-full text-[10px] font-bold text-[#FAF7F2] uppercase tracking-wider shadow-xs">
                    <Clock className="w-3.5 h-3.5 text-[#C29B38]" />
                    <span className="hidden sm:inline">Estd. 1953 (70+ Yrs)</span>
                  </span>
                </div>

                {/* Card Showcase Matting */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#FAF7F2]/60 to-white">
                  {/* Interactive Visiting Card Frame */}
                  <div
                    onClick={() =>
                      setPreviewCard({
                        src: "/assets/garg/card_saroj.jpg",
                        title: "Saroj Stone Industries",
                        subtitle: "The Pioneer Company of Natural Stone (Estd. 1953)",
                        entity: "Original Quarry Leaseholder & Landmark Contractor",
                        phone: "+91 94149 45457 / +91 90573 55232",
                        email: "kamala_stone@yahoo.co.in",
                        details: [
                          "Works: B P Garg & Sons, Near RAC line, Mothiyapura road, Sarmathura 328026 Dholpur, Raj. INDIA",
                          "Established in 1953 — Pioneer in authentic Dholpur Sandstone quarrying for 70+ years",
                          "Historical direct supplier to New Delhi Parliament House & national monumental projects",
                          "Associated stone processing and export arm: Kamala Stone",
                          "Mines Owner • Manufacturer • Contractor for Natural Stones Across The Globe",
                        ],
                      })
                    }
                    className="relative aspect-[1.85/1] w-full bg-white rounded-2xl p-2.5 sm:p-3 border border-black/10 shadow-sm group-hover:shadow-md group-hover:border-[#C29B38]/60 transition-all duration-300 cursor-pointer overflow-hidden mb-5"
                  >
                    {/* Corner Crosshairs */}
                    <span className="absolute top-2 left-2 text-[10px] text-[#C29B38] font-mono pointer-events-none">+</span>
                    <span className="absolute top-2 right-2 text-[10px] text-[#C29B38] font-mono pointer-events-none">+</span>
                    <span className="absolute bottom-2 left-2 text-[10px] text-[#C29B38] font-mono pointer-events-none">+</span>
                    <span className="absolute bottom-2 right-2 text-[10px] text-[#C29B38] font-mono pointer-events-none">+</span>

                    <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#FAF7F2]">
                      <Image
                        src="/assets/garg/card_saroj.jpg"
                        alt="Saroj Stone Industries Business Card"
                        fill
                        sizes="(max-width:640px) 100vw, 50vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Interactive Inspect Hover Badge */}
                    <div className="absolute inset-0 bg-[#0D1311]/55 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white">
                      <div className="bg-[#134e3f] border border-[#C29B38] text-white px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                        <Eye className="w-3.5 h-3.5 text-[#C29B38]" />
                        <span>Inspect Official Card</span>
                      </div>
                    </div>
                  </div>

                  {/* Pioneer Lineage Details */}
                  <div className="space-y-3 pt-1">
                    {/* Heritage Tag */}
                    <div className="p-3 rounded-xl bg-white border border-black/6 shadow-2xs">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-[#68726E] block">
                        LEGACY RECOGNITION
                      </span>
                      <span className="font-['Cinzel',serif] text-sm font-bold text-[#141A17] block">
                        The Pioneer Company of Natural Stone
                      </span>
                      <span className="text-[10px] text-[#C29B38] font-semibold">
                        Historical Quarry Strata Concessionaire &bull; Estd. 1953
                      </span>
                    </div>

                    {/* Works & Associated Email Bar */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-white border border-black/6 flex items-center gap-2 overflow-hidden">
                        <MapPin className="w-3.5 h-3.5 text-[#C29B38] shrink-0" />
                        <div className="min-w-0">
                          <span className="font-bold text-[#141A17] text-[11px] block truncate">
                            B P Garg &amp; Sons
                          </span>
                          <span className="text-[10px] text-[#68726E] block truncate">
                            Sarmathura, Dholpur (Raj.)
                          </span>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white border border-black/6 flex items-center justify-between">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <Mail className="w-3.5 h-3.5 text-[#C29B38] shrink-0" />
                          <span className="font-semibold text-[#141A17] text-[11px] truncate">
                            kamala_stone@yahoo.co.in
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleCopy("kamala_stone@yahoo.co.in", "saroj-email")}
                          className="text-[10px] font-bold text-[#134e3f] hover:text-[#C29B38] p-1 shrink-0 cursor-pointer"
                          title="Copy Email"
                        >
                          {copiedText === "saroj-email" ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Operational Scope */}
                    <div className="pt-2 border-t border-black/6 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] bg-[#FAF7F2] text-[#134e3f] font-bold px-2.5 py-1 rounded-md border border-black/6">
                        New Delhi Parliament Supplier
                      </span>
                      <span className="text-[10px] bg-[#FAF7F2] text-[#134e3f] font-bold px-2.5 py-1 rounded-md border border-black/6">
                        Kamala Stone Export Arm
                      </span>
                      <span className="text-[10px] bg-[#FAF7F2] text-[#134e3f] font-bold px-2.5 py-1 rounded-md border border-black/6">
                        Raw Block Mining
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimDiv>
          </div>

          {/* Statutory Credential Pillars & Compliance Strip */}
          <AnimDiv delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl p-4 border border-black/8 shadow-xs hover:border-[#C29B38]/50 transition-colors">
                <div className="flex items-center gap-2 mb-1.5">
                  <Award className="w-4 h-4 text-[#C29B38]" />
                  <span className="font-['Cinzel',serif] text-xs font-bold text-[#141A17] uppercase">
                    Govt. Awarded
                  </span>
                </div>
                <p className="text-[11px] text-[#68726E] leading-snug">
                  Director Arvind Garg officially recognized by Govt. of India for natural stone industry excellence.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-black/8 shadow-xs hover:border-[#C29B38]/50 transition-colors">
                <div className="flex items-center gap-2 mb-1.5">
                  <Clock className="w-4 h-4 text-[#C29B38]" />
                  <span className="font-['Cinzel',serif] text-xs font-bold text-[#141A17] uppercase">
                    Estd. 1953
                  </span>
                </div>
                <p className="text-[11px] text-[#68726E] leading-snug">
                  Over 70+ years across 3 generations of continuous direct quarry leaseholding in Sarmathura.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-black/8 shadow-xs hover:border-[#C29B38]/50 transition-colors">
                <div className="flex items-center gap-2 mb-1.5">
                  <FileCheck className="w-4 h-4 text-[#C29B38]" />
                  <span className="font-['Cinzel',serif] text-xs font-bold text-[#141A17] uppercase">
                    IS:3620 Certified
                  </span>
                </div>
                <p className="text-[11px] text-[#68726E] leading-snug">
                  Geotechnical lab-verified compressive strength &gt;68 MPa and water absorption under 1.4%.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-black/8 shadow-xs hover:border-[#C29B38]/50 transition-colors">
                <div className="flex items-center gap-2 mb-1.5">
                  <Globe className="w-4 h-4 text-[#C29B38]" />
                  <span className="font-['Cinzel',serif] text-xs font-bold text-[#141A17] uppercase">
                    Global Export
                  </span>
                </div>
                <p className="text-[11px] text-[#68726E] leading-snug">
                  ISPM-15 certified heat-treated timber bundles shipped directly to 40+ international ports.
                </p>
              </div>
            </div>
          </AnimDiv>
        </div>

        {/* 3. Direct Contact Box & WhatsApp QR Card */}
        <AnimDiv delay={200} className="mb-10 sm:mb-12">
          <div className="bg-white rounded-3xl border border-black/8 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-black/8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C29B38] block mb-1">
                  Direct Communications
                </span>
                <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#141A17] uppercase tracking-wider mb-6">
                  Garg Corporation Ltd.
                </h3>

                <div className="space-y-4 sm:space-y-5">
                  {/* WhatsApp Direct */}
                  <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-black/5">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#68726E] block mb-1">
                      DIRECT WHATSAPP &bull; CALL
                    </span>
                    <div className="space-y-1.5">
                      <a
                        href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20am%20interested%20in%20natural%20stone%20inquiry"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-[#134e3f] hover:text-[#C29B38] transition-colors"
                      >
                        <WhatsAppIcon className="w-5 h-5 fill-[#25D366] shrink-0" size={20} />
                        <span>+91 94149 45457</span>
                        <span className="text-xs font-normal text-[#68726E]">(WhatsApp)</span>
                      </a>
                      <div className="flex items-center gap-2 pl-7">
                        <Phone className="w-3.5 h-3.5 text-[#C29B38] shrink-0" />
                        <a
                          href="tel:+919057355232"
                          className="text-xs sm:text-sm font-bold text-[#141A17] hover:text-[#C29B38] transition-colors"
                        >
                          +91 90573 55232
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Primary Email */}
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#68726E] block mb-1">
                      PRIMARY INQUIRY EMAIL
                    </span>
                    <a
                      href="mailto:gargcorporationltd@gmail.com"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#141A17] hover:text-[#C29B38] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#C29B38] shrink-0" />
                      <span>gargcorporationltd@gmail.com</span>
                    </a>
                  </div>

                  {/* Associated Unit Email */}
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#68726E] block mb-1">
                      ASSOCIATED UNIT EMAIL
                    </span>
                    <a
                      href="mailto:kamala_stone@yahoo.co.in"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#141A17] hover:text-[#C29B38] transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#C29B38] shrink-0" />
                      <span>kamala_stone@yahoo.co.in</span>
                    </a>
                  </div>

                  {/* Registered Works Address */}
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#68726E] block mb-1">
                      REGISTERED WORKS &amp; ADDRESS
                    </span>
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-[#141A17] font-medium leading-relaxed">
                      <MapPin className="w-4 h-4 text-[#C29B38] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#141A17] block">B P Garg &amp; Sons</span>
                        <span>Near RAC line, Mothiyapura road, Sarmathura 328026 Dholpur, Raj. INDIA</span>
                      </div>
                    </div>
                  </div>

                  {/* Offices List */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="bg-[#FAF7F2] p-3 rounded-xl border border-black/5">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-[#68726E] block mb-0.5">
                        INDIA OFFICES
                      </span>
                      <span className="text-xs font-bold text-[#141A17] leading-tight block">
                        Sarmathura &bull; Sikandra &bull; Kishangarh
                      </span>
                    </div>
                    <div className="bg-[#FAF7F2] p-3 rounded-xl border border-black/5">
                      <span className="text-[9px] uppercase font-bold tracking-widest text-[#68726E] block mb-0.5">
                        OVERSEAS PRESENCE
                      </span>
                      <span className="text-xs font-bold text-[#134e3f] leading-tight block">
                        Canada Office
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right QR Box (5 cols) */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 sm:p-10 bg-[#FAF7F2] text-center">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C29B38] block mb-1">
                  Instant Smartphone Scan
                </span>
                <h4 className="font-['Cinzel',serif] text-sm sm:text-base font-bold uppercase tracking-wider text-[#141A17] mb-4">
                  Scan To Connect
                </h4>

                <div className="relative w-44 h-44 sm:w-48 sm:h-48 bg-white rounded-2xl shadow-md border border-[#C29B38]/30 p-2.5 mb-4 group hover:shadow-xl transition-shadow">
                  <Image
                    src="/assets/garg/whatsapp_qr.jpg"
                    alt="WhatsApp QR – Garg Corporation Ltd"
                    fill
                    sizes="192px"
                    className="object-contain p-1"
                  />
                </div>

                <a
                  href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20to%20connect%20regarding%20natural%20stone%20products"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" size={16} />
                  <span>Start WhatsApp Chat</span>
                </a>
                <p className="text-[11px] text-[#68726E] mt-2 max-w-[200px]">
                  Scan QR with camera or tap button to connect directly with Arvind Garg
                </p>
              </div>
            </div>
          </div>
        </AnimDiv>

        {/* 4. Project Inquiry Form */}
        <AnimDiv delay={250} className="mb-10">
          <div className="bg-white rounded-3xl border border-black/8 shadow-sm p-6 sm:p-10">
            <div className="max-w-2xl mb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C29B38] block mb-1">
                Project Sourcing &bull; Architecture &bull; Contracting
              </span>
              <h3 className="font-['Cinzel',serif] text-xl sm:text-2xl font-bold text-[#141A17] uppercase tracking-wide mb-1">
                Send Project Inquiry
              </h3>
              <p className="text-xs text-[#68726E] leading-relaxed">
                Connect with our technical team for custom stone articles, marble slabs, granite supplies and export shipments.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-3 bg-[#FAF7F2] rounded-2xl p-6 border border-emerald-500/20">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-[#141A17] uppercase">
                  Inquiry Transmitted Successfully
                </h4>
                <p className="text-xs text-[#68726E] max-w-sm mx-auto leading-relaxed">
                  Thank you for contacting Dholpurestones.com. Our senior contracting team will review your specifications and respond promptly.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20just%20submitted%20a%20project%20inquiry%20on%20your%20website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#134e3f] hover:underline"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-[#25D366]" size={14} />
                    <span>Follow up instantly on WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase font-bold tracking-wider text-[#141A17] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full bg-[#FAF7F2] border border-black/10 focus:border-[#C29B38] focus:ring-1 focus:ring-[#C29B38] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#141A17] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold tracking-wider text-[#141A17] mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#FAF7F2] border border-black/10 focus:border-[#C29B38] focus:ring-1 focus:ring-[#C29B38] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#141A17] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold tracking-wider text-[#141A17] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-[#FAF7F2] border border-black/10 focus:border-[#C29B38] focus:ring-1 focus:ring-[#C29B38] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#141A17] outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase font-bold tracking-wider text-[#141A17] mb-1.5">
                      Requirement Type
                    </label>
                    <select
                      value={form.stoneType}
                      onChange={(e) => setForm({ ...form, stoneType: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-black/10 focus:border-[#C29B38] focus:ring-1 focus:ring-[#C29B38] rounded-xl px-4 py-3 text-xs sm:text-sm text-[#141A17] outline-none transition-all"
                    >
                      <option>Luxury Farm House &amp; Garden Landscaping</option>
                      <option>Sandstone Front Elevation (300+ Designs - Govt. Awarded)</option>
                      <option>Natural Sandstone Patios, Steps, Coping &amp; Fountains</option>
                      <option>Sandstone Sculptural Articles (Peacock, Lion)</option>
                      <option>Stone Lanterns &amp; Landscape Articles</option>
                      <option>Dholpur Beige &amp; Red Calibrated Tiles &amp; Slabs</option>
                      <option>Botticino &amp; Elmali Beige Luxury Marble</option>
                      <option>Black Granite Architectural Slabs</option>
                      <option>Translucent Semi-Precious Stone Slabs</option>
                      <option>Institutional, Temple &amp; Monument Contracting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase font-bold tracking-wider text-[#141A17] mb-1.5">
                    Message / Specifications
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Specify project site, quantity, dimensions, required finishes, or timeline..."
                    className="w-full bg-[#FAF7F2] border border-black/10 focus:border-[#C29B38] focus:ring-1 focus:ring-[#C29B38] rounded-xl p-4 text-xs sm:text-sm text-[#141A17] outline-none transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm uppercase tracking-wider font-bold py-3.5 px-8 rounded-full bg-[#134e3f] hover:bg-[#0c3329] text-white shadow-lg hover:shadow-xl transition-all active:scale-95 border border-[#C29B38]/30 cursor-pointer"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </AnimDiv>

        {/* 5. Authentic Bottom Banner */}
        <AnimDiv delay={300}>
          <div className="bg-[#0D1311] rounded-2xl p-6 sm:p-8 text-center border border-white/8">
            <h4 className="font-['Cinzel',serif] text-sm sm:text-lg font-bold text-[#C29B38] tracking-[0.18em] uppercase">
              Natural Stones Across The Globe
            </h4>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] sm:text-xs text-white/70 uppercase tracking-widest mt-1.5">
              Mines Owner &bull; Manufacturer &bull; Exporter &bull; Contractor
            </p>
          </div>
        </AnimDiv>
      </div>

      {/* =========================================================================
          INTERACTIVE VISITING CARD LIGHTBOX MODAL (High-Resolution Inspection)
          ========================================================================= */}
      {previewCard && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setPreviewCard(null)}
        >
          <div
            className="bg-[#FAF7F2] rounded-3xl max-w-lg w-full border border-[#C29B38]/50 shadow-2xl overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#134e3f] via-[#0f3d32] to-[#0A261F] text-white p-4 sm:p-5 flex items-center justify-between border-b border-[#C29B38]/30">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#E0BA55]" />
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#C29B38] block">
                    AUTHENTIC VISITING CARD &bull; ARCHIVAL DOSSIER
                  </span>
                  <h4 className="font-['Cinzel',serif] text-sm sm:text-base font-bold text-white uppercase tracking-wider">
                    {previewCard.title}
                  </h4>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setPreviewCard(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 bg-white">
              {/* Card Image */}
              <div className="relative aspect-[1.85/1] w-full rounded-2xl overflow-hidden border border-black/10 shadow-lg bg-[#FAF7F2] mb-5">
                <Image
                  src={previewCard.src}
                  alt={previewCard.title}
                  fill
                  sizes="600px"
                  className="object-contain"
                />
              </div>

              {/* Entity Context */}
              <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-black/8 space-y-2 mb-5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#C29B38] block">
                  {previewCard.entity}
                </span>
                <p className="text-xs font-bold text-[#141A17]">
                  {previewCard.subtitle}
                </p>

                <ul className="space-y-1.5 pt-2 border-t border-black/6">
                  {previewCard.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11px] text-[#4A5550] leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#134e3f] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/919414945457?text=${encodeURIComponent(
                    `Hello Dholpurestones.com, I am inquiring regarding credentials for: ${previewCard.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" size={16} />
                  <span>Connect on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setPreviewCard(null)}
                  className="py-3 px-5 rounded-xl bg-[#FAF7F2] hover:bg-[#eae4d7] border border-black/10 text-xs font-bold text-[#141A17] uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
