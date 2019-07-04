<template>
  <div class="restaurant-detail">
    <!-- <h1>Restaurant Details</h1> -->

    <button v-on:click="backPage" class="btn btn-round goBack">B</button>


    <div class="section">
      <h4>(Menu gallery component here)</h4>
      <h4 class="restInfoFil"> {{selectedRes.rName}} </h4>

      <section class="selectedRest">

        <div class="restInformation">
          <div>
            <div class="restInfo">Rating: </div>
            <div class="restInfoFil"> {{selectedRes.rating}} </div>
          </div>
          <div>
            <div class="restInfo">Cuisine: </div>
            <div class="restInfoFil"> {{selectedRes.cuisine}} </div>
          </div>
          <div>
            <div class="restInfo">Address: </div>
            <div class="restInfoFil"> {{selectedRes.address}} </div>
          </div>
          <div>
            <div class="restInfo">Price Level: </div>
            <div class="restInfoFil"> {{selectedRes.priceLevel}} </div>
          </div>
        </div>

        <div class="restWaiting">
          <div class="restInfo">Waiting time: </div>
          <div class="restInfoFil wait"> {{selectedRes.estTime}} min</div>
        </div>
      </section>

        <Seating/>
    
      <button v-on:click="nextPage" class="btn btn-text">I'm ready!</button>
    </div>

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

    methods: {

      nextPage:function() {

      console.log('selectedRest');
      console.log(this.$store.state.selRest);

      this.$router.push('reviewList');
      },


      backPage:function() {
        this.$router.push('restaurant');
      }
    },

    computed: {
      selectedRes(){
        return this.$store.state.selRest
      }
    }
}
</script>

<style scoped lang="scss">

.goBack {
  display: flex;
  margin: 0 !important;
}

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

.selectedRest {
  display: flex;
  justify-content: space-between;

  .restInformation {
    text-align-last: left;
  }

}




// .rest {
//     text-align: left,
// }

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


