import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    rollupOptions: {
      output: {
        // Trik memecah file vendor (node_modules) agar tidak kena warning > 500 kB
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Pisahkan library animasi dan slider
            if (id.includes('framer-motion') || id.includes('swiper')) {
              return 'vendor-animation';
            }
            // Pisahkan icon library yang biasanya berukuran besar
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            // Sisa library lainnya (React, TanStack Query, dll) masuk ke core
            return 'vendor-core';
          }
        }
      }
    }
  }
}));