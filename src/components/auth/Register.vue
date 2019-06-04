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
        <button class="btn" v-on:click="submitSignup" type="submit">Sign up</button>
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
    submitSignup:function(e){
            e.preventDefault();
            //Submit to Firebase
            firebase.auth().createUserWithEmailAndPassword(this.inputEmail, this.inputPwd)
            //grab the email and password to create a new user
            .then((resp)=>{
              //resp is what the database is returning to us after creating a new user
              console.log(resp);
               let db = firebase.firestore();
               //firestore is the cloud
                return db.collection('users').doc(resp.user.uid).set({
                  //From this object of the firebase(reps), grab just the UID to set the user information on firebase.
                nickName : this.inputNickName,
                profile: {},
                isInLine: false,
                createdTime: new Date()
                //in here we created different properties for the user
               }).then(() =>{
                 // this function is related to resp 
                 console.log('Sign up success');
                 this.$router.push('home');
               }).catch((err) => {
                 //catch means 'if something is wrong with the date'
                 this.errMsg = err.message;
               })
             
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
