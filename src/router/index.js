import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/result',
      name:'result',
      component:() => import('../views/ResultView.vue'),
    },
    {
      path:'/detail',
      name:'detail',
      component:() => import('../views/DetailView.vue'),
    }
  ]
})

export default router
