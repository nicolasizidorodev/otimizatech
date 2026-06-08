import { Search, BarChart3, Cpu, TrendingUp, Code2, Palette } from "lucide-react";

const services = [
  {
    icon: <Search size={26} />,
    name: "SEO",
    excerpt:
      "Otimização de mecanismos de busca focada em rankeamento estratégico e atração de leads altamente qualificados, com crescimento orgânico estável e mensurável.",
  },
  {
    icon: <BarChart3 size={26} />,
    name: "Analytics & BI",
    excerpt:
      "Coleta, análise e painéis de dados personalizados para decisões estratégicas seguras e monitoramento de KPIs críticos em tempo real.",
  },
  {
    icon: <Cpu size={26} />,
    name: "Automação & IA",
    excerpt:
      "Integração de inteligência artificial aplicada à sua operação, eliminando gargalos e liberando o time para focar no que gera mais receita.",
  },
  {
    icon: <TrendingUp size={26} />,
    name: "Mídia Paga",
    excerpt:
      "Campanhas otimizadas no Google Ads, Meta Ads e LinkedIn Ads com targetagem precisa, budgets controlados e foco no máximo retorno sobre investimento.",
  },
  {
    icon: <Code2 size={26} />,
    name: "Desenvolvimento Web",
    excerpt:
      "Sistemas corporativos sob medida, e-commerces escaláveis e sites institucionais construídos com as tecnologias mais modernas e arquitetura robusta.",
  },
  {
    icon: <Palette size={26} />,
    name: "Design UX/UI",
    excerpt:
      "Interfaces centradas no usuário, focadas em alta navegabilidade, clareza visual e maximização das taxas de conversão em cada ponto de contato.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="services-section section-padding section-card">
      <div className="container">
        <div className="section-header reveal fade-up">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="section-subtitle">
            Soluções completas para otimizar sua presença digital e impulsionar a eficiência operacional.
          </p>
        </div>

        <div className="service-list">
          {services.map((s) => (
            <div key={s.name} className="service-item reveal fade-up">
              <div className="service-icon-box">{s.icon}</div>
              <div className="service-detail">
                <h3 className="name">{s.name}</h3>
                <p className="excerpt">{s.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
