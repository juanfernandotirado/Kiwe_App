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

  // beforeMount(){
  //   this.$store.dispatch('emptyStatus');

  // },

  beforeCreate(){

            // let did = this.$store.state.userStatus.currentWaiting;


            let db = firebase.firestore();
            let that = this;

            

            db.collection("restaurants").onSnapshot(function (querySnapshot){
              that.$store.dispatch('emptyRestDb');

              querySnapshot.forEach(function(doc){
                  console.log(doc.id, " => " , doc.data());


                  let restListdb = {
                            address: doc.data().address,
                            cuisine: doc.data().cuisine,
                            loginId: doc.data().loginId,
                            priceLevel: doc.data().priceLevel,
                            rName: doc.data().rName,
                            rImgRef: doc.data().rImgRef,
                            rid: doc.data().rid,
                            waitTime: doc.data().waitTime,
                            rating: doc.data().rating,
                            sizeStandard: doc.data().sizeStandard,
                            estTime: 0,
                            restaurantGallery:doc.data().restaurantGallery
                  }

                  that.$store.dispatch('assignRestDb', restListdb);
                  //Loaded All restaurant, hide loading
                  that.$store.dispatch('controlLoading', true);

                })

                let did = that.$store.state.userStatus.currentWaiting;


                db.collection("waitlist").doc(did).onSnapshot(function (doc) {

                  let currentWaiting = {
                    currentSpot : doc.data().currentSpot,
                    date : doc.data().date,
                    grSize : doc.data().grSize,
                    joinTime : doc.data().joinTime,
                    joinHour : doc.data().joinHour,
                    nickName : doc.data().nickName,
                    rName : doc.data().rName,
                    rid : doc.data().rid,
                  }

                  let restId = doc.data().rid;

                  let restList = that.$store.state.restaurantList;
                console.log(restList);

                let rest;


                for (rest of restList){
                  if (rest.rid === restId){
                    that.$store.dispatch('assignRest', rest);
                    console.log(that.$store.state.selRest);

                  }
                }

                that.$store.dispatch('getWaitingSetCurrent', currentWaiting);
                that.$store.dispatch('controlLoadingWaitlist', true);

            })

              


            })

        
  },

  created(){

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
                                          preferences: doc.data().profile,
                                          history: doc.data().history, 
                                          currentWaiting: doc.data().currentWaiting,                                    
                                         }
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

