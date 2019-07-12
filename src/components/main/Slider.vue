<template>
  <div class="section">
    <h2 class="section-title">Featured Restaurants</h2>
      <div class="feature-restaurant-container">
        <div class="feature-item" v-for="(item,index) in restList" :key="index" v-on:click="selectedRest(item)">
          <div class="img-container">
          <img class="img-cover" :src="compileUrl(item.rImgRef)">
          </div>
           <div class="restaurant-information">
                             <p class="name"> {{ item.rName }} </p>
                            <div class="basic-info">
                               
                                <p>{{ item.cuisine }} </p>
                                <RatingStars :rating="item.rating" />
                            </div>

                            <div class="rest-waiting">
                                <div class="wait"><span class="time">{{ item.estTime }}</span><span class="min">min</span></div>
                            </div>

            </div>
        </div>  
      </div>
  </div>
</template>

<script>
import firebase, { firestore } from 'firebase';
import RatingStars from '../restaurant/RatingStars.vue';

export default {
  name: 'Slider',

  components: {
    RatingStars
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
       grSize(){
            return this.$store.state.currentListStatus.grSize
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
       position: relative;
       width: 70vw;


    }


       .restaurant-information{
        position: absolute;
        z-index: 12;
        display: flex;
        align-items: center;
        color: white;
        background: linear-gradient(#94600149,#6d4700,#503400);
        width: 100%;
        bottom: 0;
        justify-content: space-between;
        font-size: 8px;
        flex-wrap: wrap;
        padding: 0 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        }

    .name{
    font-weight: bold;
    font-size: 14px;
    font-family: $sc-font-family;
    width: 100%;
    margin: 0;
    text-align: left;
    }
    .basic-info{
    width: 70%;
    // margin-left: 10px;
    margin-bottom: 5px;
 
    
    p{
         margin: 0;
        text-align: left;
     }
    }

    .rest-waiting{
    margin-bottom: 5px;
    font-family: $wtb-ff;
    margin-right: 0;

    .wait{
      padding: .5rem 1rem;
    }

    .time{
    font-size: 20px;
    margin: 0;
    padding: 0;
    line-height: 20px;
    display: block;
    }

    .min{
    display: block;
    line-height: 8px;
    }
  }
  
    .img-container{
    overflow: hidden;
    border-radius: 10px;
    height: 100%;
     .img-cover {   
       border-radius: 10px;
       display: block;
       width: 80vw;
    }
    }

   

    &::-webkit-scrollbar {    display: none;}


    }



.restinfo-hide{
    display: none;
}

</style>

