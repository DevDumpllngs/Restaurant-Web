import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Restaurant-Web/", // Nombre del repositorio
  plugins: [react()],
});
