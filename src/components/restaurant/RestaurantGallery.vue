<template>
  <div class="restaurant-gallery">
    <div class="gallery-container">
      <div class="gallery-item" v-for="item in restaurantImgs" :key="item.photo_reference">
          <img class="" :src="'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyCxKHIpSrggNO7p1N-n7V0FkJ8DohiK9MQ&maxwidth=300&photoreference='+item.photo_reference" :alt="item.html_attributions[0]">
      </div>  
    </div>  
  </div>
</template>

<script>


export default {
  name: 'RestaurantGallery',
  props:{
    selectedRestaurantId: String
  },
  data:function(){
    return{
      
      }
    },
    computed:{
      restaurantImgs(){
        return this.$store.state.restaurantImgs;
      }
    },
    mounted(){
       let rid = this.selectedRestaurantId;
       let apikey = 'AIzaSyCxKHIpSrggNO7p1N-n7V0FkJ8DohiK9MQ'

      let api = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=' + rid + '&key='+ apikey;
      //Get imgs from google map api
      this.axios.get(api,{ crossdomain: true }).then((response) => {
          console.log(response.data)
          this.$store.dispatch('updateGalleryImgs',response.data.result.photos)

        })
    }
  
}
</script>

<style scoped lang="scss">
  .restaurant-gallery{
    background-color: #fff;
    padding: 10px 0;
  }

  .gallery-container 
  { display: flex;  
    overflow-x: auto;
    overflow-y: hidden;
    height: 200px;
    align-items: center;
    img {   
       margin-right: 8px;
       border-radius: 10px;
       border-bottom-left-radius: 0;
       border-bottom-right-radius: 0;
       display: block;
       height: 200px;
       width: auto;
    }

    &::-webkit-scrollbar {    display: none;}


    }

</style>

