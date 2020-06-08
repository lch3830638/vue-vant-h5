## vue 多页应用

基于 vue-cli 的多页脚手架，项目使用 vue+vant 来开发移动端多页应用

## 项目准备

项目默认使用 vscode 开发，vscode 插件安装和配置如下：

### 插件安装

- Vetur,代码高亮，提示，格式化等功能
- ESLint，对团队 js 代码进行检查
- stylelint，对团队 样式 代码进行检查

### 配置

位置 文件 -> 首选项 -> 设置右上角“{}” -> settings.json
在 json 文件中添加如下配置即可

```
  "editor.tabSize": 2, //制表符符号eslint
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false, //让函数(名)和后面的括号之间加个空格
  "vetur.format.defaultFormatter.html": "js-beautify-html", //格式化.vue中html
  "vetur.format.defaultFormatter.js": "vscode-typescript", //让vue中的js按编辑器自带的ts格式进行格式化
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true,
  }
```

## 开发事项

- 多页中的页面跳转可以使用this.$root.BASE_URL(对应项目的publicPath)加上页面地址(如：'${this.$root.BASE_URL}page2.html')
- 对 ajax 请求进行了统一封装，详见 src/utils/request,文件中注释部分需要根据自身调整
- 页面全部放在 src/pages 下，新建文件后要在 vue.config.js 文件中的 pages 选项中对应添加。page1 为普通页面，page2 实际上有两个页面，使用单页面
- 接口统一放在 src/apis 下，与 src/pages 一一对应，公共的接口可新建一个 common.js 存放
- src/filters 全局过滤器，src/mixins 混入文件，src/directives 全局指令
- src/components 全局公共组件，页面的私有组件推荐放在页面文件夹下
- 由于是多页面，在 utils/genRouter 文件中注册 router 的一些公共配置，在 utils/genVue 中注册 vue 实例和一些公共配置，私有配置可在页面的 main.js 中配置
- mock 文件夹下为 mock 数据，项目开发 npm run dev 启动，默认使用 mock，如需进行联调，则可使用 npm run dev:no-mock 来禁用 mock,需在 vue.config.js 中配置要代理的地址
