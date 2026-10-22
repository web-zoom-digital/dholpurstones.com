"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuX as X } from "react-icons/lu";
import EnquiryForm from "./EnquiryForm";
import { OPEN_ENQUIRY_EVENT, type EnquiryDetail } from "@/lib/leads";

/** Global quote dialog — opened from any "Get a Quote" / "Enquire" button. */
export default function EnquiryModal() {
  const [detail, setDetail] = useState<EnquiryDetail | null>(null);

  useEffect(() => {
    const onOpen = (e: Event) => setDetail((e as CustomEvent<EnquiryDetail>).detail || {});
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDetail(null);
    window.addEventListener(OPEN_ENQUIRY_EVENT, onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(OPEN_ENQUIRY_EVENT, onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = detail ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [detail]);

  return (
    <AnimatePresence>
      {detail && (
        <motion.div
          className="fixed inset-0 z-[300] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Request a quote"
        >
          <div className="absolute inset-0 bg-forest-deep/75 backdrop-blur-sm" onClick={() => setDetail(null)} />
          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="relative max-h-[92svh] w-full max-w-lg overflow-y-auto rounded-t-[2rem] border border-white/10 bg-forest p-5 shadow-2xl sm:rounded-[2rem] sm:p-8"
          >
            <button
              type="button"
              onClick={() => setDetail(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white active:scale-90"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <h2 className="pr-10 font-heading text-xl font-bold uppercase tracking-wide text-white">Get a Free Quote</h2>
            <p className="mb-5 mt-1.5 text-sm text-white/70">Share a few details — our team replies with options and pricing.</p>
            <EnquiryForm
              cta={detail.cta || "Quote modal"}
              product={detail.product}
              interest={detail.interest}
              compact
              onDone={() => undefined}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
