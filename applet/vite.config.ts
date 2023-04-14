import { defineConfig } from 'vite';
import { resolve } from 'path';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    checker({
      typescript: true,
    }),
  ],
  root: './demo',
});
