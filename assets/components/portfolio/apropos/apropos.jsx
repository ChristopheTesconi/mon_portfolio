import React from "react";
import "../../../styles/portfolio/apropos.scss";
import christophe from "../../../images/portfolio/christophe.jpg";
import frTexts from "../../../translate/apropos/aproposfr.json";
import enTexts from "../../../translate/apropos/aproposen.json";

export default function About() {
  const currentLocale = window.location.pathname.split("/")[1] || "fr";
  const texts = currentLocale === "en" ? enTexts : frTexts;

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>{texts.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: texts.intro }} />
          <p dangerouslySetInnerHTML={{ __html: texts.goal }} />
          <p dangerouslySetInnerHTML={{ __html: texts.values }} />
          <p dangerouslySetInnerHTML={{ __html: texts.cta }} />
        </div>
        <div className="about-photo">
          <img src={christophe} alt="Christophe Tesconi" />
        </div>
      </div>
    </section>
  );
}
