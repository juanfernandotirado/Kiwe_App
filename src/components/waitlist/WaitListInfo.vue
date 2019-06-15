<template>
  <div class="wait-list-info-container">
        <p class="restName">Restaurant Name: {{ currentListStatus.rName }}</p>
        <p>Current Spot: {{ currentListStatus.currentSpot }}</p>
        <p>Estimated Waiting Time: {{ currentListStatus.estTime }} min.</p>
        <p>Time you joined: {{ currentListStatus.joinTime.getDate() }} {{ months[currentListStatus.joinTime.getMonth()] }},  {{ currentListStatus.joinTime.getHours() }}:{{ currentListStatus.joinTime.getMinutes() }} </p>
  </div>
</template>

<script>

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
      "December"]
    }
   
  },

  methods: {
  
   
  },
   computed:{
    currentListStatus(){
      return this.$store.state.currentListStatus
    },
    selRest(){
      return this.$store.state.selRest
    }
  }
}
</script>

<style scoped>
  
  .restName{
    text-transform: capitalize;
  }
</style>

