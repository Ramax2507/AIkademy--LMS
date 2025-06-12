import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
     // you can customize your dev server port
    open: true, // open browser automatically on server start
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      // Optional: handy alias for imports
      '@': '/src',
    },
  },
});
