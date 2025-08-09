import React from "react";
import { createRoot } from "react-dom/client";
import Portfolio from "../portfolio/Portfolio";

const rootElement = document.getElementById("id-portfolio");
if (rootElement) {
  createRoot(rootElement).render(<Portfolio />);
}
