import React from "react";
import { createRoot } from "react-dom/client";
import Mentionslegales from "./Mentionslegales";

const rootElement = document.getElementById("id-mentionslegales");
if (rootElement) {
  createRoot(rootElement).render(<Mentionslegales />);
}
