import { defineConfig } from 'vite';
import react from '@vitejs/react-refresh';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/vijayarangacinematicslate-web/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});
