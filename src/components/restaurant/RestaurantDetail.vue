<template>
  <div class="restaurant-detail">
    <h1>Restaurant Details</h1>
    <section class="restDet">
      <div>
        <div class="restInfo">Restaurant Name: </div>
        <div class="restInfoFil"> {{selectedRes.rName}} </div>
      </div>
      <div>
        <div class="restInfo">Address: </div>
        <div class="restInfoFil"> {{selectedRes.address}} </div>
      </div>
      <div>
        <div class="restInfo">Rating: </div>
        <div class="restInfoFil"> {{selectedRes.rating}} </div>
      </div>
      <div>
        <div class="restInfo">Price Level: </div>
        <div class="restInfoFil"> {{selectedRes.priceLevel}} </div>
      </div>
      <div>
        <div class="restInfo">Waiting time: </div>
        <div class="restInfoFil wait"> {{selectedRes.estTime}} min</div>
      </div>
    </section>
    <!-- <createQRcode/>   -->
    <button v-on:click="nextPage" class="btn orange">Add me to waiting list</button>
    <button v-on:click="backPage" class="btn blue">Go back</button>
  </div>
</template>

<script>

import createQRcode from '../main/CreateQRcode.vue'
import firebase from 'firebase'


export default {
    components: {
      createQRcode
    },

    name: "RestaurantList",
 
    data(){
        return{
           
        }
    },

    methods: {

      nextPage:function() {
        console.log('selectedRest');
        console.log(this.$store.state.selRest);
        let currentDate = this.$store.state.currentListStatus.joinTime;
        let rid = this.$store.state.selRest.rid;
        let grpSize = this.$store.state.currentListStatus.groupSize;
        let grpLimitSmall = this.$store.state.selRest.sizeStandard.small;
        let grpLimitMedium = this.$store.state.selRest.sizeStandard.medium;
        let grpLimitLarge = this.$store.state.selRest.sizeStandard.large;
        let spot = ['someone is waiting'];

        let db = firebase.firestore();
        let that = this;

        db.collection("waitlist").where("rid", "==", rid).where("status", "==", 'waiting').onSnapshot(function(querySnapshot) {
          let spotCounter = {
            smallGroup:1,
            mediumGroup:1,
            bigGroup:1,
          }
          querySnapshot.forEach(function(doc){
            let item = doc.data();
            if (item.grSize <= grpLimitSmall) {
              item.currentSpot = spotCounter.smallGroup;
              // spot.push('someone is waiting');
              spotCounter.smallGroup++;
              that.$store.dispatch('updateSpot');
              // return that.$store.state.currentListStatus.currentSpot;
            }
            else if (item.grSize <= grpLimitMedium) {
              // spot.push('someone is waiting');
              // spotCounter.mediumGroup++;
              that.$store.dispatch('updateSpot');

            }
            else if (item.grSize <= grpLimitLarge) {
              // spot.push('someone is waiting');
              // spotCounter.bigGroup++;
              that.$store.dispatch('updateSpot');

            }

          })
          console.log(spot);

          
        })



        this.$router.push('testJuan');
      },

      backPage:function() {
        this.$router.push('test1');
      }

    },

    computed: {
      selectedRes(){
        // console.log(this.$store.state.restaurantList)
        return this.$store.state.selRest
      }
    }
}
</script>

<style scoped lang="scss">

.routerLinks {
  display: block;
}

ul {
    margin: 2rem;
}
li {
    border: 1px solid salmon;
    margin: 2rem auto;
    padding-left: 10px;    
}


.rest {
    text-align: left,
}

.restInfo, .restInfoFil {
    display: inline-block,
}

.restInfo {
    font-weight: bold,
}

.restInfoFil {
    margin-left: 5px;
    text-transform: capitalize;
}

.restDet {
  padding: 1.5rem;
}

.wait {
  text-transform: lowercase;
}

.btn {
  display: block;
  margin: 1rem auto;
}

</style>


