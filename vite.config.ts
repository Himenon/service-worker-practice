import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    injectRegister: "auto",
    minify: false,
    registerType: "autoUpdate",
    /**
     * @see https://vite-pwa-org.netlify.app/guide/inject-manifest.html
     */
    srcDir: "src",
    filename: "sw.ts",
    devOptions: {
      enabled: true,
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}']
    }
  })],
});
