import React from "react";
import "../../styles/mentionslegales/mentionslegales.scss";
import frTexts from "../../translate/mentions/mentionsfr.json";
import enTexts from "../../translate/mentions/mentionsen.json";

export default function MentionsLegales() {
  const currentLocale = window.location.pathname.split("/")[1] || "fr";
  const texts = currentLocale === "en" ? enTexts : frTexts;

  return (
    <main className="mentions-legales">
      <h1>{texts.title}</h1>

      <section>
        <h2>{texts.editorTitle}</h2>
        <p>{texts.editorContent}</p>
      </section>

      <section>
        <h2>{texts.hostTitle}</h2>
        <p>{texts.hostContent}</p>
      </section>

      <section>
        <h2>{texts.dataTitle}</h2>
        <p>{texts.dataContent}</p>
      </section>

      <section className="last-section">
        <h2>{texts.ipTitle}</h2>
        <p>{texts.ipContent}</p>
      </section>
    </main>
  );
}
