import Vue from 'vue'
import Vuex from 'vuex'

import { actions } from './actions/index'
import { state } from './states/index'
import { getters } from './getters/index'
import { mutations } from './mutations/index'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
