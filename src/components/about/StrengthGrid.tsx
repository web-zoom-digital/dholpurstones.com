import React from "react";
import SectionHeader from "../ui/SectionHeader";
import { Stagger, StaggerItem, Reveal } from "../ui/Reveal";
import {
  LuMountain as Mountain,
  LuFactory as Factory,
  LuLayers as Layers,
  LuGlobe as Globe,
  LuTrophy as Trophy,
  LuBuilding as Building,
  LuMapPin as MapPin,
} from "react-icons/lu";

const strengths = [
  { icon: Mountain, title: "Own Mines", text: "Premium natural sandstone quarried directly from our own mines in Dholpur, Rajasthan." },
  { icon: Factory, title: "Manufacturing", text: "In-house cutting, calibration, polishing and architectural article production." },
  { icon: Layers, title: "Wide Product Range", text: "Sandstone, marble, semi-precious slabs, imported stones and custom hand carvings." },
  { icon: Globe, title: "Global Supply", text: "Worldwide export experience with an overseas office in Canada." },
  { icon: Trophy, title: "Project Experience", text: "Trusted for landmark institutional, spiritual, embassy and private estate projects." },
  { icon: Building, title: "Versatile Applications", text: "Stone solutions for temples, monuments, villas, hotels, plazas and gardens." },
];

const offices = [
  { name: "Dholpur", role: "Quarries & Works" },
  { name: "Sikandra", role: "Carving Works" },
  { name: "Kishangarh", role: "Trading Hub" },
  { name: "Canada", role: "Overseas Office" },
];

export default function StrengthGrid() {
  return (
    <section id="strength" className="section-y bg-white">
      <div className="container-x">
        <SectionHeader
          eyebrow="Core Competencies"
          title="Our Strength"
          subtitle="Everything from mining to installation under one name."
        />
        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.title}>
                <div className="h-full rounded-[1.4rem] border border-black/[0.06] bg-ivory p-5 transition-shadow hover:shadow-xl sm:p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-[15px] font-bold uppercase tracking-wide text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{s.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal className="mt-10 rounded-[1.75rem] bg-forest p-6 text-white sm:p-8">
          <h3 className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-gold">Offices &amp; Presence</h3>
          <ul className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {offices.map((o) => (
              <li key={o.name} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  <span className="block text-[15px] font-bold">{o.name}</span>
                  <span className="block text-[12.5px] text-white/60">{o.role}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
