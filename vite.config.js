import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/VITE-page-test/', // Set for gh-pages
  plugins: [vue()]
})
