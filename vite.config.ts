import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: use the repository name as base path
  // Set VITE_BASE_PATH environment variable or it will default to '/'
  base: process.env.VITE_BASE_PATH || (process.env.GITHUB_PAGES === 'true' ? '/m4-softwares/' : '/'),
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
