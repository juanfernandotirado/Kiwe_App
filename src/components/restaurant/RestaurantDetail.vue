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

      <Seating/>
   
    <button v-on:click="nextPage" class="btn orange">Add me to waiting list</button>
    <button v-on:click="backPage" class="btn blue">Go back</button>
  </div>
</template>

<script>

import Seating from '../main/Seating.vue'
import firebase from 'firebase';




export default {
    components: {
      Seating,
    },

    name: "RestaurantList",
 
    data(){
        return{
           
        }
    },

    created() {

      let currentDate = new Date(this.$store.state.currentListStatus.joinTime);

        let formatDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`
        let rid = this.$store.state.selRest.rid;
        let grSize = this.$store.state.currentListStatus.grSize;

        let db = firebase.firestore();

        let that = this;

        db.collection('waitlist').where("rid", "==", rid).where("status", "==", 'waiting').where("date", "==", formatDate).orderBy("joinTime", "desc").onSnapshot(function(querySnapshot) {
          let spotCounter = {
            group:0,
          }

          querySnapshot.forEach(function(doc){
            let item = doc.data();
            spotCounter.group++;
            that.$store.dispatch('rUpdateSpot', spotCounter.group);
          
            //console.log('Item from database');
            //console.log(spot);
          })
          console.log('Item from database');
          console.log(spotCounter.group);

        })

    },

    methods: {

      nextPage:function() {

      console.log('selectedRest');
      console.log(this.$store.state.selRest);

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


