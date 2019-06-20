import Vue from 'vue'
import Wrap from '@/components/Wrap.vue'
import 'amfe-flexible' // rem自适应布局
import * as filters from '@/filters'

Vue.config.productionTip = false
// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 生成vue实例的函数
export default function(config = {}, el = '#app') {
  const defaultConfig = {
    data: {
      BASE_URL: process.env.BASE_URL
    },
    render: h => h(Wrap)
  }
  new Vue({
    ...defaultConfig,
    ...config
  }).$mount(el)
}
