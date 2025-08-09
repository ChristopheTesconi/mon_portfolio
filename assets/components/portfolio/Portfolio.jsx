import React from "react";
import "../../styles/portfolio/portfolio.scss";
// import christophe from "../../images/portfolio/Christophe CV.jpeg";
import frTexts from "../../translate/portfolio/portfoliofr.json";
import enTexts from "../../translate/portfolio/portfolioen.json";
import TypingQuote from "./TypingQuote";
import MesProjets from "../portfolio/mesProjets/MesProjets";
import MesServices from "../portfolio/mesServices/MesServices";
import APropos from "../portfolio/apropos/apropos";
import Contact from "../portfolio/contact/Contact";

export default function Portfolio() {
  const currentLocale = window.location.pathname.split("/")[1] || "fr";
  const texts = currentLocale === "en" ? enTexts : frTexts;

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
          {/* <div className="freelance-photo">
            <img src={christophe} alt="Christophe Tesconi" />
          </div> */}
        </div>
      </section>
      <MesProjets texts={texts} />
      <MesServices />
      <APropos />
      <Contact />
    </>
  );
}
