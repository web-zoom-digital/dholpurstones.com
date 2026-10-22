import React from "react";
import ContactActions from "./ContactActions";
import { Reveal } from "./Reveal";

interface CtaBandProps {
  title?: string;
  text?: string;
  /** Used in the WhatsApp pre-filled message and the lead record. */
  topic?: string;
  cta: string;
}

/** Closing call-to-action used at the bottom of every page. */
export default function CtaBand({
  title = "Ready To Start Your Project?",
  text = "Tell us what you need — our team replies with samples, options and a quote.",
  topic = "natural stone",
  cta,
}: CtaBandProps) {
  return (
    <section className="relative mx-2 mb-2 overflow-hidden rounded-[2rem] bg-forest section-y bg-stone-grain pattern-jali sm:mx-4 sm:mb-4 sm:rounded-[3rem]">
      <Reveal className="container-x text-center">
        <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-gold sm:text-xs">
          <span className="h-px w-6 bg-gold/60" />
          Free Quote
          <span className="h-px w-6 bg-gold/60" />
        </span>
        <h2 className="mx-auto mt-3 max-w-2xl font-heading text-[1.65rem] font-bold uppercase leading-[1.2] tracking-[0.03em] text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-3.5 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-base">{text}</p>
        <ContactActions className="mt-7" cta={cta} topic={topic} />
      </Reveal>
    </section>
  );
}
