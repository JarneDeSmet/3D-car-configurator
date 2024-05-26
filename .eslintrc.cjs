module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: ["eslint:recommended", "plugin:@typescript-eslint/eslint-recommended", "plugin:@typescript-eslint/recommended", "prettier",],
    ignorePatterns: ['dist'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: "latest", sourceType: "module", project: "./tsconfig.json",
    },
    plugins: ['react-refresh', "@typescript-eslint", "react-hooks", "import", "jsx-a11y", "react"],
    settings: {
        react: {version: "detect"},
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
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
        "@typescript-eslint/no-unused-vars": ["error", {
            "argsIgnorePattern": "^_", "ignoreRestSiblings": true
        }],
        "import/order": ["warn"],
        "no-console": ["error", {
            "allow": ["warn", "error"]
        }],
        "react/jsx-boolean-value": "warn",
        "react/jsx-curly-brace-presence": "warn",
        "react/jsx-key": "warn",
        "react/no-array-index-key": "warn",
        "react/prefer-stateless-function": "warn",
        "react/self-closing-comp": "warn",
        "react-hooks/rules-of-hooks": "error",
        indent: 0
    },
}
