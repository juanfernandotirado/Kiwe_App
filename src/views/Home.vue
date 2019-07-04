<template>
  <div class="home">
    <div v-if="!isInLine">
      <HelloWorld />
    </div>
    <div v-else>

      <div class="section">
        <WaitListInfo />
        <RestaurantMenu />
      </div>

      <div class="section">
        <DropOffConf />
      </div>

      <DropOffPop />
      <SuccessPopUp />
      <NotificationPopUp />

    </div>

    

  </div>
</template>

<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import WaitListInfo from '@/components/waitlist/WaitListInfo.vue';
import RestaurantMenu from '../components/restaurant/RestaurantMenu.vue';
import DropOffConf from '../components/waitlist/DropOffConfirmation.vue';
import DropOffPop from '../components/waitlist/DropOffPopUp.vue';
import SuccessPopUp from '../components/waitlist/SuccessPopUp.vue';
import NotificationPopUp from '../components/popups/NotificationPopUp.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    WaitListInfo,
    RestaurantMenu,
    DropOffConf,
    DropOffPop,
    SuccessPopUp,
    NotificationPopUp

   
  },
  data:function(){
    return{

    }
  },
  computed:{
    isInLine(){
      return this.$store.state.userStatus.isInLine
    },

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

<style scoped lang="scss">

  .section {
    border: 2px solid green;
    margin: 2rem 0;
  }
</style>

