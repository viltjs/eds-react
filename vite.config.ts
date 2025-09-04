import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts';
import path from 'path';
import { sync } from 'glob';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), dts({
    tsconfigPath: './tsconfig.app.json',
    insertTypesEntry: true,
    exclude: ["src/stories/*"]
  })],
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
        ...Object.fromEntries(sync('src/scripts/**/*.{js,jsx,ts,tsx}').map(file => [path.basename(file, path.extname(file)), file])),
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
          if (id.includes('components/Block/utils')) return 'block-utils'
          if (id.includes('LazyComponent')) return 'lazy-component'
        },
      },
    },
    watch: { include: ['src/**'] },
  },
  test: {
    projects: [{
      test: {
        name: 'default',
        environment: 'jsdom',
        globals: true,
        setupFiles: 'vitest.setup.ts',
      }
    }, {
      plugins: [
        storybookTest({ configDir: path.join(__dirname, '.storybook') }),
      ],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: 'playwright',
          instances: [{ browser: 'chromium' }]
        },
        setupFiles: ['.storybook/vitest.setup.ts'],
      },
    }]
  },
}));
