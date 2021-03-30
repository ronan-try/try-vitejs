import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import visualizer from 'rollup-plugin-visualizer'
import analyze from 'rollup-plugin-analyzer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // analyze(),
    visualizer()
  ],
  // rollupOptions: {
  //   plugins: [
  //     analyze(),
  //     visualizer()
  //   ],
  // },
})
