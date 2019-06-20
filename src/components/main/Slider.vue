<template>
  <div class="slider">
    <h1>Slider</h1>

    <carousel>
  <slide> <!--v-for="(item, index) in slides" v-bind:key="index">-->
    <!-- <img :src="'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyCxKHIpSrggNO7p1N-n7V0FkJ8DohiK9MQ&maxwidth=400&photoreference=' + "> -->
  
  IMG 1
  
  </slide>
  <slide>

    IMG 2

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
    }
    },

    methods: {
   

    },

    computed: {
      slides(){
          return slides = [];
      },



    }
  
}
</script>
