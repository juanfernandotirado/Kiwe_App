<template>
  <div class="login-container join-container" >
        <div class="logo">
            <img src="../../assets/KiweLogo.png" alt="Kiwe Logo" class="logo-image">    
            <h1 class="logo-title">kiwe</h1>
        </div>

        <div class="join">

            <h2 class="section-title container-title">Log In</h2>
            
            <form class="join-form">
                <label class="join-form-label" for="email">E-mail</label>
                <input class="join-form-input" v-model="inputEmail" type="email" name="email" >
                <label class="join-form-label" for="password">Password</label>
                <input class="join-form-input" v-model="inputPwd" type="password" name="password" >
           
               <p class="red-text">{{errMsg}}</p>
            <div class="buttons">
                <button class="btn btn-text" v-on:click="submitLogin" type="submit">Log in</button>
                <button class="btn btn-text" v-on:click="signUp">Register</button>
            </div>
            </form>
        </div>

        <div class="help">
            <p>Forgot password?</p>
        </div>

     <!-- <router-link to="/signup">Not on virtual line-up yet? Sign up</router-link> -->
 

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
                          this.$store.dispatch('toogleHome');


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

    .join-container{
        display: grid;
        grid-template-columns: 1;
        grid-template-rows: 30vh 60vh 10vh; 
        align-items: center;
        background-color: white;
    }

    .join,
    .help {
        margin: auto;
    }

    .logo-image {
        width: 100px;
    }

    .logo {
        margin: 3vh auto 3vh auto;
    }

    .logo-title {
        text-align: center;
        font-family: Lobster;
        margin-top: 1vh;
        color: $main-green;
        font-size: 2.5rem;
        margin-bottom: 0;

        // width: 500px;
    }


    .section-title {
        margin-top: 1vh;
    }

    .container{
        text-align: center;
        
    }

    .container-title {
        font-weight: bold;
    }


    form {
        margin-bottom: 1vh;
    }

    .join-form {
        width: 80%;
        margin: 0 5vh 0 10%;
    }


    .join-form-label {
        font-family: 'Source Serif Pro', 'Times New Roman', serif;
        font-size: 1.25rem;
        color: black;
        font-weight: bold;
    }

    .join-form-input {
        background-color: $csecond-green !important;
        font-family: 'Open Sans', Arial, sans-serif;
        font-size: 1rem;
        border-radius: 7px !important;
        border-bottom: none !important;
        padding-left: 1rem !important;
        margin-bottom: 2.5vh !important;
    }

    .btn {
            display: block;
            text-align: center;
            margin: 1rem auto;
            width: 100%;
        }
    
    @media screen and (min-height: 650px){
        .logo-image {
            width: 120px;
        }

        .logo-title {
            font-size: 3rem;
        }

        .logo {
            margin-bottom: 0;
        }

        .join {
            margin-top: 1vh;
        }
    }
</style>
