"use client";

import React from "react";
import {
  LuMail as Mail,
  LuMapPin as MapPin,
  LuPhone as Phone,
} from "react-icons/lu";
import WhatsAppIcon from "../WhatsAppIcon";
import EnquiryForm from "../EnquiryForm";
import { Reveal } from "../ui/Reveal";
import { waLink, EMAIL, PHONE_PRIMARY, PHONE_SECONDARY } from "@/data/catalog";

export default function HomeContact() {
  return (
    <section
      id="contact"
      className="relative mx-2 mb-2 overflow-hidden rounded-[2rem] bg-forest section-y sm:mx-4 sm:mb-4 sm:rounded-[3rem] bg-stone-grain pattern-jali"
    >
      <div className="container-x relative grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-gold sm:text-xs">
            <span className="h-px w-6 bg-gold/60" />
            Get In Touch
          </span>
          <h2 className="mt-3 font-heading text-[1.65rem] font-bold uppercase leading-[1.2] tracking-[0.03em] text-white sm:text-4xl lg:text-[2.6rem]">
            Let&apos;s Build With Stone
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/75 sm:text-base">
            Tell us about your project and Mr. Arvind Garg&apos;s team will get back with options, samples and a quote.
          </p>

          <ul className="mt-7 space-y-3">
            <li>
              <a
                href={waLink("Hello Dholpurstones.com, I would like to connect regarding natural stone.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-colors hover:border-[#25D366]/60"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]">
                  <WhatsAppIcon className="h-5 w-5 fill-white" size={20} />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/55">WhatsApp</span>
                  <span className="block text-base font-bold text-white">{PHONE_PRIMARY}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="tel:+919057355232"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-colors hover:border-gold/60"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-forest">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/55">Call</span>
                  <span className="block text-base font-bold text-white">{PHONE_SECONDARY}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-colors hover:border-gold/60"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-gold">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/55">Email</span>
                  <span className="block truncate text-[15px] font-bold text-white">{EMAIL}</span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=26.5492,77.2917"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-colors hover:border-gold/60"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-gold">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-white/55">Visit our works</span>
                  <span className="block text-[14px] font-semibold leading-snug text-white">
                    B P Garg &amp; Sons, Near RAC line, Mothiyapura Road, Dholpur 328026
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-[1.75rem] border border-white/12 bg-forest-deep/60 p-5 backdrop-blur sm:p-8">
            <h3 className="mb-5 font-heading text-lg font-bold uppercase tracking-wide text-white">Quick Enquiry</h3>
            <EnquiryForm cta="Homepage contact form" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
