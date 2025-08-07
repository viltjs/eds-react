import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { sync } from 'glob';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
  },
  esbuild: { legalComments: 'none' },
  build: {
    emptyOutDir: false,
    lib: {
      formats: ['es'],
      fileName: (format, name) => `${name}.js`,
      entry: {
        main: path.resolve(__dirname, 'src/app/main.tsx'),
        ...Object.fromEntries(sync('src/scripts/*.js').map(file => [path.basename(file, path.extname(file)), file])),
      },
    },
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.originalFileNames.includes('style.css')) return 'assets/style.css'
          return 'assets/[name].[ext]'
        },
        manualChunks: (id) => {
          if (id.includes('LazyComponent')) return 'lazy-component'
        },
      },
    },
  },
}));
