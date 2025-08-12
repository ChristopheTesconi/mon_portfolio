import React, { useState } from "react";
import "../../styles/contact/contact.scss";
import frTexts from "../../translate/contact/contactfr.json";
import enTexts from "../../translate/contact/contacten.json";

export default function Contact() {
  const currentLocale = window.location.pathname.split("/")[1] || "fr";
  const texts = currentLocale === "en" ? enTexts : frTexts;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/contact/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(texts.success);
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        alert(texts.error + (data.error ? ` (${data.error})` : ""));
      }
    } catch (error) {
      alert(texts.networkError);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>{texts.title}</h2>
        <p>{texts.intro}</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={texts.placeholderName}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={texts.placeholderEmail}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder={texts.placeholderMessage}
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="cta">
            {texts.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
