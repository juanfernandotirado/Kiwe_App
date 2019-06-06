<template>
  <div class="wait-list-info-container">
        <p>Restaurant Name: {{ currentListStatus.restaurantName }}</p>
        <p>Current Spot: {{ currentListStatus.currentSpot }}</p>
        <p>Estimated Waiting Time: {{ currentListStatus.estTime }} min.</p>
  </div>
</template>

<script>

export default {
  name:'WaitListInfo',
  methods: {
  
   
  },
   computed:{
    currentListStatus(){
      return this.$store.state.currentListStatus
    }
  }
}
</script>
