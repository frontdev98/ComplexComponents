import { defineConfig } from 'vite'
import 'process'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  base: '/React-18/',

  server: {
    host: '0.0.0.0',
    port: 5173,
    open: 'index.html'
  },

  preview: {
    host: '0.0.0.0',
    port: '8080',
    strictPort: true,
  }
})
