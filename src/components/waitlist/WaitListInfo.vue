<template>
  <div class="wait-list-info-container">
        <h2 class="section-title">Your current Waiting List</h2>
        <h3 class="restName">{{ rName }}</h3>
        <p class="party">Party for</p>
          <p class="size">{{grSize}}</p>
        <p class="position">Position in the queue</p>
        <p class="spot"> {{currentSpot}}</p>

        <div class="restWaiting"> <b>Waiting Time:</b> 
          <div class="wait" > <span class="time">{{ assignWaitTime(grSize,selectedRes) }}</span><span class="min">min</span> </div>
          <!-- <div class="wait wait-notification" v-else> <span class="time"> 5 </span><span class="min">min</span> </div> -->
        </div>
        <!-- <p>Time you joined: {{ joinTime.getDate() }} {{ months[joinTime.getMonth()] }},  {{ joinTime.getHours() }}:{{ joinTime.getMinutes() }} </p> -->

    
  </div>
</template>

<script>
import firebase from 'firebase';  

export default {
  name:'WaitListInfo',

  components: {
  },
  
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
                return rest.estTime*currentSpot;
            }
            else if (grp <=mediumTable) {
                rest.estTime = mediumTableWait;
                return rest.estTime*currentSpot;
            }
            else if (grp <=bigTable) {
                rest.estTime = bigTableWait;
                return rest.estTime*currentSpot;
            }
      },

      
   
  },

   computed:{

     loadedWaitlistInfo(){
       return this.$store.state.loadedWaitlistInfo
     },

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
      return this.$store.state.currentListStatus.currentSpot;
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

    popupNotification(){
      return this.$store.state.popupNotification
    }

  },


  created(){
        
    let currentDate = new Date(this.$store.state.currentListStatus.joinTime);
        
    let formatDate = `${currentDate.getMonth()+1}-${currentDate.getDate()}-${currentDate.getFullYear()}`
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
         
      querySnapshot.docChanges().forEach(function(change){
        if(change.type==="added" || change.type==="removed") { 
          let item = change.doc.data();

          if (item.grSize <= grpLimitSmall) {
            spotCounter.smallGroup++;

            if(uid === item.uid){
              console.log("your spot!",spotCounter.smallGroup);
              that.$store.dispatch('updateSpot',spotCounter.smallGroup);
            }       
          }

          else if (item.grSize <= grpLimitMedium) {
            spotCounter.mediumGroup++;

            if(uid === item.uid){
              console.log("your spot!",spotCounter.mediumGroup);
              that.$store.dispatch('updateSpot',spotCounter.mediumGroup);
            }
          }

          else if (item.grSize <= grpLimitLarge) {
            spotCounter.bigGroup++;

              if(uid === item.uid){
                console.log("your spot!",spotCounter.bigGroup);
                that.$store.dispatch('updateSpot',spotCounter.bigGroup);
              }
          }
        }
            

      })
    })
    
  },

  // beforeUpdate(){
        
  //   let currentDate = new Date(this.$store.state.currentListStatus.joinTime);
        
  //   let formatDate = `${currentDate.getMonth()+1}-${currentDate.getDate()}-${currentDate.getFullYear()}`
  //   let rid = this.$store.state.selRest.rid;
  //   let uid = this.$store.state.currentListStatus.uid;
  //   let did = this.$store.state.currentListStatus.did;
       
  //   let grpLimitSmall = this.$store.state.selRest.sizeStandard.small;
  //   let grpLimitMedium = this.$store.state.selRest.sizeStandard.medium;
  //   let grpLimitLarge = this.$store.state.selRest.sizeStandard.large;


  //   let db = firebase.firestore();
  //   let that = this;

  //   db.collection("waitlist").where("rid", "==", rid).where("status", "==", 'waiting').where("date","==",formatDate)
  //   .onSnapshot(function(querySnapshot) {
  //     let spotCounter = {
  //           smallGroup:1,
  //           mediumGroup:1,
  //           bigGroup:1,
  //     }
         
  //     querySnapshot.docChanges().forEach(function(change){
  //       if(change.type==="added" || change.type==="removed"){ 
  //         let item = change.doc.data();

  //         if (item.grSize <= grpLimitSmall) {
  //           spotCounter.smallGroup++;

  //           if(uid === item.uid){
  //             console.log("your spot!",spotCounter.smallGroup);
  //             that.$store.dispatch('updateSpot',spotCounter.smallGroup);
  //           }
                  
  //         }

  //         else if (item.grSize <= grpLimitMedium) {
  //           spotCounter.mediumGroup++;

  //           if(uid === item.uid){
  //             console.log("your spot!",spotCounter.mediumGroup);
  //             that.$store.dispatch('updateSpot',spotCounter.mediumGroup);
  //           }

  //         }

  //         else if (item.grSize <= grpLimitLarge) {
  //           spotCounter.bigGroup++;

  //           if(uid === item.uid){
  //             console.log("your spot!",spotCounter.bigGroup);
  //             that.$store.dispatch('updateSpot',spotCounter.bigGroup);
  //           }
  //         }
  //       }
  //     })
  //   })
  // }
}
</script>

<style scoped lang="scss">

  @import "../../sass/_variables.scss";

  .restName{
    text-transform: uppercase;
    font-family: $sc-font-family;
    font-weight: bold;
    color:$accent;
    font-size: 1.2rem;
  }

  .section{
    border: 0px;
  }

  p{
    margin-bottom: 0rem;
    margin-top: 0rem;
  }

  .party, .position{
    text-transform: uppercase;
    font-family: $bt-font-family;
    font-weight: bold;
  }

  b{
    font-family: $bt-font-family;
    font-weight: bold;
  }

  .size, .spot{
        font-family: $sc-font-family;
    font-weight: bold;
    color:$accent;
    font-size: 22px;
  }

  

  
</style>

