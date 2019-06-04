<template>
  <div class="register-container">
        <h1 class="container-title">Sign Up</h1>
       <form action="#">
        <label for="email">E-mail</label>
        <input v-model="inputEmail" type="email" name="email" >
        <label for="password">Password</label>
        <input v-model="inputPwd" type="password" name="password" >
        <label for="nickname">Nickname</label>
        <input v-model="inputNickName" type="text" name="nickname" >
        <button class="btn" v-on:click="submitLogin" type="submit">Sign up</button>
      </form>
       <router-link to="/login">Already a member? Log in</router-link>
        <p class="red-text">{{errMsg}}</p>
  </div>
</template>

<script>
import firebase from 'firebase';


export default {
  name: 'Register',
  props:{
      showRegister: Boolean
  },
  data: function(){
      return{
          inputEmail: '',
          inputPwd: '',
          inputNickName: '',
          errMsg:''
      }
  },
  methods: {
    submitLogin:function(e){
            e.preventDefault();
            //Submit to Firebase
            firebase.auth().createUserWithEmailAndPassword(this.inputEmail, this.inputPwd)
            .then((resp)=>{
               var db = firebase.firestore();
                return db.collection('users').doc(resp.user.uid).set({
                nickName : this.inputNickName,
                profile: {},
                createdTime: new Date()
               }).then(function(){
                 console.log('Sign up success');
           
               }).catch(function (err) {
                 console.log('Error', err);
               })
             
            }).catch(function(err){
                console.log('Oh', + err.message);
                this.errMsg = 'Fail';
                this.inputEmail = '';
                this.inputPwd = '';
                this.inputNickName = '';
            })
            
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
