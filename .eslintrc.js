module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['jest'],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  root: true, // don't look in ancestor directories for other eslint configs
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
};
