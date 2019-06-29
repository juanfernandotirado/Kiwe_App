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
                                          profile: doc.data().profile
                                        }
                          //Set UserStatus to store
                          this.$store.dispatch('getUserStatus',userStatus);

                                                            
                            //Get restaurant list from firebase
                            // let db = firebase.firestore();
                            // let that = this;

                            // db.collection("restaurants").get().then(function (querySnapshot){
                            //     that.$store.dispatch('emptyRestDb');

                            //     querySnapshot.forEach(function(doc){
                            //         console.log(doc.id, " => " , doc.data());
                            //         let restListdb = {
                            //             address: doc.data().address,
                            //             cuisine: doc.data().cuisine,
                            //             loginId: doc.data().loginId,
                            //             priceLevel: doc.data().priceLevel,
                            //             rName: doc.data().rName,
                            //             rImgRef: doc.data().rImgRef,
                            //             rid: doc.data().rid,
                            //             waitTime: doc.data().waitTime,
                            //             rating: doc.data().rating,
                            //             sizeStandard: doc.data().sizeStandard,
                            //             estTime: 0,
                            //         }
                            //         that.$store.dispatch('assignRestDb', restListdb);

                            //     })

                            // })

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
                    }
                }
            }
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
