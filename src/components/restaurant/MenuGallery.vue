<template>
  <div class="menu-gallery">
    <h5>Menu Gallery</h5>
    <div class="gallery-container">
      <div class="gallery-item" v-for="item in restaurantImgs" :key="item.photo_reference">
          <img class="responsive-img" :src="'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyCxKHIpSrggNO7p1N-n7V0FkJ8DohiK9MQ&maxwidth=400&photoreference='+item.photo_reference" :alt="item.html_attributions[0]">
          <!-- <span>Photo by <span v-html="item.html_attributions[0]"></span></p> -->
      </div>  
    </div>  
  </div>
</template>

<script>


export default {
  name: 'MenuGallery',
  
  data:function(){
    return{
      
      }
    },
    computed:{
      restaurantImgs(){
        return this.$store.state.restaurantImgs;
      }
    }
  
}
</script>
