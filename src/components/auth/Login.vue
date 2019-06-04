<template>
  <div class="login-container" >
    <h1 class="container-title">Log In</h1>
    <form action="#">
        <label for="email">E-mail</label>
        <input v-model="inputEmail" type="email" name="email" >
         <label for="password">Password</label>
        <input v-model="inputPwd" type="password" name="password" >
        <button class="btn" v-on:click="submitLogin" type="submit">Log in</button>
    </form>
     <router-link to="/signup">Not on virtual line-up yet? Sign up</router-link>
    <p class="red-text">{{errMsg}}</p>
  </div>

</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Login',
  data: function(){
      return{
          inputEmail: '',
          inputPwd: '',
          errMsg:''
      }
  },
  methods: {
      submitLogin:function(e){
          e.preventDefault();
          
          //Submit to Firebase
           firebase.auth().signInWithEmailAndPassword(this.inputEmail, this.inputPwd)
            .then(function(user){
              console.log('Login Success', user);
             
            },
            function(err){
              console.log('Oh', + err.message);
              this.errMsg = err.message;
            })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
