// eslintrc.cjs

module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    parser: '@typescript-eslint/parser', // Use this if you use TypeScript
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: [
      'react',
      '@typescript-eslint',
      'prettier',
    ],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'next/core-web-vitals' // only if using Next.js
    ],
    rules: {
      // Custom rules
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off', // Not needed for Next.js/React 17+
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  