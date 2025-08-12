import React, { useState, useEffect, useRef } from "react";

export default function TypingQuote({ text }) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const indexRef = useRef(0);
  const timeoutIdRef = useRef(null);
  const restartTimeoutRef = useRef(null);

  useEffect(() => {
    indexRef.current = 0;
    setDisplayedText("");

    function type() {
      setDisplayedText(text.slice(0, indexRef.current + 1));
      indexRef.current += 1;
      if (indexRef.current < text.length) {
        timeoutIdRef.current = setTimeout(type, 100);
      } else {
        // Quand le texte est fini, attendre 5 secondes puis recommencer
        restartTimeoutRef.current = setTimeout(() => {
          indexRef.current = 0;
          setDisplayedText("");
          type();
        }, 5000);
      }
    }

    type();

    return () => {
      clearTimeout(timeoutIdRef.current);
      clearTimeout(restartTimeoutRef.current);
    };
  }, [text]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <p className="intro-quote">
      “{displayedText}“
      <span style={{ visibility: showCursor ? "visible" : "hidden" }}>|</span>
    </p>
  );
}
