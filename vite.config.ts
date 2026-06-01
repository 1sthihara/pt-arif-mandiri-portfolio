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
    target: "es2022", // Menggunakan sintaks modern untuk memperkecil ukuran file JS hasil build
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Strategi memecah file vendor tingkat lanjut agar beban main-thread mobile di bawah 50ms
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
            // TAMBAHAN OPTIMASI: Pisahkan i18n karena i18next memiliki logic parse JSON yang lumayan intensif
            if (id.includes('i18next') || id.includes('react-i18next')) {
              return 'vendor-i18n';
            }
            // TAMBAHAN OPTIMASI: Pisahkan TanStack Query dari core utama
            if (id.includes('@tanstack') || id.includes('query-core')) {
              return 'vendor-query';
            }
            // Sisa library lainnya (React dan framework core) masuk ke core dengan ukuran yang jauh lebih ramping
            return 'vendor-core';
          }
        }
      }
    }
  }
}));