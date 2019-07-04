<template>
  <div class="register-container container">
    <div class="logo">
      <img src="../../assets/KiweLogo.png" alt="Kiwe Logo" class="logo-image">    
      <h1 class="logo-title">kiwe</h1>
    </div>
        <h1 class="container-title">Sign Up</h1>
       <form action="#">
        <label class="join-form-label" for="email">E-mail</label>
        <input class="join-form-input" v-model="inputEmail" type="email" name="email" >
        <label class="join-form-label" for="password">Password</label>
        <input class="join-form-input" v-model="inputPwd" type="password" name="password" >
        <label class="join-form-label" for="nickname">Nickname</label>
        <input class="join-form-input" v-model="inputNickName" type="text" name="nickname" >
        <label class="join-form-label" for="phone">Phone</label>
        <input class="join-form-input" v-model="inputPhone" type="text" name="phone" >
        <button class="btn btn-text" v-on:click="submitSignup" type="submit">Sign up</button>
      </form>
      <p v-on:click="logIn"> Already a member? Log in</p>
       
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
          inputPhone:'',
          errMsg:''
      }
  },
  methods: {


    logIn:function(){
          this.$store.dispatch('signUpShows');
      },

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
                phone: this.inputPhone,
                profile: {},
                isInLine: false,
                createdTime: new Date()
                //in here we created different properties for the user
               }).then(() =>{

                 const userStatus = {
                                          uid: resp.user.uid,
                                          isInLine: false,
                                          nickName: this.inputNickName,
                                          phone:this.inputPhone,
                                          profile: {}
                                        }
                  //Set UserStatus to store
                  this.$store.dispatch('getUserStatus',userStatus);

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
