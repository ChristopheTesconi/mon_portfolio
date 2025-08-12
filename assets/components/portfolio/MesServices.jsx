import React from "react";
import "../../styles/portfolio/services.scss";
import frTexts from "../../translate/services/servicesfr.json";
import enTexts from "../../translate/services/servicesen.json";

export default function Services() {
  const currentLocale = window.location.pathname.split("/")[1] || "fr";
  const texts = currentLocale === "en" ? enTexts : frTexts;

  return (
    <section id="services" className="services">
      <div className="services-content">
        <h2>{texts.title}</h2>
        <div className="services-grid">
          {texts.services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              {/* Gestion conditionnelle de la description */}
              {Array.isArray(service.description) ? (
                <ul>
                  {service.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{service.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
