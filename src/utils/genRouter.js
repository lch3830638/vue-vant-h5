import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 生成路由的函数
export default function(config = {}) {
  const defaultConfig = {
    base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  }
  const router = new Router({
    ...defaultConfig,
    ...config
  })

  router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
  })
  return router
}
