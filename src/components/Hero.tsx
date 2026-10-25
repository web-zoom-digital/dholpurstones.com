"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  LuArrowRight as ArrowRight,
  LuAward as Award,
  LuMapPin as MapPin,
  LuPhone,
  LuMessageSquareText,
} from "react-icons/lu";
import EnquiryButton from "./ui/EnquiryButton";
import WhatsAppIcon from "./WhatsAppIcon";
import Button from "./ui/Button";
import { waLink } from "@/data/catalog";

const ease = [0.16, 1, 0.3, 1] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

export default function Hero() {
  return (
    <section className="pattern-jali relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[3.5rem] bg-forest-deep">
      {/* Background — slow Ken Burns zoom */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
      >
        <Image
          src="/assets/garg/dholpur-stones-mobile-hero.jpg"
          alt="Dholpurstones.com – luxury marble, sandstone elevation and farm house stonework"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_35%] sm:hidden"
        />
        <Image
          src="/assets/garg/dholpur-stones-hero-preview.jpg"
          alt="Dholpurstones.com – luxury marble, sandstone elevation and farm house stonework"
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-center sm:block"
        />
      </motion.div>

      {/* Readability overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-deep/55 via-forest-deep/55 to-forest-deep/95 sm:bg-gradient-to-r sm:from-forest-deep/90 sm:via-forest-deep/60 sm:to-forest-deep/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-forest-deep/80 to-transparent sm:hidden" />

      <div className="container-x flex min-h-[calc(100svh-7.5rem)] flex-col justify-end pb-24 pt-16 sm:min-h-[600px] sm:justify-center sm:pb-32 lg:min-h-[680px]">
        <div className="mx-auto flex max-w-xl flex-col items-center text-center sm:mx-0 sm:max-w-2xl sm:items-start sm:text-left">
          <motion.div
            {...rise(0.1)}
            className="inline-flex flex-wrap items-center justify-center sm:justify-start gap-2"
          >
            <span className="relative inline-flex items-center gap-2.5 rounded-full border border-gold/70 bg-gradient-to-r from-gold/25 via-forest-deep/90 to-gold/25 px-4 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-[12.5px] md:text-[13px] font-heading font-black uppercase tracking-[0.16em] sm:tracking-[0.18em] text-[#F8E2AC] shadow-[0_0_30px_rgba(232,201,135,0.35)] backdrop-blur-md ring-1 ring-gold/40">
              <Award className="h-4 w-4 sm:h-5 sm:w-5 text-gold shrink-0 drop-shadow" />
              <span>NOMINATE TO INTERNATIONAL AWARD FOR BUSINESS EXCELLENCE</span>
            </span>
          </motion.div>

          <motion.h1
            {...rise(0.2)}
            className="mt-4 font-heading text-[1.7rem] font-bold uppercase leading-[1.2] tracking-[0.02em] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:mt-5 sm:text-[2.6rem] lg:text-[3.1rem]"
          >
            Dholpur Sandstone <span className="text-[#E8C987]">Quarry Owner</span> &amp; Front Elevation Specialist
          </motion.h1>

          <motion.p
            {...rise(0.32)}
            className="mt-3.5 max-w-md text-[15px] leading-relaxed text-white/80 sm:mt-5 sm:max-w-xl sm:text-lg"
          >
            Sandstone, marble and semi-precious stones from our own mines — plus luxury farm house and garden stonework. Serving India and the world since 1953.
          </motion.p>

          <motion.div {...rise(0.44)} className="mt-6 w-full max-w-md sm:mt-8 sm:max-w-none">
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              <EnquiryButton variant="gold" size="lg" cta="Homepage hero" className="col-span-2 w-full sm:w-auto">
                <LuMessageSquareText className="h-[18px] w-[18px]" />
                Get a Free Quote
              </EnquiryButton>
              <Button
                href={waLink("Hello Dholpurstones.com, I would like to get a quote for natural stone.")}
                variant="whatsapp"
                size="lg"
                className="w-full sm:w-auto"
              >
                <WhatsAppIcon className="h-[18px] w-[18px] fill-current" size={18} />
                WhatsApp
              </Button>
              <Button href="tel:+919057355232" variant="outline-light" size="lg" className="w-full sm:w-auto">
                <LuPhone className="h-[18px] w-[18px]" />
                Call Now
              </Button>
            </div>
            <Link
              href="/products"
              className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-bold text-gold transition-colors hover:text-white"
            >
              Explore our collections
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.p
            {...rise(0.56)}
            className="mt-5 flex items-center gap-1.5 text-[12px] font-medium tracking-wide text-white/65 sm:mt-6"
          >
            <MapPin className="h-3.5 w-3.5 text-gold" />
            Dholpur &bull; Sikandra &bull; Kishangarh &bull; Canada
          </motion.p>
        </div>
      </div>
    </section>
  );
}
