"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  LuMapPin as MapPin,
  LuArrowRight as ArrowRight,
  LuBuilding2 as Building2,
  LuLandmark as Landmark,
  LuAward as Award
} from "react-icons/lu";

function AnimDiv({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("gcl-visible"), delay);
          obs.unobserve(el);
        }
      },
      { threshold: 0.06 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`gcl-animate ${className}`}>
      {children}
    </div>
  );
}

const projects = [
  {
    id: "parliament",
    title: "Parliament House",
    location: "New Delhi",
    type: "National Landmark",
    image: "/assets/garg/project_parliament.jpg",
  },
  {
    id: "akshardham",
    title: "Akshardham Temple",
    location: "New Delhi",
    type: "Spiritual Monument",
    image: "/assets/garg/project_akshardham.jpg",
  },
  {
    id: "adani",
    title: "Adani House",
    location: "Ahmedabad",
    type: "Corporate Headquarters",
    image: "/assets/garg/project_adani.jpg",
  },
  {
    id: "aiims",
    title: "AIIMS Medical Institute",
    location: "Bhopal",
    type: "Institutional Complex",
    image: "/assets/garg/project_aiims.jpg",
  },
  {
    id: "germany",
    title: "Indian Embassy",
    location: "Berlin, Germany",
    type: "Diplomatic Mission",
    image: "/assets/garg/project_embassy_germany.jpg",
  },
  {
    id: "nepal",
    title: "Indian Embassy",
    location: "Kathmandu, Nepal",
    type: "Diplomatic Mission",
    image: "/assets/garg/project_embassy_nepal.jpg",
  },
  {
    id: "iskcon",
    title: "ISKCON Temples",
    location: "50+ Global Locations",
    type: "Global Spiritual Sites",
    image: "/assets/garg/project_iskcon.jpg",
  },
  {
    id: "kashiram",
    title: "Kashiram Garden",
    location: "Lucknow",
    type: "Heritage Public Park",
    image: "/assets/garg/project_kashiram.jpg",
  },
  {
    id: "nappa",
    title: "Nappa Velly",
    location: "Bangalore",
    type: "Prestige Residential Estate",
    image: "/assets/garg/project_nappa_velly.jpg",
  },
  {
    id: "omega",
    title: "Omega Bearing",
    location: "Bhopal",
    type: "Industrial Monolith",
    image: "/assets/garg/project_omega.jpg",
  },
];

export default function MajorProjects() {
  return (
    <section id="projects" className="bg-white py-14 sm:py-20 border-b border-black/6">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Label */}
        <AnimDiv className="flex items-center justify-between pb-3 border-b border-black/8 mb-8 sm:mb-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A15B]" />
            <span className="font-['Cinzel',serif] text-[10px] sm:text-xs font-bold tracking-[0.16em] text-[#1F2A24] uppercase">
              DHOLPURESTONES.COM
            </span>
          </div>
          <span className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#C5A15B] tracking-widest">
            07
          </span>
        </AnimDiv>

        {/* Section Title */}
        <AnimDiv delay={0} className="mb-8 sm:mb-10">
          <span className="text-[10px] sm:text-xs font-bold text-[#C5A15B] uppercase tracking-[0.18em] block mb-2">
            Track Record Since 1953
          </span>
          <h2 className="font-['Cinzel',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1F2A24] uppercase tracking-wide mb-3">
            Major Projects
          </h2>
          <div className="w-12 h-1 bg-[#C5A15B] rounded-full mb-3" />
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-[#6B7C73] max-w-2xl">
            Selected projects from our natural stone execution portfolio across India and global capitals.
          </p>
        </AnimDiv>

        {/* 10 Projects Grid (Responsive: 2-col on mobile, 3-col on sm/md, 5-col on lg/xl) */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {projects.map((p, i) => (
            <AnimDiv key={p.id} delay={i * 50}>
              <div className="bg-[#F7F4EB] rounded-2xl overflow-hidden border border-black/8 hover:border-[#C5A15B]/60 hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
                {/* Project Image */}
                <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-[#F7F4EB] shrink-0">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 20vw"
                    className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/10">
                    <span className="text-[8px] font-bold text-[#C5A15B] uppercase tracking-wider">
                      {p.type}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-['Cinzel',serif] text-xs sm:text-sm font-bold text-[#1F2A24] group-hover:text-[#123D32] transition-colors leading-snug line-clamp-1">
                      {p.title}
                    </h3>
                    <p className="flex items-center gap-1 font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-semibold text-[#123D32] mt-1.5 truncate">
                      <MapPin className="w-3 h-3 text-[#C5A15B] shrink-0" />
                      <span className="truncate">{p.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            </AnimDiv>
          ))}
        </div>

        {/* ISKCON Global Banner */}
        <AnimDiv delay={250}>
          <div className="bg-[#1E5A46] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-5 border border-white/8 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-[#C5A15B]/40 shrink-0">
                <Image
                  src="/assets/garg/project_iskcon.jpg"
                  alt="ISKCON Global Stone Supply"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#C5A15B] uppercase tracking-wider mb-0.5">
                  <Award className="w-3.5 h-3.5" />
                  International Portfolio
                </div>
                <h4 className="font-['Cinzel',serif] text-base sm:text-xl font-bold text-white tracking-wider uppercase">
                  ISKCON &bull; 50+ Projects Across The Globe
                </h4>
                <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs text-white/60 mt-0.5">
                  Sourcing and manufacturing finished architectural temple stone work worldwide.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full bg-[#C5A15B] text-[#123D32] hover:bg-[#C5A15B] transition-all shadow-md shrink-0 active:scale-95"
            >
              <span>Initiate Stone Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#123D32]" />
            </a>
          </div>
        </AnimDiv>

        {/* Section Footer Bar */}
        <div className="mt-10 sm:mt-12 pt-4 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-[11px] font-semibold text-[#6B7C73] uppercase tracking-wider text-center sm:text-left">
          <span>Natural Stone &bull; Mines &bull; Manufacturing &bull; Export &bull; Contracting</span>
          <span className="font-['Cinzel',serif] text-[#1F2A24]">DHOLPURESTONES.COM</span>
        </div>
      </div>
    </section>
  );
}
