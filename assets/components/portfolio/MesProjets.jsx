// MesProjets.jsx
import React from "react";
import projet1 from "../../images/portfolio/bicolor.jpg";
import projet2 from "../../images/portfolio/origamis.png";
import projet3 from "../../images/portfolio/oflix.png";

export default function MesProjets({ texts }) {
  const projets = [
    {
      titre: texts.projects[0].titre,
      description: texts.projects[0].description,
      image: projet1,
      github: "https://github.com/ChristopheTesconi/Bicolor2",
      githubCTA: texts.projects[0].githubCTA,
    },
    {
      titre: texts.projects[1].titre,
      description: texts.projects[1].description,
      image: projet2,
      github: "https://github.com/ChristopheTesconi/origami",
      githubCTA: texts.projects[1].githubCTA,
    },
    {
      titre: texts.projects[2].titre,
      description: texts.projects[2].description,
      image: projet3,
      github: "https://github.com/ChristopheTesconi",
      githubCTA: texts.projects[2].githubCTA,
    },
  ];

  return (
    <section id="mesprojets" className="portfolio projets">
      <h2>{texts.projectsTitle}</h2>
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
              {projet.githubCTA}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
