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
                <input v-model.lazy="inputNickname" type="text" name="fullname"  placeholder="Enter Your Nickname"/>
                
            </div>
            <div>
                <label>Phone Number:</label>
                <input v-model="inputPhone" type="tel" name="tel" placeholder="Enter Phone Number"/>
                
            </div> 
            <div>
                <p>Preferences:</p>
                <!--<input v-model="inputPreferences" type="text" name="Preferences" placeholder="Enter Your Preferences"/>-->
                <input type="checkbox" id="vegan" value="Vegan" v-model="checkedPrefs">
                <label for='vegan' >Vegan</label>

                <input type="checkbox" id="glute-free" value="Gluten Free" v-model="checkedPrefs">
                <label for='glute-free'>Gluten Free</label>

                <input type="checkbox" id="allergies" value="Allergies" v-model="checkedPrefs">
                <label for= 'allergies'>Allergies</label>

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
        let that = this;
        var docRef = db.collection("users").doc(this.$store.state.userStatus.uid).update({
            nickName : this.$store.state.userStatus.nickName,
            phone: this.$store.state.userStatus.phone,
            profile:this.checkedPrefs

        }).then(()=>{
  
        that.show = false

            })}

    },

    computed: {
      docRef(){
           return this.$store.state.userStatus
      },

        inputNickname: {
            get() {
                return this.$store.state.userStatus.nickName
            },
            set(value){
                this.$store.dispatch('updateNickname', value)
            }
        },

        inputPhone: {
            get() {
                return this.$store.state.userStatus.phone
            },
            set(value){
                this.$store.dispatch('updatePhoneNumber', value)
            }
        },

        checkedPrefs: {
                   
            get() {
                return this.$store.state.userStatus.profile
            },
            set(value){
                this.$store.dispatch('updateProfile', value)
            }
        
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
