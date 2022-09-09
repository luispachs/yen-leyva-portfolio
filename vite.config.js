import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root:"./",
  base:"/",
  publicDir:"src",
  build:{
    outDir:"build",
    assetsDir:"src"
  },
  plugins: [react()],
  
})
