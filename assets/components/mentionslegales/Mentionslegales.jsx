import React from "react";
import "../../styles/mentionslegales/mentionslegales.scss";

export default function MentionsLegales() {
  return (
    <main className="mentions-legales">
      <h1>Mentions légales</h1>

      <section>
        <h2>Éditeur du site</h2>
        <p>
          Ce site est édité par Christophe Tesconi, développeur web indépendant.
          <br />
          Contact : chris.tesconi@gmail.com
        </p>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p>
          Le site est hébergé par :<br />
          o2switch, SARL au capital de 100 000 €<br />
          SIRET : 510 909 80700024
          <br />
          Adresse : 222-224 Boulevard Gustave Flaubert, 63000 Clermont-Ferrand
          <br />
          Téléphone : 04 44 44 60 40
        </p>
      </section>

      <section>
        <h2>Données personnelles</h2>
        <p>
          Aucune donnée personnelle n’est collectée sans votre consentement.
          <br />
          Ce site ne fait pas usage de cookies à des fins de tracking.
        </p>
      </section>

      <section className="last-section">
        <h2>Propriété intellectuelle</h2>
        <p>
          Tous les contenus présents sur ce site (textes, images, code, etc.)
          sont la propriété exclusive de Christophe Tesconi, sauf mention
          contraire.
        </p>
      </section>
    </main>
  );
}
