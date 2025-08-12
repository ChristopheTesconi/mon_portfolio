import React from "react";
import "../../styles/portfolio/projets.scss";
import LeftCardProject from "./cardProject/LeftCardProject";
import RightCardProject from "./cardProject/RightCardProject";
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
      image: projet1,
      github: "https://github.com/ChristopheTesconi",
      githubCTA: texts.projects[1].githubCTA,
    },
    {
      titre: texts.projects[2].titre,
      description: texts.projects[2].description,
      image: projet2,
      github: "https://github.com/ChristopheTesconi/origami",
      githubCTA: texts.projects[2].githubCTA,
      liveUrl: "https://lesorigamisdestephane.fr/",
    },
    {
      titre: texts.projects[3].titre,
      description: texts.projects[3].description,
      image: projet3,
      github: "https://github.com/ChristopheTesconi",
      githubCTA: texts.projects[3].githubCTA,
    },
  ];

  return (
    <section id="mesprojets" className="portfolio projets">
      <h2>{texts.projectsTitle}</h2>
      <div className="container">
        {projets.map((projet, index) =>
          index % 2 === 0 ? (
            <RightCardProject key={index} {...projet} />
          ) : (
            <LeftCardProject key={index} {...projet} />
          )
        )}
      </div>
    </section>
  );
}
