module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
  plugins: [
    'stylelint-order',
    'stylelint-config-rational-order/plugin',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  customSyntax: 'postcss-less',
  // null(to turn the rule off)
  rules: {
    'comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'function-name-case': 'lower',
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'rule-empty-line-before': 'always',
    'plugin/declaration-block-no-ignored-properties': true,
  },
  ignoreFiles: ['node_modules/**/*', 'build/**/*', 'dist/**/*'],
};
