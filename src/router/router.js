import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/View/Pages/Home.vue' // ajusta se teu path for outro

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
