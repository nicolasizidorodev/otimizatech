"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="contact-section section-padding section-card">
      <div className="container contact-container">
        <div className="contact-info reveal fade-right">
          <h2>Vamos otimizar o seu negócio juntos?</h2>
          <p>
            Deixe sua mensagem ao lado ou entre em contato direto usando um dos nossos canais. Nosso time
            técnico responde em menos de 2 horas úteis.
          </p>

          <div className="contact-methods">
            <div className="method-item">
              <div className="method-icon"><Mail /></div>
              <div>
                <h4>E-mail</h4>
                <a href="mailto:contato@otimizatech.com">contato@otimizatech.com</a>
              </div>
            </div>
            <div className="method-item">
              <div className="method-icon"><Phone /></div>
              <div>
                <h4>Telefone</h4>
                <a href="tel:+5511999998888">+55 (11) 99999-8888</a>
              </div>
            </div>
            <div className="method-item">
              <div className="method-icon"><MapPin /></div>
              <div>
                <h4>Sede</h4>
                <p>Av. Paulista, 1000 - Bela Vista, São Paulo - SP</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper reveal fade-left">
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
              (e.target as HTMLFormElement).reset();
            }}
          >
            <div className="form-group">
              <label htmlFor="name">Seu Nome *</label>
              <input type="text" id="name" required placeholder="Digite seu nome completo" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">E-mail Corporativo *</label>
                <input type="email" id="email" required placeholder="exemplo@suaempresa.com" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">WhatsApp / Celular *</label>
                <input type="tel" id="phone" required placeholder="(11) 99999-9999" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service">Serviço de Interesse</label>
              <select id="service">
                <option value="desenvolvimento">Desenvolvimento de Software / Web</option>
                <option value="automacao">Automação de Processos & IA</option>
                <option value="trafego">Tráfego Pago & Marketing</option>
                <option value="seo">SEO & Rankeamento Google</option>
                <option value="analytics">Analytics & Business Intelligence</option>
                <option value="outros">Outro Assunto</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" rows={4} placeholder="Descreva brevemente sua necessidade..." />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Enviar Mensagem <Send />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
