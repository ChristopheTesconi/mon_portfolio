import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), symfonyPlugin()],
  build: {
    rollupOptions: {
      input: {
        app: "./assets/app.jsx",
        //Composants
        navbar: "./assets/components/navbar/indexnavbar.jsx",
        footer: "./assets/components/footer/indexfooter.jsx",
        mentionslegales:
          "./assets/components/mentionslegales/indexmentionslegales.jsx",

        //Portfolio
        portfolio: "./assets/components/portfolio/indexportfolio.jsx",
        contact: "./assets/components/portfolio/contact/indexcontact.jsx",
        messervices:
          "./assets/components/portfolio/mesServices/indexmesservices.jsx",
        apropos: "./assets/components/portfolio/apropos/indexapropos.jsx",
        moncv: "./assets/components/portfolio/moncv/indexmoncv.jsx",
      },
    },
  },
});
