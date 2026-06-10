"use client";

import { useLottie } from "lottie-react";

// Animação do hero ("animação do header"). Usa o renderer canvas em vez do SVG
// (padrão) porque o renderer SVG do lottie-web pisca/glitcha durante o loop em
// navegadores mobile (Safari iOS principalmente), por causa de repaints do SVG
// em camadas de composição instáveis. O canvas pinta tudo num único elemento e
// não sofre desse problema.
export default function HeroLottie({
  animationData,
}: {
  animationData: object;
}) {
  const { View } = useLottie<"canvas">({
    animationData,
    loop: true,
    autoplay: true,
    renderer: "canvas",
    rendererSettings: {
      clearCanvas: true,
      // Renderiza na densidade real do device (DPR 2–3 no celular) para o canvas
      // não ficar borrado. Componente é client-only, então window existe.
      dpr: typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1,
    },
  });

  return View;
}
