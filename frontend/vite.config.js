import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
<<<<<<< HEAD
=======
        // target: "https://mern-product-6ygk.onrender.com",
>>>>>>> 9b8e336 (added backend package.json with type module)
        target: "https://mern-product-backend-rho.vercel.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
