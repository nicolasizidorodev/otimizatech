import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

const points = [
  "Metodologia transparente e ágil",
  "Foco total em segurança e estabilidade",
  "Relatórios claros e resultados mensuráveis",
  "Suporte dedicado pós-entrega",
];

export default function About() {
  return (
    <section id="sobre" className="about-section section-padding section-card">
      <div className="container about-container">
        <div className="about-content reveal fade-right">
          <div className="badge-accent">
            <span className="badge-dot" /> Quem Somos
          </div>
          <h2>Otimiza Tech — Seu parceiro ideal de tecnologia e inovação</h2>
          <p className="lead">
            Nascemos com a missão de simplificar o desenvolvimento de software complexo e trazer inteligência
            operacional aos processos corporativos.
          </p>
          <p>
            Acreditamos que o código é uma ferramenta para gerar eficiência comercial. Por isso, combinamos
            metodologia ágil de ponta, design centrado na experiência do usuário e as tecnologias de software
            mais velozes do mercado para entregar valor real e mensurável.
          </p>
          <div className="about-points">
            {points.map((p) => (
              <div key={p} className="point-item">
                <CheckCircle2 className="orange-text" />
                <span>{p}</span>
              </div>
            ))}
          </div>

          <blockquote className="founder-quote">
            <p>
              "Nos últimos anos construí uma equipe de especialistas que já realizou dezenas de projetos para
              clientes de diferentes segmentos. Unimos tecnologia, analytics e criatividade para criar
              estratégias que funcionam de verdade no mercado."
            </p>
            <cite>— <strong>Gabriel Ramos</strong>, Founder & CEO, Otimiza Tech</cite>
          </blockquote>

          <a href="#contato" className="btn btn-primary">
            Falar com Nossa Equipe <ArrowRight />
          </a>
        </div>

        <div className="about-media reveal fade-left">
          <div className="image-frame-wrapper">
            <div className="orange-frame-offset" />
            <Image
              src="/about-team-leader.png"
              alt="Gabriel Ramos - Founder Otimiza Tech"
              width={400}
              height={500}
              className="about-leader-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
