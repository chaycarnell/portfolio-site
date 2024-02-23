import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/rest": "http://localhost:4001",
    },
  },
  base: "./",
  plugins: [react()],
  build: {
    outDir: "./dist",
  },
});
