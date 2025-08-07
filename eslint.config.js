import globals from 'globals'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import jsonPlugin from 'eslint-plugin-json'
import xwalkPlugin from 'eslint-plugin-xwalk'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
  {
    ignores: ['dist', 'public'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended, {
    files: ['**/*.{js,jsx,ts,tsx,mjs}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        allowImportExportEverywhere: true,
        requireConfigFile: false,
      },
    },
    plugins: {
      'json': jsonPlugin,
      'xwalk': xwalkPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      ...jsonPlugin.configs.recommended.rules,
      ...xwalkPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'off',
      'no-param-reassign': [2, { props: false }],
      'linebreak-style': 'off',
      semi: 'off',
    },
  }]
