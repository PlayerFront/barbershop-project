import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { createHtmlPlugin } from 'vite-plugin-html'


export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: injectData
      }
    })
  ],
  server: {
    host: true
  },
  base: './',
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          swiper: ['swiper', 'swiper/react']
        }
      }
    },
    sourcemap: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})
