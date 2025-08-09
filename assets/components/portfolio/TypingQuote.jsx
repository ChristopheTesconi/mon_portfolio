import React, { useState, useEffect } from "react";

export default function TypingQuote({ text }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
      }
    }, 100); // vitesse de typing

    // Curseur qui clignote
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [text]);

  return (
    <p className="intro-quote">
      “{displayedText}“
      <span style={{ visibility: showCursor ? "visible" : "hidden" }}>|</span>
    </p>
  );
}
