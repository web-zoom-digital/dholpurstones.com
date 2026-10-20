"use client";

import React, { useState } from "react";
import { Sparkles, Send, CheckCircle2, Phone, Mail, MapPin, Package, ShieldCheck, MessageCircle } from "lucide-react";

export default function InquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    firm: "",
    email: "",
    phone: "",
    material: "Dholpur Sandstone",
    projectType: "Government / Monumental",
    quantity: "5,000 - 20,000 Sq.Ft.",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#121212] relative overflow-hidden border-b border-white/10">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#5a1224]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c29b38]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column (5 Cols): Direct Contacts & Sample Box Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-[#c29b38] text-xs font-semibold tracking-[0.25em] uppercase mb-3">
                <Sparkles className="w-4 h-4" />
                DIRECT ARCHITECTURAL DESK • ESTD. 1953
              </div>
              <h2 className="font-['Aboreto',serif] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.1em] text-white uppercase leading-tight">
                LET US SCULPT YOUR VISION
              </h2>
              <p className="font-['EB_Garamond',serif] italic text-lg sm:text-xl text-[#a8a8a8] mt-4 leading-relaxed">
                Connect directly with our senior quarry master and export directors for architectural bids, customized shop drawings, and physical stone sample kits.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <a
                href="https://wa.me/919829012345?text=Hello%20Dholpur%20Stones,%20I%20would%20like%20to%20request%20an%20architectural%20stone%20consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-[#18181b] border border-[#25D366]/30 hover:border-[#25D366] flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white flex items-center justify-center transition-colors">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 uppercase tracking-widest block font-bold">
                      INSTANT WHATSAPP DIRECT
                    </span>
                    <span className="text-base font-bold text-white group-hover:text-[#25D366] transition-colors">
                      +91 98290 12345
                    </span>
                  </div>
                </div>
                <span className="text-xs text-[#25D366] font-semibold tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                  Chat Now →
                </span>
              </a>

              <div className="p-5 rounded-2xl bg-[#18181b] border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c29b38]/10 text-[#c29b38] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-white/50 uppercase tracking-widest block font-bold">
                    GLOBAL EXPORT DESK
                  </span>
                  <a
                    href="mailto:exports@dholpurstones.com"
                    className="text-base font-bold text-white hover:text-[#c29b38] transition-colors"
                  >
                    exports@dholpurstones.com
                  </a>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#18181b] border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#5a1224]/30 text-[#f4efe6] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] text-white/50 uppercase tracking-widest block font-bold">
                    HEADQUARTERS & QUARRIES
                  </span>
                  <p className="text-sm text-white/80 mt-0.5">
                    Quarry Zone: Bari Road, Dholpur, Rajasthan - 328001
                    <br />
                    Jaipur Office: Mansarovar Industrial Area, Jaipur - 302020
                  </p>
                </div>
              </div>
            </div>

            {/* Free Sample Box Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#470c1b] to-[#5a1224] border border-[#c29b38]/40 shadow-xl text-white">
              <div className="flex items-center gap-3 mb-2">
                <Package className="w-5 h-5 text-[#c29b38]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#c29b38]">
                  COMPLIMENTARY ARCHITECTURAL SPECIMEN BOX
                </span>
              </div>
              <p className="text-xs text-white/90 leading-relaxed">
                Registered architectural firms, contractors, and international importers can request a 5-material tactile box dispatched via DHL Express worldwide.
              </p>
            </div>
          </div>

          {/* Right Column (7 Cols): Luxury Architectural RFQ Form */}
          <div className="lg:col-span-7 bg-[#18181b] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
            <h3 className="font-['Aboreto',serif] text-2xl font-bold text-white uppercase tracking-wider mb-2">
              REQUEST ARCHITECTURAL BID & SAMPLES
            </h3>
            <p className="text-xs text-white/60 mb-8 uppercase tracking-wider">
              Fill out the details below for customized cutting schedules and FOB/CIF price quotes.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-['Aboreto',serif] text-2xl font-bold text-white uppercase tracking-wider">
                  INQUIRY RECEIVED
                </h4>
                <p className="font-['EB_Garamond',serif] italic text-lg text-[#f4efe6] max-w-md mx-auto">
                  Thank you, {formData.name}. Our Senior Stone Technical Director will review your specifications and contact you within 4 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-['Aboreto',serif] text-xs uppercase tracking-widest px-6 py-2.5 rounded-full border border-[#c29b38] text-[#c29b38] hover:bg-[#c29b38] hover:text-black transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest font-semibold text-white/70 mb-2">
                      YOUR FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ar. Vikramaditya Sharma"
                      className="w-full bg-[#121212] border border-white/10 focus:border-[#c29b38] rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest font-semibold text-white/70 mb-2">
                      ARCHITECTURE FIRM / COMPANY
                    </label>
                    <input
                      type="text"
                      value={formData.firm}
                      onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                      placeholder="e.g. Studio Vista Architecture"
                      className="w-full bg-[#121212] border border-white/10 focus:border-[#c29b38] rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest font-semibold text-white/70 mb-2">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. contact@studiovista.com"
                      className="w-full bg-[#121212] border border-white/10 focus:border-[#c29b38] rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest font-semibold text-white/70 mb-2">
                      PHONE / WHATSAPP NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98XXX XXXXX or Intl Code"
                      className="w-full bg-[#121212] border border-white/10 focus:border-[#c29b38] rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest font-semibold text-white/70 mb-2">
                      STONE REQUIRED
                    </label>
                    <select
                      value={formData.material}
                      onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 focus:border-[#c29b38] rounded-xl px-4 py-3 text-xs text-white outline-none"
                    >
                      <option value="Dholpur Sandstone">Dholpur Sandstone</option>
                      <option value="Makrana Marble">Makrana Pristine Marble</option>
                      <option value="Imperial Granite">Imperial Indian Granite</option>
                      <option value="Semi-Precious Agate">Semi-Precious Inlays</option>
                      <option value="Hand-Carved Jali">Hand-Carved Stone Jali</option>
                      <option value="Multiple Stone Package">Multiple Stone Package</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest font-semibold text-white/70 mb-2">
                      PROJECT TYPOLOGY
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 focus:border-[#c29b38] rounded-xl px-4 py-3 text-xs text-white outline-none"
                    >
                      <option value="Government / Monumental">Government / Monumental</option>
                      <option value="Sacred Temple / Monument">Sacred Temple / Monument</option>
                      <option value="Luxury Private Residence">Luxury Private Residence</option>
                      <option value="Commercial / Hospitality">Commercial / Hospitality</option>
                      <option value="International Export FOB/CIF">International Export FOB/CIF</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-widest font-semibold text-white/70 mb-2">
                      ESTIMATED SCALE
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-[#121212] border border-white/10 focus:border-[#c29b38] rounded-xl px-4 py-3 text-xs text-white outline-none"
                    >
                      <option value="1,000 - 5,000 Sq.Ft.">1,000 - 5,000 Sq.Ft.</option>
                      <option value="5,000 - 20,000 Sq.Ft.">5,000 - 20,000 Sq.Ft.</option>
                      <option value="20,000 - 100,000+ Sq.Ft.">20,000 - 100,000+ Sq.Ft.</option>
                      <option value="Container Load (20ft / 40ft)">Container Load (20ft / 40ft)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-widest font-semibold text-white/70 mb-2">
                    PROJECT ARCHITECTURAL NOTES & SPECIFICATIONS
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide thickness (e.g. 30mm, 50mm), finish (honed, flamed, hand-chiseled), or specific architectural drawings requirements..."
                    className="w-full bg-[#121212] border border-white/10 focus:border-[#c29b38] rounded-xl p-4 text-sm text-white placeholder-white/30 outline-none transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full font-['Aboreto',serif] text-xs sm:text-sm uppercase tracking-[0.18em] py-4 rounded-full bg-[#c29b38] text-black font-bold hover:bg-[#dfb54b] transition-all duration-300 shadow-[0_4px_25px_rgba(194,155,56,0.3)] active:scale-95 flex items-center justify-center gap-2 group"
                  >
                    <span>SUBMIT SPECIFICATION & REQUEST BID</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
