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

    <div v-if="loginVerify()" id="firstScreen">
      <div v-if="!joinMethod" class="login">
        <LogIn />
      </div>
      <div v-else class="register">
        <Register />
      </div>
    </div>

    <div v-else id="app">

      <div class="app-header">
        <Header />
      </div>
      <div class="app-body">
        <router-view/>
      </div>

      <div class="app-footer">
        <Footer />
      </div>

    </div>

    


  </div>
</template>

<script>

import LogIn from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import Header from './components/template files/header.vue'
import Footer from './components/template files/footer.vue'

export default {
  name: 'App',

  components: {
    LogIn,
    Register,
    Header,
    Footer

  },
   mounted(){
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(window.cordova);
    }
  },

  methods: {
    loginVerify: function(){
      let userLogged = this.$store.state.userStatus.nickName;

      if (userLogged == ''){
        return true;
      }

      else {
        return false;
      }
    }

  },

  computed:{

    userStatus(){
      return this.$store.state.userStatus.nickName
    },

    joinMethod(){
      return this.$store.state.joinMethod
    }
  }
}
</script>


<style lang="scss">
 

@import "./sass/_variables.scss";

//Unable user select any element(For best ux in phone)
* {
  box-sizing: border-box !important;
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none; 
}


#firstScreen {
  background-color: white;
  //padding-top: 6rem;
  //margin: auto !important;
  text-align: center;
  //padding-left: 2rem;
  //padding-right: 2rem;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  //height: 100vh;
  margin: auto;
  background-color: $csecond-green;
  padding-bottom: 12vh;
  //background-color: $csecond-green;
  //padding-top: 3rem;

  
}



///General styling
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
    padding: .5rem 2rem;
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
