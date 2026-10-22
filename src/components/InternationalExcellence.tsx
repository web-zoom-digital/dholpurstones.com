"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  LuTrophy as Trophy,
  LuAward as Award,
  LuGlobe as Globe2,
  LuShieldCheck as ShieldCheck,
  LuCircleCheck as CheckCircle2,
  LuMountain as Mountain,
  LuHouse as Home,
  LuBuilding2 as Building2,
  LuArrowRight as ArrowRight,
  LuSparkles as Sparkles
} from "react-icons/lu";
import WhatsAppIcon from "./WhatsAppIcon";

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
      { threshold: 0.08 }
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

const excellencePillars = [
  {
    icon: Trophy,
    number: "01",
    badge: "GLOBAL HONORS",
    title: "Nominated for International Award for Business Excellence",
    desc: "Recognized internationally for exceptional quality control, ethical quarry extraction, export reliability, and end-to-end natural stone execution across 40+ countries.",
    stats: "40+ Ports",
    statsLabel: "Global Sea Logistics",
  },
  {
    icon: Award,
    number: "02",
    badge: "GOVT. OF INDIA AWARDED",
    title: "300+ Front Elevation Sandstone Designs",
    desc: "Officially awarded by the Government of India for pioneering over 300 turnkey front elevation designs — bespoke jharokhas, fluted monumental pillars, ornamental cornices, and carved facades.",
    stats: "300+ Designs",
    statsLabel: "Bespoke Elevations",
  },
  {
    icon: Home,
    number: "03",
    badge: "LANDSCAPE SPECIALIST",
    title: "Luxury Farm Houses & Designer Gardens",
    desc: "Complete architectural outdoor stone solutions for private retreats — massive entry gateways, boundary wall copings, tiered water fountains, gazebo masonry, and anti-slip stone flaggings.",
    stats: "Turnkey",
    statsLabel: "Farm House Masonry",
  },
  {
    icon: Mountain,
    number: "04",
    badge: "100% OWN QUARRIES",
    title: "Proprietary Mines & Direct Export Processing",
    desc: "Direct extraction from our captive quarry leases in Dholpur & Sikandra with in-house 8-axis CNC fabrication and an established corporate overseas office in Canada.",
    stats: "Since 1953",
    statsLabel: "3 Generations of Direct Mining",
  },
];

const internationalFootprint = [
  { country: "Canada", role: "Overseas Corporate Office", highlight: true },
  { country: "Germany & Nepal", role: "Indian Embassy Landmark Stone Supply", highlight: false },
  { country: "United Kingdom & Europe", role: "Custom Architectural Cut-to-Size Sandstone", highlight: false },
  { country: "United States & UAE", role: "Heritage Temple Trusts & Private Luxury Havelis", highlight: false },
];

