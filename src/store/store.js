import Vuex from 'vuex';
import Vue from 'vue';

import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userStatus: {
      nickName: ''
    },
    groupSize: 6
  },
  mutations,
  actions
});