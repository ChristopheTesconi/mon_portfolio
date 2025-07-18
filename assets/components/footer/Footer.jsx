import React from "react";
import "../../styles/navbarfooter/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/contact" target="_blank" rel="noopener noreferrer">
          Contact
        </a>
        <a href="mailto:chris.tesconi@gmail.com">Email</a>
        <a
          href="https://github.com/ChristopheTesconi"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/christophetesconi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Christophe Tesconi{" "}
        <a href="/mentions-legales" className="footer-links">
          Mentions légales
        </a>
      </p>
    </footer>
  );
}
