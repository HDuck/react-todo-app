module.exports = {
  root: true,
  extends: ['react', 'airbnb', 'prettier', 'prettier/react'],
  rules: {
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: false }],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', 'jsx'],
      },
    ],
    'max-len': ['error', 80],
  },
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
