"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

// Social SVG Icons (Clean, crisp, standalone vector paths)
function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail("");
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#0D1311] text-white border-t border-white/10 relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. TOP SECTION: 4 COLUMNS (Products, Quick Links, Useful Links, Newsletter) */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 sm:pt-16 sm:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1: Our Products */}
          <div>
            <h3 className="text-white text-base sm:text-lg font-bold tracking-wide mb-4 sm:mb-5">
              Our Products
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/70">
              <li>
                <Link href="/products" className="hover:text-[#C29B38] transition-colors">
                  Agra Red Stone
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#C29B38] transition-colors">
                  Dholpur Beige Stone
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#C29B38] transition-colors">
                  Chocolate Stone
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#C29B38] transition-colors">
                  Bansi Pink Stone
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#C29B38] transition-colors">
                  Botticino &amp; Italian Marble
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-[#C29B38] transition-colors">
                  Hand-Carved Sculptures &amp; Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-base sm:text-lg font-bold tracking-wide mb-4 sm:mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/70">
              <li>
                <Link href="/about" className="hover:text-[#C29B38] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#C29B38] transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/landscaping" className="hover:text-[#C29B38] transition-colors">
                  Landscaping Solutions
                </Link>
              </li>
              <li>
                <Link href="/articles" className="hover:text-[#C29B38] transition-colors">
                  Stone Articles &amp; Sculptures
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#C29B38] transition-colors">
                  Signature Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C29B38] transition-colors">
                  Our Mines &amp; Quarries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div>
            <h3 className="text-white text-base sm:text-lg font-bold tracking-wide mb-4 sm:mb-5">
              Useful Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/70">
              <li>
                <Link href="/about" className="hover:text-[#C29B38] transition-colors">
                  Corporate Lineage &amp; Heritage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#C29B38] font-medium hover:underline">
                  Contact &amp; Works Address
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#C29B38] transition-colors">
                  Natural Stone Collection
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C29B38] transition-colors">
                  Verified FAQs &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-white text-base sm:text-lg font-bold tracking-wide mb-3">
              Sign up for our newsletter
            </h3>
            <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed mb-4">
              Join our eco-conscious community—subscribe to our newsletter for natural stone updates and architectural insights!
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex flex-col sm:flex-row items-stretch gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full bg-white text-[#141A17] placeholder:text-gray-400 text-xs sm:text-sm px-3.5 py-2.5 rounded-md outline-none focus:ring-2 focus:ring-[#C29B38] transition-all"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-[#C29B38] hover:bg-[#b08a2e] text-[#0D1311] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-md transition-all active:scale-95 shadow-md cursor-pointer"
                >
                  Subscribe
                </button>
              </div>

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
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Phone */}
            <div className="lg:col-span-3 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C29B38]/40 bg-[#161D1A] flex items-center justify-center shrink-0 mt-0.5 text-[#C29B38]">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-[13px] leading-snug">
                <span className="text-[#C29B38] font-bold tracking-wider uppercase text-[11px] block mb-0.5">
                  Have a Questions?
                </span>
                <a
                  href="tel:+919414945457"
                  className="text-white hover:text-[#C29B38] font-semibold block transition-colors"
                >
                  +91 94149 45457 <span className="text-[10px] text-[#25D366] font-normal">(WhatsApp)</span>
                </a>
                <a
                  href="tel:+919057355232"
                  className="text-white/85 hover:text-[#C29B38] font-medium block transition-colors mt-0.5"
                >
                  +91 90573 55232
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="lg:col-span-3 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C29B38]/40 bg-[#161D1A] flex items-center justify-center shrink-0 mt-0.5 text-[#C29B38]">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-[13px] leading-snug">
                <span className="text-[#C29B38] font-bold tracking-wider uppercase text-[11px] block mb-0.5">
                  Contact us at
                </span>
                <a
                  href="mailto:gargcorporationltd@gmail.com"
                  className="text-white hover:text-[#C29B38] font-medium block truncate transition-colors"
                >
                  gargcorporationltd@gmail.com
                </a>
                <a
                  href="mailto:kamala_stone@yahoo.co.in"
                  className="text-white/80 hover:text-[#C29B38] font-medium block truncate transition-colors"
                >
                  kamala_stone@yahoo.co.in
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="lg:col-span-3 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full border border-[#C29B38]/40 bg-[#161D1A] flex items-center justify-center shrink-0 mt-0.5 text-[#C29B38]">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-[13px] leading-snug">
                <span className="text-[#C29B38] font-bold tracking-wider uppercase text-[11px] block mb-0.5">
                  We are located at
                </span>
                <p className="text-white font-semibold text-xs sm:text-[13px]">
                  B P Garg &amp; Sons
                </p>
                <p className="text-white/80 text-[11px] sm:text-xs leading-relaxed">
                  Near RAC line, Mothiyapura road, Sarmathura 328026 Dholpur, Raj. INDIA
                </p>
              </div>
            </div>

            {/* Vertical Divider & Social Icons */}
            <div className="lg:col-span-3 flex items-center lg:justify-end gap-5 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-6">
              <div>
                <span className="text-[#C29B38] font-bold tracking-wider uppercase text-[11px] block mb-2">
                  Follow Us On
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#0D1311] hover:bg-[#C29B38] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#0D1311] hover:bg-[#C29B38] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#0D1311] hover:bg-[#C29B38] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#0D1311] hover:bg-[#C29B38] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white text-[#0D1311] hover:bg-[#C29B38] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
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
      <div className="bg-[#080C0B] border-t border-white/5 py-3.5 px-4 text-center">
        <p className="text-[11px] sm:text-xs text-white/60 tracking-wide">
          Copyright &copy; 2026 | All Right Reserved | Dholpurestones.com (Garg Corporation Ltd. &amp; Sarmathura Stone Company)
        </p>
      </div>
    </footer>
  );
}
