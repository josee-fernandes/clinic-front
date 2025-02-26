import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: [
      '@rocketseat/eslint-config/next',
      'next/core-web-vitals',
      'plugin:react-hooks/recommended',
      'plugin:tailwindcss/recommended',
    ],
    plugins: ['simple-import-sort'],
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/no-absolute-path': 'off',
      'tailwindcss/no-custom-classname': 'off',
    },
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    ignorePatterns: ['.next', '.eslintrc.json', '.prettierrc'],
  }),
]

export default eslintConfig
