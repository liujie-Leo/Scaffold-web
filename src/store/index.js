import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {}

const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((subs, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  subs[moduleName] = value.default
  return subs
}, {})

const store = new Vuex.Store({
  modules,
  state
})

export default store
