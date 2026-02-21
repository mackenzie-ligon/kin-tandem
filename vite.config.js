import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url))
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'src/html/blog.html'),
        tall_horse: resolve(__dirname, 'src/html/tall_horse.html'),
        presskit: resolve(__dirname, 'src/html/presskit.html'),
      },
    },
  },
})
