https://www.bilibili.com/video/BV1Eh4y1k7rd
2:06:00

Node 14.16.1
Npm 6.14.12

##### 添加代码提交格式化
1. 安装依赖
```bash
npm install --save lint-staged prettier -D
```

2. 创建git提交格式化`package.json`
```json
"gitHooks":{
  "pre-commit":"lint-staged"
},
"lint-staged":{
  "src/**":[
    "prettier --config .prettierrc.js --write",
    "git add"
  ]
},
```

3. 在项目根目录下创建 prettier 配置文件 .prettierrc.js
```js
module.exports = {
  singleQuote: true, // 字符串使用单引号
  semi: false, // 每行末尾自动添加分号
  tabWidth: 2, // tab缩进大小,默认为2
  useTabs: false, // 使用tab缩进，默认false
  // 对象中打印空格 默认true
  // true: { foo: bar }
  // false: {foo: bar}
  bracketSpacing: true,
  // 箭头函数参数括号 默认avoid 可选 avoid| always
  // avoid 能省略括号的时候就省略 例如x => x
  // always 总是有括号
  arrowParens: 'avoid',
  // 换行长度，默认80
  printWidth: 80,

  // 设置为true时,将多行JSX元素的 > 放在最后一行的末尾，而不是单独放在下一行
  /* 
    <button
       className="prettier-class"
       id="prettier-id"
       onClick={this.handleClick}>
       Click Here
    </button> 
     */
  // 设置为false时
  /*
    <button
        className="prettier-class"
        id="prettier-id"
        onClick={this.handleClick}
    >
        Click Here
    </button>
     */
  jsxBracketSameLine: true
};
```