import { createStore } from 'vuex'
import data from '../assets/txtr.json'

export default createStore({
  state: {
    showNav: true,
    data: data
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
