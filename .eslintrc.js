// eslint-disable-next-line no-undef
module.exports = {
  ...extendConfigs,
  parserOptions: {
    ...extendConfigs.parserOptions,
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    'jsdoc/require-param-type': [0],
    'jsdoc/require-returns': [0],
    '@typescript-eslint/no-unsafe-assignment': [0],
    '@typescript-eslint/no-floating-promises': [1],
    '@typescript-eslint/ban-ts-comment': [0],
    '@typescript-eslint/no-unsafe-call': [1],
    'import/prefer-default-export': [0],
    'promise/always-return': [0],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
};
