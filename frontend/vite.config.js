import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
<<<<<<< HEAD
        target: "https://mern-product-6ygk.onrender.com",
=======
        target: "https://mern-product-backend-rho.vercel.app",
        changeOrigin: true,
        secure: false,
>>>>>>> c0bd42c9797da19d41b87e022e9bd64413ecc0b8
      },
    },
  },
});
