// 注册顶部 form条件
const state = {
  userInfo: {}
}

const mutations = {
  setUserInfo (state, value) {
    state.userInfo = value
  }
}

const actions = {

}

const getters = {
  getUserInfo: (state) => {
    return state.userInfo
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
