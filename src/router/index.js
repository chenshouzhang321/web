import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/views/layout/main.vue'

const BasicInformation = () => import('@/views/ImCollection/BasicInformation')
const Basic = () => import('@/views/ImCollection/index')
const ExcellentsupportIndex = () => import('@/views/Workbenches/ExcellentsupportIndex')
const Excellentsupport = () => import('@/views/Workbenches/Excellentsupport')
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
          name: '信息采集'
        },
        {
          path: 'basic',
          component: Basic,
          name: '基本信息'
        }
      ]
    },
    {
      path: '/workbenches',
      name: '业务工作平台',
      component: MainLayout,
      children: [
        {
          path: 'excellentSupport',
          component: ExcellentsupportIndex,
          name: '优扶'
        },
        {
          path: 'excellentSupportDetail',
          component: Excellentsupport,
          name: '申请优扶'
        }
      ]
    }
  ]
})
