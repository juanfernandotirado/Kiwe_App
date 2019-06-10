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
    groupSize: 1,
    currentListStatus:{
      startTime: new Date(),
      estTime: 60,
      currentSpot: 5,
      restaurantName: 'Frijol'
    },
    restaurantList: [
      {    
        Name: 'Ramen ramen',
        ID: 1,
        WaitTime: '30 min',
        //Information Available at Restaurant Details
        Rating: 5,
        PriceLevel: 3,
        Address: 'Alberni St',
      },
      {
        Name: "Vips",
        ID: 2,
        WaitTime: '40 min',
        //Information Available at Restaurant Details
        Rating: 4,
        PriceLevel: 4,
        Address: '49th Street'
      },
      {
        Name: 'La Fonda',
        ID: 3,
        WaitTime: '20 min',
        //Information Available at Restaurant Details
        Rating: 4,
        PriceLevel: 2,
        Address: 'Granville St'
      },
      {
        Name: 'Sub Viet',
        ID: 4,
        WaitTime: '40 min',
        //Information Available  at Restaurant Details
        Rating: 5,
        PriceLevel: 1,
        Address: 'Broadway St'
      },
  
    ],
    selRest: {
      
    }
  

  },
  

  

  mutations,
  actions
});