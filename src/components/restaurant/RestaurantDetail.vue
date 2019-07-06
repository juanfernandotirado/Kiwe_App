<template>
  <section class="restaurant-detail-section">

      <button v-on:click="backPage" class="btn btn-round btn-back">
        <img src="../../assets/icons/icon-back.png" alt="">
      </button>

   
      <RestaurantGallery :selectedRestaurantId="selectedRes.rid" />

    <div class="section restaurant-info-full">
      <h3 class="restaurant-name"> {{selectedRes.rName}} </h3>
      <div class="restaurant-info-container">
        <div class="rest-information">
          <div>
            <RatingStars :rating="selectedRes.rating" />
          </div>
          <div>
            <p> {{selectedRes.cuisine}} </p>
          </div>
          <div>
            <p> {{selectedRes.address}} </p>
          </div>
          <div>
            <p> {{assignPriceLevel(selectedRes.priceLevel)}} </p>
          </div>
        </div>

        <div class="rest-waiting">
          <div>Waiting time</div>
          <div class="wait"><span class="time">{{selectedRes.estTime}}</span><span class="min">min</span> </div>
        </div>
      </div>
        <div class="section seating-section">
           <Seating/>
        </div>
       
    
      <button v-on:click="nextPage" class="btn btn-text">I'm ready!</button>
    </div>

  </section>
</template>

<script>
import RatingStars from '../restaurant/RatingStars.vue';
import Seating from '../main/Seating.vue';
import RestaurantGallery from './RestaurantGallery.vue';
import firebase from 'firebase';


export default {
    components: {
      Seating,
      RatingStars,
      RestaurantGallery
    },

    name: "RestaurantList",
 
    data(){
        return{
           
        }
    },

    methods: {

      nextPage:function() {
      this.$router.push('reviewList');
      },


      backPage:function() {
        this.$router.push('restaurant');
      },
      assignPriceLevel:function(price){
        let output='';
        for(let i=0;i<price;i++)
        {
          output+='$';
        }
        return output;
      }
    },

    computed: {
      selectedRes(){
        return this.$store.state.selRest
      }
    }
}
</script>

<style lang="scss">
@import "../../sass/_variables.scss";

.restaurant-detail-section{
    background-color: #ebf1c8;
}

.restaurant-info-full{
    position: relative;
    top: -30px;
}

.restaurant-info-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .rest-information{
    width: 60%;
    text-align: left;
    p{
      margin: 0;
    }
  }

  .rest-waiting{
    width: 20%;
    font-family: $wtb-ff;
    text-align: right;
    .wait{
      margin-right: 0;
    }
  }

}


.routerLinks {
  display: block;
}


 .restaurant-name{
    text-transform: uppercase;
    font-family: $sc-font-family;
    font-weight: bold;
    color:$accent;
    font-size: 18px;
    margin-top: 10px;
  }

.seating-section{
   .dropDown{
    width: 80%;
  }
}

</style>


