import React, { useState } from "react";
import { toast } from "sonner";
import { BUSINESS } from "../data/content";
import { supabase } from "../lib/supabase";

const waLink = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
  "Bonjour Aaron, j'aimerais un devis pour :"
)}`;

export const Contact = () => {
  const [form, setForm] = useState({ nom: "", contact: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.nom.trim() || !form.contact.trim() || !form.msg.trim()) {
      toast.error("Merci de remplir tous les champs.");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("devis").insert({
        nom: form.nom.trim(),
        contact: form.contact.trim(),
        message: form.msg.trim(),
      });
      if (error) throw error;
      toast.success("Demande envoyée ! Aaron vous recontacte rapidement.");
      setForm({ nom: "", contact: "", msg: "" });
    } catch (err) {
      toast.error("Envoi impossible pour le moment. Appelez ou écrivez sur WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#22d3ee] text-[#050a18] py-24 md:py-36" data-testid="contact">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="min-w-0">
          <h2 className="dp" style={{ fontSize: "clamp(32px,5vw,80px)" }}>Votre devis, sans détour.</h2>
          <a href={`tel:${BUSINESS.phoneTel}`} className="dp text-3xl mt-8 block hover:opacity-70 transition-opacity" data-testid="contact-phone">
            {BUSINESS.phoneDisplay}
          </a>
          <a href={`mailto:${BUSINESS.email}`} className="mt-2 font-medium break-words block hover:opacity-70 transition-opacity" data-testid="contact-email">
            {BUSINESS.email}
          </a>
          <p className="mt-4 font-medium">{BUSINESS.city} {BUSINESS.postal} et alentours · à domicile ou à distance</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${BUSINESS.phoneTel}`} data-testid="contact-call-btn" className="bg-[#050a18] text-[#f4f8ff] font-bold px-6 py-3 hover:bg-[#0c1530] transition-colors">
              Appeler
            </a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp-btn" className="border-2 border-[#050a18] font-bold px-6 py-3 hover:bg-[#050a18] hover:text-[#f4f8ff] transition-colors">
              WhatsApp
            </a>
          </div>
        </div>

        <form className="grid gap-4" onSubmit={submit} data-testid="devis-form">
          <label className="grid gap-2 font-bold text-sm">
            Nom
            <input className="bg-[#f4f8ff] px-4 py-3 border-2 border-[#050a18] outline-none focus:border-[#0b6f85]" value={form.nom} onChange={update("nom")} name="nom" data-testid="form-nom" />
          </label>
          <label className="grid gap-2 font-bold text-sm">
            Téléphone ou email
            <input className="bg-[#f4f8ff] px-4 py-3 border-2 border-[#050a18] outline-none focus:border-[#0b6f85]" value={form.contact} onChange={update("contact")} name="contact" data-testid="form-contact" />
          </label>
          <label className="grid gap-2 font-bold text-sm">
            La panne
            <textarea rows="4" className="bg-[#f4f8ff] px-4 py-3 border-2 border-[#050a18] outline-none focus:border-[#0b6f85]" value={form.msg} onChange={update("msg")} name="msg" data-testid="form-msg" />
          </label>
          <button type="submit" disabled={loading} className="bg-[#050a18] text-[#f4f8ff] font-bold px-7 py-4 hover:bg-[#0c1530] transition-colors disabled:opacity-60" data-testid="form-submit">
            {loading ? "Envoi…" : "Envoyer la demande"}
          </button>
        </form>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="bg-[#050a18] text-[#9fb3d6] py-12" data-testid="footer">
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-4 text-sm">
      <p>{BUSINESS.name} · {BUSINESS.slogan}</p>
      <p>{BUSINESS.city} {BUSINESS.postal} · {BUSINESS.phoneDisplay}</p>
    </div>
  </footer>
);
