import Image from "next/image";

const members = [
  { img: "/team1.png", name: "Gabriel Ramos", role: "Founder & CEO" },
  { img: "/team2.png", name: "Letícia Dias", role: "Tech Lead" },
  { img: "/team3.png", name: "Arthur Sales", role: "UX/UI Designer" },
  { img: "/team4.png", name: "Giovanna Mendes", role: "Engenheira de Software" },
];

export default function Team() {
  return (
    <section id="equipe" className="team-section section-padding section-card">
      <div className="container">
        <div className="section-header text-center margin-auto reveal fade-up">
          <h2 className="section-title">Nossa Equipe</h2>
          <p className="section-subtitle">
            Especialistas unidos por um objetivo: criar valor tecnológico e resultados consistentes para você.
          </p>
        </div>

        <div className="team-grid">
          {members.map((m) => (
            <div key={m.name} className="team-card reveal fade-up">
              <div className="team-img-wrapper">
                <Image src={m.img} alt={m.name} width={300} height={345} />
              </div>
              <div className="team-info">
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
