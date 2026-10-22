import React from "react";
import { Reveal } from "../ui/Reveal";
import CountUp from "../ui/CountUp";

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
      <Reveal className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.75rem] border border-gold/25 bg-gold/20 shadow-[0_28px_60px_-24px_rgba(11,42,34,0.55)] lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white px-4 py-5 text-center sm:py-7">
            <p className="font-heading text-3xl font-bold text-forest sm:text-4xl">
              <CountUp to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-[13px] font-bold text-ink sm:text-sm">{s.label}</p>
            <p className="mt-0.5 text-[11px] font-medium text-muted sm:text-xs">{s.sub}</p>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
