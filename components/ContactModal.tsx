"use client";

import { useEffect, useState } from "react";
import { X, Send, Check, Mail, Star } from "lucide-react";

const topics = [
  "Análise gratuita do seu negócio, sem compromisso",
  "Atacamos o gargalo real, seja em marketing ou operação",
  "Resposta em menos de 2 horas úteis",
];

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a11.882 11.882 0 005.71 1.448h.005c6.582 0 11.946-5.359 11.949-11.893a11.821 11.821 0 00-3.479-8.454" />
    </svg>
  );
}

function GoogleG({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
      <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
      <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
    </svg>
  );
}

export default function ContactModal() {
  const [open, setOpen] = useState(false);

  // Intercepta o clique em QUALQUER link que aponte para #contato
  // (botões "Consultoria gratuita", "Fale Conosco", etc.) e abre o modal
  // no lugar de navegar para a âncora.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const link = target?.closest('a[href$="#contato"]');
      if (link) {
        e.preventDefault();
        setOpen(true);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // ESC para fechar + trava o scroll do fundo enquanto aberto.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    document.body.classList.add("modal-open");
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-open");
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="contact-modal-overlay"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label="Fale com a Otimiza Tech"
    >
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="contact-modal-close"
          aria-label="Fechar"
          onClick={() => setOpen(false)}
        >
          <X />
        </button>

        <div className="contact-modal-aside">
          <h2 className="contact-modal-title">
            Fale com a gente e descubra <span>onde está o gargalo</span>
          </h2>

          <p className="contact-modal-subtitle">
            Em uma conversa rápida e sem compromisso, entendemos o seu negócio e
            mostramos o caminho mais curto para destravar o crescimento.
          </p>

          <ul className="contact-modal-topics">
            {topics.map((t) => (
              <li key={t}>
                <Check size={18} />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="contact-modal-social">
            <div className="contact-modal-google">
              <GoogleG size={30} />
              <div className="contact-modal-google-body">
                <div className="contact-modal-google-top">
                  <strong>5,0</strong>
                  <span className="contact-modal-stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={15} />
                    ))}
                  </span>
                </div>
                <small>Baseado em 15 avaliações do Google</small>
              </div>
            </div>
          </div>

          <div className="contact-modal-direct">
            <a
              href="https://wa.me/5532991553688"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} /> +55 (32) 99155-3688
            </a>
            <a href="mailto:contato@otimizatech.com">
              <Mail size={18} /> contato@otimizatech.com
            </a>
          </div>
        </div>

        <form
          className="contact-modal-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
            (e.target as HTMLFormElement).reset();
            setOpen(false);
          }}
        >
          <div className="contact-modal-row">
            <div className="contact-modal-field">
              <label htmlFor="cm-name">Seu nome *</label>
              <input id="cm-name" name="name" type="text" required placeholder="Nome completo" />
            </div>
            <div className="contact-modal-field">
              <label htmlFor="cm-phone">Seu telefone *</label>
              <input id="cm-phone" name="phone" type="tel" required placeholder="(32) 99999-9999" />
            </div>
          </div>

          <div className="contact-modal-row">
            <div className="contact-modal-field">
              <label htmlFor="cm-email">E-mail *</label>
              <input id="cm-email" name="email" type="email" required placeholder="voce@empresa.com" />
            </div>
            <div className="contact-modal-field">
              <label htmlFor="cm-company">Empresa</label>
              <input id="cm-company" name="company" type="text" placeholder="Nome da empresa" />
            </div>
          </div>

          <div className="contact-modal-field contact-modal-field--grow">
            <label htmlFor="cm-message">Mensagem</label>
            <textarea id="cm-message" name="message" placeholder="Conte rapidamente sobre o seu negócio..." />
          </div>

          <button type="submit" className="contact-modal-submit">
            Enviar <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
