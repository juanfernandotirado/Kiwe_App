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
                                <div class="restinfo-hide"> {{assignWaitTime(grSize, item)}}</div>
                                <div class="wait"><span class="time">{{ item.estTime }}</span><span class="min">min</span></div>
                            </div>

            </div>
        </div>  
      </div>
  </div>
</template>

<script>
import firebase, { firestore } from 'firebase';
import { Carousel, Slide } from 'vue-carousel';
import RatingStars from '../restaurant/RatingStars.vue';

export default {
  name: 'Slider',

  components: {
    Carousel,
    // Slide,
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
      console.log(item);
      this.$store.dispatch('assignRest', item).then(
        this.$router.push('restDetail')
      )
    },

    handleSlideClick: function (dataset) {
      this.selectedRest(this.$store.state.restaurantList[dataset.item]);
    },

    assignWaitTime:function(grp, rest){

            let currentDate = new Date(this.$store.state.currentListStatus.joinTime);

            let formatDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`
            let rid = rest.rid;
            let grSize = this.$store.state.currentListStatus.grSize;

            let spotCounter = {
                    smallGroup:0,
                    mediumGroup:0,
                    bigGroup:0,
            }

            let smallTable = rest.sizeStandard.small;
            let mediumTable = rest.sizeStandard.medium;
            let bigTable = rest.sizeStandard.large;


            let db = firebase.firestore();

            let that = this;

            db.collection('waitlist').where("rid", "==", rid).where("status", "==", 'waiting').where("date", "==", formatDate).orderBy("joinTime", "desc").get().then(function(querySnapshot){ 
                

                querySnapshot.forEach(function(doc){
                    let item = doc.data();

                    if (item.grSize <= smallTable){
                        spotCounter.smallGroup++;
                        rest.groupSpot = spotCounter.smallGroup;
                    
                    }

                    else if (item.grSize <= mediumTable){
                        spotCounter.mediumGroup++;
                        rest.groupSpot = spotCounter.mediumGroup;
                      
                    }

                    else {
                        spotCounter.bigGroup++;
                        rest.groupSpot = spotCounter.bigGroup;
                     
                    }

                })

            rest.spot = spotCounter;
       

            }).then(function(){

                let currentSpot = spotCounter;

                let smallTableWait = rest.waitTime.small;
                let mediumTableWait = rest.waitTime.medium;
                let bigTableWait = rest.waitTime.large;
                
                if (grp <= smallTable) {
            
                    rest.estTime = smallTableWait*(rest.spot.smallGroup+1);
                    return rest.estTime;
                }
                else if (grp <=mediumTable) {
                    rest.estTime = mediumTableWait*(rest.spot.mediumGroup+1);
                    return rest.estTime;
                }
                else  {
                    rest.estTime = bigTableWait*(rest.spot.bigGroup+1);
                    return rest.estTime;
                }

            })
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
        background: linear-gradient(#94600149,#6d4700,#503400) ;
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

