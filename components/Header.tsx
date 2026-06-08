"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";

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

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);

  return (
    <header>
      <div
        className={`offcanvas-overlay ${isOpen ? "active" : ""}`}
        onClick={close}
      />

      <div className={`offcanvas-mobile ${isOpen ? "open" : ""}`}>
        <div className="offcanvas-header">
          <Image src="/logo.svg" alt="Otimiza Tech" width={180} height={48} style={{ height: 48, width: "auto" }} />
          <button className="offcanvas-close" onClick={close} aria-label="Fechar Menu">
            <X />
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="offcanvas-nav">
            {[
              ["#inicio", "Início"],
              ["#servicos", "Serviços"],
              ["#cases", "Cases"],
              ["#sobre", "Quem Somos"],
              ["#processo", "Processo"],
              ["#equipe", "Equipe"],
              ["#blog", "Blog"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={close}>{label}</a>
              </li>
            ))}
            <li>
              <a href="#contato" className="btn btn-primary offcanvas-cta" onClick={close}>
                Fale Conosco
              </a>
            </li>
          </ul>
          <div className="offcanvas-socials">
            <a href="#" aria-label="Facebook"><SvgFacebook /></a>
            <a href="#" aria-label="LinkedIn"><SvgLinkedin /></a>
            <a href="#" aria-label="Instagram"><SvgInstagram /></a>
          </div>
        </div>
      </div>

      <div className="header-container">
        <a href="#inicio" className="logo-link" aria-label="Otimiza Tech Home">
          <Image src="/logo.svg" alt="Otimiza Tech" width={300} height={82} className="logo-img" />
        </a>

        <nav id="nav-menu" className="nav-menu">
          <ul>
            {[
              ["#inicio", "Início"],
              ["#servicos", "Serviços"],
              ["#cases", "Cases"],
              ["#sobre", "Quem Somos"],
              ["#processo", "Processo"],
              ["#equipe", "Equipe"],
              ["#blog", "Blog"],
            ].map(([href, label]) => (
              <li key={href}><a href={href}>{label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#contato" className="btn btn-secondary btn-header">
            Fale Conosco <ArrowRight />
          </a>
          <button
            className={`menu-toggle ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Abrir Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
