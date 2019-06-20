<template>
  <div class="home">
    <div v-if="!isInLine">
      <HelloWorld />
    </div>
    <div v-else>
      <WaitListInfo />
    </div>
  
    

  </div>
</template>

<script>
import firebase, { firestore } from 'firebase';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import WaitListInfo from '@/components/waitlist/WaitListInfo.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    WaitListInfo
   
  },
  data:function(){
    return{

    }
  },
  computed:{
    isInLine(){
      return this.$store.state.userStatus.isInLine
    }
  },
  mounted(){
    //functiom provided by vue. Run each time we go to a component. 
    //currentUser is all the information about the user. 
  
    // if(!currentUser){
    //   //if the user is not logged in, go to login page
    //    this.$router.replace('login');
    // }
  }
 
}
</script>
