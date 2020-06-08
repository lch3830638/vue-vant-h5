import Vue from 'vue'
import Wrap from '@/components/Wrap'
import 'amfe-flexible' // rem自适应布局
import * as filters from '@/filters'
import * as directives from '@/directives'
import 'normalize.css/normalize.css' // 使用normalize.css来reset
import '@/styles/index.less'

Vue.config.productionTip = false
// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// 注册全局指令
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})

// 生成vue实例的函数
export default function({
  data, ...restConfig
}, el = '#app') {
  const defaultConfig = {
    data: {
      BASE_URL: process.env.BASE_URL,
      ...data,
    },
    render: h => h(Wrap),
  }
  new Vue({
    ...defaultConfig,
    ...restConfig,
  }).$mount(el)
}
