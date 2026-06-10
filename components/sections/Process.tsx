"use client";

import { useState } from "react";
import { Search, Lightbulb, Cpu, TrendingUp, Check, ArrowRight } from "lucide-react";

type Step = {
  id: number;
  tag: string;
  title: string;
  content: string;
  icon: React.ElementType;
  deliverables: string[];
};

const steps: Step[] = [
  {
    id: 1,
    tag: "Gratuita e sem compromisso",
    title: "Análise",
    content:
      "A gente entende o seu negócio de ponta a ponta e descobre onde está o gargalo real, seja em marketing, atendimento ou operação.",
    icon: Search,
    deliverables: [
      "Reunião de análise sem custo",
      "Mapeamento dos seus processos",
      "Identificação do gargalo real",
      "Visão clara de onde agir primeiro",
    ],
  },
  {
    id: 2,
    tag: "Plano de ação",
    title: "Estratégia",
    content:
      "Montamos um plano sob medida e uma proposta clara: o que vamos implementar, em qual ordem e qual o retorno esperado.",
    icon: Lightbulb,
    deliverables: [
      "Plano de ação personalizado",
      "Priorização por impacto",
      "Proposta clara e sem letra miúda",
      "Metas e KPIs definidos",
    ],
  },
  {
    id: 3,
    tag: "Mãos na massa",
    title: "Implementação",
    content:
      "Colocamos a solução de pé com tecnologia, automação e IA, em entregas curtas e com acompanhamento próximo.",
    icon: Cpu,
    deliverables: [
      "Automação & IA aplicada à operação",
      "Tecnologia sob medida",
      "Entregas em sprints curtos",
      "Acompanhamento próximo",
    ],
  },
  {
    id: 4,
    tag: "Resultado medido",
    title: "Otimização & Escala",
    content:
      "Medimos o impacto real no seu faturamento, ajustamos o que precisa e escalamos o que está dando certo.",
    icon: TrendingUp,
    deliverables: [
      "Relatórios de impacto no caixa",
      "Otimização contínua",
      "Escala do que funciona",
      "Parceria de longo prazo",
    ],
  },
];

export default function Process() {
  const [active, setActive] = useState<number>(1);
  const activeStep = steps.find((s) => s.id === active)!;
  const ActiveIcon = activeStep.icon;
  const progress = ((active - 1) / (steps.length - 1)) * 100;

  return (
    <section id="processo" className="process-section section-padding">
        <div className="process-card reveal fade-up">
          <div className="section-header text-center margin-auto">
            <h2 className="section-title">Como construímos o sucesso</h2>
            <p className="section-subtitle">
              Da análise gratuita ao resultado. Clique em cada etapa.
            </p>
          </div>

          {/* Trilha horizontal com etapas numeradas */}
          <div
            className="timeline"
            role="tablist"
            aria-label="Etapas do nosso processo"
            style={{ ["--timeline-progress" as string]: `${progress}%` }}
          >
            <div className="timeline-line" aria-hidden="true">
              <span className="timeline-line-fill" />
            </div>

            {steps.map((s) => {
              const isActive = s.id === active;
              const isDone = s.id < active;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`timeline-step${isActive ? " is-active" : ""}${
                    isDone ? " is-done" : ""
                  }`}
                  onClick={() => setActive(s.id)}
                >
                  <span className="timeline-node">
                    <span className="timeline-node-num">{s.id}</span>
                  </span>
                  <span className="timeline-step-label">
                    <span className="timeline-step-tag">{s.tag}</span>
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detalhe da etapa selecionada */}
          <div className="timeline-detail" key={active}>
            <div className="timeline-detail-head">
              <span className="timeline-detail-icon">
                <ActiveIcon size={22} strokeWidth={2.1} />
              </span>
              <div>
                <span className="timeline-detail-tag">
                  Etapa {activeStep.id} · {activeStep.tag}
                </span>
                <h3 className="timeline-detail-title">{activeStep.title}</h3>
              </div>
            </div>

            <p className="timeline-detail-text">{activeStep.content}</p>

            <ul className="timeline-detail-list">
              {activeStep.deliverables.map((d) => (
                <li key={d}>
                  <span className="timeline-check">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {d}
                </li>
              ))}
            </ul>

            {active < steps.length ? (
              <button
                className="timeline-next"
                onClick={() => setActive(active + 1)}
              >
                Próxima etapa: {steps.find((s) => s.id === active + 1)!.title}
                <ArrowRight size={16} />
              </button>
            ) : (
              <a href="#contato" className="timeline-next timeline-next--cta">
                Começar pela análise gratuita
                <ArrowRight size={16} />
              </a>
            )}
          </div>
        </div>
    </section>
  );
}
