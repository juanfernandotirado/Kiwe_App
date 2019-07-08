<template>
  <div class="user-profile">
    <div class="section">
      <Profile/>
    </div>

    <div class="section">
      <UserHistory />
    </div>

    <div class="section">
      <button v-on:click="logout" class="btn btn-text">Log out</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import Profile from '../components/main/Profile.vue'
import UserHistory from '../components/main/UserHistory.vue'


export default {
  name:'UserProfile',

  components: {
    Profile,
    UserHistory
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


