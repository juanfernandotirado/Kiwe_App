import Vuex from 'vuex';
import Vue from 'vue';

import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userStatus: {
      nickName: 'Karla'
    },



    groupSize: 1,
    currentListStatus:{
      joinTime: new Date(),
      estTime: 60,
      currentSpot: 0,
      restaurantName: 'Frijol',
      
    },


    waitList: [],



    restaurantList: [
      {    
        name: 'Ramen ramen',
        ID: 1,
        waitTime: '30 min',
        //Information Available at Restaurant Details
        rating: 5,
        priceLevel: 3,
        address: 'Albern St',
        
      },
      {
        name: "Vips",
        iD: 2,
        waitTime: '40 min',
        //Information Available at Restaurant Details
        rating: 4,
        priceLevel: 4,
        address: '49th Street'
      },
      {
        name: 'La Fonda',
        iD: 3,
        waitTime: '20 min',
        //Information Available at Restaurant Details
        rating: 4,
        priceLevel: 2,
        address: 'Granville St'
      },
      {
        name: 'Sub Viet',
        iD: 4,
        waitTime: '40 min',
        //Information Available  at Restaurant Details
        rating: 5,
        priceLevel: 1,
        address: 'Broadway St'
      },
    ],


    selRest: {
      
    }
  

  },
  

  

  mutations,
  actions
});