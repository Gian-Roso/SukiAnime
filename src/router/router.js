import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/view/pages/Home.vue' // ajusta se teu path for outro
import CalendaryPage from '@/view/pages/CalendaryPage.vue'
import About from '@/view/pages/About.vue'
import News from '@/view/pages/News.vue'
import List from '@/view/pages/List.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/calendary',
    name: 'Calendary',
    component: CalendaryPage
  },
  {
    path: '/list',
    name: 'List Anime',
    component: List
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
