<template>
  <div class="wait-list-info-container">
        <p class="restName">Restaurant Name: {{ rName }}</p>
        <p>Current Spot: {{currentSpot}}</p>
        <p>Estimated Waiting Time: {{ estTime }} min.</p>
        <p>Time you joined: {{ joinTime.getDate() }} {{ months[joinTime.getMonth()] }},  {{ joinTime.getHours() }}:{{ joinTime.getMinutes() }} </p>
  </div>
</template>

<script>
import firebase from 'firebase';
import { constants } from 'crypto';

export default {
  name:'WaitListInfo',

  data:function(){
    return {
       months:["January", 
      "February", 
      "March", 
      "April", 
      "May", 
      "June", 
      "July", 
      "August", 
      "September", 
      "October", 
      "November", 
      "December"],
      
    }
   
  },

  methods: {
  
   
  },
   computed:{

    rName(){
      return this.$store.state.currentListStatus.rName
    },

    estTime(){
       return this.$store.state.currentListStatus.estTime
    },

    currentSpot(){
      return this.$store.state.currentListStatus.currentSpot
    },

     joinTime(){
      return new Date(this.$store.state.currentListStatus.joinTime);
    },
    
  },
  updated(){
        let currentDate = new Date(this.$store.state.currentListStatus.joinTime);
        
        let formatDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`
        let rid = this.$store.state.selRest.rid;
        let uid = this.$store.state.currentListStatus.uid;
        let grpLimitSmall = this.$store.state.selRest.sizeStandard.small;
        let grpLimitMedium = this.$store.state.selRest.sizeStandard.medium;
        let grpLimitLarge = this.$store.state.selRest.sizeStandard.large;

        let db = firebase.firestore();
        let that = this;

        db.collection("waitlist").where("rid", "==", rid).where("status", "==", 'waiting').where("date","==",formatDate)
        .onSnapshot(function(querySnapshot) {
          let spotCounter = {
            smallGroup:0,
            mediumGroup:0,
            bigGroup:0,
          }
          console.log(querySnapshot);
          querySnapshot.forEach(function(doc){
            let item = doc.data();
            if (item.grSize <= grpLimitSmall) {
            
              spotCounter.smallGroup++;
              if(uid === item.uid)
              {
                console.log("your spot!",spotCounter.smallGroup);
                that.$store.dispatch('updateSpot',spotCounter.smallGroup);
              }
              
            }
            else if (item.grSize <= grpLimitMedium) {
              spotCounter.mediumGroup++;
               if(uid === item.uid)
              {
                console.log("your spot!",spotCounter.mediumGroup);
                that.$store.dispatch('updateSpot',spotCounter.mediumGroup);
              }

            }
            else if (item.grSize <= grpLimitLarge) {
              spotCounter.bigGroup++;
               if(uid === item.uid)
              {
                console.log("your spot!",spotCounter.bigGroup);
                that.$store.dispatch('updateSpot',spotCounter.bigGroup);
              }
            }

          })
            
            console.log(spotCounter);

          
        })
    }
}
</script>
