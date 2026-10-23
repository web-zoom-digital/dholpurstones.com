"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  LuMenu as Menu,
  LuX as X,
  LuChevronDown as ChevronDown,
  LuArrowRight as ArrowRight,
  LuMountain as Mountain,
  LuTreePine as TreePine,
  LuHammer as Hammer,
  LuGem as Gem,
  LuCrown as Crown,
  LuMail as Mail,
  LuMapPin as MapPin,
  LuMessageSquareText,
} from "react-icons/lu";
import WhatsAppIcon from "./WhatsAppIcon";
import EnquiryButton from "./ui/EnquiryButton";
import { categories, waLink, EMAIL, type CategoryId } from "@/data/catalog";

const categoryIcons: Record<CategoryId, React.ComponentType<{ className?: string }>> = {
  sandstone: Mountain,
  "farmhouse-gardens": TreePine,
  "stone-articles": Hammer,
  "semi-precious": Gem,
  "exclusive-imported": Crown,
};

interface NavLink {
  label: string;
  href: string;
  desc?: string;
}

interface NavItem {
  
  label: string;
  href?: string;
  children?: NavLink[];
  mega?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", mega: true },
  { label: "Luxry Farm House & Gardens", href: "/farmhouse-gardens" },
  { label: "Projects", href: "/projects" },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/about", desc: "Our story since 1953" },
      { label: "Our Strength", href: "/about#strength", desc: "Mines, factory and export reach" },
      { label: "Why Choose Us", href: "/about#why-choose", desc: "Direct quarry advantage" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Blog & Guides", href: "/blog", desc: "Stone selection and design guides" },
      { label: "Quality Process", href: "/resources#quality", desc: "Testing and certification" },
      { label: "Packaging & Machinery", href: "/resources#packaging", desc: "Export crating and CNC" },
      { label: "Exhibitions", href: "/resources#exhibition", desc: "Trade shows we attend" },
      { label: "Gallery", href: "/gallery", desc: "Photos and videos" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

const waHeader = waLink("Hello Dholpurstones.com, I would like to inquire about natural stone.");

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileSection, setMobileSection] = useState<string | null>("Products");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus whenever the route changes (state reset during render, per React docs)
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const enter = useCallback((label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }, []);

  const leave = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 160);
  }, []);

  // Same-page hash links need a manual nudge so tabbed pages react
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpenMenu(null);
    setMobileOpen(false);
    if (!href.includes("#")) return;
    const [path, hash] = href.split("#");
    if ((path || "/") === pathname) {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${hash}`);
      window.dispatchEvent(new Event("hashchange"));
    }
  };

  const isActive = (item: NavItem) => {
    if (item.href === "/") return pathname === "/";
    if (item.mega) {
      return (
        pathname.startsWith("/products") ||
        categories.some((c) => pathname.startsWith(c.href) && c.id !== "farmhouse-gardens")
      );
    }
    if (item.href) return pathname.startsWith(item.href);
    return !!item.children?.some((c) => pathname.startsWith(c.href.split("#")[0]));
  };

  return (
    <>
      {/* ───────────── Top utility bar ───────────── */}
      <div className="relative z-[60] bg-forest-deep text-white/80">
        <div className="container-x flex items-center justify-center lg:justify-between gap-4 py-2 text-[11px] sm:text-xs">
          <p className="whitespace-nowrap text-center font-semibold uppercase tracking-[0.1em] text-gold sm:tracking-[0.16em]">
            Estd. 1953
            <span className="mx-1.5 text-white/30">•</span>
            <span className="text-white/80">Mine Owner</span>
            <span className="mx-1.5 hidden text-white/30 sm:inline">•</span>
            <span className="hidden text-white/80 sm:inline">Manufacturer</span>
            <span className="mx-1.5 text-white/30">•</span>
            <span className="text-white/80">Exporter</span>
          </p>
          <div className="hidden lg:flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              Dholpur, Rajasthan, India
            </span>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-gold" />
              {EMAIL}
            </a>
          </div>
        </div>
      </div>

      {/* ───────────── Main header ───────────── */}
      <header
        ref={headerRef}
        className={`sticky top-0 z-[100] w-full border-b backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "bg-white/92 border-black/10 shadow-[0_10px_30px_-18px_rgba(18,61,50,0.35)]"
            : "bg-white/96 border-black/[0.06]"
        }`}
      >
        <div className="container-x relative flex items-center justify-between gap-4 py-2.5 lg:py-3">
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-2.5 shrink-0" aria-label="Dholpurstones home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest border border-gold/70 shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:rotate-[-4deg]">
              <span className="font-heading text-sm font-extrabold text-gold">DS</span>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-heading text-[15px] sm:text-lg font-bold uppercase tracking-[0.07em] text-ink group-hover:text-forest-soft transition-colors">
                Dholpurstones
              </span>
              <span className="text-[11px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                Natural Stone &bull; Since 1953
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {navItems.map((item) => {
              const active = isActive(item);
              const open = openMenu === item.label;
              const base =
                "relative inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 xl:px-3.5 py-2 text-[13px] xl:text-[13.5px] font-semibold transition-colors";
              const tone = active || open ? "text-forest" : "text-ink/80 hover:text-forest";

              if (item.mega || item.children) {
                return (
                  <div
                    key={item.label}
                    className={item.mega ? "" : "relative"}
                    onMouseEnter={() => enter(item.label)}
                    onMouseLeave={leave}
                  >
                    <button
                      type="button"
                      className={`${base} ${tone}`}
                      aria-haspopup="true"
                      aria-expanded={open}
                      onClick={() => setOpenMenu(open ? null : item.label)}
                    >
                      {(active || open) && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 rounded-full bg-gold/20 ring-1 ring-gold/50"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className="relative">{item.label}</span>
                      <ChevronDown
                        className={`relative h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180 text-gold-deep" : "text-ink/50"}`}
                      />
                    </button>

                    <AnimatePresence>
                      {open && item.mega && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-1/2 top-full z-[150] w-[min(940px,calc(100vw-3rem))] -translate-x-1/2 pt-3"
                        >
                          <div className="overflow-hidden rounded-3xl border border-gold/30 bg-white shadow-[0_36px_80px_-24px_rgba(11,42,34,0.45)]">
                            <div className="h-1 bg-gradient-to-r from-forest via-gold to-forest" />
                            <div className="grid grid-cols-3 gap-x-2 gap-y-1 p-5">
                              {categories.map((cat) => {
                                const Icon = categoryIcons[cat.id];
                                const subs = cat.subs.slice(0, 4);
                                return (
                                  <div key={cat.id} className="rounded-2xl p-3 transition-colors hover:bg-ivory">
                                    <Link
                                      href={cat.href}
                                      onClick={(e) => handleLinkClick(e, cat.href)}
                                      className="group/cat flex items-center gap-3"
                                    >
                                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest text-gold transition-colors group-hover/cat:bg-gold group-hover/cat:text-forest">
                                        <Icon className="h-[18px] w-[18px]" />
                                      </span>
                                      <span className="font-heading text-[13px] font-bold uppercase tracking-wide text-ink leading-tight group-hover/cat:text-forest-soft">
                                        {cat.name}
                                      </span>
                                    </Link>
                                    <ul className="mt-2.5 space-y-0.5 pl-[3.25rem]">
                                      {subs.map((sub) => (
                                        <li key={sub.id}>
                                          <Link
                                            href={sub.href}
                                            onClick={(e) => handleLinkClick(e, sub.href)}
                                            className="block py-0.5 text-[13px] text-muted transition-colors hover:text-forest hover:translate-x-0.5"
                                          >
                                            {sub.name}
                                          </Link>
                                        </li>
                                      ))}
                                      {cat.subs.length > subs.length && (
                                        <li>
                                          <Link
                                            href={cat.href}
                                            className="block py-0.5 text-[12px] font-semibold text-gold-deep hover:text-forest"
                                          >
                                            +{cat.subs.length - subs.length} more
                                          </Link>
                                        </li>
                                      )}
                                    </ul>
                                  </div>
                                );
                              })}
                              <div className="flex flex-col justify-center rounded-2xl bg-forest p-4 text-white bg-stone-grain">
                                <p className="font-heading text-[13px] font-bold uppercase tracking-wide">Not sure what to choose?</p>
                                <p className="mt-1.5 text-[13px] text-white/75">Tell us your project — we recommend the right stone.</p>
                                <Link
                                  href="/contact"
                                  className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-[12.5px] font-bold text-forest"
                                >
                                  Get free advice <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                              </div>
                            </div>
                            <div className="flex items-center justify-between gap-4 border-t border-black/[0.06] bg-forest px-6 py-3.5">
                              <p className="text-[13px] text-white/80">
                                Need a custom size or finish? <span className="text-gold font-semibold">We cut to order.</span>
                              </p>
                              <Link
                                href="/products"
                                className="group/all inline-flex items-center gap-1.5 text-[13px] font-bold text-gold hover:text-white transition-colors"
                              >
                                View full catalogue
                                <ArrowRight className="h-4 w-4 transition-transform group-hover/all:translate-x-1" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {open && item.children && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-1/2 top-full z-[150] w-[300px] -translate-x-1/2 pt-3"
                        >
                          <div className="overflow-hidden rounded-2xl border border-gold/30 bg-white p-2 shadow-[0_30px_60px_-22px_rgba(11,42,34,0.45)]">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={(e) => handleLinkClick(e, child.href)}
                                className="group/item flex items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 transition-colors hover:bg-ivory"
                              >
                                <span>
                                  <span className="block text-[13.5px] font-semibold text-ink group-hover/item:text-forest">
                                    {child.label}
                                  </span>
                                  {child.desc && <span className="block text-xs text-muted">{child.desc}</span>}
                                </span>
                                <ArrowRight className="h-4 w-4 text-gold opacity-0 -translate-x-1 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0" />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href!}
                  onClick={(e) => handleLinkClick(e, item.href!)}
                  className={`${base} ${tone}`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gold/20 ring-1 ring-gold/50"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2.5">
            <span className="hidden xl:block">
              <EnquiryButton variant="gold" cta="Header quote button">
                <LuMessageSquareText className="h-4 w-4" />
                Get a Quote
              </EnquiryButton>
            </span>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex h-11 w-11 items-center justify-center rounded-2xl bg-forest text-gold shadow-md active:scale-95 transition-transform"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ───────────── Mobile drawer ───────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[200] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-forest-deep/70 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col rounded-l-[2rem] bg-ivory shadow-2xl"
            >
              <div className="flex items-center justify-between rounded-tl-[2rem] bg-forest px-5 py-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/70 bg-forest-deep">
                    <span className="font-heading text-sm font-extrabold text-gold">DS</span>
                  </span>
                  <span className="leading-tight">
                    <span className="block font-heading text-[15px] font-bold uppercase tracking-wider text-white">
                      Dholpurstones
                    </span>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                      Estd. 1953
                    </span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white active:scale-90 transition-transform"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-4 space-y-2" aria-label="Mobile">
                {navItems.map((item) => {
                  const active = isActive(item);
                  const hasSub = item.mega || item.children;
                  const expanded = mobileSection === item.label;

                  if (!hasSub) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href!}
                        onClick={(e) => handleLinkClick(e, item.href!)}
                        className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-bold transition-colors ${
                          active ? "bg-forest text-gold" : "bg-white text-ink border border-black/[0.06]"
                        }`}
                      >
                        {item.label}
                        <ArrowRight className={`h-4 w-4 ${active ? "text-gold" : "text-gold-deep"}`} />
                      </Link>
                    );
                  }

                  return (
                    <div key={item.label} className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
                      <button
                        type="button"
                        onClick={() => setMobileSection(expanded ? null : item.label)}
                        className={`flex w-full items-center justify-between px-4 py-3.5 text-[15px] font-bold ${
                          active ? "text-forest" : "text-ink"
                        }`}
                        aria-expanded={expanded}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180 text-gold-deep" : "text-ink/50"}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            {item.mega ? (
                              <div className="grid grid-cols-2 gap-2 px-3 pb-3">
                                {categories.map((cat, ci) => (
                                  <Link
                                    key={cat.id}
                                    href={cat.href}
                                    onClick={(e) => handleLinkClick(e, cat.href)}
                                    className={`group relative block overflow-hidden rounded-2xl bg-forest active:scale-[0.97] transition-transform ${
                                      ci === categories.length - 1 && categories.length % 2 === 1 ? "col-span-2 aspect-[8/3]" : "aspect-[4/3]"
                                    }`}
                                  >
                                    <Image
                                      src={cat.image}
                                      alt=""
                                      fill
                                      sizes="160px"
                                      className="object-cover"
                                    />
                                    <span className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest-deep/30 to-transparent" />
                                    <span className="absolute inset-x-0 bottom-0 p-2.5 text-[12px] font-bold leading-tight text-white">
                                      {cat.name}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            ) : (
                              <ul className="px-2 pb-2">
                                {item.children!.map((child) => (
                                  <li key={child.label}>
                                    <Link
                                      href={child.href}
                                      onClick={(e) => handleLinkClick(e, child.href)}
                                      className="flex items-center justify-between rounded-xl px-3 py-2.5 text-[14px] font-medium text-ink/85 active:bg-ivory"
                                    >
                                      {child.label}
                                      <ArrowRight className="h-3.5 w-3.5 text-gold-deep" />
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>

              <div className="space-y-2.5 border-t border-black/[0.08] bg-white px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-4">
                <a
                  href={waHeader}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-bold text-white shadow-lg active:scale-[0.97] transition-transform"
                >
                  <WhatsAppIcon className="h-[18px] w-[18px] fill-white" size={18} />
                  Chat on WhatsApp
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-forest/25 py-3 text-[13px] font-semibold text-forest"
                >
                  <Mail className="h-4 w-4 text-gold-deep" />
                  {EMAIL}
                </a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
