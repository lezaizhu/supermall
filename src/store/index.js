import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

const state = {
  cartList: [],
  isCheckAll: true
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store