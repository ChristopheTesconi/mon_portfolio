import React, { useEffect } from "react";
import "../../styles/portfolio/portfolio.scss";
import MesProjets from "./MesProjets";
import MesServices from "./MesServices";
import Apropos from "./Apropos";
import Contact from "./Contact";
import Tarifs from "./Tarifs";
import TypingQuote from "./animation/TypingQuote";
import MessageLien from "./animation/MessageLien";
import frTexts from "../../translate/portfolio/portfoliofr.json";
import enTexts from "../../translate/portfolio/portfolioen.json";

export default function Portfolio() {
  const currentLocale = window.location.pathname.split("/")[1] || "fr";
  const texts = currentLocale === "en" ? enTexts : frTexts;

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // enlève le #
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // optionnel : scroll en haut si pas d'ancre
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentLocale]);

  return (
    <>
      <section id="accueil" className="portfolio freelance">
        <div className="freelance-content">
          <div className="freelance-text">
            <h2>{texts.titleFreelance}</h2>
            <TypingQuote text={texts.introQuote} />
            <p>{texts.introText}</p>
            <a href={`/${currentLocale}#contact`} className="cta">
              {texts.contactCTA}
            </a>
          </div>
        </div>
      </section>

      {/* Mes Projets */}
      <MesProjets texts={texts} />

      {/* Mes services */}
      <MesServices />

      {/* A propos */}
      <Apropos />
      <MessageLien texts={texts} />
      {/* Contact */}
      <Contact />

      {/* Tarifs */}
      <Tarifs />
    </>
  );
}
