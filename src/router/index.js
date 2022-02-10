import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import dayBookRouter from '../modules/daybook/router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/daybook',
    // component: () => import(/* webpackChunkName: "daybook" */ '../modules/daybook/layouts/DayBookLayout.vue')
    ...dayBookRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
