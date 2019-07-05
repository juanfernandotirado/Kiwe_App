<template>
  <div class="restaurant-gallery">

    <LoadingKiwe v-if="!loadedGallery" />

    <div v-else class="gallery-container">
      <p class="gallery-tips"><i class="fas fa-long-arrow-alt-left"></i>Scroll to see more images</p>
      <div class="gallery-item" v-for="item in restaurantImgs" :key="item.photo_reference">
          <img class="" :src="'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyCxKHIpSrggNO7p1N-n7V0FkJ8DohiK9MQ&maxwidth=300&photoreference='+item.photo_reference" :alt="item.html_attributions">
      </div>  
    </div>  
  </div>
</template>

<script>
import LoadingKiwe from '../main/LoadingKiwe.vue';
import { setTimeout } from 'timers';

export default {
  name: 'RestaurantGallery',
  props:{
    selectedRestaurantId: String
  },
  components:{
    LoadingKiwe
  },
  data:function(){
    return{
        loadedGallery:false
      }
    },
    computed:{
      restaurantImgs(){
        return this.$store.state.restaurantImgs;
      }
    },
    methods:{
      //Not working in Cordova App
      getImgFromGoogleMap:function(){
       let rid = this.selectedRestaurantId;
       let apikey = 'AIzaSyCxKHIpSrggNO7p1N-n7V0FkJ8DohiK9MQ'

      let api = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=' + rid + '&key='+ apikey;
      //let api = 'http://maps.googleapis.com/maps/api/place/details/json?placeid=' + rid + '&key='+ apikey;
      
      //Get imgs from google map api
      this.axios.get(api,{ crossdomain: true }).then((response) => {
          console.log(response.data)
          console.log(typeof response.data.result.photos)
          this.$store.dispatch('updateGalleryImgs',response.data.result.photos)

        })
      },
      getImgFromStore:function(){
        let imgsArray = this.$store.state.selRest.restaurantGallery;
        this.$store.dispatch('updateGalleryImgs',imgsArray).then(
          this.loadedGallery = true
        )
       
      }
    }
    ,
    created(){
      //Not working in Cordova App
     // this.getImgFromGoogleMap();

      //Working in Cordova App
     this.getImgFromStore();

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
    position: relative;
    img {   
       margin-right: 8px;
       border-radius: 10px;
       border-bottom-left-radius: 0;
       border-bottom-right-radius: 0;
       display: block;
       height: 200px;
       width: auto;
    }

    &::-webkit-scrollbar { display: none;}


    }

    .gallery-tips{
      position: absolute;
      background-color: rgba(85, 85, 85, 0.767);
      top: 10px;
      text-align: center;
      width: 80vw;
      color: white;
      border-radius: 5px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;
      animation: fadeInOut 6s ease-in;
      opacity:0;
      i{
        font-size: 1.5rem;
        margin-right: 5px;
        position: relative;
        animation: jumpLeft 1s ease-in infinite;
      }

    }

    @keyframes fadeInOut {
      0%{
        opacity: 0;
      }
      20%{
        opacity: 1;
      }
      100%{
        opacity: 0;
      }
    }

    @keyframes jumpLeft {
      0%{
        right: 0;
      }
      50%{
        right: 5px;
      }
      100%{
        right: 0;
      }
    }

    


</style>

