"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuPlus as Plus } from "react-icons/lu";
import SectionHeader from "./ui/SectionHeader";
import { Reveal } from "./ui/Reveal";
import type { Faq } from "@/data/faqs";

/** Accordion FAQ. Pair with <JsonLd data={faqLd(faqs)} /> on the page for rich results. */
export default function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  eyebrow = "Good To Know",
  id = "faq",
  tone = "ivory",
}: {
  faqs: Faq[];
  title?: string;
  eyebrow?: string;
  id?: string;
  tone?: "ivory" | "white";
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={id} className={`section-y relative overflow-hidden pattern-dots ${tone === "white" ? "bg-white" : "bg-ivory"}`}>
      <div className="container-x">
        <SectionHeader eyebrow={eyebrow} title={title} />
        <Reveal className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`overflow-hidden rounded-2xl border bg-white transition-colors ${
                  isOpen ? "border-gold/60 shadow-lg" : "border-black/[0.07]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-[15px] font-bold text-ink sm:text-base">{f.q}</h3>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest text-gold"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:text-[15px]">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
