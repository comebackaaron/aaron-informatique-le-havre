import React from "react";
import { PRICING, FAQ, REVIEWS, BUSINESS } from "../data/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export const Tarifs = () => (
  <section id="tarifs" className="bg-[#050a18] text-[#f4f8ff] py-24 md:py-36" data-testid="tarifs">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="dp" style={{ fontSize: "clamp(36px,5vw,80px)" }}>Tarifs</h2>
      <div className="mt-12 w-full overflow-x-auto">
        <table className="w-full text-left tn min-w-[520px]">
          <thead className="lb text-xs uppercase text-[#9fb3d6]">
            <tr>
              <th className="py-3">Formule</th>
              <th className="py-3">Pour</th>
              <th className="py-3 text-right">Prix</th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {PRICING.map((p) => (
              <tr key={p.formula} className="border-t border-[#f4f8ff]/20" data-testid={`price-${p.formula}`}>
                <td className="py-6 font-bold">{p.formula}</td>
                <td className="py-6 text-[#c6d4ec]">{p.forWho}</td>
                <td className={`py-6 text-right dp text-2xl md:text-3xl ${p.accent ? "text-[#22d3ee]" : ""}`}>{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-sm text-[#9fb3d6]">Devis gratuit et sans engagement. Paiement après l'intervention, jamais en ligne.</p>
    </div>
  </section>
);

export const Zone = () => (
  <section id="zone" className="relative overflow-hidden bg-[#0b6f85] text-[#f4f8ff] py-24 md:py-36" data-testid="zone">
    <div className="max-w-7xl mx-auto px-6">
      <p className="lb text-xs uppercase">Zone d'intervention</p>
      <p className="dp mt-6" style={{ fontSize: "clamp(64px,13vw,220px)" }}>76600</p>
      <p className="mt-6 text-xl max-w-xl leading-[1.6]">
        {BUSINESS.city} et alentours à domicile. Assistance à distance partout.
      </p>
    </div>
  </section>
);

export const Avis = () => (
  <section id="avis" className="bg-[#050a18] text-[#f4f8ff] py-24 md:py-36" data-testid="avis">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <h2 className="dp" style={{ fontSize: "clamp(36px,5vw,80px)" }}>Avis clients</h2>
        {REVIEWS.length === 0 ? (
          <div className="border-4 border-[#22d3ee] p-10">
            <p className="dp text-5xl md:text-6xl text-[#22d3ee]">0 faux avis.</p>
            <p className="mt-4 text-lg leading-[1.6] text-[#c6d4ec]">
              Seuls les avis de vrais clients seront publiés ici, dès les premiers retours.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {REVIEWS.map((r, i) => (
              <figure key={i} className="border-2 border-[#22d3ee]/40 p-6" data-testid={`review-${i}`}>
                <blockquote className="text-lg leading-[1.6] text-[#f4f8ff]">« {r.text} »</blockquote>
                <figcaption className="lb text-xs uppercase text-[#9fb3d6] mt-4">{r.name} · {r.city}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </div>
  </section>
);

export const Faq = () => (
  <section id="faq" className="bg-[#0c1530] text-[#f4f8ff] py-24 md:py-36" data-testid="faq">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="dp" style={{ fontSize: "clamp(36px,5vw,80px)" }}>FAQ</h2>
      <Accordion type="single" collapsible defaultValue="item-0" className="mt-12 grid md:grid-cols-2 gap-x-12">
        {FAQ.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-t border-[#f4f8ff]/20 border-b-0">
            <AccordionTrigger className="font-bold text-xl text-left hover:no-underline py-6" data-testid={`faq-${i}`}>
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-[#c6d4ec] leading-[1.6] text-base">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
