<template>
  <div class="home">
    <div v-if="!isInLine">
      <HelloWorld />
    </div>
    <div v-else>
      <WaitListInfo />
      <DropOffConf />
      <DropOffPop />

      <SuccessPopUp />

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
import SuccessPopUp from '../components/waitlist/SuccessPopUp.vue';


export default {
  name: 'home',
  components: {
    HelloWorld,
    WaitListInfo,
    DropOffConf,
    DropOffPop,
    SuccessPopUp

   
  },
  data:function(){
    return{

    }
  },
  computed:{
    isInLine(){
      return this.$store.state.userStatus.isInLine
    },

    // popUpSuccessShow(){
    //   return this.$store.state.popUpSuccessShow
    // }

  },

  created(){

    let db = firebase.firestore();
    let that = this;

    db.collection("restaurants").get().then(function (querySnapshot){
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
        }

        that.$store.dispatch('assignRestDb', restListdb);

      })

    })

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

</style>

