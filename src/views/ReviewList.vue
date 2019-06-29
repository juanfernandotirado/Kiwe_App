<template>
  <div class="wait-list-info-container">
        <p class="restName">Restaurant Name: {{ currentListStatus.rName }}</p>
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

  }
}
</script>

<style scoped lang="scss">
  
  .restName{
    text-transform: capitalize;
  }
</style>

