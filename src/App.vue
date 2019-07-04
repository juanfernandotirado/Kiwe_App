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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  margin: auto;
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

  .section {
    border: 2px solid green; 
    margin: 2rem 0;
  }

  .btn {
    background-color: green;
    display: block;
  }

  .btn-text {
    text-align: center;
    width: 80%;
    margin: 1rem auto;
    border-radius: 10px;
  }

  .btn:hover {
    background-color: green;
  }

  .btn-round {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

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
