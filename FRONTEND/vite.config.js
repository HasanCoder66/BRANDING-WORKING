import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the limit as needed
  },
  output: {
    chunkSizeWarningLimit: 1000, // Adjust the limit as needed
  },

  plugins: [react()],
})
