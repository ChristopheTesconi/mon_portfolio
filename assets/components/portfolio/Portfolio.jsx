import React from "react";
import "../../styles/portfolio/portfolio.scss";
import christophe from "../../images/portfolio/christophe.jpg";

export default function Portfolio() {
  return (
    <>
      <section className="portfolio freelance">
        <div className="freelance-content">
          <div className="freelance-text">
            <h2>Tesconi Christophe Développeur Fullstack</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              distinctio sapiente, repellendus ipsa qui cupiditate sunt non eos...
            </p>
          </div>
          <div className="freelance-photo">
            <img src={christophe} alt="Christophe Tesconi" />
          </div>
        </div>
      </section>
      <section className="portfolio projets">
        <h2>Mes projets</h2>
      </section>
    </>
  );
}
