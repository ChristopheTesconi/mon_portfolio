import React from "react";
import "../../styles/portfolio/portfolio.scss";
import christophe from "../../images/portfolio/christophe.jpg";
import projet1 from "../../images/portfolio/bicolor.jpg";
import projet2 from "../../images/portfolio/origamis.png";
import projet3 from "../../images/portfolio/oflix.png";

export default function Portfolio() {
  const projets = [
    {
      titre: "Bicolor",
      description:
        "Site fullstack (PHP, MySQL) avec interface utilisateur simple et gestion de contenu.",
      image: projet1,
      github: "https://github.com/ChristopheTesconi/Bicolor2",
    },
    {
      titre: "Origami",
      description:
        "Réseau social avec authentification et back-office admin (Symfony + React).",
      image: projet2,
      github: "https://github.com/ChristopheTesconi/origami",
    },
    {
      titre: "O’flix",
      description:
        "Plateforme façon Netflix développée en Laravel avec MySQL (travail d’équipe en Agile).",
      image: projet3,
      github: "https://github.com/ChristopheTesconi",
    },
  ];
  return (
    <>
      <section className="portfolio freelance">
        <div className="freelance-content">
          <div className="freelance-text">
            <h2>Tesconi Christophe Développeur Fullstack</h2>
            <p>
              Besoin d’un site ou d’un outil interne qui travaille pour vous ?
              Je développe des solutions web robustes qui vous rendent visible,
              automatisent vos tâches et vous font gagner du temps au quotidien.
            </p>
            <a href="/contact" className="cta">
              Un projet ? Écrivez-moi
            </a>
          </div>
          <div className="freelance-photo">
            <img src={christophe} alt="Christophe Tesconi" />
          </div>
        </div>
      </section>
      <section id="mesprojets" className="portfolio projets">
        <h2>Mes projets</h2>
        <div className="projets-grid">
          {projets.map((projet, index) => (
            <div className="projet-card" key={index}>
              <img src={projet.image} alt={projet.titre} />
              <h3>{projet.titre}</h3>
              <p>{projet.description}</p>
              <a
                href={projet.github}
                target="_blank"
                rel="noopener noreferrer"
                className="cta"
              >
                Voir sur GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
