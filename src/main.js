import 'components/global/register'
import VConsole from 'vconsole'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'components/vant/register'

const consoleSwitch = false // 是否开发环境开启调试工具
Vue.config.productionTip = false

// 开发环境调试工具
if (process.env.NODE_ENV === 'development' && consoleSwitch) {
  const vConsole = new VConsole()
  Vue.use(vConsole)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
