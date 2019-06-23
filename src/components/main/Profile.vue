<template>
  <div class="profile">
      <h1>Profile</h1>
<div class="" v-show="!show">
      <p>Nickname: {{ docRef.nickName }}</p>

      <p>Phone Number: {{ docRef.phone }}</p>

      <p>Preferences:
          <ul>
              <li v-for="(item, index) in docRef.profile" v-bind:key="index">{{ item }}</li>
          </ul>
      </p>
</div>

    <div>

    </div>

    <div class="container">

        <!--<p class="h2 text-center">Form</p> -->
        <form action="" method="post" v-show="show">

            <div>
                <label>Nickname:</label>
                <input v-model="inputNickName" type="text" name="fullname"  placeholder="Enter Your Nickname"/>
                
            </div>
            <div>
                <label>Phone Number:</label>
                <input v-model="inputPhone" type="tel" name="tel" placeholder="Enter Phone Number"/>
                
            </div> 
            <div>
                <label>Preferences:</label>
                <!--<input v-model="inputPreferences" type="text" name="Preferences" placeholder="Enter Your Preferences"/>-->
                <input type="checkbox" value="Vegan" v-model="checkedPrefs">
                <label>Vegan</label>

                <input type="checkbox" value="Gluten Free" v-model="checkedPrefs">
                <label>Gluten Free</label>

                <input type="checkbox" value="Allergies" v-model="checkedPrefs">
                <label>Allergies</label>

            </div>   
            
        </form>

    </div>
    
        <button class="btn" @click="editProfile" v-show="!show">Edit</button>
        <br> <br>
        <button class="btn" @click="cancelEdit" v-show="show">Cancel</button>
        <br> <br>
        <button class="btn" @click="saveProfileChanges" type="submit" v-show="show">Save</button>

  </div>
</template>

<script>

import firebase from 'firebase';

export default {
  name: 'Profile',
    data:function(){
    return{
        show:false,
        inputNickName:'',
        inputPhone:'',
        checkedPrefs: ''
       
    }
    },

    methods: {
    
    editProfile:function(){
        this.show = true
    },

    cancelEdit:function(){
        this.show = false
    },

    saveProfileChanges:function(){
        let db = firebase.firestore();
        var docRef = db.collection("users").doc(this.$store.state.userStatus.uid).update({
            nickName : this.inputNickName,
            phone: this.inputPhone,
            profile:this.checkedPrefs,

        });
        this.show = false
    }

    },

    computed: {
      docRef(){
           return this.$store.state.userStatus
      }
    },

    created(){
        let db = firebase.firestore();
        var docRef = db.collection("users").doc(this.$store.state.userStatus.uid);

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

<style scoped>

input[type="checkbox"], input[type="checkbox"]:checked{
pointer-events: all;
position: relative;
opacity: 1;
margin: auto 3%;
margin-right: 0.5%;

}

</style>
