<template>
  <div class="wait-list-info-container">
        <h3>Waiting list information</h3>
        <h4 class="restName">Restaurant Name: {{ currentListStatus.rName }}</h4>
        <p>Group before you: {{rWaiting.spot}}</p>
        <p>Estimated Waiting Time: {{ currentListStatus.estTime }} min.</p>
  </div>
</template>

<script>

export default {
  name:'ReviewList',

  data:function(){
    return {
      
    }
   
  },

  created(){

    

    

  },

  methods: {

    //   assignRestWait:function(){
    //   }
  },
   computed:{

    rWaiting(){
      return this.$store.state.selRest
    },

    currentListStatus(){
      return this.$store.state.currentListStatus
    }

  }
}
</script>

<style scoped>
  
  .restName{
    text-transform: capitalize;
  }
</style>

