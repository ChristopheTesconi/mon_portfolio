import React from "react";
import "../../../styles/portfolio/services.scss";

export default function Services() {
  const services = [
    {
      title: "Sites vitrines & e-commerce",
      description:
        "Attirez plus de clients avec un site moderne, rapide et optimisé. Que vous ayez besoin d’une vitrine ou d’une boutique en ligne, je construis des sites qui convertissent et renforcent votre image.",
    },
    {
      title: "Applications & outils métier",
      description:
        "Gagnez du temps et simplifiez vos process avec des outils sur-mesure : gestion interne, CRM, dashboard ou autre application web adaptée à votre activité.",
    },
    {
      title: "Automatisation & intégrations",
      description:
        "Libérez-vous des tâches répétitives : connectez vos services (API, CRM, ERP) et automatisez vos workflows pour travailler plus efficacement.",
    },
  ];

  return (
    <section id="services" className="services">
      <div className="services-content">
        <h2>Ce que je vous apporte</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
