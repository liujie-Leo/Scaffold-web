const router = [
  {
    path: '/about',
    name: 'About',
    component: () => import('views/About.vue'),
    meta: {}
  }
]
export default router
