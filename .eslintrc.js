module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  globals: {
    SERVER_ADDRESS: true,
  },
  extends: [
    'plugin:vue/recommended',
    'standard',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'vue/attribute-hyphenation': 0,
    'vue/component-name-in-template-casing': 0,
    'vue/no-unused-components': 0,
    'vue/no-use-v-if-with-v-for': 0,
    'vue/no-parsing-error': 0,
    'standard/no-callback-literal': 0,
    'vue/no-reserved-keys': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'generator-star-spacing': 'off',
    'object-curly-newline': ['error', {
      ObjectExpression: {
        multiline: true,
        minProperties: 1,
      },
      ObjectPattern: {
        multiline: true,
        minProperties: 3,
      },
      ImportDeclaration: {
        multiline: true,
        minProperties: 4,
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 1,
      },
    },
    ],
    'object-property-newline': ['error', {
      allowMultiplePropertiesPerLine: false,
    }],
    'no-mixed-operators': 0,
    'no-new': 0,
    'no-console': 1,
    'no-tabs': 0,
    'no-var': 2,
    'no-delete-var': 2,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: [
      2,
      'never',
      {
        beforeStatementContinuationChars: 'never',
      },
    ],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'never',
    }],
    'prefer-const': [
      2,
      {
        ignoreReadBeforeAssign: false,
      },
    ],
  },
}
