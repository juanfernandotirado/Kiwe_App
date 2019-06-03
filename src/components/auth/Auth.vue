<template>
<div>
  <div v-if="showRegister" class="register-container" >
    <Register/>
    <a v-on:click="showRegister = !showRegister" href="#">Already a member? Log in</a>
  </div>
  <div v-else class="login-container">
    <Login /> 
    <a v-on:click="showRegister = !showRegister" href="#">Not on virtual line-up yet? Sign up</a>
  </div>
 
</div>
</template>

<script>
import Register from '@/components/auth/Register.vue';
import Login from '@/components/auth/Login.vue';

export default {
  name: 'Auth',
  components: {
      Register,
      Login
  },
  data: function(){
      return{
          showRegister: false
      }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .login-container,
  .register-container{
    max-width: 600px;
    margin: 0 auto;
    padding: 10px 20px;
  }
</style>
