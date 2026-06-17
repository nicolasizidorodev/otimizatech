import Image from "next/image";
import { Mail, MapPin, Gift } from "lucide-react";

function SvgFacebook() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function SvgWhatsApp() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.71 1.448h.005c6.582 0 11.946-5.359 11.949-11.893a11.821 11.821 0 00-3.479-8.454" />
    </svg>
  );
}

function SvgInstagram() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-brand">
          <Image src="/logo-footer.svg" alt="Otimiza Tech" width={289} height={64} className="logo-img--footer" />
          <p className="footer-desc">
            Soluções tecnológicas inteligentes para otimização de processos e aceleração de crescimento comercial.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><SvgFacebook /></a>
            <a href="https://wa.me/5532991553688" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><SvgWhatsApp /></a>
            <a href="#" aria-label="Instagram"><SvgInstagram /></a>
          </div>
        </div>

        <div className="footer-links-column">
          <h4>Links Rápidos</h4>
          <ul>
            {[
              ["#inicio", "Início"],
              ["#servicos", "Serviços"],
              ["#abordagem", "Abordagem"],
              ["#cases", "Cases"],
              ["#processo", "Processo"],
            ].map(([href, label]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-links-column">
          <h4>Nossos Serviços</h4>
          <ul>
            {["Desenvolvimento Web", "Automação & IA", "Mídia Paga", "SEO & Analytics", "Infraestrutura & Suporte TI"].map((s) => (
              <li key={s}><a href="#servicos">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-links-column">
          <h4>Contato</h4>
          <ul className="contact-list">
            <li>
              <Mail />
              <a href="mailto:contato@otimizatech.com">contato@otimizatech.com</a>
            </li>
            <li>
              <SvgWhatsApp />
              <a href="https://wa.me/5532991553688" target="_blank" rel="noopener noreferrer">+55 (32) 99155-3688</a>
            </li>
            <li>
              <MapPin />
              <span>Juiz de Fora</span>
            </li>
          </ul>
        </div>

        <div className="footer-cta-column">
          <a href="#contato" className="btn-footer-yellow">
            <Gift /> Análise gratuita
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>&copy; 2026 Otimiza Tech. Todos os direitos reservados.</p>
          <div className="footer-legal">
            <a href="#">Termos de Uso</a>
            <a href="#">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
