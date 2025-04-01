import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // REPLACE WITH WHATEVER PORT YOU WANT /Alexis
    proxy: {
      '/api': {target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      } // REPLACE WITH WHATEVER PORT BACKEND IS USING /Alexis
    },
  },
});

// FRONTEND IS RUNNING ON PORT 5173
// BACKEND IS RUNNING ON PORT 3001