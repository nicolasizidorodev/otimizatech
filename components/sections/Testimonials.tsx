"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    img: "/team1.png",
    name: "Aline Stephens",
    position: "Diretora de Operações",
    company: "Vesta E-commerce",
    text: '"A Otimiza Tech transformou a maneira como gerenciamos nossas vendas. A integração de IA no atendimento automatizou 70% das nossas dúvidas frequentes, permitindo que nosso time focasse em vendas complexas."',
  },
  {
    img: "/team2.png",
    name: "Amanda Pinheiro",
    position: "Co-Founder",
    company: "Nexo Logística",
    text: '"O novo software de gestão sob medida desenvolvido por eles é incrivelmente rápido e intuitivo. Nossa produtividade interna subiu 40% e a equipe adora a interface limpa e moderna."',
  },
  {
    img: "/team3.png",
    name: "Rodrigo Mendes",
    position: "CEO",
    company: "Pulse Tech",
    text: '"Excelente equipe, sempre disponível, sempre com visão clara do que precisa ser feito. Graças à estratégia de tráfego pago, alcançamos 3x mais leads qualificados em apenas 2 meses."',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % reviews.length), []);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="testimonials-section section-padding section-card">
      <div className="container">
        <div className="section-header-line reveal fade-up">
          <div className="section-header-left">
            <h2 className="section-title">O que nossos clientes dizem</h2>
          </div>
          <div className="section-header-right">
            <a href="#contato" className="btn btn-outline-secondary">Ver Mais Depoimentos</a>
          </div>
        </div>

        <div className="reviews-slider-wrapper reveal fade-up">
          <div className="reviews-slider">
            {reviews.map((r, i) => (
              <div key={r.name} className={`review-item ${i === current ? "active" : ""}`}>
                <div className="review-image">
                  <Image src={r.img} alt={r.name} width={80} height={80} className="review-avatar" />
                </div>
                <div className="review-content">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, j) => <Star key={j} className="star-fill" />)}
                  </div>
                  <p className="text-review">{r.text}</p>
                  <div className="review-footer">
                    <div className="review-author">
                      <p className="author-name">{r.name}</p>
                      <p className="author-position">{r.position}</p>
                    </div>
                    <div className="review-company-logo">
                      <span className="company-badge">{r.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-controls">
            <button className="slider-btn" onClick={prev} aria-label="Anterior">
              <ChevronLeft />
            </button>
            <div className="slider-dots-reviews">
              {reviews.map((_, i) => (
                <span
                  key={i}
                  className={`dot-r ${i === current ? "active" : ""}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
            <button className="slider-btn" onClick={next} aria-label="Próximo">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
