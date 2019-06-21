import Vuex from 'vuex';
import Vue from 'vue';

import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userStatus: {
      nickName: '',
      isInLine: false
    },



    // groupSize: 1,
    currentListStatus:{
      joinTime: new Date(),
      estTime: 0,
      currentSpot: 0,
      rName: '',
      rid: '',
      groupSize: 1,
      uName: '',
      uid: '',
      uInLine: '',
      
    },


    waitList: [],



    restaurantList: [],


    selRest: {
      
    },

    additionalInfo: {
      accessibility:'',
      seatingPreferences: ''
    },

    //Img array for menu gallery
    restaurantImgs:[],
  

    popUpShow: false,
    popUpShowD: false,


  },

  
  

  

  mutations,
  actions
});