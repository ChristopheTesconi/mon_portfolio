import React, { useState, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";
import "../../styles/navbarfooter/navbar.scss";
import monlogo from "../../images/portfolio/monlogo.png";
import frTexts from "../../translate/navbar/navbarfr.json";
import enTexts from "../../translate/navbar/navbaren.json";

export default function Navbar() {
  const currentLocale = window.location.pathname.split("/")[1] || "fr";

  // Vérifie si on est sur la home
  const isHomePage =
    window.location.pathname === `/${currentLocale}` ||
    window.location.pathname === "/";

  const [texts, setTexts] = useState(frTexts);

  // Charger les traductions selon la locale
  useEffect(() => {
    setTexts(currentLocale === "en" ? enTexts : frTexts);
  }, [currentLocale]);

  // Changement de langue
  const switchLanguage = (lang) => {
    const currentHash = window.location.hash || "";
    const newPath =
      window.location.pathname.replace(/^\/(fr|en)/, `/${lang}`) + currentHash;
    window.location.href = newPath;
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 992);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fonction pour générer un lien d’ancre
  const anchorLink = (id) =>
    isHomePage ? `#${id}` : `/${currentLocale}/#${id}`;

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href={anchorLink("accueil")}>
          <img src={monlogo} alt="monlogo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href={anchorLink("accueil")}>
                {texts.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={anchorLink("mesprojets")}>
                {texts.projects}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={anchorLink("services")}>
                {texts.services}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={anchorLink("apropos")}>
                {texts.about}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={anchorLink("contact")}>
                {texts.contact}
              </a>
            </li>
          </ul>
          <li className="d-flex nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FaGlobe size={24} />
            </a>
            <div
              className="dropdown-menu"
              style={{
                width: "140px",
                minWidth: "auto",
                padding: "0.25rem 0",
                whiteSpace: "nowrap",
                right: isMobile ? "auto" : 0,
                left: isMobile ? 0 : "auto",
              }}
            >
              <button
                className="dropdown-item"
                onClick={() => switchLanguage("fr")}
              >
                🇫🇷 {texts.french}
              </button>
              <button
                className="dropdown-item"
                onClick={() => switchLanguage("en")}
              >
                🇬🇧 {texts.english}
              </button>
            </div>
          </li>
        </div>
      </div>
    </nav>
  );
}
