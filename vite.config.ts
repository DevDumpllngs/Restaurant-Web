import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/Restaurant-Web/" : "/", // Solo usa base en producción
  plugins: [react()],
}));
