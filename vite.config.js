import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Portfolio/', // 👈 this must be inside the config object
  plugins: [vue(), tailwindcss()]
})
