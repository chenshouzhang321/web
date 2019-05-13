import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/views/layout/main.vue'

const BasicInformation = () => import('@/views/ImCollection/BasicInformation')
const Basic = () => import('@/views/ImCollection/index')
const ExcellentsupportIndex = () => import('@/views/Workbenches/ExcellentsupportIndex')
const Excellentsupport = () => import('@/views/Workbenches/Excellentsupport')
const InsuranceconnectionIndex = () => import('@/views/Workbenches/InsuranceconnectionIndex')
const Insuranceconnection = () => import('@/views/Workbenches/Insuranceconnection')
const ServiceCenter = () => import('@/views/Workbenches/index')
const Search = () => import('@/views/Statisticalplatform/Search')
const Home = () => import('@/views/Home/Home')
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
        },
        {
          path: '/home',
          name: '主页',
          component: Home
        },
      ]
    },
    {
      path: '/workbenches',
      name: '业务工作平台',
      component: MainLayout,
      children: [
        {
          path: 'serviceCenter',
          component: ServiceCenter,
          name: '服务中心站'

        },
        {
          path: 'excellentSupport',
          component: ExcellentsupportIndex,
          name: '优扶'
        },
        {
          path: 'excellentSupportDetail',
          component: Excellentsupport,
          name: '申请优扶'
        },
        {
          path: 'insuranceconnection',
          component: InsuranceconnectionIndex,
          name: '保险接续'
        },
        {
          path: 'insuranceconnectionDetail',
          component: Insuranceconnection,
          name: '申请保险接续'
        }
      ]
    },
    {
      path: '/statisticalplatform',
      name: '统计查询平台',
      component: MainLayout,
      children: [
        {
          path: 'search',
          component: Search,
          name: '查询'
        }
      ]
    }
  ]
})
