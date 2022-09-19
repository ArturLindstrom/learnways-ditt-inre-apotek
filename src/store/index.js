import { createStore } from 'vuex'

export default createStore({
  state: {
    showNav: true,
  },
  getters: {
  },
  mutations: {
    toggleNav(state) {
      state.showNav = !state.showNav
    }
  },
  actions: {
  },
  modules: {
  }
})
