"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LuMail as Mail,
  LuMapPin as MapPin,
  LuPhone as Phone,
  LuCircleCheck as Check,
  LuArrowRight as ArrowRight,
} from "react-icons/lu";
import WhatsAppIcon from "./WhatsAppIcon";
import { categories, EMAIL, PHONE_PRIMARY, PHONE_SECONDARY, waLink } from "@/data/catalog";

const company = [
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog & Guides", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const support = [
  { label: "Quality Process", href: "/resources#quality" },
  { label: "Packaging & Machinery", href: "/resources#packaging" },
  { label: "Exhibitions", href: "/resources#exhibition" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Sitemap", href: "/sitemap" },
];

const linkCls = "inline-block py-1 text-[14px] text-white/70 transition-all hover:translate-x-1 hover:text-gold";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setState("sending");
    setError(null);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Subscription failed");
      setState("done");
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to subscribe");
      setState("idle");
    }
  };

  return (
    <footer className="bg-forest-deep text-white">
      <div className="container-x pt-14 pb-8 sm:pt-20">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/70 bg-forest">
                <span className="font-heading text-sm font-extrabold text-gold">DS</span>
              </span>
              <span className="leading-tight">
                <span className="block font-heading text-lg font-bold uppercase tracking-[0.08em]">Dholpurestones</span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                  Natural Stone &bull; Since 1953
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-white/65">
              Mine owner, manufacturer, exporter and contractor of sandstone, marble and semi-precious stones — three generations of craft from Dholpur, Rajasthan.
            </p>

            <ul className="mt-6 space-y-3 text-[14px]">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-white/75">
                  B P Garg &amp; Sons, Near RAC line, Mothiyapura Road, Dholpur 328026, Rajasthan
                </span>
              </li>
              <li className="flex gap-3">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 fill-[#25D366]" size={16} />
                <a
                  href={waLink("Hello Dholpurestones.com, I would like to inquire about natural stone.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 transition-colors hover:text-gold"
                >
                  {PHONE_PRIMARY} (WhatsApp)
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href="tel:+919057355232" className="text-white/75 transition-colors hover:text-gold">
                  {PHONE_SECONDARY}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${EMAIL}`} className="break-all text-white/75 transition-colors hover:text-gold">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <div>
              <h3 className="font-heading text-[13px] font-bold uppercase tracking-[0.14em] text-gold">Collections</h3>
              <ul className="mt-3">
                {categories.map((c) => (
                  <li key={c.id}>
                    <Link href={c.href} className={linkCls}>
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-[13px] font-bold uppercase tracking-[0.14em] text-gold">Company</h3>
              <ul className="mt-3">
                {company.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkCls}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-heading text-[13px] font-bold uppercase tracking-[0.14em] text-gold">Support</h3>
              <ul className="mt-3 grid grid-cols-2 sm:block">
                {support.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkCls}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="font-heading text-[13px] font-bold uppercase tracking-[0.14em] text-gold">Stay Updated</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-white/65">
              New stone arrivals, project stories and export updates — a few emails a year.
            </p>
            <form onSubmit={subscribe} className="mt-4">
              <div className="flex overflow-hidden rounded-full border border-white/15 bg-white/[0.07] focus-within:border-gold">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 text-[15px] text-white outline-none placeholder:text-white/45"
                />
                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="m-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-forest transition-transform active:scale-90 disabled:opacity-60"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              {error && <p className="mt-2 text-xs text-[#ffb4a6]">{error}</p>}
              {state === "done" && (
                <p className="mt-2 flex items-center gap-1.5 text-xs text-[#7dedaa]">
                  <Check className="h-3.5 w-3.5" />
                  Thank you — you&apos;re subscribed.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-center text-[12.5px] text-white/50 sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Dholpurestones.com &mdash; B P Garg &amp; Sons / Garg Corporation Ltd. All
            rights reserved.
          </p>
          <p>Awarded by Govt. of India &bull; Estd. 1953</p>
        </div>
      </div>
    </footer>
  );
}
