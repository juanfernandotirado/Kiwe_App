<template>
  <div id="app">
    <div id="nav">
      <router-link to="/login">Login</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/userprofile">Profile</router-link> |
      <router-link to="/test">Test</router-link> |
      <router-link to="/test1">Test1</router-link> |
      <router-link to="/testjuan">TestJuan</router-link> |
      <router-link to='/qrCode'>QR Code</router-link> | 
    </div>
    <router-view/>
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
}
#nav {
  padding: 30px;
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

</style>
