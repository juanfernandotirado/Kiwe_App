<template>
  <div class="user-profile">
    <div class="section">
      <Profile/>
      <button v-on:click="logout" class="btn red">Log out</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import Profile from '../components/main/Profile.vue'


export default {
  name:'UserProfile',

  components: {
    Profile
  },

  methods: {
    logout: function(){
      firebase.auth().signOut().then(()=>{
        this.$router.replace('login');
      }).catch(err => {
        console.log('Err', err);
      })
    },
   
  },
   mounted(){
    const currentUser = firebase.auth().currentUser;
    if(!currentUser){
       this.$router.replace('login');
    }
  }
}
</script>

<style scoped lang="scss">

</style>


