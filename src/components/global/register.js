/**
 * 自动全局注册src/components/global文件夹中的.vue组件
 * 组件名来源：1、vue文件中定义的name属性；2、vue文件的文件名
 * 优先级：vue文件中定义的name属性 > vue文件的文件名
 */

import Vue from 'vue'
const path = require('path')
const componentsContext = require.context('./', false, /\.vue$/)
componentsContext.keys().forEach((component) => {
  const componentConfig = componentsContext(component)
  const ctrl = componentConfig.default || componentConfig
  if (!ctrl.name) ctrl.name = path.basename(component, '.vue')
  Vue.component(ctrl.name, ctrl)
})
