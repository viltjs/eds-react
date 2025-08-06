import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/main.jsx'),
      name: 'React',
      formats: ['umd'],
      fileName: () => 'react.js',
    },
  },
}));
