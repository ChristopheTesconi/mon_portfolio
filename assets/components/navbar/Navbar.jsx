import React, { useState, useEffect, useRef } from "react";
import { FaGlobe } from "react-icons/fa";
import "../../styles/navbarfooter/navbar.scss";
import monlogo from "../../images/portfolio/monlogo.png";
import frTexts from "../../translate/navbar/navbarfr.json";
import enTexts from "../../translate/navbar/navbaren.json";

export default function Navbar() {
  const currentLocale = window.location.pathname.split("/")[1] || "fr";
  const isHomePage =
    window.location.pathname === `/${currentLocale}` ||
    window.location.pathname === "/";

  const [texts, setTexts] = useState(frTexts);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (currentLocale === "en") {
      setTexts(enTexts);
    } else {
      setTexts(frTexts);
    }
  }, [currentLocale]);

  const switchLanguage = (lang) => {
    const newPath = window.location.pathname.replace(/^\/(fr|en)/, `/${lang}`);
    window.location.href = newPath;
  };

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 992);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 Fermer le menu si clic à l'extérieur
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // 🔹 Fermer le menu après clic sur un lien
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top bg-body-tertiary"
      ref={menuRef}
    >
      <div className="container-fluid">
        {/* LOGO */}
        <a
          className="navbar-brand"
          href={`/${currentLocale}#accueil`}
          onClick={handleLinkClick}
        >
          <img src={monlogo} alt="monlogo" />
        </a>

        {/* 🌍 GLOBE ICON */}
        <div className="language-switcher dropdown">
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

        {/* BOUTON BURGER */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* LIENS NAVBAR */}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarColor01"
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                href={`/${currentLocale}#accueil`}
                onClick={handleLinkClick}
              >
                {texts.home}
              </a>
            </li>
            <li className="nav-item">
              {isHomePage ? (
                <a
                  className="nav-link"
                  href="#mesprojets"
                  onClick={handleLinkClick}
                >
                  {texts.projects}
                </a>
              ) : (
                <a
                  className="nav-link"
                  href={`/${currentLocale}#mesprojets`}
                  onClick={handleLinkClick}
                >
                  {texts.projects}
                </a>
              )}
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={`/${currentLocale}#messervices`}
                onClick={handleLinkClick}
              >
                {texts.services}
              </a>
            </li>
            {/* <li className="nav-item">
              <a
                className="nav-link"
                href={`/${currentLocale}/moncv`}
                onClick={handleLinkClick}
              >
                {texts.cv}
              </a>
            </li> */}
            <li className="nav-item">
              <a
                className="nav-link"
                href={`/${currentLocale}#about`}
                onClick={handleLinkClick}
              >
                {texts.about}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href={`/${currentLocale}#contact`}
                onClick={handleLinkClick}
              >
                {texts.contact}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
