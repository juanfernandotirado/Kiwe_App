<template>
  <div class="restaurant-detail">
    <h1>Restaurant Details</h1>
    <section class="restDet">
      <div>
        <div class="restInfo">Restaurant Name: </div>
        <div class="restInfoFil"> {{selectedRes.name}} </div>
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
        <div class="restInfoFil"> {{selectedRes.waitTime}} </div>
      </div>
    </section>
    <button v-on:click="nextPage">Add me to waiting list</button>
    <router-link to="/restList" class="routerLinks">Go back</router-link>
  </div>
</template>

<script>


export default {
    name: "RestaurantList",
 
    data(){
        return{
           
        }
    },

    methods: {

      nextPage:function() {
        this.$router.push('testJuan');

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
}

.restDet {
  padding: 1.5rem;
}

</style>


