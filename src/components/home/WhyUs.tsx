import React from "react";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import {
  LuMountain as Mountain,
  LuFactory as Factory,
  LuGlobe as Globe,
  LuLandmark as Landmark,
  LuArrowRight as ArrowRight,
  LuAward as Award,
} from "react-icons/lu";

const points = [
  { icon: Mountain, title: "Our Own Mines", text: "Quarried at source in Dholpur — no middlemen, consistent colour." },
  { icon: Factory, title: "In-House Manufacturing", text: "Cutting, calibration, CNC work and hand carving under one roof." },
  { icon: Globe, title: "Export Ready", text: "Seaworthy crating and an overseas office in Canada." },
  { icon: Landmark, title: "Landmark Experience", text: "Parliament House, Akshardham, embassies and 50+ ISKCON temples." },
];

export default function WhyUs() {
  return (
    <section id="about" className="section-y bg-ivory">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal x={-30} y={0} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-28px_rgba(11,42,34,0.6)] sm:rounded-[2.5rem]">
              <Image
                src="/assets/quarry_mining_operations.jpg"
                alt="Dholpurestones quarry operations in Dholpur, Rajasthan"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 right-4 w-[46%] overflow-hidden rounded-[1.5rem] border-4 border-ivory shadow-xl sm:right-8">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/assets/master_stone_artisans.jpg"
                  alt="Master stone artisans hand-carving sandstone in Sikandra"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -top-4 left-4 flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-xs font-bold uppercase tracking-wider text-gold shadow-lg sm:left-8">
              <Award className="h-4 w-4" />
              Estd. 1953
            </div>
          </Reveal>

          <div className="mt-6 lg:mt-0">
            <SectionHeader
              align="left"
              eyebrow="About Dholpurestones"
              title="Three Generations of Stone"
              subtitle="Awarded by the Government of India for 300+ sandstone front elevation designs and nominated for an International Award for Business Excellence. We handle everything from mining to finished installation."
              className="!mb-7"
            />
            <Stagger className="grid gap-3.5 sm:grid-cols-2">
              {points.map((p) => {
                const Icon = p.icon;
                return (
                  <StaggerItem key={p.title}>
                    <div className="h-full rounded-2xl border border-black/[0.06] bg-white p-4 shadow-sm transition-shadow hover:shadow-lg">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest text-gold">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-3 text-[15px] font-bold text-ink">{p.title}</h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-muted">{p.text}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
            <Reveal className="mt-7">
              <Button href="/about" variant="forest" size="lg">
                Read Our Story
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
