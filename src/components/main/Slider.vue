<template>
  <div class="slider">
    <h4>Featured Restaurants</h4>

    <carousel class="carousel" :scrollPerPage="false" :loop="true" :centerMode="true" :autoplay="true" :speed="1500">
  <slide class="slide" v-for="(item,index) in restList" v-bind:key="index" @slideclick='handleSlideClick' :data-item="index">
    <img class="img" :src="compileUrl(item.rImgRef)" >
    <p> {{ item.rName }}</p>    
    <p> Raiting: {{ item.rating }}</p>
    <p> Price Level: {{ item.priceLevel }}</p>
    <p> Address: {{ item.address }}</p>
    <p> Estimated Waiting Time: {{ item.estTime }}</p>
    
  </slide>
   
</carousel>

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
.carousel{


}

.slide {

}

.img {
 width: 300px;
 
 margin-left: 2%;
 margin-right: 2%;

}
</style>

