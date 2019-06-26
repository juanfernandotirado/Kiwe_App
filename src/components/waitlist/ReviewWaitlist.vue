<template>
  <div class="wait-list-info-container">
        <h3>Waiting list information</h3>
        <h4 class="restName">Restaurant Name: {{ currentListStatus.rName }}</h4>
        <p>Group Before you: {{currentSpot}}</p>
        <p>Estimated Waiting Time: {{ currentListStatus.estTime }} min.</p>
  </div>
</template>

<script>
import firebase from 'firebase';
import { constants } from 'crypto';

export default {
  name:'ReviewList',

  data:function(){
    return {
      
    }
   
  },

  methods: {
  
   
  },
   computed:{

    rName(){
      return this.$store.state.selRest.rName
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

