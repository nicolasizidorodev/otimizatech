import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Approach from "@/components/sections/Approach";
import ApproachBanner from "@/components/sections/ApproachBanner";
import Achievements from "@/components/sections/Achievements";
import CtaBanner from "@/components/sections/CtaBanner";
import Companies from "@/components/sections/Companies";
import Process from "@/components/sections/Process";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="page-container">
        <Hero />
        <Services />
        <Achievements />
        <CtaBanner />
        <Approach />
        <Companies />
        <ApproachBanner />
        <Process />
      </main>
      <Footer />
      <ContactModal />
    </>
  );
}
