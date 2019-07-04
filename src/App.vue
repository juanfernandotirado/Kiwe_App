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


///////VARIABLES

//Dark green
$main-green: rgba(98, 175, 70, 1); //buttoms, search border, drop down header, reservation info border,"hellos", sections name.

// Light green
$csecond-green:rgba(235, 241, 200, 1); // All pages background, login form

//Orange
$accent:rgba(246, 167, 27, 1); //active icons, number border, waiting time background, restaurant name, information confirmation

//BUTTOMS
$bt-font-family : Open Sans;
$bt-font-weight : bold;
$bt-font-size : 18px;
$bt-color : rgb(255, 255, 255); //white
$bt-background-color: $main-green; //Dark green
$bt-border-radius: 7px;


//section names
$sc-font-family : Source Serif Pro;//font family
$sc-font-size : 18px;//font size
$sc-text-transform : uppercase; //text transform
$sc-font-color: $main-green; //Dark green

//waiting time box
$wtb-background: $accent; //Orange
$wtb-radius: 7px;

   //witing time text
       $wtb-ff: Myriad Pro; //font family
       $wtb-fs: 20px; //font size
       $wt-lh: 15px; //line height
       $wt-fc: rgb(255, 255, 255);; //font color white

   //witing time text HOVER IMAGE
       $wtb-ff: Myriad Pro; //font family
       $wtb-fs: 13px; //font size
       $wt-lh: 10px; //line height


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



///General styling
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
    margin: 1rem auto !important;
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
