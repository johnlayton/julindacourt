import Vue from 'vue'
import Vuex from 'vuex'

let external = require('electron').remote.require('./external')

Vue.use(Vuex)

const state = {
  logentry: []
}

const mutations = {
  logentry: (state, {logentry}) => {
    state.logentry += logentry.toString()
  }
}

const actions = {
  attach: function ({commit}, logger) {
    external.getLogger(logger.host, logger.logfile, function (data) {
      commit('logentry', {logentry: [data]})
    })
  }
}

const getters = {}

export default {
  state,
  getters,
  actions,
  mutations
}

/*
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
*/
