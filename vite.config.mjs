import { defineConfig } from 'vite' // 必须加上这一行
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/' 
})
