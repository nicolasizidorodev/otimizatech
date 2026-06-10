import { Search, BarChart3, Cpu, TrendingUp, Code2, Server } from "lucide-react";

const services = [
  {
    icon: <Search size={29} />,
    name: "SEO",
    excerpt:
      "Aparecer no Google no momento certo é uma das formas mais rentáveis de atrair clientes. Desenvolvemos estratégias de rankeamento com base no que o seu público realmente busca, para gerar tráfego qualificado e crescimento orgânico consistente.",
  },
  {
    icon: <BarChart3 size={29} />,
    name: "Analytics & BI",
    excerpt:
      "Decisão boa começa com dado confiável. Conectamos suas fontes de informação, criamos painéis claros e transformamos números em respostas práticas sobre o que está funcionando e o que está travando no seu negócio.",
  },
  {
    icon: <Cpu size={29} />,
    name: "Automação & IA",
    excerpt:
      "Tarefas repetitivas consomem tempo e geram erro. Automatizamos processos de atendimento, vendas e operação com IA para que o seu time foque no que realmente importa, sem aumentar o quadro.",
  },
  {
    icon: <TrendingUp size={29} />,
    name: "Mídia Paga",
    excerpt:
      "Anúncio sem estratégia é dinheiro jogado fora. Criamos e gerenciamos campanhas no Google e Meta com foco em retorno real: segmentação precisa, criativos testados e verba controlada para maximizar cada real investido.",
  },
  {
    icon: <Code2 size={29} />,
    name: "Desenvolvimento Web",
    excerpt:
      "Seu site precisa converter, não só existir. Desenvolvemos sites, landing pages, e-commerces e sistemas sob medida: rápidos, seguros e construídos para guiar o visitante até a ação que você quer.",
  },
  {
    icon: <Server size={29} />,
    name: "Infraestrutura & Suporte TI",
    excerpt:
      "Tecnologia precisa funcionar sem atrapalhar a operação. Cuidamos da estrutura que mantém sua empresa rodando: computadores, redes, backups, servidores e suporte técnico para garantir segurança, estabilidade e produtividade.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="services-section section-padding section-card">
      <div className="container">
        <div className="section-header reveal fade-up">
          <h2 className="section-title">Nossos Serviços</h2>
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
