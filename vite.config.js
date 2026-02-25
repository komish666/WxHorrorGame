import { defineConfig } from 'vite' // 必须加上这一行
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/'  // 在 Vercel 部署建议用 '/'
})
