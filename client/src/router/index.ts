import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import RealTime from '../views/RealTime.vue'
import RealTimeRouter from '../views/realTimeRouter/RealTimeRouter.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'RealTime',
    component: RealTime
  },
  {
    path: '/realTimeRouter',
    name: 'realTimeRouter',
    component: RealTimeRouter,
    children: [
      {
        path: '',
        name: 'info',
        component: () => import(`../views/realTimeRouter/Info.vue`)
      },
      {
        path: 'history',
        name: 'history',
        component: () => import(`../views/realTimeRouter/History.vue`)
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
