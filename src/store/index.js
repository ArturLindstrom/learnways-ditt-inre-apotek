import { createStore } from 'vuex'
import data from '../assets/txtr.json'

export default createStore({
  state: {
    data: data,
    showNav: true,
    modalShown: false,
    modalContentShown: false,
    modalContent: null,
  },
  getters: {
  },
  mutations: {
    toggleNav(state) {
      state.showNav = !state.showNav
    },
    modalClose(state) {
      state.modalShown = false;
     
      // enables scrolling when modal is closed
      document.body.style.overflow = 'auto';
    },
    modalOpen(state, content) {
      state.modalShown = true;
      state.modalContent = content;
      //removes scrollbar on background when modal is open
      document.body.style.overflow = 'hidden';
    },
    // modalContentShown is its own variable to enable smooth transitions 
    modalContentClose(state) {
      state.modalContentShown = false;
    },
    modalContentOpen(state) {
      state.modalContentShown = true;
    },
  },
  actions: {
  },
  modules: {
  }
})
