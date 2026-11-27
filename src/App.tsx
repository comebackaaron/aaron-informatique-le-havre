import { useReveal } from "./useReveal";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Marquee, Services } from "./components/Services";
import { Promise, Atelier, Methode, About } from "./components/Showcase";
import { Tarifs, Zone, Avis, Faq } from "./components/InfoSections";
import { Contact, Footer } from "./components/Contact";
import { Toaster } from "sonner";

function App() {
  const ref = useReveal();

  return (
    <div ref={ref} className="bg-[#050a18] text-[#f4f8ff] min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Promise />
        <Atelier />
        <Methode />
        <About />
        <Tarifs />
        <Zone />
        <Avis />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#050a18",
            color: "#f4f8ff",
            border: "1px solid #22d3ee",
            borderRadius: "0",
            fontFamily: "Inter, sans-serif",
          },
        }}
      />
    </div>
  );
}

export default App;
