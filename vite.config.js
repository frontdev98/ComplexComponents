import { defineConfig } from 'vite'
import 'process'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  base: '/ComplexComponents/',

  server: {
    host: '0.0.0.0',
    port: 5173,
  },

  preview: {
    host: '0.0.0.0',
    port: '8080',
    strictPort: true,
  }
})
