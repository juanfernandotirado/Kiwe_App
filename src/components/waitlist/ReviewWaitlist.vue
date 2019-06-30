<template>
  <div class="wait-list-info-container">
      <div class="section">
        <h4>Waiting list information</h4>
        <div>
        <h4 class="restName"> {{ currentListStatus.rName }}</h4>
        <div class="restaurant">
          <p>Party for: <span class="information"> {{ currentListStatus.grSize }}</span></p>
          <!-- <p>Group before you: {{rWaiting}}</p> -->
          <p>Accesibility needed: <span class="information"> {{assignAdditionalInfo(additionalInfo.accessibility)}} </span></p>
          <p>Seating preference: <span class="information"> {{assignAdditionalInfo(additionalInfo.seatingPreferences)}} </span></p>
          <button class="btn blue" v-on:click='EditInfo'>Edit information</button>
        </div>

      </div>

        <p>Estimated Waiting Time: {{ currentListStatus.estTime }} min.</p>
      </div>
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

<style scoped lang="scss">

  // .section {
  //   border: 2px solid green;
  //   margin: 2rem 0;
  // }

  .restaurant {
    border: 2px solid lightgreen;
    border-radius: 50px;
    margin: 2rem;
    padding-bottom: 1rem;
  }
  
  .restName{
    text-transform: capitalize;
  }
</style>

