import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), symfonyPlugin()],
  build: {
    rollupOptions: {
      input: {
        app: "./assets/app.js",
        //Composants
        navbar: "./assets/components/navbar/indexnavbar.jsx",

        //Portfolio
        portfolio: "./assets/components/portfolio/indexportfolio.jsx",
      },
    },
  },
});
