import Image from "next/image";
import { Mail, Phone, MapPin, Gift } from "lucide-react";

function SvgFacebook() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function SvgLinkedin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
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
          <Image src="/logo-footer.svg" alt="Otimiza Tech" width={240} height={64} className="logo-img--footer" />
          <p className="footer-desc">
            Soluções tecnológicas inteligentes para otimização de processos e aceleração de crescimento comercial.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><SvgFacebook /></a>
            <a href="#" aria-label="LinkedIn"><SvgLinkedin /></a>
            <a href="#" aria-label="Instagram"><SvgInstagram /></a>
          </div>
        </div>

        <div className="footer-links-column">
          <h4>Links Rápidos</h4>
          <ul>
            {[
              ["#inicio", "Início"],
              ["#servicos", "Serviços"],
              ["#cases", "Cases"],
              ["#sobre", "Quem Somos"],
              ["#blog", "Blog"],
            ].map(([href, label]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-links-column">
          <h4>Nossos Serviços</h4>
          <ul>
            {["Desenvolvimento Web", "Automação & IA", "Mídia Paga", "Design UX/UI", "SEO & Analytics"].map((s) => (
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
              <Phone />
              <a href="tel:+5511999998888">+55 (11) 99999-8888</a>
            </li>
            <li>
              <MapPin />
              <span>Av. Paulista, 1000 - São Paulo - SP</span>
            </li>
          </ul>
        </div>

        <div className="footer-cta-column">
          <a href="#contato" className="btn-footer-yellow">
            <Gift /> Consulta Gratuita
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
