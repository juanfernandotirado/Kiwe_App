import Vuex from 'vuex';
import Vue from 'vue';

import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userStatus: {
      nickName: 'Karla',
      uid: '',
    },


    

    currentListStatus:{
      joinTime: new Date(),
      estTime: 60,
      currentSpot: 0,
      rName: '',
      rid: '',
      groupSize: 1,
      uName: '',
      uid: '',
      uInLine: '',
    },


    waitList: [],



    restaurantList: [
      {    
        name: 'The Mexican Antojitos y Cantina',
        rid: 'ChIJSa1PpdVzhlQRmKSfG7q1eYQ',
        waitTime: '30 min',
        //Information Available at Restaurant Details
        rating: 4.5,
        priceLevel: 2,
        address: '1049 Granville St, Vancouver',
        rImgRef: 'CmRaAAAAp-l2rZ3MEMsulFInOWKoNPYqh3PHwMLsqqt1n9GCWNVfmqRfmxAbRB-unLEZE8UevNWwP7e_M3uAOtVPjRgcjJWKP77pC58lxqD6i2XrsR_dPxoxktquCqQZ0aIlIPGAEhBqfl6pyLaQFrG9SrRUVkpRGhS1mtJfMO8hpi4EDK1utQYASNDnZw'
      
      },
      {
        name: "The Capital",
        rid: 'ChIJuekueytyhlQRVlHzMj9r2x4',
        waitTime: '40 min',
        //Information Available at Restaurant Details
        rating: 4.2,
        priceLevel: 1,
        address: '1178 Davie St, Vancouver',
        rImgRef: 'CmRaAAAAvDxgkReAe4Yl78TmgyAy8rQknYSXmaiqtp4SAGkkVU5UgGMuPu0A-gPxJDZWJAZF3jnA0RACW2Ak19B2QM-uRK4TcG4dQTVvXaV-I7pZgaNk-Rsb7ZUiCnKVWdTqwh_CEhA1UPjIOqLeG7mjtcdUb-VTGhTPw-DbYuubpm0wLoA43WqMBZ6_dQ'
      },
      {
        name: 'Jam Cafe',
        rid: 'ChIJUYBL3XtxhlQRrOYhW5_6DYc',
        waitTime: '20 min',
        //Information Available at Restaurant Details
        rating: 4.5,
        priceLevel: 2,
        address: '556 Beatty St, Vancouver',
        rImgRef: 'CmRaAAAAEeLB56ic86mELGjs1uL7U8DAtzzwqm028kM7vNlqsl7TCn7pQ1y7JDKhZivlaQJLGg2mJ6ZkneyQVzUAUJHxNQPxhpdBV3qYQmEGqROYn95DmasZIkdWbdJSzQGiGE9bEhBRJjevB1bGBUItx5KfvMKQGhS6qJZXQgGp5D32aIa8v9CoeI2F_g'
      },
      {
        name: 'Uncle Tetsu\'s Japanese Cheesecake',
        rid: 'ChIJBS1k_xh3hlQRfmUvS67QdwI',
        waitTime: '40 min',
        //Information Available  at Restaurant Details
        rating: 3.1,
        priceLevel: 1,
        address: '4700 Kingsway Unit M161, Burnaby',
        rImgRef:'CmRaAAAAJ5IpGNeimNA7kvIP1hxR2VFrZ8xCmhOgsRh3AEl65LMqiPdBUkenX7en0Wd4KvRo7pAynXM13RgOmvHHA1adHe9ouqr433ptaQ2nzcGfrXHO38jm1cxT22MHLZrSw8O9EhC9RALhv2bXhNFcV4e2fsq7GhSLVe-XQQWhnzpuvbPtMVNIgyQg-w'
      },
      {
        name: 'Ramen Danbo',
        rid: 'ChIJtwgTP4dxhlQRo5wIHcln0es',
        waitTime: '40 min',
        //Information Available  at Restaurant Details
        rating: 4.6,
        priceLevel: 1,
        address: '1333 Robson St, Vancouver',
        rImgRef:'CmRaAAAAvai7bBXyeDAfIUOitjg8fSLhvPF0b3OavBdGJwEpmHPXFICCizNpRBrWSv50UIJ-DNyKyk_1PYaMxNpitgybobDIvSyuZY2zW8xcPUrA1xcWAXXs7Tp15YamwA6ft6c6EhB2UU5L-ITw3GHrIugcKSgDGhSxoxUZX4VOXuI3mVRZ9987AwgKEw',
      },
    ],


    selRest: {
      
    }
  

  },
  

  

  mutations,
  actions
});