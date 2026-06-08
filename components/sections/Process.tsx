"use client";
import { BookOpen, BarChart2, Lightbulb, Rocket, LineChart } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Estudamos",
    content:
      "Conhecemos seu produto, sua audiência e suas metas para definir o caminho mais direto até o resultado.",
    category: "Diagnóstico",
    icon: BookOpen,
    relatedIds: [2, 5],
    deliverables: ["Diagnóstico", "Mapeamento de gargalos", "Definição de KPIs", "Metas claras"],
    energy: 85,
  },
  {
    id: 2,
    title: "Analisamos",
    content:
      "Investigamos o mercado, a concorrência e o comportamento dos clientes para encontrar as maiores oportunidades.",
    category: "Análise",
    icon: BarChart2,
    relatedIds: [1, 3],
    deliverables: ["Pesquisa de nicho", "Análise competitiva", "Comportamento do cliente", "Oportunidades de crescimento"],
    energy: 90,
  },
  {
    id: 3,
    title: "Estratégia",
    content:
      "Entendemos seu negócio e criamos um plano de ação para acelerar resultados.",
    category: "Planejamento",
    icon: Lightbulb,
    relatedIds: [2, 4],
    deliverables: ["Diagnóstico", "Planejamento", "Priorização", "Roadmap de execução"],
    energy: 95,
  },
  {
    id: 4,
    title: "Executamos",
    content:
      "Construímos em sprints ágeis, com entregas parciais e ajustes constantes rumo ao melhor resultado.",
    category: "Execução",
    icon: Rocket,
    relatedIds: [3, 5],
    deliverables: ["Sprints ágeis", "Entregas parciais", "Controle de qualidade", "Ajustes contínuos"],
    energy: 92,
  },
  {
    id: 5,
    title: "Escalamos",
    content:
      "Medimos o impacto de cada ação e ampliamos o que funciona para maximizar o crescimento.",
    category: "Crescimento",
    icon: LineChart,
    relatedIds: [4, 1],
    deliverables: ["Relatórios objetivos", "Análise de eficiência", "Otimização contínua", "Escala do que funciona"],
    energy: 88,
  },
];

export default function Process() {
  return (
    <section
      id="processo"
      className="process-section section-card"
    >
      <div className="container">
        <div className="section-header text-center margin-auto reveal fade-up">
          <h2 className="section-title">Como construímos o sucesso</h2>
          <p className="section-subtitle">
            Um sistema de trabalho transparente que entrega resultados previsíveis e consistentes.
            Clique em cada etapa para explorar.
          </p>
        </div>
      </div>

      <div
        style={{
          height: "clamp(340px, 80vw, 520px)",
          overflow: "hidden",
          position: "relative",
          background:
            "radial-gradient(circle at 50% 42%, #FFFFFF 0%, #F3F5F9 68%, #E9EDF4 100%)",
          backgroundImage:
            "radial-gradient(circle at 50% 42%, rgba(255, 107, 0, 0.06) 0%, transparent 26%)",
        }}
      >
        <RadialOrbitalTimeline
          timelineData={timelineData}
          theme="light"
          containerClassName="w-full h-full flex flex-col items-center justify-center overflow-hidden"
        />
      </div>
    </section>
  );
}
