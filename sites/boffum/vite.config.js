import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 8001,
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
