module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
      experimentalObjectRestSpread: true,
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  plugins: [
    'eslint-plugin-html',
    // 'eslint-plugin-import'
  ],
  settings: {
    'html/html-extensions': ['.html', '.vue'],
    "html/indent": "+2"
  },
  globals: {
    //
    "Analytics": true,
    "LXAnalytics": true,
    "Swiper": true
  },
  rules: {
    // 'import/prefer-default-export': 'off'
    /********************************************************************************
     CORE: Possible Errors
    ********************************************************************************/
    'no-console': 'off', // 关闭console的输出检查


    /********************************************************************************
     CORE: Best Practices
    ********************************************************************************/
    // 'array-callback-return': 'error', // checked

    'no-useless-escape': 'error',

    'wrap-iife': [ // checked
      'error',
      'outside',
      {
        functionPrototypeMethods: false
      }
    ],

    'no-loop-func': 'error', // checked

    'no-new-func': 'error', // checked

    'no-param-reassign': ['error', { // checked
      props: true
    }],

    'no-iterator': 'error',

    'dot-notation': [
      'error',
      {
        allowKeywords: true
      }
    ],

    // http://eslint.org/docs/rules/eqeqeq
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],

    'no-case-declarations': 'error',

    // radix: 'error',


    /********************************************************************************
     CORE: Strict Mode
    ********************************************************************************/

    strict: 'off',


    /********************************************************************************
     CORE: Variables
    ********************************************************************************/

    // 'no-use-before-define': ['error', {
    //   functions: true,
    //   classes: true,
    //   variables: true
    // }],
    'no-use-before-define': [
      'error',
      {
        // 禁止定义前使用
        functions: false,
        classes: false
      }
    ],

    'no-undef': 'error',


    /********************************************************************************
     CORE: Node.js and CommonJS
    ********************************************************************************/
    'global-require': ['off'], // 强制在模块顶部调用 require()


    /********************************************************************************
     CORE: Stylistic Issues
    ********************************************************************************/

    'no-new-object': 'error', // checked

    'no-array-constructor': 'error', // checked

    'quote-props': [ // checked
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false
      }
    ],

    quotes: [ // checked
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],

    'func-style': ['error', 'declaration'], // checked

    // 'space-before-function-paren': ['error', {  // checked
    //   anonymous: 'always',
    //   named: 'never',
    //   asyncArrow: 'always'
    // }],
    'space-before-function-paren': [  // checked
      'error',
      {
        // 要求或禁止函数圆括号之前有一个空格
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always'
      }
    ],

    'space-before-blocks': 'error', // checked

    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],

    // 'one-var': ['error', 'never'],

    // 'no-plusplus': 'error',
    'no-plusplus': 'off', // 关闭++的写法校验

    'no-nested-ternary': 'error',

    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false
      }
    ],

    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],

    indent: ['off'],

    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: {
            after: true
          },
          throw: {
            after: true
          },
          case: {
            after: true
          }
        }
      }
    ],

    'space-infix-ops': 'error',

    'eol-last': ['error', 'always'],

    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 4
      }
    ],

    'no-whitespace-before-property': 'error',

    'padded-blocks': ['error', 'never'],

    'space-in-parens': ['error', 'never'],

    'array-bracket-spacing': ['error', 'never'],

    'object-curly-spacing': ['error', 'always'],

    'max-len': [ // checked，排除了一些例外
      'error',
      120,
      4,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ],

    'comma-style': ['error', 'last'],

    'comma-dangle': ['error', 'never'], // 要求或禁止使用拖尾逗号

    semi: ['error', 'always'],
    // semi: ['error', 'never'], // 要求或禁止使用分号代替 ASI

    camelcase: [
      'error',
      {
        properties: 'never'
      }
    ],

    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List']
      }
    ],

    // 'no-underscore-dangle': ['error', {
    //   allowAfterThis: false
    // }],

    'no-underscore-dangle': ['off'],

    /********************************************************************************
     CORE: ECMAScript 6
    ********************************************************************************/
    'no-var': 'error', // checked

    'prefer-const': [ // checked
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false
      }
    ],

    'object-shorthand': [ // checked
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true
      }
    ],

    'prefer-template': 'error', // checked

    'template-curly-spacing': 'error', // checked

    'prefer-rest-params': 'error', // checked

    'prefer-spread': 'error', // checked

    'prefer-arrow-callback': [ // checked
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],

    'arrow-spacing': [ // checked
      'error',
      {
        before: true,
        after: true
      }
    ],

    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false
      }
    ],

    'arrow-parens': [ // checked
      'error',
      'as-needed',
      {
        // requireForBlockBody: true,
      }
    ],

    'no-confusing-arrow': [
      'error',
      {
        allowParens: true
      }
    ],

    'no-useless-constructor': 'error',

    'no-dupe-class-members': 'error',

    'no-duplicate-imports': 'off',

    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ]
  }
}
