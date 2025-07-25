import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression2'

export default defineConfig({
  plugins: [viteReact(), compression({ algorithms: ['gzip'] })],
  build: {},
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
