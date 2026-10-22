import React from "react";
import { LuPhone as Phone } from "react-icons/lu";
import WhatsAppIcon from "../WhatsAppIcon";
import Button from "./Button";
import EnquiryButton from "./EnquiryButton";
import { Reveal } from "./Reveal";
import { waLink, PHONE_SECONDARY } from "@/data/catalog";

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
    <section className="relative mx-2 mb-2 overflow-hidden rounded-[2rem] bg-forest section-y bg-stone-grain sm:mx-4 sm:mb-4 sm:rounded-[3rem]">
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
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <EnquiryButton variant="gold" size="lg" cta={cta} interest={undefined} product={undefined}>
            Get a Free Quote
          </EnquiryButton>
          <Button
            href={waLink(`Hello Dholpurestones.com, I would like to enquire about ${topic}.`)}
            variant="whatsapp"
            size="lg"
          >
            <WhatsAppIcon className="h-4 w-4 fill-current" size={16} />
            WhatsApp Us
          </Button>
          <Button href="tel:+919057355232" variant="outline-light" size="lg">
            <Phone className="h-4 w-4" />
            {PHONE_SECONDARY}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
