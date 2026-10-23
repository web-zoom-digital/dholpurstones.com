"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  LuHouse as Home,
  LuLayoutGrid as Grid,
  LuMessageSquareText as Contact,
  LuX as X,
  LuPhone as Phone,
  LuChevronRight as ChevronRight,
} from "react-icons/lu";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink, WHATSAPP_NUMBER, PHONE_PRIMARY } from "@/data/catalog";
import { openEnquiry } from "@/lib/leads";

const tabs = [
  { label: "Home", href: "/", icon: Home, match: (p: string) => p === "/" },
  {
    label: "Products",
    href: "/products",
    icon: Grid,
    match: (p: string) =>
      ["/products", "/sandstone", "/farmhouse-gardens", "/articles", "/semi-precious", "/exclusive-imported"].some((r) => p.startsWith(r)),
  },
  null, // WhatsApp FAB slot
  { label: "Call", href: "tel:+919057355232", icon: Phone, match: () => false },
  { label: "Enquiry", href: "#enquiry", icon: Contact, match: (p: string) => p.startsWith("/contact") },
] as const;

const quickMessages = [
  "I would like a quote for sandstone",
  "I need marble for my project",
  "Inquiry about Farm House & Garden stonework",
  "I want to visit your mines in Dholpur",
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <AnimatePresence>
        {sheetOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[150] bg-forest-deep/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSheetOpen(false)}
            />
            <motion.div
              className="fixed inset-x-3 bottom-[88px] z-[160] overflow-hidden rounded-[1.75rem] bg-white shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55)]"
              initial={{ y: 40, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 30, opacity: 0, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 340, damping: 30 }}
            >
              <div className="flex items-center justify-between bg-forest px-4 py-3.5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] shadow-[0_0_18px_rgba(37,211,102,0.55)]">
                    <WhatsAppIcon className="h-5 w-5 fill-white" size={20} />
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-bold text-white">Chat with Dholpurstones</p>
                    <p className="text-[11px] font-medium text-[#7dedaa]">Replies within working hours</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSheetOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white active:scale-90 transition-transform"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-2 p-3">
                {quickMessages.map((msg) => (
                  <a
                    key={msg}
                    href={waLink(`Hello Dholpurstones.com, ${msg}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSheetOpen(false)}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-black/[0.07] bg-ivory px-4 py-3 text-[13.5px] font-medium text-ink active:bg-sage transition-colors"
                  >
                    {msg}
                    <ChevronRight className="h-4 w-4 shrink-0 text-gold-deep" />
                  </a>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setSheetOpen(false);
                    openEnquiry({ cta: "Mobile quick sheet" });
                  }}
                  className="w-full rounded-full bg-gold py-3 text-[13px] font-bold text-forest active:scale-[0.97] transition-transform"
                >
                  Send an Enquiry Form
                </button>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setSheetOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-[13px] font-bold text-white active:scale-[0.97] transition-transform"
                  >
                    <WhatsAppIcon className="h-4 w-4 fill-white" size={16} />
                    Open Chat
                  </a>
                  <a
                    href="tel:+919414945457"
                    className="flex items-center justify-center gap-2 rounded-full border border-forest/25 py-3 text-[13px] font-bold text-forest active:scale-[0.97] transition-transform"
                    aria-label={`Call ${PHONE_PRIMARY}`}
                  >
                    <Phone className="h-4 w-4 text-gold-deep" />
                    Call Us
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <nav
        aria-label="Quick navigation"
        className="fixed inset-x-3 z-[170] rounded-[1.9rem] border border-white/10 bg-forest-deep/95 shadow-[0_18px_40px_-10px_rgba(0,0,0,0.55)] backdrop-blur-xl"
        style={{ bottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <div className="grid grid-cols-5 items-end px-1.5 pb-1.5 pt-1.5">
          {tabs.map((tab, i) => {
            if (!tab) {
              return (
                <div key="fab" className="relative flex justify-center">
                  <motion.button
                    type="button"
                    onClick={() => setSheetOpen((o) => !o)}
                    whileTap={{ scale: 0.88 }}
                    className="-mt-7 flex h-[58px] w-[58px] items-center justify-center rounded-full border-[3px] border-forest-deep shadow-[0_10px_26px_-4px_rgba(37,211,102,0.75)]"
                    style={{ background: "linear-gradient(145deg,#34e078,#1ab654)" }}
                    aria-label="WhatsApp quick chat"
                    aria-expanded={sheetOpen}
                  >
                    <motion.span animate={{ rotate: sheetOpen ? 90 : 0 }} transition={{ duration: 0.25 }}>
                      {sheetOpen ? (
                        <X className="h-6 w-6 text-white" />
                      ) : (
                        <WhatsAppIcon className="h-[26px] w-[26px] fill-white" size={26} />
                      )}
                    </motion.span>
                  </motion.button>
                </div>
              );
            }
            const Icon = tab.icon;
            const active = tab.match(pathname);
            const inner = (
              <>
                {active && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-x-1 inset-y-0.5 rounded-2xl bg-gold/18 ring-1 ring-gold/40"
                    transition={{ type: "spring", stiffness: 420, damping: 32 }}
                  />
                )}
                <Icon
                  className={`relative h-[21px] w-[21px] transition-colors ${active ? "text-gold" : "text-white/70"}`}
                  strokeWidth={active ? 2.3 : 1.9}
                />
                <span className={`relative text-[11px] font-semibold tracking-wide transition-colors ${active ? "text-gold" : "text-white/70"}`}>
                  {tab.label}
                </span>
              </>
            );
            const cls = "relative flex flex-col items-center gap-0.5 rounded-2xl py-1.5 active:scale-90 transition-transform";
            if (tab.label === "Enquiry") {
              return (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => {
                    setSheetOpen(false);
                    openEnquiry({ cta: "Mobile bottom bar" });
                  }}
                  className={cls}
                >
                  {inner}
                </button>
              );
            }
            if (tab.href.startsWith("tel:")) {
              return (
                <a key={tab.label} href={tab.href} className={cls} aria-label={`Call ${PHONE_PRIMARY}`}>
                  {inner}
                </a>
              );
            }
            return (
              <Link
                key={tab.label}
                href={tab.href}
                onClick={() => setSheetOpen(false)}
                className={cls}
                aria-current={active ? "page" : undefined}
              >
                {inner}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
