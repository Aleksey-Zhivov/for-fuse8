import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/for-fuse8/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});