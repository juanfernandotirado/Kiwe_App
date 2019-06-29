<template>
  <div class="wait-list-info-container">
        <h3>Waiting list information</h3>
        <div>
        <h4 class="restName">Restaurant Name: {{ currentListStatus.rName }}</h4>
        <p>Party for: <span class="information"> {{ currentListStatus.grSize }}</span></p>
        <p>Group before you: {{rWaiting}}</p>
        <p>Accesibility needed: <span class="information"> {{assignAdditionalInfo(additionalInfo.accessibility)}} </span></p>
        <p>Seating preference: <span class="information"> {{assignAdditionalInfo(additionalInfo.seatingPreferences)}} </span></p>
        </div>

        <button class="btn blue" v-on:click='EditInfo'>Edit</button>

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

  methods: {
    
    EditInfo:function(){

    },

    assignGroupSpot:function(){
      let grSize = this.$store.state.currentListStatus.grSize;
      let smallTable = this.$store.state.selRest.sizeStandard.small;
      let mediumTable = this.$store.state.selRest.sizeStandard.medium;
      let largeTable = this.$store.state.selRest.sizeStandard.large;

      let smallGroupSpot = this.$store.state.selRest.spot.smallGroup;
      let mediumGroupSpot = this.$store.state.selRest.spot.mediumGroup;
     
    },

    assignAdditionalInfo:function(addInfo){

      if (addInfo === '' || addInfo === ''){
        return 'None';
      }

      else {
        return addInfo;
      }

    }
  },
  computed:{

    rWaiting(){
      return this.$store.state.selRest.groupSpot
    },

    currentListStatus(){
      return this.$store.state.currentListStatus
    },

    additionalInfo(){
      return this.$store.state.additionalInfo
    }

  }
}
</script>

<style scoped>
  
  .restName{
    text-transform: capitalize;
  }
</style>

