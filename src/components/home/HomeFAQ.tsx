"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LuPlus as Plus } from "react-icons/lu";
import SectionHeader from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

const faqs = [
  {
    q: "Which stones does Dholpurestones supply?",
    a: "Dholpur sandstone (Agra Red, Dholpur Beige, Dholpur Pink and Chocolate), beige, white and grey marble, semi-precious gemstone slabs, hand-carved stone articles, plus exclusive imported marble and precious gem surfaces.",
  },
  {
    q: "Do you own the mines?",
    a: "Yes. Our proprietary quarries are in Dholpur, Rajasthan, with carving and processing at Sikandra and Kishangarh — so you buy direct, without middlemen.",
  },
  {
    q: "Can you work on a farm house or garden project?",
    a: "Farm house and garden stonework is our speciality — driveways, patios, pool coping, gazebos, steps, retaining walls and fountains, supplied and installed.",
  },
  {
    q: "Do you export, and can I get samples?",
    a: "We export worldwide with seaworthy fumigated crating, and have an overseas office in Canada. Sample pieces can be arranged on request — message us on WhatsApp.",
  },
  {
    q: "Which landmark projects have you supplied?",
    a: "Parliament House and Akshardham in New Delhi, Adani House in Ahmedabad, AIIMS Bhopal, the Indian Embassies in Berlin and Kathmandu, and over 50 ISKCON temples.",
  },
];

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-y bg-ivory">
      <div className="container-x">
        <SectionHeader eyebrow="Good To Know" title="Frequently Asked Questions" />
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
                  <span className="text-[15px] font-bold text-ink sm:text-base">{f.q}</span>
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
