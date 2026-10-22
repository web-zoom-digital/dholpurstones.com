"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LuPhone as Phone,
  LuMail as Mail,
  LuMapPin as MapPin,
  LuCircleCheck as CheckCircle2,
} from "react-icons/lu";
import {
  FaFacebookF as FacebookIcon,
  FaInstagram as InstagramIcon,
  FaXTwitter as TwitterIcon,
  FaYoutube as YoutubeIcon,
  FaLinkedinIn as LinkedinIcon,
} from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subError, setSubError] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubscribing(true);
    setSubError(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Subscription failed");
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    } catch (err: unknown) {
      setSubError(err instanceof Error ? err.message : "Unable to subscribe");
    } finally {
      setIsSubscribing(false);
    }
  };

  return (
    <footer className="bg-[#123D32] text-white border-t border-white/10 relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Accolades & Recognition Ribbon */}
      <div className="bg-[#1F2A24] border-b border-white/10 py-2.5 sm:py-3.5 px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-1.5 sm:gap-2.5 text-center md:text-left">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[#C5A15B] font-bold tracking-wider uppercase text-[9.5px] sm:text-xs">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C5A15B] shrink-0" />
            <span>Awarded by Govt. of India &bull; Nominated for International Award for Business Excellence</span>
          </div>
          <div className="text-white/75 text-[10px] sm:text-[11px] tracking-wide font-medium">
            300+ Sandstone Front Elevation Designs &bull; Luxury Farm Houses &amp; Designer Gardens
          </div>
        </div>
      </div>

      {/* 1. TOP SECTION: 4 COLUMNS (Products, Quick Links, Useful Links, Newsletter) */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 sm:pt-12 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Column 1: Our Products */}
          <div>
            <h3 className="text-white text-sm sm:text-base lg:text-lg font-bold tracking-wide mb-2.5 sm:mb-4">
              Our Products
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-[13px] text-white/70">
              <li>
                <Link href="/products" className="hover:text-[#C5A15B] transition-colors">
                  Agra Red Stone
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#C5A15B] transition-colors">
                  Dholpur Beige Stone
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#C5A15B] transition-colors">
                  Chocolate Stone
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#C5A15B] transition-colors">
                  Bansi Pink Stone
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#C5A15B] transition-colors">
                  Exclusive Imported Marble
                </Link>
              </li>
              <li>
                <Link href="/semi-precious" className="hover:text-[#C5A15B] transition-colors">
                  Semi Precious Stone
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-[#C5A15B] transition-colors">
                  Hand-Carved Sculptures &amp; Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-sm sm:text-base lg:text-lg font-bold tracking-wide mb-2.5 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-[13px] text-white/70">
              <li>
                <Link href="/about" className="hover:text-[#C5A15B] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#C5A15B] transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/farmhouse-gardens" className="hover:text-[#C5A15B] transition-colors">
                  Farm House &amp; Gardens
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-[#C5A15B] transition-colors">
                  Stone Articles &amp; Sculptures
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#C5A15B] transition-colors">
                  Signature Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C5A15B] transition-colors">
                  Our Mines &amp; Quarries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links & Legal */}
          <div>
            <h3 className="text-white text-sm sm:text-base lg:text-lg font-bold tracking-wide mb-2.5 sm:mb-4">
              Useful Links
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-[13px] text-white/70">
              <li>
                <Link href="/about" className="hover:text-[#C5A15B] transition-colors">
                  Corporate Lineage &amp; Heritage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#C5A15B] font-medium hover:underline">
                  Contact &amp; Works Address
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#C5A15B] transition-colors">
                  Natural Stone Collection
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C5A15B] transition-colors">
                  Verified FAQs &amp; Inquiries
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#C5A15B] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#C5A15B] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-[#C5A15B] transition-colors">
                  HTML Sitemap
                </Link>
              </li>
              <li>
                <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A15B] transition-colors text-[11px] text-[#C5A15B] font-mono">
                  AI Context (/llms.txt)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white text-sm sm:text-base lg:text-lg font-bold tracking-wide mb-2 sm:mb-3">
              Sign up for our newsletter
            </h3>
            <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed mb-3 sm:mb-4">
              Join our architectural stone community—subscribe for quarterly quarry updates, export schedules &amp; technical reports!
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex flex-col sm:flex-row items-stretch gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full bg-white text-[#1F2A24] placeholder:text-gray-400 text-base sm:text-sm px-3.5 py-2 sm:py-2.5 rounded-md outline-none focus:ring-2 focus:ring-[#C5A15B] transition-all"
                />
                <button
                  type="submit"
                  disabled={isSubscribing}
                  className="shrink-0 bg-[#C5A15B] hover:bg-[#C5A15B] disabled:opacity-60 text-[#123D32] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-md transition-all active:scale-95 shadow-md cursor-pointer"
                >
                  {isSubscribing ? "..." : "Subscribe"}
                </button>
              </div>

              {subError && (
                <div className="text-red-400 text-xs pt-1 font-medium">
                  {subError}
                </div>
              )}

              {subscribed && (
                <div className="flex items-center gap-1.5 text-[#25D366] text-xs font-semibold pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Thank you! You have successfully subscribed.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* 2. MIDDLE CONTACT & SOCIAL BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 items-center">
            {/* Phone */}
            <div className="lg:col-span-3 flex items-start gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#C5A15B]/40 bg-[#1E5A46] flex items-center justify-center shrink-0 mt-0.5 text-[#C5A15B]">
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="text-xs sm:text-[13px] leading-snug">
                <span className="text-[#C5A15B] font-bold tracking-wider uppercase text-[10px] sm:text-[11px] block mb-0.5">
                  Have a Questions?
                </span>
                <a
                  href="tel:+919414945457"
                  className="text-white hover:text-[#C5A15B] font-semibold block transition-colors"
                >
                  +91 94149 45457 <span className="text-[10px] text-[#25D366] font-normal">(WhatsApp)</span>
                </a>
                <a
                  href="tel:+919057355232"
                  className="text-white/85 hover:text-[#C5A15B] font-medium block transition-colors mt-0.5"
                >
                  +91 90573 55232
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="lg:col-span-3 flex items-start gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#C5A15B]/40 bg-[#1E5A46] flex items-center justify-center shrink-0 mt-0.5 text-[#C5A15B]">
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="text-xs sm:text-[13px] leading-snug">
                <span className="text-[#C5A15B] font-bold tracking-wider uppercase text-[10px] sm:text-[11px] block mb-0.5">
                  Contact us at
                </span>
                <a
                  href="mailto:gargcorporationltd@gmail.com"
                  className="text-white hover:text-[#C5A15B] font-medium block truncate transition-colors"
                >
                  gargcorporationltd@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="lg:col-span-3 flex items-start gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-[#C5A15B]/40 bg-[#1E5A46] flex items-center justify-center shrink-0 mt-0.5 text-[#C5A15B]">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="text-xs sm:text-[13px] leading-snug">
                <span className="text-[#C5A15B] font-bold tracking-wider uppercase text-[10px] sm:text-[11px] block mb-0.5">
                  We are located at
                </span>
                <p className="text-white font-semibold text-xs sm:text-[13px]">
                  B P Garg &amp; Sons
                </p>
                <p className="text-white/80 text-[10.5px] sm:text-xs leading-relaxed">
                  Near RAC line, Mothiyapura road, Dholpur 328026, Raj. INDIA
                </p>
              </div>
            </div>

            {/* Vertical Divider & Social Icons */}
            <div className="lg:col-span-3 flex items-center lg:justify-end gap-4 sm:gap-5 pt-3 sm:pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-6">
              <div>
                <span className="text-[#C5A15B] font-bold tracking-wider uppercase text-[10px] sm:text-[11px] block mb-1.5 sm:mb-2">
                  Follow Us On
                </span>
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#123D32] hover:bg-[#C5A15B] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#123D32] hover:bg-[#C5A15B] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#123D32] hover:bg-[#C5A15B] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#123D32] hover:bg-[#C5A15B] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#123D32] hover:bg-[#C5A15B] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM COPYRIGHT SUB-BAR */}
      <div className="bg-[#123D32] border-t border-white/5 py-3.5 px-4 text-center">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] sm:text-xs text-white/60 tracking-wide">
          <p>
            Copyright &copy; 2026 | All Rights Reserved | Dholpurestones.com (Garg Corporation Ltd. &amp; Dholpur Stone Company)
          </p>
          <div className="flex items-center gap-3 font-medium">
            <Link href="/sitemap" className="hover:text-[#C5A15B] transition-colors">
              HTML Sitemap
            </Link>
            <span>&bull;</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A15B] transition-colors">
              XML Sitemap
            </a>
            <span>&bull;</span>
            <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A15B] transition-colors font-mono text-[10px] text-[#C5A15B]">
              LLMs.txt
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
