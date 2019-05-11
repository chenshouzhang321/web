import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/views/layout/main.vue'

const BasicInformation = () => import('@/views/ImCollection/BasicInformation')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/imCollection',
      name: '信息采集平台',
      component: MainLayout,
      children: [
        {
          path: 'basicInformation',
          component: BasicInformation,
          name: '基本信息'
        }
      ]
    }
  ]
})
