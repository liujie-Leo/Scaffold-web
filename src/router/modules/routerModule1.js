const router = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('views/Home.vue'),
    meta: {
      keepAlive: true
    }
  }
]
export default router
