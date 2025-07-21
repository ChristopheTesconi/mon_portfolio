import React from "react";
import "../../styles/portfolio/portfolio.scss";
import christophe from "../../images/portfolio/Christophe CV.jpeg";
import projet1 from "../../images/portfolio/bicolor.jpg";
import projet2 from "../../images/portfolio/origamis.png";
import projet3 from "../../images/portfolio/oflix.png";

import frTexts from "../../translate/portfolio/portfoliofr.json";
import enTexts from "../../translate/portfolio/portfolioen.json";

export default function Portfolio() {
  const currentLocale = window.location.pathname.split("/")[1] || "fr";
  const texts = currentLocale === "en" ? enTexts : frTexts;

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
    <>
      <section className="portfolio freelance">
        <div className="freelance-content">
          <div className="freelance-text">
            <h2>{texts.titleFreelance}</h2>
            <p>{texts.introText}</p>
            <a href={`/${currentLocale}/contact`} className="cta">
              {texts.contactCTA}
            </a>
          </div>
          <div className="freelance-photo">
            <img src={christophe} alt="Christophe Tesconi" />
          </div>
        </div>
      </section>

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
    </>
  );
}
