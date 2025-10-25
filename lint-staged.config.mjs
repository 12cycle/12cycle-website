/** @type {import('lint-staged').Config} */
const config = {
  '*.{ts,tsx,js,jsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,css,md,html}': ['prettier --write'],
}

export default config
