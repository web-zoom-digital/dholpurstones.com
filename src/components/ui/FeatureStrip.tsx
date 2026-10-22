import React from "react";
import { Reveal } from "./Reveal";

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}

/** Floating white card of 3–4 trust points that overlaps the hero's curved edge. */
export default function FeatureStrip({ items }: { items: Feature[] }) {
  return (
    <div className="container-x relative z-10 -mt-10 sm:-mt-14">
      <Reveal
        className={`grid grid-cols-2 gap-px overflow-hidden rounded-[1.75rem] border border-gold/25 bg-gold/20 shadow-[0_28px_60px_-24px_rgba(11,42,34,0.55)] ${
          items.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
        }`}
      >
        {items.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={f.title}
              className={`flex flex-col items-center bg-white px-4 py-5 text-center sm:py-6 ${
                items.length === 3 && i === 2 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest text-gold">
                <Icon className="h-5 w-5" />
              </span>
              <p className="mt-3 text-[14px] font-bold text-ink sm:text-[15px]">{f.title}</p>
              <p className="mt-1 text-[12.5px] leading-snug text-muted sm:text-[13px]">{f.text}</p>
            </div>
          );
        })}
      </Reveal>
    </div>
  );
}
