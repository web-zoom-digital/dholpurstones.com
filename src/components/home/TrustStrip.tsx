import React from "react";
import { Reveal } from "../ui/Reveal";
import CountUp from "../ui/CountUp";
import { LuAward as Award } from "react-icons/lu";

const stats = [
  { value: 70, suffix: "+", label: "Years of legacy", sub: "Since 1953" },
  { value: 300, suffix: "+", label: "Elevation designs", sub: "Govt. of India awarded" },
  { value: 50, suffix: "+", label: "ISKCON temples", sub: "Stone supplied worldwide" },
  { value: 4, suffix: "", label: "Locations", sub: "India & Canada" },
];

/** Floating stat card that overlaps the hero's curved edge. */
export default function TrustStrip() {
  return (
    <div className="container-x relative z-10 -mt-14 sm:-mt-20">
      <Reveal className="overflow-hidden rounded-[1.75rem] border border-gold/40 bg-white shadow-[0_28px_60px_-24px_rgba(11,42,34,0.55)]">
        {/* International Award Header Bar */}
        <div className="relative overflow-hidden bg-gradient-to-r from-forest-deep via-[#0e3329] to-forest-deep px-4 py-3 sm:py-3.5 text-center border-b border-gold/30">
          <div className="flex items-center justify-center gap-2.5 sm:gap-3.5">
            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-gold shrink-0 drop-shadow" />
            <p className="font-heading text-[11px] sm:text-[13px] md:text-[14px] font-black uppercase tracking-[0.16em] sm:tracking-[0.22em] text-[#F8E2AC] drop-shadow-sm">
              NOMINATE TO INTERNATIONAL AWARD FOR BUSINESS EXCELLENCE
            </p>
            <Award className="h-4 w-4 sm:h-5 sm:w-5 text-gold shrink-0 drop-shadow hidden sm:inline-block" />
          </div>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-2 gap-px bg-gold/20 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-4 py-5 text-center sm:py-7">
              <p className="font-heading text-3xl font-bold text-forest sm:text-4xl">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-[13px] font-bold text-ink sm:text-sm">{s.label}</p>
              <p className="mt-0.5 text-[11px] font-medium text-muted sm:text-xs">{s.sub}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
