import React from "react";
import "../../../styles/portfolio/RightCardProject.scss";

export default function RightCardProject({
  titre,
  description,
  image,
  github,
  githubCTA,
  liveUrl,
}) {
  return (
    <div className="right-card-project project-card">
      <div className="project-image-container">
        <img src={image} alt={titre} className="project-image" />
      </div>
      <div className="project-text">
        <h3>{titre}</h3>
        {/* Si description est un tableau, on fait une liste */}
        {Array.isArray(description) ? (
          <ul>
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="cta"
        >
          {githubCTA}
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="live-link"
          >
            lesorigamisdestephane.fr
          </a>
        )}
      </div>
    </div>
  );
}
