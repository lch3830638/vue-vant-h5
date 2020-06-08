// import Vue from 'vue'
import routes from './routes'
import genRouter from '@/utils/genRouter'
import genVue from '@/utils/genVue'

genVue({
  router: genRouter({
    routes,
  }),
})
