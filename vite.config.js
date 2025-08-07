import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { sync } from 'glob';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
  build: {
    emptyOutDir: false,
    lib: {
      formats: ['es'],
      entry: [path.resolve(__dirname, 'src/app/main.jsx'), ...sync('src/scripts/*.js')],
      fileName: (format, name) => `${name}.js`,
    },
  },
}));
