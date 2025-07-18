import React from "react";
import "../../../styles/portfolio/moncv.scss";
import cvPDF from "../../../images/fichiers/CV-Christophe-Tesconi.pdf";

export default function MonCV() {
  return (
    <section id="moncv" className="moncv">
      <div className="moncv-content">
        <h2>Mon CV</h2>
        <div className="skills">
          <div className="skill-block">
            <h3>Back-end</h3>
            <p>PHP, Symfony, MySQL, Doctrine, API REST</p>
          </div>
          <div className="skill-block">
            <h3>Front-end</h3>
            <p>React, Laravel, JavaScript, TypeScript, HTML/CSS</p>
          </div>
          <div className="skill-block">
            <h3>Outils</h3>
            <p>Git/GitHub, Composer, PhpMyAdmin, Vite.js, WordPress</p>
          </div>
        </div>
        <p>
          Développeur web fullstack (Symfony, React, PHP, JavaScript), je me
          suis reconverti après 20 ans dans la restauration pour créer des
          solutions modernes et performantes.
          <br />
          Je développe des sites vitrines, applications métier et API, en aidant
          mes clients à gagner en visibilité et productivité.
        </p>

        <a href={cvPDF} download className="cta">
          Télécharger mon CV (PDF)
        </a>
      </div>
    </section>
  );
}
