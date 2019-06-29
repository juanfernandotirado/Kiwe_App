<template>
  <div class="user-profile">
    <button v-on:click="logout" class="btn red">Log out</button>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name:'UserProfile',
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


