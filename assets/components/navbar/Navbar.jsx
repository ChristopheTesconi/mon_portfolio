import React from "react";
import "../../styles/navbarfooter/navbar.scss";
import monlogo from "../../images/portfolio/monlogo.png";

export default function Navbar() {
  const isHomePage = window.location.pathname === "/";

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
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
              <a className="nav-link" href="/">
                Accueil
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              {isHomePage ? (
                <a className="nav-link" href="#mesprojets">
                  Mes projets
                </a>
              ) : (
                <a className="nav-link" href="/#mesprojets">
                  Mes projets
                </a>
              )}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/messervices">
                Mes Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/moncv">
                Mon CV
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/apropos">
                À propos
              </a>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Separated link
                </a>
              </div>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <li className="d-flex nav-item">
            <a className="nav-link" href="#">
              Langues
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}
