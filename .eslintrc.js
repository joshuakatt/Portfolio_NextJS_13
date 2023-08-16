module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/no-unescaped-entities': 0,
    'eslintreact/no-danger': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-first-prop-new-line': 0,
    'no-console': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-nested-ternary': 0,
    'consistent-return': 0,
    'no-alert': 0,
    'react/jsx-no-constructed-context-values': 0,
    'import/extensions': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-multiple-empty-lines': 0,
    'no-trailing-spaces': 0,
    'import/newline-after-import': 0,
    'no-template-curly-in-string': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'no-unused-vars': 'off', // Add this line to suppress unused variables
    'react/jsx-tag-spacing': 'off', // Add this line to suppress tag spacing warnings
    'no-multiple-empty-lines': 'off', // Add this line to suppress multiple empty lines warning
    'object-curly-spacing': 'off', // Add this line to suppress object curly spacing warnings
    'semi': 'off', // Add this line to suppress semicolon warnings
    'react/jsx-curly-brace-presence': 'off', // Add this line to suppress curly brace presence warnings
    'react/jsx-closing-bracket-location': 'off', // Add this line to suppress closing bracket location warnings
    'react/jsx-indent': 'off', // Add this line to suppress JSX indent warnings
    'jsx-quotes': 'off', // Add this line to suppress JSX quotes warnings
    'react/jsx-closing-tag-location': 'off', // Add this line to suppress closing tag location warnings
    'react/jsx-equals-spacing': 'off', // Add this line to suppress equals spacing warnings
    'eol-last': 'off', // Add this line to suppress end of line warning

    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'max-len': [
      2,
      1050,
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_d',
          '_dh',
          '_h',
          '_id',
          '_m',
          '_n',
          '_t',
          '_text',
        ],
      },
    ],
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [
          'Link',
        ],
        specialLink: [
          'to',
          'hrefLeft',
          'hrefRight',
        ],
        aspects: [
          'noHref',
          'invalidHref',
          'preferButton',
        ],
      },
    ],
  },
};
