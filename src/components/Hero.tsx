"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuArrowRight as ArrowRight, LuAward as Award, LuMapPin as MapPin } from "react-icons/lu";
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
    <section className="relative isolate overflow-hidden rounded-b-[2rem] sm:rounded-b-[3.5rem] bg-forest-deep">
      {/* Background — slow Ken Burns zoom */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
      >
        <Image
          src="/assets/garg/dholpur-stones-mobile-hero.jpg"
          alt="Dholpurestones.com – luxury marble, sandstone elevation and farm house stonework"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_35%] sm:hidden"
        />
        <Image
          src="/assets/garg/dholpur-stones-hero-preview.jpg"
          alt="Dholpurestones.com – luxury marble, sandstone elevation and farm house stonework"
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
          <motion.span
            {...rise(0.1)}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-forest-deep/60 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-gold backdrop-blur-md"
          >
            <Award className="h-3.5 w-3.5" />
            Awarded by Govt. of India
          </motion.span>

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

          <motion.div {...rise(0.44)} className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row">
            <Button href="/products" variant="gold" size="lg">
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={waLink("Hello Dholpurestones.com, I would like to get a quote for natural stone.")}
              variant="outline-light"
              size="lg"
            >
              <WhatsAppIcon className="h-4 w-4 fill-current" size={16} />
              WhatsApp Us
            </Button>
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
