<template>
  <div class="restaurant-detail">
    <h1>Restaurant Detail</h1>
    <!-- <div>{{selectedRes}}</div> -->
    <div  v-for="(val,key) in selectedRes" 
    v-bind:key="(val,key)">
      <div class="restInfo">{{ key }}: </div>
      <div class="restInfoFil"> {{ val }}</div>
    </div> 
    <div class="routerLinks">
      <router-link to="/testjuan" > 
        <span > Add me to Waiting list </span>
      </router-link>
    </div>
    <router-link to="/restList">Go back</router-link>
  </div>
</template>

<script>

export default {
    name: "RestaurantList",

    data(){
        return{
           
        }
    },

    method: {
      chosenRest: function (){
        this.$store.state.currentStatusList.rid = this.$store.state.selRest.rid;
        return this.$store.state.currentStatusList.rid;
        // console.log(this.$store.state.currentStatusList.rid);
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



</style>


