import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';
import store from './store/store';
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)


Vue.config.productionTip = false

 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyCP1KxaDOHW7yImEM_yphNrcXMaXGGx2b4",
  authDomain: "kiwe-5ffa0.firebaseapp.com",
  databaseURL: "https://kiwe-5ffa0.firebaseio.com",
  projectId: "kiwe-5ffa0",
  storageBucket: "kiwe-5ffa0.appspot.com",
  messagingSenderId: "470076910176",
  appId: "1:470076910176:web:2cdbb0bdd3a25780"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
