import { ChevronRight } from "lucide-react";

const posts = [
  {
    tag: "Inteligência Artificial",
    date: "05 Jun, 2026",
    title: "Como a IA pode automatizar e otimizar processos na sua empresa",
    excerpt:
      "Descubra como ferramentas baseadas em IA podem diminuir o tempo gasto em tarefas rotineiras do time comercial.",
    href: "#artigo1",
    svg: (
      <svg className="blog-svg-cover" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" fill="#14181F" />
        <circle cx="200" cy="110" r="60" stroke="#FF6B00" strokeWidth="1.5" strokeOpacity="0.3" />
        <circle cx="200" cy="110" r="40" stroke="#FF6B00" strokeWidth="2" />
        <path d="M150 110 H250 M200 60 V160" stroke="rgba(255, 107, 0, 0.4)" strokeWidth="1.5" />
        <rect x="180" y="90" width="40" height="40" rx="8" fill="#1A202C" stroke="#FF9E00" strokeWidth="2" />
        <path d="M192 110 H208 M200 102 V118" stroke="#F8FAFC" strokeWidth="2" />
        <circle cx="200" cy="110" r="2" fill="#FF5500" />
        <path d="M140 70 L170 100" stroke="rgba(255, 107, 0, 0.2)" strokeDasharray="2 4" strokeWidth="2" />
        <path d="M260 70 L230 100" stroke="rgba(255, 107, 0, 0.2)" strokeDasharray="2 4" strokeWidth="2" />
      </svg>
    ),
  },
  {
    tag: "Desenvolvimento",
    date: "03 Jun, 2026",
    title: "O impacto real da velocidade do site na sua taxa de conversão",
    excerpt:
      "Estudos comprovam que sites que carregam em menos de 1.5 segundos vendem até 3 vezes mais. Aprenda a mensurar e corrigir.",
    href: "#artigo2",
    svg: (
      <svg className="blog-svg-cover" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" fill="#14181F" />
        <path d="M120 150 C120 80 180 50 200 50 C220 50 280 80 280 150" stroke="rgba(255, 107, 0, 0.2)" strokeWidth="8" strokeLinecap="round" />
        <path d="M120 150 C120 80 180 50 200 50" stroke="url(#blogG1)" strokeWidth="8" strokeLinecap="round" />
        <line x1="200" y1="150" x2="230" y2="90" stroke="#FF5500" strokeWidth="4" strokeLinecap="round" />
        <circle cx="200" cy="150" r="10" fill="#F8FAFC" />
        <circle cx="200" cy="150" r="5" fill="#14181F" />
        <defs>
          <linearGradient id="blogG1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF9E00" />
            <stop offset="100%" stopColor="#FF5500" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    tag: "Tráfego Pago",
    date: "29 Mai, 2026",
    title: "5 estratégias de anúncios online para negócios B2B e Tecnologia",
    excerpt:
      "Como montar funis de captação de leads qualificados no LinkedIn e Google Ads com foco em fechamento de contas Enterprise.",
    href: "#artigo3",
    svg: (
      <svg className="blog-svg-cover" viewBox="0 0 400 220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="220" fill="#14181F" />
        <path d="M100 160 L180 120 L240 135 L310 70" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
        <path d="M100 160 L180 120 L240 135 L310 70" stroke="url(#blogG2)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="100" cy="160" r="5" fill="#FF9E00" />
        <circle cx="180" cy="120" r="5" fill="#FF6B00" />
        <circle cx="240" cy="135" r="5" fill="#FF6B00" />
        <circle cx="310" cy="70" r="7" fill="#FF5500" />
        <defs>
          <linearGradient id="blogG2" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF9E00" />
            <stop offset="100%" stopColor="#FF5500" />
          </linearGradient>
        </defs>
        <rect x="90" y="170" width="20" height="10" rx="2" fill="rgba(255,107,0,0.2)" />
        <rect x="170" y="135" width="20" height="20" rx="2" fill="rgba(255,107,0,0.2)" />
        <rect x="230" y="150" width="20" height="30" rx="2" fill="rgba(255,107,0,0.2)" />
        <rect x="300" y="90" width="20" height="60" rx="2" fill="rgba(255,107,0,0.3)" />
      </svg>
    ),
  },
];

export default function Blog() {
  return (
    <section id="blog" className="blog-section section-padding section-card">
      <div className="container">
        <div className="section-header-line reveal fade-up">
          <div className="section-header-left">
            <h2 className="section-title">Nosso Blog</h2>
          </div>
          <div className="section-header-right">
            <a href="#blog" className="btn btn-outline-secondary">Mais Artigos</a>
          </div>
        </div>

        <div className="blog-grid">
          {posts.map((p) => (
            <article key={p.href} className="blog-card reveal fade-up">
              <div className="blog-img-wrapper">{p.svg}</div>
              <div className="blog-info">
                <div className="blog-meta">
                  <span className="blog-tag">{p.tag}</span>
                  <span className="blog-date">{p.date}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <a href={p.href} className="read-more">
                  Ler Artigo <ChevronRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
