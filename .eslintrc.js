module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  ignorePatterns: ['public/*.js'],
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'plugin:cypress/recommended'
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
    'no-unused-vars': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          ['builtin'],
          ['external'],
          ['parent', 'internal', 'sibling', 'index', 'unknown']
        ]
      }
    ]
  },
  env: {
    jest: true,
    'cypress/globals': true
  },
  plugins: ['@typescript-eslint', 'jest', 'cypress', 'eslint-plugin-import']
}