export default function InternationalExcellence() {
  return (
    <section
      id="international-excellence"
      className="relative bg-gradient-to-b from-[#123D32] via-[#1F2A24] to-[#123D32] py-16 sm:py-24 text-white overflow-hidden border-b border-[#C5A15B]/30 scroll-mt-20 sm:scroll-mt-24"
    >
      {/* Background Radial Glow & Gold Dust Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(194,155,56,0.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-96 h-96 bg-[#123D32]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pre-Header Badge */}
        <AnimDiv className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b border-white/10 mb-10 sm:mb-14 gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C5A15B] animate-pulse" />
            <span className="font-['Cinzel',serif] text-xs font-bold tracking-[0.2em] text-[#C5A15B] uppercase">
              GLOBAL BENCHMARK OF STONE EXCELLENCE
            </span>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#C5A15B]/15 border border-[#C5A15B]/40 px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-bold text-[#C5A15B] uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-[#C5A15B]" />
            <span>ESTD. 1953 &bull; GLOBAL NATURAL STONE LEADER</span>
          </div>
        </AnimDiv>

        {/* Grand Headline & International Seal Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          <AnimDiv delay={50} className="lg:col-span-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A15B]/20 border border-[#C5A15B]/50 text-[#C5A15B] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#C5A15B]" />
              <span>OFFICIALLY NOMINATED &bull; INTERNATIONAL RECOGNITION</span>
            </div>

            <h2 className="font-['Cinzel',serif] text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide leading-tight text-white mb-4">
              Nominated for <span className="text-[#C5A15B]">International Award</span> for Business Excellence
            </h2>

            <p className="font-['EB_Garamond',serif] text-lg sm:text-xl text-[#C5A15B]/90 leading-relaxed mb-4">
              Celebrating seven decades of uncompromising natural stone quarrying, award-winning front elevation designs, and global architectural contracting under Garg Corporation Ltd.
            </p>

            <p className="font-['Plus_Jakarta_Sans',sans-serif] text-xs sm:text-sm text-white/75 leading-relaxed max-w-3xl">
              From our captive mines in Dholpur, Rajasthan to prestigious overseas landmarks — including Indian Embassies, landmark spiritual sanctuaries, and luxury country farm houses — our commitment to engineering perfection, ethical mining, and high-precision CNC craftsmanship has established Dholpurestones.com as an internationally nominated enterprise for business excellence.
            </p>
          </AnimDiv>

          {/* Right Gold Seal Emblem Card */}
          <AnimDiv
            delay={120}
            className="lg:col-span-4 bg-gradient-to-br from-[#1E5A46] via-[#1F2A24] to-[#123D32] rounded-3xl p-6 sm:p-8 border-2 border-[#C5A15B]/50 shadow-[0_10px_40px_rgba(0,0,0,0.6)] text-center relative overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C5A15B]/20 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C5A15B] to-[#C5A15B] mx-auto flex items-center justify-center shadow-xl mb-4 text-[#123D32] border-2 border-white/30">
              <Trophy className="w-10 h-10 stroke-[2.2]" />
            </div>

            <span className="font-['Cinzel',serif] text-xs font-bold text-[#C5A15B] tracking-[0.2em] uppercase block mb-1">
              WORLDWIDE RECOGNITION
            </span>
            <h3 className="font-['Cinzel',serif] text-base sm:text-lg font-bold text-white uppercase tracking-wider mb-2">
              International Award for Business Excellence
            </h3>
            <div className="w-10 h-0.5 bg-[#C5A15B] mx-auto mb-3" />

            <p className="text-[11px] text-white/70 leading-relaxed mb-4">
              Nominated for supreme standards in stone quarrying, zero-defect fabrication, and execution of 300+ Government-awarded sandstone front elevation designs.
            </p>

            <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-1.5 text-[11px] font-bold text-[#25D366]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Nominee &bull; Estd. 1953</span>
            </div>
          </AnimDiv>
        </div>

        

        {/* Global Footprint Banner */}
        <AnimDiv delay={200}>
          <div className="bg-gradient-to-r from-[#1E5A46] via-[#1E5A46] to-[#1E5A46] rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl mb-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center lg:text-left">
                <span className="font-['Cinzel',serif] text-[10px] font-bold text-[#C5A15B] tracking-[0.2em] uppercase block mb-1">
                  GLOBAL EXPORT INFRASTRUCTURE
                </span>
                <h3 className="font-['Cinzel',serif] text-base sm:text-xl font-bold uppercase tracking-wider text-white mb-2">
                  Worldwide Presence &amp; Diplomatic Landmarks
                </h3>
                <p className="text-xs text-white/75 max-w-2xl leading-relaxed">
                  Trusted by international architects, embassy projects, and royal estate developers worldwide with certified seaworthy timber crating and direct quarry-to-port logistics.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:w-auto shrink-0">
                {internationalFootprint.map((item) => (
                  <div
                    key={item.country}
                    className="p-3 rounded-xl bg-white/5 border border-white/10 text-left flex items-start gap-2.5"
                  >
                    <Globe2 className="w-4 h-4 text-[#C5A15B] shrink-0 mt-0.5" />
                    <div>
                      <span
                        className={`text-xs font-bold block ${
                          item.highlight ? "text-[#C5A15B]" : "text-white"
                        }`}
                      >
                        {item.country}
                      </span>
                      <span className="text-[10px] text-white/60 block">{item.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimDiv>

        {/* Direct Action Consultation CTAs */}
        <AnimDiv delay={250}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <a
              href={`https://wa.me/919414945457?text=${encodeURIComponent(
                "Hello Director Arvind Garg, I would like to inquire about your International Award-nominated natural stone solutions and 300+ Front Elevation designs."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-[#123D32] font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full shadow-xl transition-all active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#123D32]" size={16} />
              <span>Consult with Director Arvind Garg</span>
            </a>

            <Link
              href="/landscaping"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition-all active:scale-95 text-center"
            >
              <Home className="w-4 h-4 text-[#C5A15B]" />
              <span>Farm House &amp; Gardens Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A15B]" />
            </Link>
          </div>
        </AnimDiv>
      </div>
    </section>
  );
}
