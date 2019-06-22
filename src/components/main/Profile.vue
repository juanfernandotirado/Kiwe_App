<template>
  <div class="profile">
      <h1>Profile</h1>

    <div>

    </div>

    <div class="container">

        <!--<p class="h2 text-center">Form</p> -->
        <form action="" method="post" v-show="show">

            <div>
                <label>Nickname:</label>
                <input type="text" name="fullname"  placeholder="Enter Your Nickname"/>
                
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" placeholder="Enter Your Email"/>
                
            </div>
            <div>
                <label>Phone Number:</label>
                <input type="tel" name="tel" placeholder="Enter Phone Number"/>
                
            </div>    
            
        </form>

    </div>
    
        <button class="btn" @click="editProfile">Edit</button>
        <br> <br>
        <button class="btn" @click="cancelEdit">Cancel</button>

  </div>
</template>

<script>

import firebase from 'firebase';

export default {
  name: 'Profile',
    data:function(){
    return{
        show:false
    }
    },

    methods: {
    
    editProfile:function(){
        this.show = true
    },

    cancelEdit:function(){
        this.show = false
    },

    },

    computed: {
      
    },

    created(){
        let db = firebase.firestore();
        var docRef = db.collection("users").doc();

        docRef.get().then(function(doc) {
        if (doc.exists) {
        console.log("Document data:", doc.data());
         } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
    }).catch(function(error) {
    console.log("Error getting document:", error);
              });
        }
  
        }
</script>
