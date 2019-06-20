import Vue from 'vue'
import App from './App.vue'
import routes from './routes'
import genRouter from '@/utils/genRouter'

Vue.config.productionTip = false
const router = genRouter({ routes })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
