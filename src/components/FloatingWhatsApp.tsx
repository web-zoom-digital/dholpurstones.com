"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuPhone as Phone, LuMessageSquareText as Enquiry } from "react-icons/lu";
import WhatsAppIcon from "./WhatsAppIcon";
import { waLink } from "@/data/catalog";
import { openEnquiry } from "@/lib/leads";

/** Desktop contact dock: WhatsApp, Call and Enquiry — always one click away. (Phones use the bottom bar.) */
export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(t);
  }, []);

  const items = [
    {
      key: "enquiry",
      label: "Send Enquiry",
      onClick: () => openEnquiry({ cta: "Floating dock" }),
      icon: <Enquiry className="h-6 w-6" />,
      cls: "bg-gold text-forest",
    },
    {
      key: "call",
      label: "Call Us",
      href: "tel:+919057355232",
      icon: <Phone className="h-6 w-6" />,
      cls: "bg-forest text-gold border border-gold/50",
    },
    {
      key: "wa",
      label: "WhatsApp",
      href: waLink("Hello Dholpurstones.com, I would like to enquire about natural stone."),
      icon: <WhatsAppIcon className="h-7 w-7 fill-white" size={28} />,
      cls: "bg-[#25D366] text-white",
    },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50 hidden flex-col items-end gap-3 sm:flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {items.map((it) => {
            const inner = (
              <>
                <span className="pointer-events-none mr-3 whitespace-nowrap rounded-full bg-forest-deep px-3.5 py-1.5 text-[13px] font-bold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                  {it.label}
                </span>
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full shadow-[0_10px_26px_-8px_rgba(0,0,0,0.55)] transition-transform group-hover:scale-110 group-active:scale-95 ${it.cls}`}
                >
                  {it.icon}
                </span>
              </>
            );
            return it.href ? (
              <a
                key={it.key}
                href={it.href}
                target={it.href.startsWith("http") ? "_blank" : undefined}
                rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={it.label}
                className="group flex items-center"
              >
                {inner}
              </a>
            ) : (
              <button key={it.key} type="button" onClick={it.onClick} aria-label={it.label} className="group flex items-center">
                {inner}
              </button>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
