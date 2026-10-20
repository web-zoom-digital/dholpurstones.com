"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mail,
  Phone,
  Menu,
  X,
  Award,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    Company: false,
    Products: false,
    Resources: false,
    Gallery: false,
  });

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
      label: "Company",
      children: [
        { label: "About Us", href: "/about" },
        { label: "Govt. & Intl. Honors", href: "/#international-excellence" },
        { label: "Infrastructure", href: "/about#strength" },
        { label: "Why Choose Us", href: "/about#why-choose" },
        { label: "Our Mines", href: "/about#why-choose" },
      ],
    },
    {
      label: "Products",
      children: [
        { label: "Front Elevation (300+ Designs)", href: "/#elevation" },
        { label: "Farm House & Gardens", href: "/landscaping" },
        { label: "Agra Red", href: "/products#products" },
        { label: "Dholpur Beige", href: "/products#products" },
        { label: "Chocolate", href: "/products#products" },
        { label: "Bansi Pink", href: "/products#products" },
        { label: "Stone Articles & Sculptures", href: "/articles" },
      ],
    },
    { label: "Projects", href: "/projects" },
    {
      label: "Resources",
      children: [
        { label: "Blog", href: "/resources#blog" },
        { label: "Quality Process", href: "/resources#quality" },
        { label: "Exhibition", href: "/resources#exhibition" },
        { label: "Packaging and Machinery", href: "/resources#packaging" },
      ],
    },
    {
      label: "Gallery",
      children: [
        { label: "Media Gallery", href: "/gallery#media" },
        { label: "Photo Gallery", href: "/gallery#photos" },
        { label: "Video Gallery", href: "/gallery#videos" },
      ],
    },
    { label: "Contact us", href: "/contact" },
  ];

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  };

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpanded((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const isNavActive = (item: NavItem): boolean => {
    if (item.href) {
      if (item.href === "/" && pathname === "/") return true;
      if (item.href !== "/" && pathname.startsWith(item.href)) return true;
    }
    if (item.children) {
      return item.children.some(
        (c) => pathname === c.href || (c.href !== "/" && pathname.startsWith(c.href.split("#")[0]))
      );
    }
    return false;
  };

  return (
    <>
      {/* 1. Top Utility Bar (Desktop & Tablet) */}
      <div className="bg-[#0D1311] text-white/80 py-2 px-3 sm:px-6 relative z-50 border-b border-white/8 text-[11px] sm:text-xs">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-2">
          {/* Heritage Tag */}
          <div className="flex items-center gap-1.5 text-[#C29B38] font-bold tracking-wider uppercase truncate">
            <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#C29B38]" />
            <span className="hidden xs:inline">ESTD. 1953 &bull;</span> DHOLPURESTONES
          </div>

          {/* Contact Details */}
          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            <a
              href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20to%20inquire%20about%20natural%20stone"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:text-white transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0 fill-[#25D366]" size={16} />
              <span>+91 94149 45457</span>
            </a>

            <a
              href="tel:+919057355232"
              className="hidden sm:flex items-center gap-1.5 text-white/80 hover:text-[#C29B38] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C29B38] shrink-0" />
              <span>+91 90573 55232</span>
            </a>

            <a
              href="mailto:gargcorporationltd@gmail.com"
              className="hidden md:flex items-center gap-1.5 text-white/70 hover:text-[#C29B38] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C29B38] shrink-0" />
              <span>gargcorporationltd@gmail.com</span>
            </a>

            <span className="hidden xl:inline-flex items-center gap-1 text-[#C29B38] bg-[#C29B38]/10 border border-[#C29B38]/30 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider text-[10px]">
              <Award className="w-3 h-3 text-[#C29B38]" />
              Govt. of India Awarded &bull; Nominated for Intl. Award (Business Excellence)
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar with Dropdowns */}
      <header
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.06)] border-b border-black/8 py-2.5"
            : "bg-white border-b border-black/6 py-3 sm:py-4"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#0D1311] border border-[#C29B38]/80 flex items-center justify-center shadow-md transition-transform group-hover:scale-105 shrink-0">
              <span className="font-['Cinzel',serif] text-sm sm:text-base font-extrabold text-[#C29B38]">
                DS
              </span>
            </div>
            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-['Cinzel',serif] text-sm sm:text-lg font-bold text-[#141A17] uppercase tracking-[0.06em] group-hover:text-[#852233] transition-colors whitespace-nowrap">
                Dholpurestones
              </span>
              <span className="text-[8.5px] sm:text-[9.5px] text-[#68726E] uppercase tracking-[0.14em] font-semibold whitespace-nowrap">
                Natural Stone &bull; Since 1953
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
            {navItems.map((item) => {
              const active = isNavActive(item);
              const isDropdownOpen = openDropdown === item.label;

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative group py-2"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(isDropdownOpen ? null : item.label)}
                      className={`inline-flex items-center gap-1.5 font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold tracking-tight transition-colors cursor-pointer ${
                        active || isDropdownOpen ? "text-[#852233]" : "text-[#1E2328] hover:text-[#852233]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? "rotate-180 text-[#852233]" : "text-[#1E2328]/70"
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu Box */}
                    <div
                      className={`absolute top-full left-0 pt-2 z-50 min-w-[220px] transition-all duration-200 ${
                        isDropdownOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
                      }`}
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-white rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-black/8 py-3 px-2 flex flex-col space-y-1">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setOpenDropdown(null)}
                            className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-bold text-[#1E2328] hover:text-[#852233] hover:bg-[#FAF7F2] rounded-xl px-3.5 py-2.5 transition-colors block"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Direct link
              return (
                <Link
                  key={item.label}
                  href={item.href || "/"}
                  className={`font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold tracking-tight transition-colors py-2 ${
                    active ? "text-[#852233]" : "text-[#1E2328] hover:text-[#852233]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20to%20connect%20regarding%20natural%20stone%20projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-['Plus_Jakarta_Sans',sans-serif] text-xs font-bold tracking-wider uppercase px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap shrink-0"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white shrink-0" size={16} />
              <span className="hidden sm:inline">WhatsApp Chat</span>
              <span className="sm:hidden">Chat</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl bg-black/5 hover:bg-black/10 text-[#141A17] transition-colors focus:outline-none focus:ring-2 focus:ring-[#852233]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileOpen ? <X className="w-5 h-5 text-[#852233]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* 3. Mobile Navigation Drawer with Accordion Submenus */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex animate-fade-in">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative ml-auto w-[86vw] max-w-[340px] h-full bg-[#FAF7F2] shadow-2xl flex flex-col z-10 border-l border-[#852233]/25">
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-4 bg-[#0D1311] border-b border-white/10 text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#161D1A] border border-[#C29B38] flex items-center justify-center">
                  <span className="font-['Cinzel',serif] text-sm font-bold text-[#C29B38]">DS</span>
                </div>
                <div>
                  <span className="font-['Cinzel',serif] text-sm font-bold text-white tracking-wider block">
                    DHOLPURESTONES
                  </span>
                  <span className="text-[9px] text-[#C29B38] uppercase tracking-widest font-semibold">
                    ESTD. 1953
                  </span>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav Links with Expandable Accordions */}
            <nav className="flex-1 overflow-y-auto p-4 space-y-2">
              {navItems.map((item) => {
                const active = isNavActive(item);

                if (item.children) {
                  const isExpanded = mobileExpanded[item.label] ?? false;
                  return (
                    <div key={item.label} className="bg-white rounded-xl border border-black/6 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => toggleMobileSubmenu(item.label)}
                        className={`w-full flex items-center justify-between p-3.5 text-[14.5px] font-bold text-left transition-colors ${
                          active ? "text-[#852233]" : "text-[#1E2328]"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-[#852233]" : "text-[#1E2328]/60"
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="bg-[#FAF7F2] border-t border-black/6 p-2 space-y-1">
                          {item.children.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 text-[13.5px] font-semibold text-[#4A5550] hover:text-[#852233] rounded-lg transition-colors"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href || "/"}
                    onClick={() => setMobileOpen(false)}
                    className={`block p-3.5 rounded-xl text-[14.5px] font-bold transition-all bg-white border border-black/6 ${
                      active ? "text-[#852233] bg-[#852233]/5 border-[#852233]/30" : "text-[#1E2328] hover:text-[#852233]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Drawer Footer CTA */}
            <div className="p-4 bg-white border-t border-black/8 space-y-2.5">
              <a
                href="https://wa.me/919414945457?text=Hello%20Dholpurestones.com,%20I%20would%20like%20to%20connect%20regarding%20natural%20stone%20projects"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#20ba59] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" size={16} />
                <span>Chat On WhatsApp</span>
              </a>
              <div className="text-[10px] text-center text-[#68726E] flex items-center justify-center gap-2 pt-1">
                <a href="tel:+919414945457" className="hover:text-[#852233] font-semibold">
                  WA: +91 94149 45457
                </a>
                <span>&bull;</span>
                <a href="tel:+919057355232" className="hover:text-[#852233] font-semibold">
                  Call: +91 90573 55232
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
