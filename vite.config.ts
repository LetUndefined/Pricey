import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Pricey/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
  },
}))
