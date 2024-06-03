import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      components: '/src/components',
      helpers: '/src/helpers',
      pages: '/src/pages',
      hooks: '/src/hooks',
    },
  },
});
