import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Otimiza Tech | Soluções Digitais Inteligentes para Negócios",
    template: "%s | Otimiza Tech",
  },
  description:
    "Desenvolvimento de software, automação com IA, mídia paga e infraestrutura de TI. Entendemos o seu desafio antes de propor a solução certa para destravar o crescimento do seu negócio.",
  keywords: [
    "desenvolvimento de software",
    "automação com IA",
    "mídia paga",
    "tráfego pago",
    "SEO",
    "infraestrutura de TI",
    "consultoria de tecnologia",
    "Juiz de Fora",
    "Otimiza Tech",
  ],
  authors: [{ name: "Otimiza Tech" }],
  creator: "Otimiza Tech",
  publisher: "Otimiza Tech",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Otimiza Tech",
    title: "Otimiza Tech | Soluções Digitais Inteligentes para Negócios",
    description:
      "Tecnologia, automação e IA para resolver gargalos reais e acelerar o crescimento do seu negócio.",
    images: [{ url: "/logo.png", alt: "Otimiza Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Otimiza Tech | Soluções Digitais Inteligentes",
    description:
      "Tecnologia, automação e IA para resolver gargalos reais e acelerar o crescimento do seu negócio.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FF6B00",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={nunito.className}>
      <body>{children}</body>
    </html>
  );
}
