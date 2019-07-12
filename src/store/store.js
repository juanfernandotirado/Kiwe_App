import Vuex from 'vuex';
import Vue from 'vue';

import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    
    userStatus: {
      nickName: '',
      isInLine: false,

    },

  
    currentListStatus:{
      joinTime: new Date(),
      estTime: 0,
      currentSpot: 1,
      rName: '',
      rid: '',
      grSize: 1,
      uName: '',
      uid: '',
      did: ''
      
    },


    waitList: [],


    restaurantList: [],


    selRest: {},

    additionalInfo: {
      accessibility:'',
      seatingPreferences: ''
    },

    //Img array for menu gallery
    restaurantImgs:[],
  

    homeShow: false,
    popUpShow: false,
    popUpDropConfirm: false,
    popUpDropOff: false,
    popUpSuccessShow: false,
    popupNotification: false,
    firstStep: true,
    popupFiveMinute: false,


    //Notification Popup
    popUpNotificationShow:false,
    denyNotification:false,
    


    loadedRestaurantList: false,

  },

  
  

  

  mutations,
  actions
});