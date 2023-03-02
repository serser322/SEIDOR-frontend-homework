module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-standard'
  ],
  overrides: [
    {
      files: ['*.html'],
      processor: 'vue/.vue'
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
  },
  parser: 'vue-eslint-parser'
}
