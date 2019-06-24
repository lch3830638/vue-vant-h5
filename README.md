## vue 多页应用

基于 vue-cli 的多页脚手架，项目使用 vue+vant 来开发移动端多页应用

## 项目准备

项目默认使用 vscode 开发，vscode 插件安装和配置如下：

### 插件安装

- Vetur,代码高亮，提示，格式化等功能
- ESLint，对团队 js 代码进行检查
- prettier-code formatter 统一代码格式化风格

### 配置

位置 文件 -> 首选项 -> 设置右上角“{}” -> settings.json
在 json 文件中添加如下配置即可

```
  "search.followSymlinks": false, //关闭rg.exe进程
  "editor.minimap.enabled": false, //关闭快速预览
  "files.autoSave": "afterDelay", //打开自动保存
  "editor.lineNumbers": "on", //开启行数提示
  "editor.quickSuggestions": {
    //开启自动显示建议
    "other": true,
    "comments": true,
    "strings": true
  },
  "editor.tabSize": 2, //制表符符号eslint
  "editor.formatOnSave": true, //每次保存自动格式化
  "eslint.autoFixOnSave": true, // 每次保存的时候将代码按eslint格式进行修复
  "prettier.eslintIntegration": true, //让prettier使用eslint的代码格式进行校验
  "prettier.semi": false, //去掉代码结尾的分号
  "prettier.jsxBracketSameLine": true, //将>多行JSX元素放在最后一行的末尾，而不是单独放在下一行
  "prettier.singleQuote": true, //使用带引号替代双引号
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false, //让函数(名)和后面的括号之间加个空格
  "vetur.format.defaultFormatter.html": "js-beautify-html", //格式化.vue中html
  "vetur.format.defaultFormatter.js": "vscode-typescript", //让vue中的js按编辑器自带的ts格式进行格式化
  "eslint.validate": [
    //开启对.vue文件中错误的检查
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ]
```

## 开发事项

- 服务器地址设置，项目利用 webpack.DefinePlugins 将服务器地址存于全局变量中，开发需根据自身调整。
- 对 ajax 请求进行了统一封装，详见 src/utils/request,文件中注释部分需要根据自身调整
- 页面全部放在 src/pages 下，新建文件后要在 vue.config.js 文件中的 pages 选项中对应添加。page1 为普通页面，page2 实际上有两个页面，使用单页面
- 接口统一放在 src/apis 下，与 src/pages 一一对应，公共的接口可新建一个的 js 文件
- src/filters 全局过滤器，src/mixins 混入文件，src/directives 全局指令
- src/components 全局公共组件，页面的私有组件推荐放在页面文件夹下
- 由于是多页面，在 utils/genRouter 文件中注册 router 的一些公共配置，在 utils/genVue 中注册 vue 实例和一些公共配置，私有配置可在页面的 main.js 中配置
