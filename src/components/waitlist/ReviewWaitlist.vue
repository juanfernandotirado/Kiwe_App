<template>
  <div>

      <div>
        <h2 class="section-title">Waiting list information</h2>
        <div>
          <h3 class="restaurant-name"> {{ currentListStatus.rName }}</h3>
          <div class="restaurant" v-show="!show">
            <p class="section-content">Party for </p>
            <p class="section-information-number"> {{ currentListStatus.grSize }}</p>
            <!-- <p>Group before you: {{rWaiting}}</p> -->
            <p class="section-content">Accesibility needed </p>
            <p class="section-information-text"> {{assignAdditionalInfo(additionalInfo.accessibility)}} </p>
            <p class="section-content">Seating preference </p>
            <p class="section-information-text"> {{assignAdditionalInfo(additionalInfo.seatingPreferences)}} </p>



            <button class="btn btn-text" @click='show=!show' v-show="!show">Edit information</button>
          </div>

        </div>

        <div class="edit-info restaurant" v-show="show">
         <GroupSize/>
         <Accesibility/>
         <Seating/>

          <button class="btn btn-text" @click="show=!show">Save</button>
          
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

import GroupSize from '../main/GroupSize.vue'
import Accesibility from '../main/Accesibility.vue'
import Seating from '../main/Seating.vue'

export default {
  name:'ReviewList',

  data:function(){
    return {
      show:false,
    }
   
  },

  components: {
    GroupSize,
    Accesibility,
    Seating
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
        return 'Not applicable';
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
    margin-bottom: 0;
    margin-top: 1rem;
  }

  .section-information-text,
  .section-information-number {
    font-family: $bt-font-family;
    font-weight: bold;
    color:$accent;
    margin-top: 0;
    margin-bottom: 1.5rem;
    line-height: 1;
  }

  .section-information-number {
    font-size: 1.5rem;
    margin-bottom: 1rem;
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

  .additional-info {
    margin: 1.5rem 0;
  }
</style>

