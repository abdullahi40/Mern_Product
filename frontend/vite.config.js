import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://mern-product-6ygk.onrender.com",
        // target: "https://mern-product-backend-rho.vercel.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
