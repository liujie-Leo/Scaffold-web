import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const isModifyTagName = false // 是否修改tab页标签为route.meta.title
const defaultTitle = 'Default Title' // 默认标签名
const routerMode = 'history' // 路由模式 history/hash

const modulesFiles = require.context('./modules', false, /\.js$/)
const modules = modulesFiles
  .keys()
  .map((fileName) => modulesFiles(fileName))
  .map((routeModule) => {
    const item = routeModule.default || routeModule
    item.forEach((module) => {
      module.path = `${module.path}`
    })
    return item
  })
  .reduce((modules, routeModule) => modules.concat(...routeModule), [])

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/404',
    name: 404,
    component: () => import('components/local/404')
  },
  ...modules
]

const router = new VueRouter({
  mode: routerMode,
  routes
})

router.beforeEach((to, from, next) => {
  if (isModifyTagName) {
    document.title = ''
    const title = to.meta.title || defaultTitle
    document.title = title
  }

  // 如果当前路由不存在，跳转至404页面
  if (!to.matched || to.matched.length <= 0) {
    next({
      path: '/404'
    })
  }

  next()
})

export default router
