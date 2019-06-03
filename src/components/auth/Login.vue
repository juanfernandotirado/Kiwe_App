<template>

  <div v-if="!showRegister" class="login-container" >
    <h1 class="container-title">Log In</h1>
    <form action="#">
        <label for="email">E-mail</label>
        <input v-model="inputEmail" type="email" name="email" >
         <label for="password">Password</label>
        <input v-model="inputPwd" type="password" name="password" >
        <button class="btn" v-on:click="submitLogin" type="submit">Log in</button>
    </form>
    
  </div>

</template>

<script>
import Register from '@/components/auth/Register.vue';

export default {
  name: 'Login',
  components: {
      Register
  },
  data: function(){
      return{
          inputEmail: '',
          inputPwd: '',
          showRegister: false
      }
  },
  methods: {
      submitLogin:function(e){
          e.preventDefault();

          //Submit to Firebase
          //Do something
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
