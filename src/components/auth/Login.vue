<template>
  <div class="login-container" >
    <img src="../../assets/KiweLogo.png" alt="Kiwe Logo">    
    <h1 class="container-title">Kiwe</h1>
    <form >
        <label for="email">E-mail</label>
        <input v-model="inputEmail" type="email" name="email" >
         <label for="password">Password</label>
        <input v-model="inputPwd" type="password" name="password" >
    </form>

    <div class="buttons">
        <button class="btn" v-on:click="submitLogin" type="submit">Log in</button>
        <button class="btn" v-on:click="signUp">Sign up</button>
        <button class="btn" @click="test">TEst</button>
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
          this.$router.push(Signup);
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
         test:function(){
                let that = this;
                window.cordova.plugins.barcodeScanner.scan(
                        function (result) {
                            // alert("We got a barcode\n" +
                            //         "Result: " + result.text + "\n" +
                            //         "Format: " + result.format + "\n" +
                            //         "Cancelled: " + result.cancelled);

                            let scanRid = result.text;
                            let restList = that.$store.state.restaurantList;
                            alert(scanRid)
                            console.log(scanRid)
                            console.log(restList);
                            restList.map(item => {
                                if(item.rid === scanRid){
                                    that.$store.dispatch("assignRest", item);
                                    that.$router.push('restDetail')
                                }
                            })

                        },
                        function (error) {
                            alert("Scanning failed: " + error);
                        },
                        {
                            preferFrontCamera : false, // iOS and Android
                            showFlipCameraButton : true, // iOS and Android
                            showTorchButton : true, // iOS and Android
                            torchOn: true, // Android, launch with the torch switched on (if available)
                            saveHistory: true, // Android, save scan history (default false)
                            prompt : "Place a barcode inside the scan area", // Android
                            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                            formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
                            orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
                            disableAnimations : true, // iOS
                            disableSuccessBeep: false // iOS and Android
                        }
                    );
            }
                }
            }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

    

    .container-title{
        text-align: center;
        // width: 500px;
    }

    form {
        margin-bottom: 2rem;
    }

    .btn {
            display: block;
            text-align: center;
            margin: 1rem auto;
            width: 100%;
        }
    

</style>
