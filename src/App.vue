<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/userprofile">Profile</router-link> |
      <router-link to="/test">Test</router-link> |
      <router-link to="/restaurant">Restaurant</router-link> |
      <router-link to="/reviewList">Review List</router-link> |
      <router-link to='/qrCode'>QR Code</router-link> | 
    </div> -->
    <div class="container">
      <div>
        <router-view/>
      </div>
    </div>

    <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/userprofile">Profile</router-link> |
      <router-link to="/menu">Menu</router-link> |
    </div>


  </div>
</template>

<script>
export default {
  name: 'App',
   mounted(){
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(window.cordova);
    }
  }
}
</script>


<style lang="scss">
 

@import "./sass/_variables.scss";


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  margin: auto;
  background-color: $csecond-green;
}
#nav {
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 0;
  padding-right: 0;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

 .login-container,
  .register-container{
    max-width: 600px;
    margin: 0 auto;
    padding: 10px 20px;
  }



///General styling
  .section {
    //border: 2px solid green; 
    margin: 2rem 0;
    background-color: white;
    border-radius: $sc-border-radius;
  }

  .section-title {
    color: $sc-font-color;
    text-transform: capitalize;
    font-size: $sc-font-size;
    font-family: $sc-font-family;
    
  }


  .btn {
    background-color: $bt-background-color;
    display: block;
  }

  .btn-text {
    text-align: center;
    font-size: $bt-font-size;
    width: 80%;
    margin: 1rem auto !important;
    border-radius: $bt-border-radius;
    font-weight: $bt-font-weight;
    font-family: $bt-font-family;
  }

  .btn:hover {
    background-color: green;
  }

  .btn-round {
    border-radius: 50%;
    width: 40px;
    height: 40px;
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
    background-color: orange;
    color: white;
    width: fit-content;
    padding: 1rem;
    margin: auto;
}




 

</style>
