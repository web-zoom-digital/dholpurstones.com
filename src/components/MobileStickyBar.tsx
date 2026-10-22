"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LuPhone as Phone,
  LuLayoutGrid as Grid,
  LuX as X,
  LuMessageSquare as Message,
  LuHouse as Home,
  LuMail as Mail,
} from "react-icons/lu";
import WhatsAppIcon from "./WhatsAppIcon";

export default function MobileStickyBar() {
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  return (
    <>
      {/* ── WhatsApp Quick-Action Drawer ── */}
      {whatsappOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm sm:hidden"
            onClick={() => setWhatsappOpen(false)}
          />
          {/* Drawer */}
          <div
            className="fixed bottom-[68px] left-3 right-3 z-50 sm:hidden rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.6)]"
            style={{ animation: "drawerUp 0.28s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0a2318] border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_12px_rgba(37,211,102,0.6)]">
                  <WhatsAppIcon className="w-4 h-4 fill-white" size={16} />
                </div>
                <div>
                  <p className="text-white text-[11px] font-bold tracking-wide">Dholpurestones.com</p>
                  <p className="text-[#25D366] text-[9px] font-semibold tracking-wider uppercase">● Online · Typically replies fast</p>
                </div>
              </div>
              <button
                onClick={() => setWhatsappOpen(false)}
                className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center active:bg-white/20"
              >
                <X className="w-3.5 h-3.5 text-white/70" />
              </button>
            </div>

            {/* Quick Messages */}
            <div className="bg-[#0d2b1c]/95 backdrop-blur-xl px-3 py-3 space-y-2">
              {[
                "Inquiry about Front Elevation Sandstone designs",
                "Inquiry about Luxury Farm House & Garden Landscaping",
                "I want to visit your mines in Sarmathura",
                "Request a stone sample box",
              ].map((msg) => (
                <a
                  key={msg}
                  href={`https://wa.me/919414945457?text=${encodeURIComponent("Hello Dholpurestones.com, " + msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setWhatsappOpen(false)}
                  className="flex items-center gap-2.5 w-full text-left px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 active:bg-white/10 transition-colors"
                >
                  <Message className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                  <span className="text-white/90 text-[10.5px] font-medium leading-snug">{msg}</span>
                </a>
              ))}
            </div>

            {/* Open Chat CTA */}
            <a
              href="https://wa.me/919414945457"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setWhatsappOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] active:bg-[#20ba59] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" size={16} />
              <span className="text-white text-[11px] font-bold uppercase tracking-widest">Open WhatsApp Chat</span>
            </a>
          </div>
        </>
      )}

      {/* ── Main Sticky Bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
        {/* Gold shimmer top-border */}
        <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#C5A15B] to-transparent opacity-70" />

        <div
          className="relative flex items-stretch"
          style={{ background: "linear-gradient(135deg,#0a1f15 0%,#0d2b1c 50%,#0a1f15 100%)" }}
        >
          {/* Ambient gold glow */}
          <div
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 80% at 50% 120%, #C5A15B55, transparent)" }}
          />

          {/* Home */}
          <Link
            href="/"
            className="group flex-1 flex flex-col items-center justify-center gap-[3px] py-2.5 px-1 active:bg-white/5 transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#C5A15B]/20 to-[#C5A15B]/5 border border-[#C5A15B]/30 flex items-center justify-center group-active:scale-95 transition-transform shadow-[0_2px_8px_rgba(197,161,91,0.2)]">
              <Home className="w-[15px] h-[15px] text-[#C5A15B]" strokeWidth={1.8} />
            </div>
            <span className="text-[8px] font-bold uppercase tracking-widest text-white/55">Home</span>
          </Link>

          {/* Products */}
          <Link
            href="/products"
            className="group flex-1 flex flex-col items-center justify-center gap-[3px] py-2.5 px-1 active:bg-white/5 transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#C5A15B]/20 to-[#C5A15B]/5 border border-[#C5A15B]/30 flex items-center justify-center group-active:scale-95 transition-transform shadow-[0_2px_8px_rgba(197,161,91,0.2)]">
              <Grid className="w-[15px] h-[15px] text-[#C5A15B]" strokeWidth={1.8} />
            </div>
            <span className="text-[8px] font-bold uppercase tracking-widest text-white/55">Products</span>
          </Link>

          {/* WhatsApp — elevated center FAB */}
          <div className="flex items-center justify-center px-2 py-1.5 relative">
            {/* Glow halo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[60px] h-[60px] rounded-full bg-[#25D366]/15 blur-lg" />
            </div>
            <button
              onClick={() => setWhatsappOpen((p) => !p)}
              className="relative w-[54px] h-[54px] rounded-full flex items-center justify-center -mt-8 shadow-[0_4px_22px_rgba(37,211,102,0.6)] active:scale-95 transition-transform"
              style={{ background: "linear-gradient(145deg,#2ee86a,#1ab654)" }}
            >
              {/* Inner shimmer ring */}
              <div className="absolute inset-[2px] rounded-full border border-white/25 pointer-events-none" />
              <WhatsAppIcon className="w-6 h-6 fill-white" size={24} />
            </button>
          </div>

          {/* Call — right side */}
          <a
            href="tel:+919414945457"
            className="group flex-1 flex flex-col items-center justify-center gap-[3px] py-2.5 px-1 active:bg-white/5 transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#C5A15B]/20 to-[#C5A15B]/5 border border-[#C5A15B]/30 flex items-center justify-center group-active:scale-95 transition-transform shadow-[0_2px_8px_rgba(197,161,91,0.2)]">
              <Phone className="w-[15px] h-[15px] text-[#C5A15B]" strokeWidth={2.2} />
            </div>
            <span className="text-[8px] font-bold uppercase tracking-widest text-white/55">Call</span>
          </a>

          {/* Enquiry */}
          <a
            href="mailto:gargcorporationltd@gmail.com"
            className="group flex-1 flex flex-col items-center justify-center gap-[3px] py-2.5 px-1 active:bg-white/5 transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#C5A15B]/20 to-[#C5A15B]/5 border border-[#C5A15B]/30 flex items-center justify-center group-active:scale-95 transition-transform shadow-[0_2px_8px_rgba(197,161,91,0.2)]">
              <Mail className="w-[15px] h-[15px] text-[#C5A15B]" strokeWidth={1.8} />
            </div>
            <span className="text-[8px] font-bold uppercase tracking-widest text-white/55">Enquiry</span>
          </a>

          <style>{`
            @keyframes drawerUp {
              from { opacity: 0; transform: translateY(18px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>

        {/* iOS safe area */}
        <div
          className="w-full"
          style={{ height: "env(safe-area-inset-bottom)", background: "linear-gradient(135deg,#0a1f15,#0d2b1c)" }}
        />
      </div>
    </>
  );
}
