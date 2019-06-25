<template>
  <div class="home">
    <div v-if="!isInLine">
      <HelloWorld />
    </div>
    <div v-else>
      <WaitListInfo />
      <DropOffConf />
      <DropOffPop />
    </div>
  
    

  </div>
</template>

<script>
import firebase, { firestore } from 'firebase';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import WaitListInfo from '@/components/waitlist/WaitListInfo.vue';
import DropOffConf from '../components/waitlist/DropOffConfirmation.vue';
import DropOffPop from '../components/waitlist/DropOffPopUp.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    WaitListInfo,
    DropOffConf,
    DropOffPop
   
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
