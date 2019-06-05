<template>
  <div class="login-container" >
    <h1 class="container-title">Log In</h1>
    <form >
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
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

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
            .then((user) => {
              //Help me check if the entered user and password is correct to what we have in the database
              console.log('Login Success', user.user);
              const userStatus = {
                uid: user.user.uid
              }
              //Set UserStatus to store
              this.$store.dispatch('getUserStatus',userStatus);

              this.$router.push('home');
            }).catch((err) => {
                // Handle Errors here.
                this.errMsg = err.message;
              });
                    }
                }
            }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
