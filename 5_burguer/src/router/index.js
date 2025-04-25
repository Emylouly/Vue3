import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: () => import(/* webpackChunkName: "pedidos" */ '../views/Pedidos.vue')
  },
  {
    path: '/desenhos',
    name: 'desenhos',
    component: () => import(/* webpackChunkName: "desenhos" */ '../views/Desenhos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
