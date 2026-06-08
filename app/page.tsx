import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Achievements from "@/components/sections/Achievements";
import BookCTA from "@/components/sections/BookCTA";
import Companies from "@/components/sections/Companies";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Team from "@/components/sections/Team";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import { Calendar } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="page-container">
        <Hero />
        <Services />
        <Achievements />
        <Companies />
        <Testimonials />
        <About />
        <Process />
        <Team />
        <BookCTA
          label="Pronto para otimizar seus resultados?"
          subtitle="Fale com nossa equipe técnica hoje e agende uma consultoria sem compromisso para o seu negócio."
          ctaText="Agendar Conversa"
          ctaIcon={<Calendar />}
          center
        />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
