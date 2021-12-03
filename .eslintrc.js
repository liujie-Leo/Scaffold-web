module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/base',
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars':'off',
    'no-unreachable':"off",
    'vue/no-parsing-error': ['error', { 'x-invalid-end-tag': false }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/require-prop-type-constructor': 'off',
    'vue/name-property-casing': 'off',
    'vue/max-attributes-per-line': ['error', {
      'singleline': 5,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
