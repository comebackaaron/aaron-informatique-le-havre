import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { BUSINESS } from "../data/content";

const LINKS = [
  { href: "#prestations", label: "Prestations" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#a-propos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      data-testid="site-nav"
      className="sticky top-0 z-50 bg-[#050a18]/95 backdrop-blur text-[#f4f8ff] border-b border-[#22d3ee]/20"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a href="#top" data-testid="nav-logo" className="flex items-center gap-3">
          <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
            <path d="M4 28 16 4l12 24" fill="none" stroke="#f4f8ff" strokeWidth="4" strokeLinejoin="bevel" />
            <rect x="12" y="18" width="8" height="4" fill="#22d3ee" />
          </svg>
          <span className="font-bold tracking-tight">
            {BUSINESS.shortName} <span className="font-normal text-[#9fb3d6]">{BUSINESS.nameRest}</span>
          </span>
        </a>

        <div className="hidden md:flex gap-8 text-sm">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#22d3ee] transition-colors" data-testid={`nav-link-${l.label}`}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            data-testid="nav-call-btn"
            className="hidden sm:inline-block text-sm font-bold bg-[#22d3ee] text-[#050a18] px-4 py-2 hover:bg-[#67e8f9] transition-colors"
          >
            {BUSINESS.phoneDisplay}
          </a>
          <button
            className="md:hidden p-2"
            aria-label="Menu"
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#22d3ee]/20 px-6 py-4 flex flex-col gap-4 text-sm" data-testid="mobile-menu">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-[#22d3ee]">
              {l.label}
            </a>
          ))}
          <a href={`tel:${BUSINESS.phoneTel}`} className="font-bold text-[#22d3ee]">
            Appeler {BUSINESS.phoneDisplay}
          </a>
        </div>
      )}
    </nav>
  );
};
