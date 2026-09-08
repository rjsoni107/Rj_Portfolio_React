import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    host: '0.0.0.0',
    outDir: "dist",
    port: 5173,
    open: true
  },
})
