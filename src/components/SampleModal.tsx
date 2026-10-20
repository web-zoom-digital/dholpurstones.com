"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Package, CheckCircle2, Sparkles, Send } from "lucide-react";

interface SampleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SampleModal({ isOpen, onClose }: SampleModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    firm: "",
    email: "",
    phone: "",
    address: "",
    country: "India",
    stones: ["Dholpur Sandstone", "Makrana Marble"],
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleStone = (stone: string) => {
    if (formData.stones.includes(stone)) {
      setFormData({
        ...formData,
        stones: formData.stones.filter((s) => s !== stone),
      });
    } else {
      setFormData({
        ...formData,
        stones: [...formData.stones, stone],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const stoneOptions = [
    "Dholpur Sandstone (Beige/Red)",
    "Makrana Pristine White Marble",
    "Imperial Indian Granite",
    "Semi-Precious Agate Inlay",
    "Hand-Carved Stone Jali Screen",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-xl bg-[#18181b] border border-[#c29b38]/40 rounded-3xl shadow-2xl overflow-hidden my-8 p-6 sm:p-8">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#c29b38]/20 text-[#c29b38]">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Aboreto',serif] text-lg font-bold text-white uppercase tracking-wider">
                ARCHITECTURAL SAMPLE BOX
              </h3>
              <p className="text-[10px] text-[#c29b38] uppercase tracking-wider font-semibold">
                COMPLIMENTARY DISPATCH VIA DHL COURIER
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 text-white/70 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-['Aboreto',serif] text-2xl font-bold text-white uppercase tracking-wider">
              SAMPLE BOX DISPATCH CONFIRMED
            </h4>
            <p className="font-['EB_Garamond',serif] italic text-base text-[#f4efe6] max-w-sm mx-auto">
              Your sample kit containing {formData.stones.length} stone specimens has been queued for packaging. A tracking number will be sent to {formData.email}.
            </p>
            <button
              onClick={onClose}
              className="mt-6 font-['Aboreto',serif] text-xs uppercase tracking-widest px-8 py-3 rounded-full bg-[#c29b38] text-black font-bold"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-semibold text-white/70 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ar. Name"
                  className="w-full bg-[#121212] border border-white/10 focus:border-[#c29b38] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 outline-none"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-semibold text-white/70 mb-1.5">
                  Firm / Studio
                </label>
                <input
                  type="text"
                  value={formData.firm}
                  onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                  placeholder="Design Firm"
                  className="w-full bg-[#121212] border border-white/10 focus:border-[#c29b38] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-semibold text-white/70 mb-1.5">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@firm.com"
                  className="w-full bg-[#121212] border border-white/10 focus:border-[#c29b38] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 outline-none"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest font-semibold text-white/70 mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91..."
                  className="w-full bg-[#121212] border border-white/10 focus:border-[#c29b38] rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-semibold text-white/70 mb-1.5">
                Delivery Address for DHL Courier *
              </label>
              <textarea
                required
                rows={2}
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Full studio street address, City, Postal Code, Country"
                className="w-full bg-[#121212] border border-white/10 focus:border-[#c29b38] rounded-xl p-3 text-xs text-white placeholder-white/30 outline-none"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-semibold text-white/70 mb-2">
                Select Samples Desired in Box:
              </label>
              <div className="flex flex-wrap gap-2">
                {stoneOptions.map((stone) => {
                  const isSelected = formData.stones.includes(stone);
                  return (
                    <button
                      type="button"
                      key={stone}
                      onClick={() => toggleStone(stone)}
                      className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                        isSelected
                          ? "bg-[#c29b38] text-black border-[#c29b38] font-semibold"
                          : "bg-white/5 text-white/70 border-white/10 hover:border-white/30"
                      }`}
                    >
                      {isSelected ? "✓ " : "+ "}
                      {stone}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full font-['Aboreto',serif] text-xs uppercase tracking-widest py-3.5 rounded-full bg-[#c29b38] text-black font-bold hover:bg-[#dfb54b] transition-all flex items-center justify-center gap-2"
              >
                <span>CONFIRM SAMPLE DISPATCH</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
