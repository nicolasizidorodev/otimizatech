import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite acesso aos recursos de dev (HMR, chunks, fontes) a partir do IP da
  // rede local — necessário para testar pelo celular na mesma rede Wi-Fi.
  allowedDevOrigins: ["192.168.2.106", "*.trycloudflare.com"],
};

export default nextConfig;
