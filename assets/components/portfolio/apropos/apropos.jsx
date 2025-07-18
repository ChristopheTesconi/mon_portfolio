import React from "react";
import "../../../styles/portfolio/apropos.scss";
import christophe from "../../../images/portfolio/christophe.jpg"; 

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>À propos de moi</h2>
          <p>
            Je m’appelle <strong>Christophe Tesconi</strong>.  
            Après plus de 20 ans comme chef cuisinier, dont des expériences à
            Londres et au Japon, j’ai choisi de me reconvertir dans le
            <strong> développement web</strong>.
          </p>
          <p>
            Mon objectif aujourd’hui est clair : <strong>aider mes clients</strong> à gagner
            en visibilité et en efficacité grâce à des sites et applications
            modernes qui <strong>travaillent pour eux</strong> (et pas l’inverse).
          </p>
          <p>
            Passionné de voyages (surtout en Asie), bouddhiste et engagé pour
            l’égalité, j’aime construire des projets qui inspirent
            <strong> confiance, transparence et utilité</strong>.
          </p>
          <p>
            Vous cherchez un développeur <strong>fiable et humain</strong> pour donner vie à vos
            idées ? <a href="/contact">Écrivez-moi</a>, je serai ravi d’en discuter.
          </p>
        </div>
        <div className="about-photo">
          <img src={christophe} alt="Christophe Tesconi" />
        </div>
      </div>
    </section>
  );
}
