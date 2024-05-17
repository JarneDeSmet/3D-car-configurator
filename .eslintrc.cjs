module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: ["marlon/typescript", "prettier"],
    ignorePatterns: ['dist'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: "latest", sourceType: "module", project: "./tsconfig.json",
    },
    plugins: ['react-refresh', "@typescript-eslint"],
    rules: {
        "react/no-unknown-property": "off",
        "react/function-component-definition": [2, {
            namedComponents: "arrow-function", unnamedComponents: "arrow-function",
        },],
        quotes: ["error", "double", {allowTemplateLiterals: true, avoidEscape: true}],
        "id-length": ["warn", {
            min: 3, max: 50, properties: "never", exceptions: ["_", "$", "id", "a", "b"],
        },],
        "import/extensions": ["error", "ignorePackages", {
            js: "never", jsx: "never", ts: "never", tsx: "never",
        },],
        "css-modules/no-unused-class": "off",
        "jsx-a11y/label-has-associated-control": "warn",
        "@typescript-eslint/explicit-module-boundary-types": ["error", {
            allowHigherOrderFunctions: true, allowTypedFunctionExpressions: true,
        },],
        "@typescript-eslint/restrict-template-expressions": ["error", {allowNumber: true}],
    },
}
