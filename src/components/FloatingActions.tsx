"use client";

import React from "react";
import { MessageCircle, Sparkles } from "lucide-react";

interface FloatingActionsProps {
  onOpenStories: () => void;
}

export default function FloatingActions({ onOpenStories }: FloatingActionsProps) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Stories Bio Quick Access Pill */}
      <button
        onClick={onOpenStories}
        className="group flex items-center gap-2 bg-[#5a1224] hover:bg-[#731830] text-white border border-[#c29b38]/50 px-4 py-2.5 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <div className="p-1 rounded-full bg-[#c29b38] text-black">
          <Sparkles className="w-3.5 h-3.5" />
        </div>
        <span className="font-['Quicksand',sans-serif] text-xs font-bold tracking-wider uppercase pr-1">
          Stories Bio Hub
        </span>
      </button>

      {/* WhatsApp VIP Chat Floating Button */}
      <a
        href="https://wa.me/919829012345?text=Hello%20Dholpur%20Stones,%20I%20would%20like%20to%20inquire%20about%20natural%20stones"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp VIP Chat"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </a>
    </div>
  );
}
