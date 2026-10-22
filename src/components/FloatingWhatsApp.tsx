"use client";

import React, { useState, useEffect } from "react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="hidden sm:block fixed sm:bottom-6 sm:right-6 z-50 pointer-events-auto">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20to%20inquire%20about%20natural%20stone%20and%20architectural%20articles"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dholpurestones.com on WhatsApp"
        className="relative flex items-center justify-center w-11 h-11 sm:w-14 sm:h-14 rounded-full shadow-[0_6px_24px_rgba(37,211,102,0.45)] bg-[#25D366] text-white hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping group-hover:opacity-0" />
        <WhatsAppIcon className="w-6 h-6 sm:w-8 sm:h-8 fill-white relative z-10 drop-shadow-sm" size={26} />
      </a>
    </div>
  );
}
