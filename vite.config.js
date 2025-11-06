import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { createHtmlPlugin } from 'vite-plugin-html'


export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          injectPreload: process.env.NODE_ENV === 'production' ? `
            <link rel="preload" href="./assets/index-mLQ2UMiW.css" as="style">
            <link rel="preload" href="./assets/index-W1so9fXU.js" as="script">
          ` : ''
        }
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
