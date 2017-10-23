import Vue from 'vue';
import Vuex from 'vuex';
import dictionary from './modules/dictionary'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hello: 'hello',
    auth: true,
    token: '',
    baseURL: '',
    pageIndex: 1,
    pageSize: 10,
  },
  getters: {},
  mutations: {
    setHello (state, hello) {
      state.hello = hello
    },
  },
  actions: {
    actionHello ({commit}) {
      setTimeout(() => {
        commit('setHello')
      })
    },
  },
  modules: {
    dictionary,
  },
});
