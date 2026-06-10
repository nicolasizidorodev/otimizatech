"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Gift } from "lucide-react";

// Carregado só no cliente (ssr: false). Usa o renderer canvas do Lottie para
// evitar o flicker do renderer SVG em navegadores mobile.
const HeroLottie = dynamic(() => import("@/components/HeroLottie"), {
  ssr: false,
});

export default function Hero() {
  const [animData, setAnimData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/animacao_header.json")
      .then((r) => r.json())
      .then(setAnimData);
  }, []);

  return (
    <section id="inicio" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
            Otimizamos negócios com soluções digitais inteligentes
          </h1>
          <p>
            Entendemos seu desafio antes de propor qualquer solução.
          </p>
          <div className="hero-buttons">
            <a href="#contato" className="btn-footer-yellow">
              <Gift /> Análise gratuita
            </a>

          </div>
        </div>

        <div className="hero-visual">
          {animData && <HeroLottie animationData={animData} />}
        </div>
      </div>
    </section>
  );
}
