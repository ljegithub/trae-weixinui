import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/government',
      name: 'government',
      component: () => import('../views/government/index.vue')
    },
    {
      path: '/service',
      name: 'service',
      component: () => import('../views/service/index.vue')
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: () => import('../views/statistics/index.vue')
    }
  ]
})

export default router