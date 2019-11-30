import Vue from 'vue';
import Vuex from 'vuex';
import mutations, { AnonymousStub } from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: AnonymousStub,
    isLoggedIn: false,
  },
  mutations,
  actions,
  modules: {
  },
});
