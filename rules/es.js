module.exports = {
  "no-cond-assign": [2, "always"],
  "no-console": [2, { "allow": ["warn", "error"] }],
  "no-debugger": 2,
  "no-empty": [2, { "allowEmptyCatch": true }],
  "require-atomic-updates": 0,
  "array-callback-return": 2,
  "block-scoped-var": 2,
  "curly": 2,
  "dot-location": [2, "property"],
  "dot-notation": [2, { "allowKeywords": true }],
  "eqeqeq": 2,
  "guard-for-in": 0,
  "max-classes-per-file": 0,
  "no-alert": 2,
  "no-caller": 2,
  "no-else-return": 2,
  "no-empty-function": [2, { "allow": ["functions", "arrowFunctions", "methods"] }],
  "no-eq-null": 2,
  "no-eval": 2,
  "no-extend-native": 2,
  "no-extra-bind": 2,
  "no-extra-label": 2,
  "no-floating-decimal": 2,
  "no-implicit-coercion": 0,
  "no-implicit-globals": 2,
  "no-implied-eval": 2,
  "no-iterator": 2,
  "no-labels": 2,
  "no-lone-blocks": 2,
  "no-loop-func": 2,
  "no-multi-spaces": 2,
  "no-multi-str": 2,
  "no-new": 2,
  "no-new-func": 2,
  "no-new-wrappers": 2,
  "no-octal-escape": 2,
  "no-param-reassign": [2, { "props": true }],
  "no-proto": 2,
  "no-return-assign": [2, "always"],
  "no-return-await": 2,
  "no-script-url": 2,
  "no-self-compare": 2,
  "no-sequences": 2,
  "no-throw-literal": 2,
  "no-unmodified-loop-condition": 2,
  "no-unused-expressions": [2, { "allowShortCircuit": true, "allowTernary": true, "allowTaggedTemplates": true }],
  "no-useless-call": 2,
  "no-useless-concat": 2,
  "no-useless-return": 2,
  "prefer-promise-reject-errors": [2, { "allowEmptyReject": true }],
  "radix": [2, "as-needed"],
  "require-await": 2,
  "vars-on-top": 2,
  "wrap-iife": [2, "inside", { "functionPrototypeMethods": true }],
  "no-label-var": 2,
  "no-shadow": 0,
  "no-undef": [2, { "typeof": true }],
  "no-unused-vars": [2, { "args": "none", "ignoreRestSiblings": true }],
  "no-use-before-define": [2, { "functions": false }],
  "array-bracket-newline": [2, "consistent"],
  "array-bracket-spacing": 2,
  "array-element-newline": [2, "consistent"],
  "block-spacing": 2,
  "brace-style": [2, "1tbs", { "allowSingleLine": true }],
  "camelcase": 2,
  "comma-dangle": 2,
  "comma-spacing": 2,
  "comma-style": 2,
  "computed-property-spacing": 2,
  "eol-last": 2,
  "func-call-spacing": 2,
  "func-name-matching": [2, "always", { "considerPropertyDescriptor": true }],
  "func-names": 0,
  "function-paren-newline": [2, "multiline-arguments"],
  "implicit-arrow-linebreak": 2,
  "indent": [2, 2, { "SwitchCase": 1 }],
  "jsx-quotes": [2, "prefer-single"],
  "key-spacing": 2,
  "keyword-spacing": 2,
  "line-comment-position": 2,
  "lines-between-class-members": 2,
  "max-statements-per-line": 2,
  "multiline-ternary": [2, "always-multiline"],
  "new-cap": [2, { "newIsCap": true, "capIsNew": false }],
  "new-parens": 2,
  "no-array-constructor": 2,
  "no-inline-comments": 2,
  "no-lonely-if": 2,
  "no-mixed-operators": 0,
  "no-mixed-spaces-and-tabs": 2,
  "no-multi-assign": 2,
  "no-multiple-empty-lines": [2, { "max": 1, "maxEOF": 1, "maxBOF": 0 }],
  "no-negated-condition": 2,
  "no-new-object": 2,
  "no-tabs": 2,
  "no-trailing-spaces": 2,
  "no-unneeded-ternary": 2,
  "no-whitespace-before-property": 2,
  "object-curly-newline": 2,
  "object-curly-spacing": [2, "always"],
  "object-property-newline": [2, { "allowAllPropertiesOnSameLine": true }],
  "one-var": 0,
  "one-var-declaration-per-line": 0,
  "operator-linebreak": [2, "none"],
  "padded-blocks": [2, "never"],
  "padding-line-between-statements": [
    2,
    { "blankLine": "always", "prev": ["cjs-import", "directive", "function", "import"], "next": "*" },
    { "blankLine": "any", "prev": ["cjs-import", "directive", "import"], "next": ["cjs-import", "directive", "import"] },
    { "blankLine": "any", "prev": "*", "next": ["cjs-export", "export"] },
    { "blankLine": "always", "prev": "class", "next": "class" }
  ],
  "quote-props": [2, "as-needed", { "keywords": true, "unnecessary": false, "numbers": false }],
  "quotes": [2, "single", { "avoidEscape": true }],
  "semi": [2, "never", { "beforeStatementContinuationChars": "always" }],
  "semi-spacing": 2,
  "semi-style": 2,
  "space-before-blocks": 2,
  "space-before-function-paren": [2, { "anonymous": "always", "named": "always", "asyncArrow": "always" }],
  "space-in-parens": 2,
  "space-infix-ops": 2,
  "space-unary-ops": [2, { "words": true, "nonwords": false }],
  "spaced-comment": [2, "always"],
  "switch-colon-spacing": 2,
  "template-tag-spacing": 2,
  "unicode-bom": 2,
  "arrow-body-style": 0,
  "arrow-parens": ["error", "as-needed"],
  "arrow-spacing": 2,
  "generator-star-spacing": 2,
  "no-confusing-arrow": 0,
  "no-duplicate-imports": 2,
  "no-useless-computed-key": 2,
  "no-useless-constructor": 2,
  "no-useless-rename": 2,
  "no-var": 2,
  "object-shorthand": 2,
  "prefer-arrow-callback": 2,
  "prefer-const": 0,
  "prefer-rest-params": 2,
  "prefer-spread": 2,
  "prefer-template": 2,
  "rest-spread-spacing": 2,
  "symbol-description": 2,
  "template-curly-spacing": 2,
  "yield-star-spacing": 2
}
