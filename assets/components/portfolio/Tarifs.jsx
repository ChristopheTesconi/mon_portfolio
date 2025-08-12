import React from "react";
import "../../styles/portfolio/tarifs.scss";
import frTexts from "../../translate/tarifs/tarifsfr.json";
import enTexts from "../../translate/tarifs/tarifsen.json";

export default function Tarifs() {
  const currentLocale = window.location.pathname.split("/")[1] || "fr";
  const texts = currentLocale === "en" ? enTexts : frTexts;
  return (
    <section id="tarifs" className="portfolio tarifs">
      <div className="tarifs-content">
        <h2>{texts.title}</h2>
        <p>
          <strong>{texts.tarifIndicatif}</strong>
        </p>
        <p>{texts.texte1}</p>
        <p>{texts.texte2}</p>
        <p>
          <strong>{texts.texte3}</strong>
        </p>
        <p>{texts.texte4}</p>
      </div>
    </section>
  );
}
