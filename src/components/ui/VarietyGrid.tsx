"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LuMessageCircle as MessageCircle } from "react-icons/lu";
import { Stagger, StaggerItem } from "./Reveal";
import { waLink } from "@/data/catalog";

interface Variety {
  name: string;
  image: string;
}

/** Grid of stone varieties; each tile opens a pre-filled WhatsApp enquiry. */
export default function VarietyGrid({ items, kind }: { items: Variety[]; kind: string }) {
  return (
    <Stagger className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
      {items.map((v) => (
        <StaggerItem key={v.name}>
          <motion.a
            href={waLink(`Hello Dholpurstones.com, I would like to enquire about ${v.name} ${kind}.`)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className="group block overflow-hidden rounded-[1.25rem] border border-black/[0.06] bg-white shadow-[0_8px_26px_-16px_rgba(18,61,50,0.3)] transition-shadow hover:border-gold/50 hover:shadow-[0_22px_44px_-18px_rgba(18,61,50,0.35)]"
          >
            <div className="relative aspect-[10/7] overflow-hidden bg-ivory">
              <Image
                src={v.image}
                alt={`${v.name} ${kind}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
            </div>
            <div className="flex items-center justify-between gap-2 px-3.5 py-3">
              <h3 className="font-heading text-[12.5px] font-bold uppercase leading-snug tracking-wide text-ink sm:text-[13.5px]">
                {v.name}
              </h3>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#25D366]/12 text-[#1a9c4b] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                <MessageCircle className="h-3.5 w-3.5" />
              </span>
            </div>
          </motion.a>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
