"use client";

import React from "react";
import {
  LuShieldCheck as ShieldCheck,
  LuCircleCheck as CheckCircle2,
  LuAward as Award,
  LuFileText as FileText
} from "react-icons/lu";

export default function StoneTechnicalSpecsTable() {
  const specs = [
    {
      property: "Compressive Strength (Dry / Wet)",
      dholpurValue: "68.4 MPa to 72.8 MPa (N/mm²)",
      astmReq: "> 28.0 MPa (ASTM C616 Class II)",
      isReq: "> 35.0 MPa (IS:3622)",
      significance: "Heavy load-bearing capacity; ideal for multi-storey facade cladding and vehicular carriage driveways.",
    },
    {
      property: "Water Absorption by Weight",
      dholpurValue: "1.10% to 1.15% maximum",
      astmReq: "< 8.00% maximum",
      isReq: "< 2.50% maximum",
      significance: "Extremely low porosity prevents algae/moss formation, efflorescence, and winter freeze-thaw spalling.",
    },
    {
      property: "Bulk Density / Specific Gravity",
      dholpurValue: "2.42 to 2.52 g/cm³",
      astmReq: "> 2.16 g/cm³",
      isReq: "> 2.30 g/cm³",
      significance: "High crystalline quartz density ensures centuries of durability against extreme wind and weather erosion.",
    },
    {
      property: "Mohs Mineral Hardness",
      dholpurValue: "6.5 to 7.0 on Mohs scale",
      astmReq: "Commercial Grade Quartz",
      isReq: "Quartzitic Sandstone",
      significance: "Resists foot abrasion, vehicular scuffing, and mechanical wear in high-traffic public plazas.",
    },
    {
      property: "Wet Slip Resistance Rating",
      dholpurValue: "R11 to R12 (Honed / Cleft / Flamed)",
      astmReq: "C1028 CoF > 0.60",
      isReq: "Anti-Slip Certified",
      significance: "Safe traction for luxury swimming pool surrounds, exterior steps, and rainy weather walkways.",
    },
    {
      property: "Thermal Conductivity & Reflectance",
      dholpurValue: "High Thermal Inertia (Cool Touch)",
      astmReq: "Naturally Heat Reflective",
      isReq: "Low Heat Absorption",
      significance: "Maintains significantly cooler surface temperatures under intense sunlight compared to concrete or granite.",
    },
    {
      property: "Acid, Salt & Weathering Immunity",
      dholpurValue: "Zero Spalling / Inert Siliceous Bond",
      astmReq: "Acid Weathering Stable",
      isReq: "Non-efflorescent Class 1",
      significance: "100% immune to swimming pool chlorine, saline groundwater, and atmospheric urban pollution.",
    },
  ];

  return (
    <section
      id="specifications"
      aria-label="Dholpur Sandstone Technical Physical Properties"
      className="py-10 sm:py-20 bg-[#F7F4EB] border-t border-b border-black/8"
    >
      <div className="max-w-[1280px] mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Header Ribbon */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-[#123D32]/15 border border-[#123D32]/30 mb-2.5 sm:mb-3 text-[#123D32]">
            <Award className="w-3.5 h-3.5" />
            <span className="font-heading text-[11px] sm:text-xs font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase">
              CERTIFIED LABORATORY METRICS &bull; ASTM C616 / IS 3622
            </span>
          </div>

          <h2 className="font-heading text-xl sm:text-3xl lg:text-4xl font-bold uppercase text-[#123D32] tracking-wide leading-snug sm:leading-tight">
            Technical Properties &amp; Comparative Engineering Specs
          </h2>
          <p className="font-body text-xs sm:text-sm text-[#6B7C73] mt-2 sm:mt-3 leading-relaxed">
            Authentic Dholpur sandstone extracted from our Dholpur quarries consistently exceeds both Indian Standards (IS 3622) and American Society for Testing and Materials (ASTM C616) requirements.
          </p>
        </div>

        {/* 4 Summary Definition Callout Cards (Compact 2x2 Matrix on Mobile, 4-col on lg) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
          <div className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-black/8 shadow-xs">
            <span className="text-[11px] sm:text-[11px] font-bold text-[#C5A15B] uppercase tracking-wider block mb-1">
              Compressive Strength
            </span>
            <div className="text-xl sm:text-3xl font-bold font-heading text-[#123D32]">
              72.8 MPa
            </div>
            <p className="text-[11px] sm:text-xs text-[#6B7C73] mt-1 sm:mt-1.5 leading-snug">
              Exceeds ASTM C616 (&gt;28 MPa) by over 140%, supporting multi-tier structural loads.
            </p>
          </div>

          <div className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-black/8 shadow-xs">
            <span className="text-[11px] sm:text-[11px] font-bold text-[#C5A15B] uppercase tracking-wider block mb-1">
              Water Absorption
            </span>
            <div className="text-xl sm:text-3xl font-bold font-heading text-[#123D32]">
              1.10% Max
            </div>
            <p className="text-[11px] sm:text-xs text-[#6B7C73] mt-1 sm:mt-1.5 leading-snug">
              Far below the standard 8% ceiling, preventing efflorescence, salt decay, and moss.
            </p>
          </div>

          <div className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-black/8 shadow-xs">
            <span className="text-[11px] sm:text-[11px] font-bold text-[#C5A15B] uppercase tracking-wider block mb-1">
              Wet Slip Rating
            </span>
            <div className="text-xl sm:text-3xl font-bold font-heading text-[#123D32]">
              R11 / R12
            </div>
            <p className="text-[11px] sm:text-xs text-[#6B7C73] mt-1 sm:mt-1.5 leading-snug">
              Certified anti-slip traction for wet swimming pool coping, courtyards, and driveways.
            </p>
          </div>

          <div className="bg-white p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-black/8 shadow-xs">
            <span className="text-[11px] sm:text-[11px] font-bold text-[#C5A15B] uppercase tracking-wider block mb-1">
              Mineral Density
            </span>
            <div className="text-xl sm:text-3xl font-bold font-heading text-[#123D32]">
              2.52 g/cm³
            </div>
            <p className="text-[11px] sm:text-xs text-[#6B7C73] mt-1 sm:mt-1.5 leading-snug">
              Fine-grained quartzitic formation ensuring zero crumbling and centuries of weather resistance.
            </p>
          </div>
        </div>

        {/* The Core Semantic Responsive HTML Table */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-black/10 shadow-md overflow-hidden">
          {/* Mobile Swipe Hint */}
          <div className="sm:hidden flex items-center justify-center gap-1.5 py-1.5 px-3 bg-[#F7F4EB] border-b border-black/6 text-[11px] font-semibold text-[#6B7C73] tracking-wider uppercase">
            <span>&larr; Swipe table horizontally to compare all standards &rarr;</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <caption className="sr-only">
                Laboratory physical test metrics for Dholpur sandstone compared against ASTM C616 and IS 3622
              </caption>
              <thead>
                <tr className="bg-[#123D32] text-white font-heading uppercase tracking-wider text-[11px] sm:text-xs">
                  <th scope="col" className="py-4 px-4 sm:px-6 font-bold border-b border-white/10">
                    Physical Property
                  </th>
                  <th scope="col" className="py-4 px-4 sm:px-6 font-bold border-b border-white/10 text-[#C5A15B]">
                    Dholpurestones Test Value
                  </th>
                  <th scope="col" className="py-4 px-4 sm:px-6 font-bold border-b border-white/10">
                    ASTM C616 Requirement
                  </th>
                  <th scope="col" className="py-4 px-4 sm:px-6 font-bold border-b border-white/10">
                    IS:3622 Standard
                  </th>
                  <th scope="col" className="py-4 px-4 sm:px-6 font-bold border-b border-white/10 min-w-[220px]">
                    Architectural Application
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/8 text-[#1F2A24]">
                {specs.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-[#F7F4EB] transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-[#F7F4EB]/40"}`}
                  >
                    <td className="py-4 px-4 sm:px-6 font-semibold text-[#123D32]">
                      {row.property}
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-bold text-[#123D32] bg-[#123D32]/5">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                        <span>{row.dholpurValue}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[#6B7C73]">
                      {row.astmReq}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-[#6B7C73]">
                      {row.isReq}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-xs text-[#6B7C73] leading-relaxed">
                      {row.significance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Callout */}
          <div className="bg-[#F7F4EB] p-4 sm:p-5 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B7C73]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A15B] shrink-0" />
              <span>Certified NABL-accredited laboratory test reports available upon architectural BOQ request.</span>
            </div>
            <div className="text-[11px] font-semibold text-[#123D32] tracking-wide uppercase">
              Standards: ASTM C616 &bull; ASTM C1028 &bull; IS:3622 &bull; IS:1121
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
