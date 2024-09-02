// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   build: {
//     chunkSizeWarningLimit: 1000, // Adjust the limit as needed
//   },
//   output: {
//     chunkSizeWarningLimit: 1000, // Adjust the limit as needed
//   },

//   plugins: [react()],
// })





import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8500,
    proxy: {
      "/api": {
        target: "http://localhost:6000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
    },
  },
});
