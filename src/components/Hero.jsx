import React from "react";
import { BUSINESS } from "../data/content";

const waLink = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
  "Bonjour Aaron, j'aimerais un devis pour :"
)}`;

export const Hero = () => {
  return (
    <header
      id="top"
      className="relative isolate overflow-hidden min-h-[92svh] flex flex-col justify-between bg-[#050a18] text-[#f4f8ff]"
    >
      <div className="gr absolute inset-0 grid-bg" aria-hidden="true" />
      <div
        className="absolute right-[-10%] top-[10%] w-[60vw] max-w-[760px] aspect-square pointer-events-none"
        style={{ perspective: "1000px" }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 400" className="tilt w-full h-full">
          <rect x="40" y="40" width="320" height="320" fill="none" stroke="#22d3ee" strokeOpacity=".35" strokeWidth="2" />
          <rect x="100" y="100" width="200" height="200" fill="#22d3ee" fillOpacity=".06" stroke="#22d3ee" strokeOpacity=".5" />
          <path className="draw" pathLength="1" d="M40 200h60M300 200h60M200 40v60M200 300v60M140 140h120v120H140z" fill="none" stroke="#22d3ee" strokeWidth="3" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-20">
        <p className="lb text-xs uppercase text-[#22d3ee] fu f1">{BUSINESS.slogan}</p>
      </div>

      <h1 className="relative z-10 dp px-6 w-full" style={{ fontSize: "clamp(56px,12vw,200px)" }}>
        <span className="ln"><span>Réparé.</span></span>
        <span className="ln"><span>Expliqué.</span></span>
        <span className="ln"><span className="text-[#22d3ee]">Prix clair.</span></span>
      </h1>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-16 pt-8 flex flex-wrap items-end justify-between gap-8">
        <p className="fu f1 max-w-md text-lg leading-[1.6] text-[#c6d4ec]">{BUSINESS.differentiator}</p>
        <div className="fu f2 flex flex-wrap gap-3">
          <a
            href="#contact"
            data-testid="hero-devis-btn"
            className="group bg-[#22d3ee] text-[#050a18] font-bold px-7 py-4 hover:bg-[#67e8f9] transition-colors"
          >
            Demander un devis <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-whatsapp-btn"
            className="border-2 border-[#f4f8ff] font-bold px-7 py-4 hover:bg-[#f4f8ff] hover:text-[#050a18] transition-colors"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};
