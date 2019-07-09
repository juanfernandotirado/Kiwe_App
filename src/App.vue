<template>
  <div >
    <!-- <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/userprofile">Profile</router-link> |
      <router-link to="/test">Test</router-link> |
      <router-link to="/restaurant">Restaurant</router-link> |
      <router-link to="/reviewList">Review List</router-link> |
      <router-link to='/qrCode'>QR Code</router-link> | 
    </div> -->
<!-- 
    <div v-if="loginVerify" id="firstScreen">
      <div v-if="!joinMethod" class="login">
        <LogIn />
      </div>
      <div v-else class="register">
        <Register />
      </div>
    </div> -->

    <div id="app">

      <div v-if="logined" class="app-header">
        <Header />
      </div>
      <div class="app-body">
        <router-view/>
      </div>

      <div v-if="logined" class="app-footer">
        <Footer />
      </div>

    </div>

    


  </div>
</template>

<script>
import firebase from 'firebase';
import LogIn from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import Header from './components/template-files/Header.vue'
import Footer from './components/template-files/Footer.vue'

export default {
  name: 'App',

  components: {
    LogIn,
    Register,
    Header,
    Footer

  },
   data:function(){
    return{
       logined : false
    }
  },
   mounted(){
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(window.cordova);
    }
  },

  methods: {
    // loginVerify: function(){
    //   let userLogged = this.$store.state.userStatus.nickName;
    //   const currentUser = firebase.auth().currentUser;
    //   console.log(currentUser);
    //   if (userLogged == ''){
    //   // if(currentUser){  
    //     return true;
    //   }

    //   else {
    //     return false;
    //   }
    // }

  },

  computed:{
    loginVerify(){
       let userLogged = this.$store.state.userStatus.nickName;
        const currentUser = firebase.auth().currentUser;
        console.log(currentUser);
        // if (userLogged == ''){
        if(!currentUser){  
          return true;
        }

        else {
          return false;
        }
    },
    joinMethod(){
      return this.$store.state.joinMethod
    }
  },
  updated(){
     const currentUser = firebase.auth().currentUser;
       if(currentUser){  
           this.logined = true;
        }
        else {
          this.logined = false;
          // this.$router.replace('login');
          // console.log("Please login first");
        }
  }
}
</script>


<style lang="scss">
@import "./sass/_variables.scss";


* {
  box-sizing: border-box !important;
 
}

//Unable user select any element(For best ux in phone)
*:not(input){
   -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none; 
}

#firstScreen {
  background-color: white;
  text-align: center;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  margin: auto;
  background-color: $csecond-green;
  //padding-bottom: 12vh;
  min-height: 90vh;
}



///General styling


  .home,
  .user-profile,
  .restaurant-section,
  .restaurant-detail-section,
  .wait-list-info-section {
    padding-bottom: 90px;
  }

  .section {
    //border: 2px solid green; 
    margin: 0 0 2rem 0;
    background-color: white;
    border-radius: $sc-border-radius;
  }

  .section-title {
    color: $sc-font-color;
    text-transform: uppercase;
    font-size: $sc-font-size;
    font-family: $sc-font-family;
    font-weight: bold;
    margin-top: 10px;
  }


///buttons

  .btn {
    background-color: $bt-background-color;
    display: block;
  }

  .btn-text {
    text-align: center;
    font-size: $bt-font-size;
    width: 80%;
    margin: 1rem 10% !important;
    border-radius: $bt-border-radius;
    font-weight: $bt-font-weight;
    font-family: $bt-font-family;
    text-transform: capitalize;
  }

  .btn:hover {
    background-color: green;
  }

  .btn-round {
    border-radius: 50%;
    width: 40px;
    height: 40px;

  }

  .btn-back {
    width: 40px;
    padding: 5px;
    position: absolute;
    top: 1vh;
    left: 4vh;

    img {
      width: 30px;
    }
  }

  .btn-optional {
    background-color: transparent;
    color: black;
    margin: 0 !important;
    width: 100%;
    padding: 0;
    font-weight: normal;
    text-decoration: underline $main-green;
    box-shadow: none;
  }

   .dropDown {
    border-radius: 20px;

    .dropDown-menuTitle {
      background-color: #62AF46;
      color: white;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 1rem;

    }

    .dropDown-options {
      background-color: #EBF1C8;

      option {
        text-align: center;
      }

    }
  }

///Footer

#footer-icon {
    max-width: 50px;
}

.router-link-active p,
.router-link-active svg path 
{
    color: orange !important;
    fill: orange;
    //background-color: hotpink;
}


.footer-menu p {
  font-family: 'Open Sans', serif;
  font-weight: bold;
  display: block;font-size: 0.8rem;
  margin-top: 0;
  line-height: 0.9rem;
  color: black;
}



///Restaurant styling
  .restaurantInformation {
    display: flex;
    justify-content: space-between;

    .imageRestaurantGeneralInfo{
      text-align: left;
    }
  }

  .wait {
    text-transform: lowercase;
    background-color: $accent;
    color: white;
    width: fit-content;
    padding: .5rem 1.5rem;
    margin: auto;
    border-radius: $wtb-radius;
    .time{
    font-size: 25px;
    margin: 0;
    padding: 0;
    line-height: 25px;
    display: block;
    text-align: center;
    }

    .min{
    display: block;
    line-height: 8px;
    }
}




 

</style>
