import React from "react";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import Carousel from "../ui/Carousel";
import { Reveal } from "../ui/Reveal";
import { landmarkProjects } from "@/data/catalog";
import { LuArrowRight as ArrowRight, LuMapPin as MapPin } from "react-icons/lu";

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-y relative overflow-hidden bg-white pattern-dots">
      <div className="container-x">
        <SectionHeader
          eyebrow="Our Track Record"
          title="Trusted For Landmark Projects"
          subtitle="National monuments, embassies and global temples — stone supplied and crafted by Dholpurstones."
        />
        <Reveal>
          <Carousel cols="md:grid-cols-3 lg:grid-cols-5" itemWidth="w-[62%]">
            {landmarkProjects.map((p) => (
              <figure
                key={p.name}
                className="group relative aspect-[3/4] overflow-hidden rounded-[1.4rem] bg-forest shadow-[0_10px_30px_-14px_rgba(18,61,50,0.5)]"
              >
                <Image
                  src={p.image}
                  alt={`${p.name}, ${p.place}`}
                  fill
                  sizes="(max-width: 768px) 62vw, 20vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-heading text-sm font-bold uppercase tracking-wide text-white leading-snug">
                    {p.name}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-gold">
                    <MapPin className="h-3 w-3" />
                    {p.place}
                  </p>
                </figcaption>
              </figure>
            ))}
          </Carousel>
        </Reveal>
        <Reveal className="mt-9 flex justify-center">
          <Button href="/projects" variant="forest" size="lg">
            See All Projects
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
