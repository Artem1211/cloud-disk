module.exports = {
  plugins: ['react', '@typescript-eslint', 'prettier', 'import'],
  extends: [
    // 'airbnb-typescript/base', // чет багает
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    // 'prettier',
    // 'prettier/@typescript-eslint', // не знаю установлен или нет
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  // overrides: [
  //   {
  //     files: ['*.jsx', '*.js'],
  //   },
  // ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    'no-debugger': 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'react/prop-types': 'off',
    'import/prefer-default-export': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-alert': 0, // позже выпилить
    'import/no-unresolved': 'off',
    // 'import/extensions': 'off',
    'no-use-before-define': 0, // React import
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
  },
}
