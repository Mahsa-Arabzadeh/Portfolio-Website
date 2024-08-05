import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  publicDir: "public/",
  base: "/Portfolio-Website/",
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
