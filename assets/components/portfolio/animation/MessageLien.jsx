import React from "react";
import TypingQuote from "./TypingQuote";

export default function MessageLien({ texts }) {
  return (
    <section className="message-lien">
      <TypingQuote text={texts.message} />
    </section>
  );
}
