import React from "react";
import "../../../styles/portfolio/moncv.scss";
import cvPDFFr from "../../../images/fichiers/CV-Christophe-Tesconi-FR.pdf";
import cvPDFEn from "../../../images/fichiers/CV-Christophe-Tesconi-EN.pdf";
import frTexts from "../../../translate/moncv/moncvfr.json";
import enTexts from "../../../translate/moncv/moncven.json";

export default function MonCV() {
  const currentLocale = window.location.pathname.split("/")[1] || "fr";
  const texts = currentLocale === "en" ? enTexts : frTexts;
  const cvPDF = currentLocale === "en" ? cvPDFEn : cvPDFFr;

  return (
    <section id="moncv" className="moncv">
      <div className="moncv-content">
        <h2>{texts.title}</h2>
        <div className="skills">
          {texts.skills.map((skill, index) => (
            <div className="skill-block" key={index}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
        <p>
          {texts.description.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>

        <a href={cvPDF} download className="cta">
          {texts.downloadText}
        </a>
      </div>
    </section>
  );
}
