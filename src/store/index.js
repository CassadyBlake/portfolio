import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blurBackground: false
  },
  getters: {
    getBlurBackground: state => { 
      return state.blurBackground 
    }
  },
  mutations: {
    setBlurBackground(state) {
      state.blurBackground = !state.blurBackground 
    }
  },
  actions: {
  },
  modules: {
  }
})
