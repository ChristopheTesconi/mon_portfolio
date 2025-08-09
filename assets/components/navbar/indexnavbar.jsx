import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Navbar";

const rootElement = document.getElementById("id-navbar");
if (rootElement) {
  createRoot(rootElement).render(<Navbar />);
}
