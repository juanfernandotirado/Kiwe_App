<template>
  <div class="slider">
    <h3>Featured Restaurants</h3>

    <carousel>
  <slide v-for="(item, index) in slider" v-bind:key="index">
    <img :src="compileUrl(item.rImgRef) " v-on:click='selectedRest(item)'> 
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
          return this.urlPart + item
        },
   

      selectedRest: function(item) {

        console.log(item);
        this.$store.dispatch('assignRest', item).then(
        this.$router.push('restDetail')
        )
      }

    },

    computed: {
        
      },

     

      created(){
          //let pro = item;
          let that = this;

          this.slider = this.$store.state.restaurantList.map(item =>{
            let rest = item;
            that.pro.push(rest.rImgRef);
                                  //console.log(that.pro);

              return item
              //imgRef = ;
              //return 'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyCxKHIpSrggNO7p1N-n7V0FkJ8DohiK9MQ&maxwidth=400&photoreference=' + rest.rImgRef
          })
          console.log(that.pro); 




          
          
      }

//  https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyCxKHIpSrggNO7p1N-n7V0FkJ8DohiK9MQ&maxwidth=400&photoreference=

    
  
}
</script>
