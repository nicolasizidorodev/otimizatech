import { ArrowRight } from "lucide-react";

interface BookCTAProps {
  dark?: boolean;
  label: React.ReactNode;
  subtitle: string;
  ctaText: string;
  ctaIcon?: React.ReactNode;
  center?: boolean;
}

export default function BookCTA({ dark = true, label, subtitle, ctaText, ctaIcon, center }: BookCTAProps) {
  return (
    <section className={`book-section ${dark ? "" : "book-section-light"} reveal fade-up`}>
      <div className="container">
        <div className={`book-content ${center ? "book-content-center" : ""}`}>
          {center ? (
            <>
              <p className="book-label">{label}</p>
              <p className="book-subtitle">{subtitle}</p>
              <a href="#contato" className="btn btn-primary btn-cta">
                {ctaText} {ctaIcon ?? <ArrowRight />}
              </a>
            </>
          ) : (
            <>
              <div className="book-left">
                <p className="book-label">{label}</p>
                <p className="book-subtitle">{subtitle}</p>
              </div>
              <div className="book-right">
                <a href="#contato" className="btn btn-primary btn-cta">
                  {ctaText} {ctaIcon ?? <ArrowRight />}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
