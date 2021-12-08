// 按需引入Element组件，减少打包后的项目文件体积
import Vue from 'vue'
import { Button, Message } from 'element-ui'

Vue.use(Button)

// Message需要特殊安装
Message.install = function (Vue, options) {
  Vue.prototype.$message = Message
}
Vue.use(Message)
