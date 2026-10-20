"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Download,
  Building2,
  Calendar,
  Sparkles,
  ChevronDown,
  MessageCircle,
  Share2,
  Check,
} from "lucide-react";

interface StoriesBioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSampleModal: () => void;
}

export default function StoriesBioModal({
  isOpen,
  onClose,
  onOpenSampleModal,
}: StoriesBioModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-['Quicksand',sans-serif]">
      {/* Outer Neutral Backdrop (Audited #a8a8a8 tone from stories.creativeclouddesigns.in) */}
      <div
        className="fixed inset-0 bg-[#121212]/90 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Centered Bio Card */}
      <div className="relative z-10 w-full max-w-[440px] bg-white text-[#1a1a1a] rounded-[28px] shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden my-6 border border-black/10 animate-[fadeIn_0.3s_ease-out]">
        {/* Top Header Card Bar */}
        <div className="relative h-28 bg-gradient-to-r from-[#470c1b] via-[#5a1224] to-[#470c1b] p-4 flex items-start justify-between">
          <div className="inline-flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-white text-[11px] font-semibold tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#c29b38]" />
            OFFICIAL QUICK ACCESS HUB
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              title="Share profile link"
              className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Profile Avatar & Identity */}
        <div className="px-6 pb-6 pt-0 text-center relative -mt-12">
          {/* Avatar with Gold Border */}
          <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl bg-black">
            <Image
              src="/assets/crest-1953.jpg"
              alt="Dholpur Stones Estd. 1953"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-3">
            <h2 className="font-['Aboreto',serif] text-xl font-bold tracking-widest text-[#18181b] uppercase">
              DHOLPUR STONES
            </h2>
            <p className="text-xs font-semibold text-[#5a1224] tracking-wider uppercase mt-0.5">
              ESTABLISHED IN 1953 • RAJASTHAN, INDIA
            </p>
            <p className="text-xs text-[#606161] mt-2 font-medium max-w-xs mx-auto leading-relaxed">
              Miners, master stone fabricators & global exporters of monumental sandstone, Makrana marble & bespoke architectural screens.
            </p>
          </div>

          {/* Social Quick Action Icon Row */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <a
              href="https://wa.me/919829012345?text=Hello%20Dholpur%20Stones,%20I%20would%20like%20to%20inquire%20about%20natural%20stones"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all flex items-center justify-center border border-[#25D366]/30 shadow-sm"
              title="Direct WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="tel:+919829012345"
              className="w-10 h-10 rounded-full bg-[#18181b]/5 text-[#18181b] hover:bg-[#5a1224] hover:text-white transition-all flex items-center justify-center border border-black/10 shadow-sm"
              title="Call VIP Desk"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="mailto:exports@dholpurstones.com"
              className="w-10 h-10 rounded-full bg-[#18181b]/5 text-[#18181b] hover:bg-[#5a1224] hover:text-white transition-all flex items-center justify-center border border-black/10 shadow-sm"
              title="Email Exports"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-[#18181b]/5 text-[#18181b] hover:bg-[#c29b38] hover:text-black transition-all flex items-center justify-center border border-black/10 shadow-sm"
              title="Quarry Location"
            >
              <MapPin className="w-5 h-5" />
            </a>
          </div>

          {/* Action Pills List (Inspired directly by stories.creativeclouddesigns.in card pills) */}
          <div className="mt-6 space-y-3 text-left">
            {/* Pill 1: WhatsApp Consultation */}
            <a
              href="https://wa.me/919829012345?text=Hello%20Dholpur%20Stones,%20I%20am%20interested%20in%20architectural%20stone%20samples"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-[#25D366]/10 to-[#25D366]/5 border border-[#25D366]/40 hover:border-[#25D366] flex items-center justify-between transition-all group shadow-sm active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#18181b] block">
                    Instant WhatsApp Consultation
                  </span>
                  <span className="text-[11px] text-[#606161]">
                    Direct chat with Managing Director
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#25D366] group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Pill 2: Request Architectural Physical Samples */}
            <button
              onClick={() => {
                onClose();
                onOpenSampleModal();
              }}
              className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-[#5a1224] to-[#470c1b] text-white flex items-center justify-between transition-all group shadow-md active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#c29b38] text-black flex items-center justify-center shrink-0 shadow-md">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">
                    Request Physical Sample Box
                  </span>
                  <span className="text-[11px] text-white/80">
                    5 Material Specimens dispatched via DHL
                  </span>
                </div>
              </div>
              <span className="text-xs font-bold text-[#c29b38]">FREE</span>
            </button>

            {/* Pill 3: Download 2026 Architectural Catalogue */}
            <a
              href="#contact"
              onClick={onClose}
              className="w-full p-3.5 rounded-2xl bg-[#faf7f2] border border-black/10 hover:border-[#c29b38] flex items-center justify-between transition-all group active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#18181b] text-white flex items-center justify-center shrink-0">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#18181b] block">
                    Download 2026 Stone Catalogue
                  </span>
                  <span className="text-[11px] text-[#606161]">
                    Full specifications, sizes & lab tests (PDF)
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-black/40 group-hover:text-black transition-colors" />
            </a>

            {/* Pill 4: Schedule Rajasthan Quarry & Plant Tour */}
            <a
              href="#contact"
              onClick={onClose}
              className="w-full p-3.5 rounded-2xl bg-[#faf7f2] border border-black/10 hover:border-[#c29b38] flex items-center justify-between transition-all group active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#c29b38]/20 text-[#8c6e26] flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#18181b] block">
                    Book Private Quarry Tour
                  </span>
                  <span className="text-[11px] text-[#606161]">
                    Inspect active mining strata in Dholpur
                  </span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-black/40 group-hover:text-black transition-colors" />
            </a>
          </div>

          {/* Accordion Quick Info (Derived from reference site's accordion pills) */}
          <div className="mt-5 space-y-2 text-left">
            <div className="border border-black/10 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleAccordion("heritage")}
                className="w-full px-4 py-3 bg-[#faf7f2] text-xs font-bold text-[#18181b] flex items-center justify-between"
              >
                <span>About Our 1953 Heritage</span>
                <ChevronDown
                  className={`w-4 h-4 text-black/50 transition-transform ${
                    activeAccordion === "heritage" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeAccordion === "heritage" && (
                <div className="p-4 text-xs text-[#606161] leading-relaxed bg-white border-t border-black/5">
                  Operating continuously since 1953, Dholpur Stones has provided architectural stone fabrication for sovereign landmarks including the Parliament House of India, Indian Embassies in Europe, and iconic temples worldwide.
                </div>
              )}
            </div>

            <div className="border border-black/10 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleAccordion("ports")}
                className="w-full px-4 py-3 bg-[#faf7f2] text-xs font-bold text-[#18181b] flex items-center justify-between"
              >
                <span>Direct Seaport Logistics</span>
                <ChevronDown
                  className={`w-4 h-4 text-black/50 transition-transform ${
                    activeAccordion === "ports" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeAccordion === "ports" && (
                <div className="p-4 text-xs text-[#606161] leading-relaxed bg-white border-t border-black/5">
                  Exporting to 35+ countries with factory stuffing and direct custom clearance through Mundra, Kandla, and Nhava Sheva ports with ISPM-15 certified fumigated packaging.
                </div>
              )}
            </div>
          </div>

          {/* Bottom Card Footer */}
          <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-[11px] text-[#606161]">
            <span>© 1953 - 2026 Dholpur Stones</span>
            <button
              onClick={onClose}
              className="text-[#5a1224] font-bold hover:underline"
            >
              Continue to Flagship →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
