module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended', 'airbnb'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'no-console': 'off',
    },
};
