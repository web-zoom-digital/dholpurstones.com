"use client";

import React, { useState } from "react";
import {
  LuSparkles as Sparkles,
  LuMountain as Mountain,
  LuCpu as Cpu,
  LuHammer as Hammer,
  LuShip as Ship,
  LuCircleCheck as CheckCircle2
} from "react-icons/lu";

export default function OperationsMatrix() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: "mining",
      number: "01",
      title: "CAPTIVE LEASEHOLD MINING",
      location: "Dholpur & Rajasthan Mines",
      icon: Mountain,
      lead: "Direct control over 4 captive quarries guaranteeing uninterrupted volume, zero middlemen, and stone grain consistency.",
      details: [
        "Private mineral extraction leases spanning over 50 years of confirmed reserves.",
        "Non-explosive diamond wire saw block slicing preventing micro-fractures inside the stone.",
        "Standard extraction blocks ranging from 15 to 30 metric tons per monolithic piece.",
        "Systematic geological inspection ensuring stone chromatic harmony across multi-acre projects.",
      ],
      metrics: {
        capacity: "12,000+ Tons Mined Monthly",
        depth: "Over 80 Meters High-Grade Strata",
        purity: "99.2% Calcite & Silica Consistency",
      },
    },
    {
      id: "processing",
      number: "02",
      title: "HIGH-PRECISION CNC PROCESSING",
      location: "Industrial Processing Plant, Rajasthan",
      icon: Cpu,
      lead: "Combining heavy industrial Italian gangsaws with 5-axis CNC diamond tooling for laser-calibrated tolerances.",
      details: [
        "8 heavy multi-blade diamond gang saws operating continuous 24/7 block slabbing.",
        "Automated 16-head line polishers achieving mirror gloss reflectivity exceeding 95 GU.",
        "5-axis CNC bridge cutters capable of complex 3D helical columns and parametric profiles.",
        "Thickness calibration within ±0.5 mm tolerance conforming strictly to European CE and American ASTM standards.",
      ],
      metrics: {
        capacity: "350,000 Sq.Ft. Monthly Slab Output",
        precision: "±0.5 mm Dimensional Tolerance",
        machinery: "Italian Breton & Multi-Blade Diamond Tech",
      },
    },
    {
      id: "craftsmanship",
      number: "03",
      title: "HEREDITARY STONE CARVING GUILD",
      location: "Artisanal Guild Studios",
      icon: Hammer,
      lead: "Preserving a living heritage: 250+ master stonemasons whose families have carved Rajasthan’s palaces since the 16th century.",
      details: [
        "Traditional hand-chiseled jali screen perforations created from single monolithic slabs.",
        "Deep high-relief architectural corbels, elephant friezes, and temple sanctum mandaps.",
        "Dry-assembly pre-testing: Every monumental arch and dome is trial-assembled at our factory before crating.",
        "Custom bespoke architectural restorations for heritage conservation trusts worldwide.",
      ],
      metrics: {
        guildSize: "250+ Hereditary Master Craftsmen",
        technique: "Shilpa Shastra Classical Joinery",
        dryFit: "100% Pre-Assembly Trial Fit Guarantee",
      },
    },
    {
      id: "logistics",
      number: "04",
      title: "SEAWORTHY GLOBAL EXPORT DESK",
      location: "Mundra, Kandla & Nhava Sheva Ports",
      icon: Ship,
      lead: "Fumigated heavy-duty crating and seamless port logistics delivering to 35+ countries across North America, Europe, the Middle East, and Asia.",
      details: [
        "ISPM-15 heat-treated pinewood crating lined with polyethylene water-repellent barriers.",
        "High-density foam cushioning and individual corner protectors on calibrated tiles and slabs.",
        "Direct customs-bonded container stuffing at factory with real-time GPS tracking to Mundra port.",
        "Full documentation suite: Certificate of Origin, CE Compliance, Laboratory Physical Test Reports, and Bill of Lading.",
      ],
      metrics: {
        reach: "35+ Export Nations Worldwide",
        packaging: "ISPM-15 Certified Seaworthy Crating",
        transit: "3 to 5 Days Direct Dispatch to Major Ports",
      },
    },
  ];

  return (
    <section id="operations" className="py-20 sm:py-28 bg-[#0D1311] relative overflow-hidden border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#c29b38] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              <Sparkles className="w-4 h-4" />
              INTEGRATED SUPPLY CHAIN • FROM RAJASTHAN TO THE WORLD
            </div>
            <h2 className="font-['Aboreto',serif] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.1em] text-white uppercase leading-tight">
              MASTER OPERATIONS MATRIX
            </h2>
            <p className="font-['EB_Garamond',serif] italic text-lg sm:text-xl text-[#a8a8a8] max-w-2xl mt-3">
              Zero dependence on third-party aggregators. We own the quarry, operate the processing mills, guide the artisan guild, and handle international seaworthy exports.
            </p>
          </div>
        </div>

        {/* Step Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isSelected = activeStep === index;
            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`p-6 rounded-2xl cursor-pointer border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#5a1224] border-[#c29b38] shadow-[0_0_25px_rgba(194,155,56,0.25)] text-white scale-[1.02]"
                    : "bg-[#121212] border-white/10 hover:border-[#c29b38]/50 text-white/70 hover:text-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`font-['Aboreto',serif] text-2xl font-bold tracking-wider ${
                        isSelected ? "text-[#c29b38]" : "text-white/30"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div
                      className={`p-2.5 rounded-xl ${
                        isSelected ? "bg-[#c29b38] text-black" : "bg-white/5 text-[#c29b38]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-['Aboreto',serif] text-sm font-bold tracking-wider uppercase mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-white/50 tracking-wider uppercase">
                    {step.location}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] font-semibold text-[#c29b38] flex items-center justify-between">
                  <span>{isSelected ? "Active Stage" : "Inspect Stage"}</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Box */}
        <div className="bg-[#121212] rounded-3xl border border-[#c29b38]/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#5a1224]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left 2 Cols: Description and Points */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#c29b38] font-bold">
                  STAGE {steps[activeStep].number} • {steps[activeStep].location}
                </span>
                <h3 className="font-['Aboreto',serif] text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider mt-1">
                  {steps[activeStep].title}
                </h3>
                <p className="font-['EB_Garamond',serif] italic text-base sm:text-xl text-[#f4efe6] mt-3 leading-relaxed">
                  {steps[activeStep].lead}
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                {steps[activeStep].details.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#c29b38] shrink-0 mt-0.5" />
                    <p className="text-sm text-[#d4d4d4] leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 1 Col: Production & Engineering Metrics */}
            <div className="bg-[#1a1a1a] p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#c29b38] font-bold mb-4 pb-2 border-b border-white/10">
                  VERIFIED OPERATIONAL CAPACITY
                </h4>
                <div className="space-y-5">
                  {Object.entries(steps[activeStep].metrics).map(([key, val], i) => (
                    <div key={i}>
                      <span className="text-[10px] uppercase tracking-wider text-white/50 block">
                        {key.replace(/([A-Z])/g, " $1")}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-white font-['Aboreto',serif] tracking-wider mt-0.5 block">
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="#contact"
                  className="w-full inline-block text-center font-['Aboreto',serif] text-xs uppercase tracking-widest py-3 rounded-full bg-[#c29b38] text-black font-bold hover:bg-[#dfb54b] transition-all"
                >
                  SCHEDULE QUARRY VISIT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
