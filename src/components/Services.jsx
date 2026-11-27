import React from "react";
import { MARQUEE, SERVICES } from "../data/content";
import { ServiceIcon } from "./Icons";

export const Marquee = () => {
  const items = [...MARQUEE, ...MARQUEE];
  return (
    <section
      className="bg-[#f4f8ff] text-[#050a18] overflow-hidden py-8 border-y-4 border-[#22d3ee]"
      aria-label="Engagements"
      data-testid="marquee"
    >
      <div className="mq dp text-5xl md:text-7xl whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div className="flex gap-16 pr-16" key={dup} aria-hidden={dup === 1}>
            {items.map((m, i) => (
              <React.Fragment key={`${dup}-${i}`}>
                <span>{m}</span>
                <span className="text-[#0b6f85]">✦</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export const Services = () => {
  return (
    <section id="prestations" className="bg-[#050a18] text-[#f4f8ff] py-24 md:py-36" data-testid="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="dp" style={{ fontSize: "clamp(36px,5vw,80px)" }}>Prestations</h2>
          <p className="lb text-xs uppercase text-[#9fb3d6]">08 services · prix affichés</p>
        </div>
        <ol className="rows mt-16 border-t border-[#f4f8ff]/20">
          {SERVICES.map((s) => (
            <li
              key={s.id}
              data-testid={`service-${s.id}`}
              className="group grid grid-cols-[48px_1fr_auto] md:grid-cols-[64px_1fr_auto] items-center gap-4 py-6 border-b border-[#f4f8ff]/20 hover:bg-[#0c1530] transition-colors"
            >
              <ServiceIcon name={s.icon} />
              <span className="dp min-w-0 break-words" style={{ fontSize: "clamp(20px,3vw,44px)" }}>
                {s.title}
              </span>
              <span className="tn text-base md:text-lg text-[#22d3ee] whitespace-nowrap">{s.price}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
