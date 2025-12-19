import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: use '/' for custom domains, or repository name for subdirectory
  // Set VITE_BASE_PATH environment variable or it will default to '/'
  base: process.env.VITE_BASE_PATH || '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
