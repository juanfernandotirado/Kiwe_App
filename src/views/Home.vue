<template>
  <div class="home">
    <div v-if="isAuth" >
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <div v-else class="login-section">
      <Auth />
    </div>
   
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Auth from '@/components/auth/Auth.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    Auth
   
  },
  data:function(){
    return{
      isAuth: false,

    }
  },
  mounted(){
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(window.cordova);
    }
  }
}
</script>
