import React from "react";
import "../../styles/portfolio/apropos.scss";
import christophe from "../../images/portfolio/Christophe CV.jpeg";
import frTexts from "../../translate/apropos/aproposfr.json";
import enTexts from "../../translate/apropos/aproposen.json";

export default function About() {
  const currentLocale = window.location.pathname.split("/")[1] || "fr";
  const texts = currentLocale === "en" ? enTexts : frTexts;

  return (
    <section id="apropos" className="about">
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

      <div className="about-site">
        <h2>{texts.siteTitle}</h2>
        <p dangerouslySetInnerHTML={{ __html: texts.siteIntro }} />
        <p dangerouslySetInnerHTML={{ __html: texts.siteStack }} />
        <p dangerouslySetInnerHTML={{ __html: texts.siteFeatures }} />
        <p dangerouslySetInnerHTML={{ __html: texts.siteGoal }} />
        <p dangerouslySetInnerHTML={{ __html: texts.siteCTA }} />
      </div>
    </section>
  );
}
