/// <reference types="vitest" />

import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    legacy(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.png", "assets/**/*"],
      manifest: {
        name: "FundNext Bank",
        short_name: "FundNext",
        description: "Banking and Investment Platform",
        theme_color: "#5A45FE",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "favicon.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,woff2}"],
        globIgnores: ["**/remixicon*.svg"],
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/bankfrontend.*\.(png|jpg|jpeg|svg|gif)$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'images',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60
              }
            }
          }
        ]
      }
    })
  ],
  publicDir: 'public',
  build: {
    rollupOptions: {
      external: [
        '@capacitor/splash-screen',
        '@capacitor/push-notifications',
        '@capacitor/keyboard',
        '@capacitor/haptics',
        '@capacitor/status-bar',
        '@capacitor/app'
      ]
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
  },
});
