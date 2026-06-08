import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Otimiza Tech | Inovação e Soluções Tecnológicas Inteligentes",
  description:
    "Otimiza Tech - Desenvolvimento de software, automação com IA, marketing de performance e design focado em conversão. Otimizamos negócios com soluções inteligentes.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
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
