import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), symfonyPlugin()],
  build: {
    rollupOptions: {
      input: {
        app: "./assets/app.jsx",
        navbar: "./assets/components/navbar/indexnavbar.jsx",
        footer: "./assets/components/footer/indexfooter.jsx",
        portfolio: "./assets/components/portfolio/indexportfolio.jsx",
        mentionslegales:
          "./assets/components/mentionslegales/indexmentionslegales.jsx",
      },
    },
  },
});
