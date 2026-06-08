"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

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
            <span className="circle-word">
              Otimizamos negócios
              <svg
                className="circle-svg"
                viewBox="0 0 320 64"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  className="circle-path"
                  pathLength="1"
                  d="M 276,14 C 200,5 105,6 28,18 C -2,27 -2,46 28,54 C 128,67 232,64 288,49 C 322,38 312,6 248,19"
                />
              </svg>
            </span>{" "}
            com soluções digitais inteligentes
          </h1>
          <p>
            Transformamos processos em resultados com tecnologia, IA e estratégias digitais.
          </p>
          <div className="hero-buttons">
            <a href="#contato" className="btn btn-primary">
              Consulta Gratuita <ArrowRight />
            </a>
            <a href="#servicos" className="btn btn-tertiary">
              Conhecer Serviços
            </a>
          </div>
        </div>

        <div className="hero-visual">
          {animData && (
            <Lottie animationData={animData} loop autoplay />
          )}
        </div>
      </div>
    </section>
  );
}
