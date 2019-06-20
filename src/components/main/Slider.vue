<template>
  <div class="slider">
    <h1>Slider</h1>

    <carousel>
  <slide v-for="(url, index) in slider" v-bind:key="index">
    <img :src=" url "> 
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
      slider: []
    }
    },

    methods: {
   

    },

    computed: {
      
      },

     

      created(){
                 
          this.slider = this.$store.state.restaurantList.map(item =>{
              return 'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyCxKHIpSrggNO7p1N-n7V0FkJ8DohiK9MQ&maxwidth=400&photoreference=' + item.rImgRef
          }) 
          
      }



    
  
}
</script>
