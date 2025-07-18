import React, { useState } from "react";
import "../../../styles/contact/contact.scss";

export default function Contact() {
  // State du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Gère la mise à jour des champs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gère la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/contact/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Merci ! Votre message a été envoyé.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        alert("Erreur : " + (data.error || "Merci de réessayer."));
      }
    } catch (error) {
      alert("Erreur réseau, merci de réessayer plus tard.");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contactez-moi</h2>
        <p>
          Un projet, une idée, ou juste une question ? Remplissez le formulaire
          ci-dessous, et je vous répondrai rapidement.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="cta">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
