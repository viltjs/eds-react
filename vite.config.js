// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.jsx'),
      name: 'ReactBlocks',
      formats: ['umd'],
      fileName: (format) => `react-blocks.${format}.js`,
    },
  },
});
