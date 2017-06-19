import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hello: 'hello',
    auth: true,
  },
  getters: {},
  mutations: {
    // setHello(state, hello) {
    //   state.hello = hello;
    // },
  },
  actions: {
    // actionHello({ commit }) {
    //   setTimeout(() => {
    //     commit('setHello');
    //   });
    // },
  },
  modules: {},
});
