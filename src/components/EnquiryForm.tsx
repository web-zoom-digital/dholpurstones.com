"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LuSend as Send, LuCircleCheck as Check } from "react-icons/lu";
import WhatsAppIcon from "./WhatsAppIcon";
import { categories, waLink } from "@/data/catalog";
import { getAttribution, trackEvent } from "@/lib/leads";

const fieldCls =
  "w-full rounded-xl border border-white/15 bg-white/[0.07] px-4 py-3 text-[15px] text-white placeholder:text-white/45 outline-none transition focus:border-gold focus:bg-white/10";

interface EnquiryFormProps {
  /** Which button / section opened the form — saved with the lead. */
  cta: string;
  product?: string;
  interest?: string;
  compact?: boolean;
  onDone?: () => void;
}

/** One enquiry form used site-wide. Every submission carries its source page. */
export default function EnquiryForm({ cta, product, interest, compact, onDone }: EnquiryFormProps) {
  const pathname = usePathname();
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = Object.fromEntries(new FormData(form));
    const attr = getAttribution();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          product,
          cta,
          page: pathname,
          landing: attr?.landing,
          referrer: attr?.referrer,
          utm_source: attr?.utm_source,
          utm_medium: attr?.utm_medium,
          utm_campaign: attr?.utm_campaign,
          utm_term: attr?.utm_term,
          gclid: attr?.gclid,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed");
      setMessage(json.message);
      setStatus("done");
      trackEvent("generate_lead", { page_path: pathname, cta, interest: String(fields.interest || interest || "") });
      form.reset();
      onDone?.();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try WhatsApp.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-[#25D366]/40 bg-[#25D366]/10 p-6 text-center" role="status">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white">
          <Check className="h-6 w-6" />
        </span>
        <p className="mt-4 text-base font-bold text-white">Enquiry sent!</p>
        <p className="mt-1.5 text-sm text-white/75">{message}</p>
        <a
          href={waLink(`Hello Dholpurestones.com, I just submitted an enquiry${product ? ` about ${product}` : ""} on your website.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-[13px] font-bold text-white"
        >
          <WhatsAppIcon className="h-4 w-4 fill-white" size={16} />
          Get a faster reply on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3.5">
      <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {product && (
        <p className="rounded-xl border border-gold/30 bg-gold/10 px-4 py-2.5 text-[13px] text-white/85">
          Enquiring about: <span className="font-bold text-gold">{product}</span>
        </p>
      )}
      <input name="name" required minLength={2} placeholder="Your name" className={fieldCls} autoComplete="name" />
      <input
        name="phone"
        required
        minLength={7}
        inputMode="tel"
        placeholder="Phone / WhatsApp number"
        className={fieldCls}
        autoComplete="tel"
      />
      <div className={compact ? "grid gap-3.5" : "grid gap-3.5 sm:grid-cols-2"}>
        <input name="email" type="email" placeholder="Email (optional)" className={fieldCls} autoComplete="email" />
        <input name="location" placeholder="City / Country" className={fieldCls} autoComplete="address-level2" />
      </div>
      <select name="interest" defaultValue={interest || ""} className={`${fieldCls} appearance-none`}>
        <option value="" className="text-ink">I am interested in…</option>
        {categories.map((c) => (
          <option key={c.id} value={c.name} className="text-ink">
            {c.name}
          </option>
        ))}
        <option value="Bulk / Export Order" className="text-ink">Bulk / Export Order</option>
        <option value="Other" className="text-ink">Other</option>
      </select>
      <textarea
        name="message"
        rows={compact ? 2 : 3}
        placeholder="Quantity, size, project location — anything that helps us quote faster"
        className={fieldCls}
      />
      <motion.button
        type="submit"
        disabled={status === "sending"}
        whileTap={{ scale: 0.97 }}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-sm font-bold text-forest shadow-[0_10px_26px_-8px_rgba(197,161,91,0.8)] transition-opacity disabled:opacity-60"
      >
        {status === "sending" ? (
          "Sending…"
        ) : (
          <>
            Send Enquiry <Send className="h-4 w-4" />
          </>
        )}
      </motion.button>
      {status === "error" && (
        <p className="text-sm text-[#ffb4a6]" role="alert">
          {message}
        </p>
      )}
      <p className="text-center text-[12px] text-white/50">We reply within working hours. Your details are never shared.</p>
    </form>
  );
}
