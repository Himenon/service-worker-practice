import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "docs"
  },
  base: "/service-worker-practice",
  plugins: [react(), VitePWA({
    mode: "development",
    scope: "/service-worker-practice/",
    workbox: {
      runtimeCaching: [
        {
          urlPattern: /assets/,
          handler: "CacheFirst",
          options: {
            cacheName: "vite-cache",
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 7, // <== 7 days
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/i,
          handler: "CacheFirst",
          options: {
            cacheName: "cdn-jsdelivr-net-cache",
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
      cleanupOutdatedCaches: true,
    },
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
  })],
});
