import { defineConfig } from 'vite'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'

const __dirname = dirname(fileURLToPath(import.meta.url))
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'src/public',
  assetsInclude: ['**/*.zip'],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        about_us: resolve(__dirname, 'about-us/index.html'),
        presskit: resolve(__dirname, 'presskit/index.html'),
      },
    },
  },
})
