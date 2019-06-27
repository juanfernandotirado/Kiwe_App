<template>
  <div class="wait-list-info-container">
        <h3>Waiting list information</h3>
        <h4 class="restName">Restaurant Name: {{ currentListStatus.rName }}</h4>
        <p>Group Before you: {{rWaiting.spot}}</p>
        <p>Estimated Waiting Time: {{ currentListStatus.estTime }} min.</p>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name:'ReviewList',

  data:function(){
    return {
      
    }
   
  },

  created(){

    let currentDate = new Date(this.$store.state.currentListStatus.joinTime);

    let formatDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`
    let rid = this.$store.state.selRest.rid;
    let grSize = this.$store.state.currentListStatus.grSize;
    let spot = 0;

    let db = firebase.firestore();

    let that = this;

    db.collection('waitlist').where("rid", "==", rid).where("status", "==", 'waiting').where("date", "==", formatDate).orderBy("joinTime", "desc").onSnapshot(function(querySnapshot) {
      let spotCounter = {
        group:0,
      }

      querySnapshot.forEach(function(doc){
        let item = doc.data();
        spotCounter.group++;

        
        
        //console.log('Item from database');
        //console.log(spot);
      })
      console.log('Item from database');
        console.log(spotCounter.group);
        that.$store.dispatch('rUpdateSpot', spotCounter.group);

    })


    
  },

  methods: {

    //   assignRestWait:function(){
    //   }
  },
   computed:{

    rWaiting(){
      return this.$store.state.selRest
    },

    currentListStatus(){
      return this.$store.state.currentListStatus
    }

  }
}
</script>

<style scoped>
  
  .restName{
    text-transform: capitalize;
  }
</style>

