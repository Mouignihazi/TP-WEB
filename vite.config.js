import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuration pour Vite
export default defineConfig({
  plugins: [react()],
  base: "/TP-WEB/", // Assurez-vous que c'est exactement votre nom de dépôt
});