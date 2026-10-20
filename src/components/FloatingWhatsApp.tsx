"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-auto">
      {/* Tooltip prompt */}
      {!dismissed && (
        <div
          className="relative bg-white rounded-2xl shadow-2xl border border-black/10 px-4 py-3 max-w-[230px] text-left animate-fadeIn"
          style={{ animation: "gcl-fadeup 0.4s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <button
            type="button"
            onClick={() => setDismissed(true)}
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-black/10 text-[#141A17] flex items-center justify-center hover:bg-black/20 transition-colors"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <p className="font-['Cinzel',serif] text-[11px] text-[#141A17] font-bold tracking-wider uppercase leading-tight">
              Dholpurestones.com
            </p>
          </div>
          <p className="text-[11px] text-[#68726E] font-['Plus_Jakarta_Sans',sans-serif] mt-0.5 leading-snug">
            Chat directly with available person on WhatsApp
          </p>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-black/10" />
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20to%20inquire%20about%20natural%20stone%20and%20architectural%20articles"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dholpurestones.com on WhatsApp"
        className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.45)] bg-[#25D366] text-white hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping group-hover:opacity-0" />
        <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-white relative z-10 drop-shadow-sm" size={30} />
      </a>
    </div>
  );
}
