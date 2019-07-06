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
import DropOffPop from '../components/popups/DropOffPopUp.vue';
import SuccessPopUp from '../components/popups/SuccessPopUp.vue';
import NotificationPopUp from '../components/popups/NotificationPopUp.vue';
import firebase from 'firebase';

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

      const currentUser = firebase.auth().currentUser;
        console.log('Pe',currentUser)
        if(currentUser)
        {     
              if(!this.$store.state.userStatus.nickName)
              {
              let db = firebase.firestore();
              //Get user profile information
              let docRef = db.collection("users").doc(currentUser.uid);
                  docRef.get().then((doc) => {
                      if (doc.exists) {
                          console.log("Document data:", doc.data());
                          const userStatus = {
                                          uid: currentUser.uid,
                                          isInLine: doc.data().isInLine,
                                          nickName: doc.data().nickName,
                                          profile: doc.data().profile,
                                          phone: doc.data().phone,  
                                          preferences: doc.data().profile,                                      }
                          //Set UserStatus to store
                          this.$store.dispatch('getUserStatus',userStatus);
                      } else {
                          // doc.data() will be undefined in this case
                          console.log("No such document!");
                      }
                  }).catch((err) => {
                      console.log("Error getting document:", err);
                       this.errMsg = err;
                  });
              }
        }
  }

 
}
</script>

<style scoped lang="scss">

  @import "../sass/_variables.scss";

  

  .section {
    border: 0;
    margin: 2rem 0;
    
  }
</style>

