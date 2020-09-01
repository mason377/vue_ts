module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "@vue/prettier",
    "@vue/typescript"
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        eslintIntegration: true,
        semi: false,
        endOfLine: "auto",
        tabWidth: 2,
        useTabs: false,
        arrowParens: "avoid",
        jsxBracketSameLine: true,
        singleQuote: false
      }
    ],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    semi: 0, // 分号不必须
    quotes: 0, // 引号可以上单引号也可以双引号
    camelcase: 0, // 不需要驼峰
    "no-undef": 0, // define
    "no-return-assign": 0, // 允许在return中执行任务
    "no-extend-native": 0, // 允许挂载prototype
    "no-prototype-builtins": 0, // 允许访问原型链
    "no-tabs": 0,
    indent: 0,
    "space-before-function-paren": 0,
    "handle-callback-err": 0, // 对错误会调允许滞空处理
    eqeqeq: 2, // 强制3等号
    "no-unused-vars": 0, // 定义了允许不使用
    "no-empty": 0 // 对空代码块发出警告，不报错
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
}
