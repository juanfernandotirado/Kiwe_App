<template>
  <div class="section">
    <h2 class="section-title">Featured Restaurants</h2>

    <!-- <carousel class="carousel" :scrollPerPage="false" :loop="true" :centerMode="true">
      <slide class="slide" v-for="(item,index) in restList" v-bind:key="index" @slideclick='handleSlideClick' :data-item="index">
        <img class="img-cover" :src="compileUrl(item.rImgRef)" >
        <div class="restaurant-information">
          <div class="imageRestaurantGeneralInfo">
            <p class="imageRestaurantInformation name"> {{ item.rName }}</p>    
            <p class="imageRestaurantInformation"> {{item.cuisine}} </p>
            <p class="imageRestaurantInformation"> Raiting: {{ item.rating }}</p>
            <p class="imageRestaurantInformation"> Address: {{ item.address }}</p>
            <p class="imageRestaurantInformation"> Price Level: {{ item.priceLevel }}</p>
          </div>

          <div class="restWaiting">Est. Waiting Time: 
            <div class="wait">{{ item.estTime }} min</div>
          </div>
        </div>
        
      </slide>
   
      </carousel> -->
      <div class="feature-restaurant-container">
        <div class="feature-item" v-for="(item,index) in restList" :key="index" v-on:click="selectedRest(item)">
          <img class="img-cover" :src="compileUrl(item.rImgRef)">
        </div>  
      </div>
  </div>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'Slider',

  components: {
    Carousel,
    Slide
  },

  data:function(){
    return{
      slider: [],
      pro: [],
      urlPart: 'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyCxKHIpSrggNO7p1N-n7V0FkJ8DohiK9MQ&maxwidth=400&photoreference='
    }
  },

  methods: {

    compileUrl:function(item){
        return this.urlPart + item;
      },
   

    selectedRest: function(item) {
      console.log(item);
      this.$store.dispatch('assignRest', item).then(
        this.$router.push('restDetail')
      )
    },

    handleSlideClick: function (dataset) {
      this.selectedRest(this.$store.state.restaurantList[dataset.item]);
    }

  },
  computed:{
     restList(){
            return this.$store.state.restaurantList
        },
  },
  
}
</script>

<style scoped lang="scss">
@import '../../sass/_variables.scss';

.carousel{

  height: 500px;
}

.slide {
  margin: 0 1%;
  height: 200px;
  position: relative;


  .img-cover{
  // position: absolute;
  // z-index: 10;
  // width: 100%;
  // $sc-border-radius: 20px;
  }
  .restaurant-information {
    // width: 400px;
    margin: auto;
  }
}

  .feature-restaurant-container
  { display: flex;  
    overflow-x: auto;
    overflow-y: hidden;
    height: 160px;
    align-items: center;
    margin: 0 1rem .5rem;
   

    .feature-item{
       margin-right: 8px;
       border-radius: 10px;
       display: block;
       height: 160px;

    }

    .img-cover {   
       border-radius: 10px;
       display: block;
       height: 160px;
       width: auto;
    }

    &::-webkit-scrollbar {    display: none;}


    }




</style>

