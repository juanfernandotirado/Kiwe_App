<template>
  <div class="register-container">
        <h1 class="container-title">Sign Up</h1>
       <form action="#">
        <label for="email">E-mail</label>
        <input v-model="inputEmail" type="email" name="email" >
        <label for="password">Password</label>
        <input v-model="inputPwd" type="password" name="password" >
        <button class="btn" v-on:click="submitLogin" type="submit">Sign up</button>
      </form>

  </div>
</template>

<script>
export default {
  name: 'Register',
  props:{
      showRegister: Boolean
  },
  data: function(){
      return{
            inputEmail: '',
          inputPwd: '',
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
