<template>
  <div class="drop-off-confirmation">
      <h1>Hello Peter</h1>
      
        <!-- <div v-for="(value, name, index) in currentListStatus" v-bind:key="index"><p>{{ name }}={{ value }}</p></div> -->

        <p>Restaurant Name: {{ currentListStatus.restaurantName }}</p>
        <p>Current Spot: {{ currentListStatus.currentSpot }}</p>
        <p>Estimated Waiting Time: {{ currentListStatus.estTime }} min.</p>

        <button class="btn">Drop-off</button>

      
  </div>
</template>

<script>

export default {
  name:'Drop-off-confirmation',
  methods: {
  
   
  },

  computed:{
    currentListStatus(){
      return this.$store.state.currentListStatus
    }
  }
}
</script>
