import React, { useState, useEffect } from "react";
import "../../styles/navbarfooter/footer.scss";
import frTexts from "../../translate/footer/footerfr.json";
import enTexts from "../../translate/footer/footeren.json";

export default function Footer() {
  const currentLocale = window.location.pathname.split("/")[1] || "fr";

  const [texts, setTexts] = useState(frTexts);

  useEffect(() => {
    if (currentLocale === "en") {
      setTexts(enTexts);
    } else {
      setTexts(frTexts);
    }
  }, [currentLocale]);

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href={`/${currentLocale}#contact`} rel="noopener noreferrer">
          {texts.contact}
        </a>
        <a href="mailto:chris.tesconi@gmail.com">{texts.email}</a>
        <a
          href="https://github.com/ChristopheTesconi"
          target="_blank"
          rel="noopener noreferrer"
        >
          {texts.github}
        </a>
        <a
          href="https://www.linkedin.com/in/christophetesconi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {texts.linkedin}
        </a>
      </div>
      <p>
        {texts.copyright.replace("{year}", year)}{" "}
        <a className="nav-link" href={`/${currentLocale}/mentions-legales`}>
          {texts.legal}
        </a>
      </p>
    </footer>
  );
}
