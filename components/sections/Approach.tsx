import { Check, X, Megaphone, Headset, Workflow, Database, ArrowRight } from "lucide-react";

const theyDo = [
  "Empurram tráfego pago como solução única",
  "Vendem o mesmo pacote para todo mundo",
  "Métricas bonitas que não pagam conta",
  "Somem quando o site entra no ar",
];

const weDo = [
  "Fazemos a análise do negócio antes de propor",
  "Atacamos o gargalo real, seja em marketing ou operação",
  "Focamos no impacto do seu faturamento",
  "Acompanhamos e escalamos o que funciona",
];

const bottlenecks = [
  {
    icon: <Megaphone size={24} />,
    title: "Marketing & Aquisição",
    text: "Você é bom no que faz, mas poucos te encontram.",
  },
  {
    icon: <Headset size={24} />,
    title: "Atendimento & Conversão",
    text: "Os contatos chegam, mas escapam pelo caminho.",
  },
  {
    icon: <Workflow size={24} />,
    title: "Operação & Back-office",
    text: "Você tem clientes, mas a operação trava o dia a dia.",
  },
  {
    icon: <Database size={24} />,
    title: "Tecnologia & Dados",
    text: "Sistemas que não conversam e decisões no escuro.",
  },
];

export default function Approach() {
  return (
    <section id="abordagem" className="approach-section section-padding section-card">
      <div className="container">
        <div className="section-header text-center margin-auto reveal fade-up">
          <h2 className="section-title">Não é só tráfego. Não é só site.</h2>
          <p className="section-subtitle">
            Muitos vendem só anúncio ou site, como se fosse a resposta para tudo. A gente
            acha o problema antes de prometer a solução.
          </p>
        </div>

        {/* Contraste: o que te vendem por aí × o que a gente faz */}
        <div className="approach-compare reveal fade-up">
          <div className="approach-col approach-col--them">
            <h3 className="approach-col-title">O que te vendem por aí</h3>
            <ul>
              {theyDo.map((item) => (
                <li key={item}>
                  <span className="approach-mark approach-mark--x">
                    <X size={13} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="approach-col approach-col--us">
            <h3 className="approach-col-title">O jeito Otimiza Tech</h3>
            <ul>
              {weDo.map((item) => (
                <li key={item}>
                  <span className="approach-mark approach-mark--check">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Onde mora o gargalo */}
        <div className="approach-bottlenecks-head reveal fade-up">
          <h3>Onde mora o seu gargalo?</h3>
          <p>
            Ele quase nunca está onde parece. A gente investiga de ponta a ponta e resolve
            com tecnologia.
          </p>
        </div>

        <div className="approach-grid reveal fade-up">
          {bottlenecks.map((b) => (
            <div key={b.title} className="approach-card">
              <div className="approach-card-icon">{b.icon}</div>
              <h4>{b.title}</h4>
              <p>{b.text}</p>
            </div>
          ))}
        </div>

        <div className="approach-cta reveal fade-up">
          <span className="approach-cta-icon">
            <ArrowRight size={18} />
          </span>
          <p>
            Na <strong>análise gratuita</strong>, a gente acha o seu gargalo e você sai
            com um plano claro.
          </p>
        </div>
      </div>
    </section>
  );
}
