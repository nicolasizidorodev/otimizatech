import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={28} reverse duration={42} durationOnHover={120}>
        {logos.map((logo, index) => (
          // Cada logo num "chip" de vidro fosco, com largura fixa para o slider
          // medir o layout de forma estável (evita o vão gigante).
          <div key={`logo-${index}`} className="logo-chip">
            <img
              alt={logo.alt}
              className="logo-chip-img select-none"
              src={logo.src}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
