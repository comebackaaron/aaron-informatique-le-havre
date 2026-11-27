import React from "react";
import { STEPS, IMAGES } from "../data/content";

export const Promise = () => (
  <section className="bg-[#22d3ee] text-[#050a18] py-24 md:py-36 overflow-hidden" data-testid="promise">
    <div className="max-w-7xl mx-auto px-6">
      <p className="lb text-xs uppercase">Notre promesse</p>
      <p className="dp mt-6 break-words reveal" style={{ fontSize: "clamp(96px,20vw,320px)" }}>Clair.</p>
      <p className="mt-8 max-w-xl text-xl leading-[1.6] font-medium">
        Prix annoncé avant, facture identique après. Si ça ne vaut pas le coup de réparer, vous le saurez.
      </p>
    </div>
  </section>
);

export const Atelier = () => (
  <section id="atelier" className="bg-[#050a18] text-[#f4f8ff] py-24 md:py-36" data-testid="atelier">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-6">
      <figure className="md:col-span-7 relative aspect-[16/10] overflow-hidden bg-[#0b6f85] reveal">
        <img src={IMAGES.etabli} alt="Établi avec PC démonté et outils de précision" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      </figure>
      <figure className="md:col-span-5 relative aspect-[4/5] md:aspect-auto overflow-hidden bg-[#1d2e5c] reveal">
        <img src={IMAGES.ecran} alt="Écran affichant une analyse antivirus terminée" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      </figure>
    </div>
  </section>
);

export const Methode = () => (
  <section id="methode" className="bg-[#0c1530] text-[#f4f8ff] py-24 md:py-36" data-testid="methode">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="dp" style={{ fontSize: "clamp(36px,5vw,80px)" }}>Quatre temps.</h2>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border-l border-[#22d3ee]/30">
        {STEPS.map((s) => (
          <div key={s.letter} className="p-6 border-r border-b md:border-b-0 border-[#22d3ee]/30 reveal" data-testid={`step-${s.letter}`}>
            <p className="dp text-[#22d3ee]" style={{ fontSize: "clamp(56px,7vw,112px)" }}>{s.letter}</p>
            <p className="font-bold text-xl mt-4">{s.title}</p>
            <p className="text-[#c6d4ec] mt-2 leading-[1.6]">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const About = () => (
  <section id="a-propos" className="bg-[#f4f8ff] text-[#050a18] py-24 md:py-36" data-testid="about">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-7 min-w-0">
        <p className="lb text-xs uppercase text-[#0b6f85]">À propos</p>
        <h2 className="dp mt-4" style={{ fontSize: "clamp(32px,5vw,80px)" }}>
          Aaron. Passionné depuis le premier PC démonté.
        </h2>
        <p className="mt-8 text-lg leading-[1.6] max-w-xl">
          Un seul technicien, joignable directement, pour les particuliers comme pour les indépendants
          et petites entreprises du Havre. Des prix honnêtes et clairs, annoncés avant toute intervention.
        </p>
      </div>
      <figure className="md:col-span-5 relative aspect-square overflow-hidden bg-[#1d2e5c] reveal">
        <img src={IMAGES.portrait} alt="Aaron, technicien informatique au Havre" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      </figure>
    </div>
  </section>
);
