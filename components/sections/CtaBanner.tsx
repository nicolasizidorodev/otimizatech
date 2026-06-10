import { Gift } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="cta-banner-section reveal fade-up">
        <div className="cta-banner">
          <div className="cta-banner-left">
            <h2 className="cta-banner-title">Antes de gastar com solução, descubra onde está o problema</h2>
            <p className="cta-banner-subtitle">
              Tecnologia, automação e IA para resolver gargalos reais, não para empilhar
              serviço. Comece com uma conversa franca sobre o seu negócio.
            </p>
          </div>
          <div className="cta-banner-right">
            <a href="#contato" className="btn cta-banner-btn">
              <Gift size={20} />
              Quero minha análise gratuita
            </a>
          </div>
        </div>
    </section>
  );
}
