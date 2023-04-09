import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "docs"
  },
  plugins: [react(), VitePWA({
    manifest: {
      name: "PWA Inject Manifest",
      short_name: 'PWA Inject',
      icons: [
        {
          src: 'pwa-192x192.png', // <== don't add slash, for testing
          sizes: '192x192',
          type: 'image/png',
        },
      ]
    },
    // injectRegister: "auto",
    injectManifest: {
      rollupFormat: "iife",
    },
    minify: false,
    registerType: "autoUpdate",
    /**
     * @see https://vite-pwa-org.netlify.app/guide/inject-manifest.html
     */
    srcDir: "src",
    filename: "sw.ts",
    strategies: "injectManifest",
    devOptions: {
      enabled: true,
      type: 'module',
    },
    // workbox: {
    //   globPatterns: ['**/*.{js,css,html,ico,png,svg}']
    // }
  })],
});
