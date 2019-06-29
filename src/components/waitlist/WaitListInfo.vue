<template>
  <div class="wait-list-info-container">
        <h2>Hello {{uName}} </h2>
        <p>In a party for {{grSize}}</p>
        <p class="restName">Your spot at: {{ rName }}</p>
        <p>Current Spot: {{currentSpot}}</p>
        <p>Estimated Waiting Time: {{ assignWaitTime(grSize,selectedRes) }} min.</p>
        <p>Time you joined: {{ joinTime.getDate() }} {{ months[joinTime.getMonth()] }},  {{ joinTime.getHours() }}:{{ joinTime.getMinutes() }} </p>

    
  </div>
</template>

<script>
import firebase from 'firebase';

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
      assignWaitTime:function(grp, rest){
            let currentSpot = this.$store.state.currentListStatus.currentSpot;
            let smallTable = rest.sizeStandard.small;
            let mediumTable = rest.sizeStandard.medium;
            let bigTable = rest.sizeStandard.large;
            let smallTableWait = rest.waitTime.small;
            let mediumTableWait = rest.waitTime.medium;
            let bigTableWait = rest.waitTime.large;
            

            if (grp <= smallTable) {
                rest.estTime = smallTableWait;
                console.log(rest.estTime);
                return rest.estTime*currentSpot;
            }
            else if (grp <=mediumTable) {
                rest.estTime = mediumTableWait;
                //console.log(rest.estTime);
                return rest.estTime*currentSpot;
            }
            else if (grp <=bigTable) {
                rest.estTime = bigTableWait;
                console.log(rest.estTime);
                return rest.estTime*currentSpot;
            }
        }  
   
  },
   computed:{

    uName(){
      return this.$store.state.userStatus.nickName
    },

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

    grSize(){
      return this.$store.state.currentListStatus.grSize;
    },

    selectedRes(){
      return this.$store.state.selRest
    },

    
    
  },
  created(){
        let currentDate = new Date(this.$store.state.currentListStatus.joinTime);
        
        let formatDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`
        let rid = this.$store.state.selRest.rid;
        let uid = this.$store.state.currentListStatus.uid;
        let did = this.$store.state.currentListStatus.did;
       
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
        })
  
       

    }
}
</script>

<style scoped>
  
  /* .restName{
    text-transform: capitalize;
  } */
</style>

