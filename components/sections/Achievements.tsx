import { Star } from "lucide-react";

export default function Achievements() {
  return (
    <section className="achievements-section section-padding">
      <div className="container">
        <div className="section-header text-center margin-auto reveal fade-up">
          <h2 className="section-title">Nossas Conquistas</h2>
          <p className="section-subtitle">Avaliações reais de clientes que transformaram seus negócios conosco.</p>
        </div>

        <div className="achievements-list reveal fade-up">
          {/* Google */}
          <div className="achievements-item">
            <div className="achieve-icon">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                width={36}
                height={36}
              />
            </div>
            <div className="achieve-detail">
              <div className="achieve-rating">
                <span className="text-rating">5.0</span>
                <div className="achieve-stars">
                  {[...Array(5)].map((_, i) => <Star key={i} className="star-fill" />)}
                </div>
              </div>
              <p className="text-based">Avaliação no Google Business</p>
            </div>
          </div>

          {/* +20 anos */}
          <div className="achievements-item">
            <div className="achieve-icon achieve-badge">
              <span>+20</span>
            </div>
            <div className="achieve-detail">
              <div className="achieve-rating">
                <span className="text-rating">+20</span>
              </div>
              <p className="text-based">Anos de experiência em transformação digital</p>
            </div>
          </div>

          {/* 99% */}
          <div className="achievements-item">
            <div className="achieve-icon achieve-badge">
              <span>99%</span>
            </div>
            <div className="achieve-detail">
              <div className="achieve-rating">
                <span className="text-rating">99%</span>
              </div>
              <p className="text-based">Índice de satisfação de clientes</p>
            </div>
          </div>

          {/* +150 */}
          <div className="achievements-item">
            <div className="achieve-icon achieve-badge">
              <span>+150</span>
            </div>
            <div className="achieve-detail">
              <div className="achieve-rating">
                <span className="text-rating">+150</span>
              </div>
              <p className="text-based">Projetos entregues com sucesso</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
