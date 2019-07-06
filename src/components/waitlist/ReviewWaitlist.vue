<template>
  <div>

      <div>
        <h2 class="section-title">Waiting list information</h2>
        <div>
          <h3 class="restaurant-name"> {{ currentListStatus.rName }}</h3>
          <div class="restaurant">
            <p class="section-content">Party for </p>
            <p class="section-information-number"> {{ currentListStatus.grSize }}</p>
            <!-- <p>Group before you: {{rWaiting}}</p> -->
            <p class="section-content">Accesibility needed </p>
            <p class="section-information-text"> {{assignAdditionalInfo(additionalInfo.accessibility)}} </p>
            <p class="section-content">Seating preference </p>
            <p class="section-information-text"> {{assignAdditionalInfo(additionalInfo.seatingPreferences)}} </p>
            <button class="btn btn-text" v-on:click='EditInfo'>Edit information</button>
          </div>

        </div>

      
        <div class="rest-waiting"> 
          <div>Waiting time</div>
          <div class="wait">
            <span class="time"> 
              {{ currentListStatus.estTime }} 
            </span> 
            <span class="min"> 
              min 
            </span> 
          </div>
        </div>
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

@import "../../sass/_variables.scss";

  .section {
    border: none;
  }

  .section-content,
  .section-information-number,
  .section-information-text {
    margin: 1vh auto 1vh auto;
  }

  .section-content {
    text-transform: uppercase;
    font-family: $bt-font-family;
    font-weight: bold;
  }

  .section-information-text,
  .section-information-number {
    font-family: $bt-font-family;
    font-weight: bold;
    color:$accent;
  }

  .section-information-number {
    font-size: 1.5rem;
  }


  .restaurant {
    border: 2px solid $main-green;
    border-radius: 50px;
    margin: 2rem;
    padding-bottom: 1rem;
  }
  
  .restName{
    text-transform: capitalize;
  }
</style>

