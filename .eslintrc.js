module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'linebreak-style': 'off',
    'max-classes-per-file': 'off',
    'max-len': [
      'error',
      {
        code: 130,
        tabWidth: 4,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'multiline-comment-style': [
      'error',
      'starred-block',
    ],
    'no-array-constructor': 'error',
    'no-new-object': 'error',
    'no-prototype-builtins': 'off',
    'no-tabs': 'error',
    'vue/attribute-hyphenation': [
      'error',
      'always',
    ],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
      },
    ],
    'vue/multi-word-component-names': 'off',
    'no-trailing-spaces': 'error',
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: [],
      },
    ],
  },
};
