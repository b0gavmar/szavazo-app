import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/SzavazoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/eredmeny',
      name: 'eredmeny',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EredmenyView.vue'),
    },
    {
      path: '/szavazo',
      name: 'szavazo',
      component: () => import('../views/SzavazoView.vue'),
    },
  ],
})

export default router
