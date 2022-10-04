import { createStore } from 'vuex'
import data from '../assets/txtr.json'

export default createStore({
  state: {
    data: data,
    showNav: true,
    modalShown: false,
    modalContentShown: false,
    modalContent: null,
    currentAccordion: null,
    currentAccordion2: null,
    accordionOpened: false,
    accordionOpened2: false,
    currentSection: null,
  },
  getters: {
  },
  mutations: {
    toggleNav(state) {
      state.showNav = !state.showNav
    },
    modalClose(state) {
      state.modalShown = false;
      state.showNav = true;
     
      // enables scrolling when modal is closed
      document.body.style.overflow = 'auto';
    },
    modalOpen(state, content) {
      state.modalShown = true;
      state.modalContent = content;
      state.showNav = false; 
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
    setAccordion(state, index) {
      state.currentAccordion = index;
      state.accordionOpened = true;
    },
    setAccordion2(state, index) {
      state.currentAccordion2 = index;
      state.accordionOpened2 = true;
    },
    setSection(state, id){
      state.currentSection = id;
    }
  },
  actions: {
  },
  modules: {
  }
})
