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
        name: 'The Mexican Antojitos y Cantina',
        rid: '3ba0ce3dbce01335cdf5e17c077a612146a4ac48',
        waitTime: '30 min',
        //Information Available at Restaurant Details
        rating: 4.5,
        priceLevel: 2,
        address: '1049 Granville St, Vancouver, BC V6Z 1L4, Canada',
        
      },
      {
        name: "Vips",
        rid: '3ba0ce3dbce01335cdf5e17c077a612146a4ac48',
        waitTime: '40 min',
        //Information Available at Restaurant Details
        rating: 4,
        priceLevel: 4,
        address: '49th Street'
      },
      {
        name: 'La Fonda',
        rid: '3ba0ce3dbce01335cdf5e17c077a612146a4ac48',
        waitTime: '20 min',
        //Information Available at Restaurant Details
        rating: 4,
        priceLevel: 2,
        address: 'Granville St'
      },
      {
        name: 'Sub Viet',
        rid: '3ba0ce3dbce01335cdf5e17c077a612146a4ac48',
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