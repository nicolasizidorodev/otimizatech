import { LogoCloud } from "@/components/ui/logo-cloud-3";

const clients = [
  { src: "/logos/dc-seguros.png", alt: "Dias e Costa Corretora de Seguros" },
  { src: "/logos/prefeitura-chacara.png", alt: "Prefeitura Municipal de Chácara" },
  { src: "/logos/casa-carnes.png", alt: "Casa de Carnes + Ki-Bife" },
  { src: "/logos/logo-azul.png", alt: "Ricardo Antunes" },
];

// Poucos logos deixariam vãos na faixa; repetimos para preencher a largura.
const logos = [...clients, ...clients, ...clients];

export default function Companies() {
  return (
    <section className="companies-section section-padding section-card">
        <div className="section-header text-center margin-auto reveal fade-up">
          <h2 className="section-title">Clientes que aceleram conosco</h2>
        </div>

        <div className="companies-strip reveal fade-up">
          <LogoCloud logos={logos} />
        </div>
    </section>
  );
}
