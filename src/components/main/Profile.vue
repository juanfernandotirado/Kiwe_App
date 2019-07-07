<template>
  <div class="profile">
      <h2 class="section-title">Profile</h2>
<div class="" v-show="!show">
      <p class="label"><B>NICKNAME:</B></p>
      <p class="value"><b>{{ docRef.nickName }}</b></p>

      <p class="label"><B>PHONE NUMBER</B></p>
      <p class="value"><b>{{ docRef.phone }}</b></p>

      <p><b class="label">DIETARY RESTRICTIONS</b> 
          <ul class="value">
              <li v-for="(item, index) in docRef.preferences" v-bind:key="index" class="value"><b>{{ item }}</b></li>
          </ul>
      </p>
</div>

    <div>

    </div>

    <div class="container">

        <!--<p class="h2 text-center">Form</p> -->
        <form action="" method="post" v-show="show">

            <div>
                <p><b>NICKNAME</b></p>
                <input v-model.lazy="inputNickname" type="text" name="fullname"  placeholder="Enter Your Nickname" class="value"/>
                
            </div>
            <div>
                <p><B>PHONE NUMBER</B></p>
                <input v-model="inputPhone" type="tel" name="tel" placeholder="Enter Phone Number"  class="value"/>
                
            </div> 
            <div class="restrictions">
                <p><b>DIETARY RESTRICTIONS</b></p>
                <!--<input v-model="inputPreferences" type="text" name="Preferences" placeholder="Enter Your Preferences"/>-->
                <input type="checkbox" id="vegan" value="Vegan" v-model="pref">
                <label for='vegan' ><b class="value">Vegan</b></label>

                <input type="checkbox" id="glute-free" value="Gluten Free" v-model="pref">
                <label for='glute-free'><b class="value">Gluten Free</b></label>

                <input type="checkbox" id="allergies" value="Allergies" v-model="pref">
                <label for= 'allergies'><b class="value">Allergies</b></label>

            </div>   
            
        </form>

    </div>
    
        <button class="btn btn-text" @click="editProfile" v-show="!show">Edit</button>
        <br>
        <button class="btn btn-text" @click="cancelEdit" v-show="show">Cancel</button>
        <br>
        <button class="btn btn-text" @click="saveProfileChanges" type="submit" v-show="show">Save</button>

  </div>
</template>

<script>

import firebase from 'firebase';

export default {
  name: 'Profile',
    data:function(){
    return{
        show:false,
        pref: [],
       
       
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
        this.$store.dispatch('updateProfile', that.pref);

        var docRef = db.collection("users").doc(this.$store.state.userStatus.uid).update({
            nickName : this.$store.state.userStatus.nickName,
            phone: this.$store.state.userStatus.phone,
            profile: this.$store.state.userStatus.preferences,

        }).then(()=>{
        
        that.show = false;
        console.log(that.pref);


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

        // checkedPrefs: {
                   
        //     get() {
        //         return this.$store.state.userStatus.preferences
        //     },
        //     set(value){
        //         this.$store.dispatch('updateProfile', this.pref)
        //         console.log(this.$store.state.userStatus.preferences)

        //     }
        
        // }



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

<style scoped lang="scss">

@import "../../sass/_variables.scss";

input[type="checkbox"], input[type="checkbox"]:checked{
pointer-events: all;
position: relative;
opacity: 1;
margin: auto 3%;
margin-right: 0.5%;

}

b{
    font-family: $bt-font-family;
    font-weight: bold;
    margin-top: 2rem;
  }

.value{
    margin-top: 0;
    color: $accent;
    font-size: $sc-font-size;
}

.label{
    margin-bottom: 0;
}

.restrictions .value{
    font-size: 1rem;
}

input[type="text"]{
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1.5rem;
}

input[type="tel"]{
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1.5rem;
}

</style>