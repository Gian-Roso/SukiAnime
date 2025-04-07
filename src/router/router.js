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
    path: '/Calendary',
    name: 'Calendary',
    component: CalendaryPage
  },
  {
    path: '/List',
    name: 'List Anime',
    component: List
  },
  {
    path: '/News',
    name: 'News',
    component: About
  },
  {
    path: '/About',
    name: 'About us',
    component: News
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
