import React from "react";
import { createRoot } from "react-dom/client";
import Footer from "./Footer";

const rootElement = document.getElementById("id-footer");
if (rootElement) {
  createRoot(rootElement).render(<Footer />);
}
