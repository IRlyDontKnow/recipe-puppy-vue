module.exports = {
  root: true,
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    allowImportExportEverywhere: false,
  },
  rules: {
    indent: 'off',
    'no-console': 0,
    'no-param-reassign': 0,
    'arrow-body-style': 0,
    'arrow-parens': ['error', 'as-needed'],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 1,
        switchCase: 1,
      },
    ],
  },
};
