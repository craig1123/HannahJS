module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
  },
  rules: {
    'eol-last': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/newline-after-import': 'off',
    'import/extensions': 0,
    'import/prefer-default-export': 'off',
    'global-require': 'off',
    'react/require-default-props': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-filename-extension': [0],
    'no-use-before-define': ["error", { "functions": false, "classes": false, "variables": false }],
    "react/forbid-prop-types": [0],
    "react/prefer-stateless-function": [1, { "ignorePureComponents": true }],
    "jsx-a11y/href-no-hash": 'off'
  },
};
