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

  // Changement de langue en gardant le hash
  const switchLanguage = (lang) => {
    const currentHash = window.location.hash || "";
    const newPath =
      window.location.pathname.replace(/^\/(fr|en)/, `/${lang}`) + currentHash;
    window.location.href = newPath;
  };

  // isMobile indique si la fenêtre est en mode mobile (largeur < 992px)
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

  // État pour gérer l'ouverture/fermeture du menu burger
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fonction appelée quand on clique sur un lien de navigation
  const handleLinkClick = () => {
    // Sur mobile, ferme le menu burger automatiquement
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
      <div className="container-fluid d-flex align-items-center">
        {/* LOGO */}
        <a
          className="navbar-brand"
          href={anchorLink("accueil")}
          onClick={handleLinkClick}
        >
          <img src={monlogo} alt="monlogo" />
        </a>

        {/* BOUTON LANGUE */}
        {isMobile ? (
          // En mobile, bouton langue à gauche du burger avec marge à droite
          <div
            className="language-switcher dropdown"
            style={{ marginLeft: "calc(50vw - 60px)" }}
          >
            <a
              className="nav-link dropdown-toggle globe-icon"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <FaGlobe size={24} />
            </a>
            <div
              className="dropdown-menu dropdown-menu-end"
              style={{
                width: "140px",
                minWidth: "auto",
                padding: "0.25rem 0",
                whiteSpace: "nowrap",
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
          </div>
        ) : null}

        {/* BOUTON BURGER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded={isMenuOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU COLLAPSIBLE */}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarColor01"
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href={anchorLink("accueil")}
                onClick={handleLinkClick}
              >
                {texts.home}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={anchorLink("mesprojets")}
                onClick={handleLinkClick}
              >
                {texts.projects}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={anchorLink("services")}
                onClick={handleLinkClick}
              >
                {texts.services}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={anchorLink("apropos")}
                onClick={handleLinkClick}
              >
                {texts.about}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={anchorLink("contact")}
                onClick={handleLinkClick}
              >
                {texts.contact}
              </a>
            </li>
          </ul>

          {/* BOUTON LANGUE en desktop, tout à droite */}
          {!isMobile && (
            <div
              className="language-switcher dropdown"
              style={{ position: "relative", left: "-10px" }}
            >
              <a
                className="nav-link dropdown-toggle globe-icon"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <FaGlobe size={24} />
              </a>
              <div
                className="dropdown-menu dropdown-menu-end"
                style={{
                  width: "140px",
                  minWidth: "auto",
                  padding: "0.25rem 0",
                  whiteSpace: "nowrap",
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
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
