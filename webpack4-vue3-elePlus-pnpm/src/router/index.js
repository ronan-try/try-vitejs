import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const dynamicImport = (fileName) => import('../views/' + fileName + '.vue')

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
    path: '/xlsx',
    name: 'Xlsx',
    component: () => dynamicImport('Xlsx')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
