// URL canônica do site, usada em metadata, Open Graph, robots e sitemap.
// Atualmente aponta para a hospedagem provisória na Vercel. Quando o domínio
// definitivo (https://otimizatech.com.br) entrar no ar, basta definir a env
// NEXT_PUBLIC_SITE_URL nas configurações da Vercel — sem mexer no código.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://otimizatech.vercel.app";
