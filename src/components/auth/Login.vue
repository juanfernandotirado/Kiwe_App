<template>
  <div class="login-container container" >
      <div class="logo">
        <img src="../../assets/KiweLogo.png" alt="Kiwe Logo" class="logo-image">    
        <h1 class="logo-title">kiwe</h1>
    </div>

    <h2>Log In</h2>
    
    <form class="join-form">
        <label class="join-form-label" for="email">E-mail</label>
        <input class="join-form-input" v-model="inputEmail" type="email" name="email" >
         <label class="join-form-label" for="password">Password</label>
        <input class="join-form-input" v-model="inputPwd" type="password" name="password" >
    </form>

    <div class="buttons">
        <button class="btn btn-text" v-on:click="submitLogin" type="submit">Log in</button>
        <button class="btn btn-text" v-on:click="signUp">Sign up</button>
    </div>

     <!-- <router-link to="/signup">Not on virtual line-up yet? Sign up</router-link> -->
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

      signUp:function(){
          this.$store.dispatch('signUpShows');
      },

      submitLogin:function(e){
          e.preventDefault();
          //Submit to Firebase
           firebase.auth().signInWithEmailAndPassword(this.inputEmail, this.inputPwd)
            .then((user) => {
              //Help me check if the entered user and password is correct to what we have in the database
              console.log('Login Success', user.user);

              let db = firebase.firestore();
              //Get user profile information
              let docRef = db.collection("users").doc(user.user.uid);
                  docRef.get().then((doc) => {
                      if (doc.exists) {
                          console.log("Document data:", doc.data());
                          const userStatus = {
                                          uid: user.user.uid,
                                          isInLine: doc.data().isInLine,
                                          nickName: doc.data().nickName,
                                          profile: doc.data().profile,
                                          phone: doc.data().phone,  
                                          preferences: doc.data().profile,                                      }
                          //Set UserStatus to store
                          this.$store.dispatch('getUserStatus',userStatus);

                          //Go to Homepage
                          this.$router.push('home');


                      } else {
                          // doc.data() will be undefined in this case
                          console.log("No such document!");
                      }
                  }).catch((err) => {
                      console.log("Error getting document:", err);
                       this.errMsg = err;
                  });

            }).catch((err) => {
                // Handle Errors here.
                this.errMsg = err.message;
              });
                    },
        
                }
            }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

    @import "../../sass/_variables.scss";

    .logo-title {
        text-align: center;
        font-family: Lobster;
        margin-top: 0.2rem;
        color: $main-green;

        // width: 500px;
    }

    .container{
        text-align: center;
        margin: auto;
    }




    form {
        margin-bottom: 2rem;
    }


    .join-form-label {
        font-family: 'Source Serif Pro', 'Times New Roman', serif;
        font-size: 1rem;
        color: black;
        font-weight: 700;
    }

    .join-form-input {
        background-color: $csecond-green !important;
        font-family: 'Open Sans', Arial, sans-serif;
        font-size: 1rem;
    }

    .btn {
            display: block;
            text-align: center;
            margin: 1rem auto;
            width: 100%;
        }
    

</style>
