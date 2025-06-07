import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
      'prettier': prettierPlugin,
    },
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
      'prettier/prettier': 'error',
    },
  }
);
