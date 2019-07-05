<template>
    <div class="listRest">

        <div v-if="!loadedRestaurantList">
            <LoadingKiwe />
        </div>
        <div v-else>

            <button v-on:click='goHome' class="btn goBack btn-round"> b </button>

            <div class="section">
                <Slider class="slider"/>
            </div>

            <div class="section search-list">

                <div class="searchB">
                    <h2 class="section-title">Search</h2>
                    <input type="text" v-model="search" placeholder="Search restaurants or cuisines">
                </div>

                <ul class="restaurtant-list">
                    <li v-for="rest in filteredRest" 
                    v-bind:key="rest.id" class="restaurtant-single"
                    v-on:click="assignRestSelc(selectedRes, rest)">

                        <img :src="compileUrl(rest.rImgRef)" class="img-cover">

                        <div class="restaurant-information">
                            <div class="basic-info">
                                <p class="name"> {{ rest.rName }} </p>
                                <p>{{ rest.cuisine }} </p>
                                <!-- {{assignStars(rest.rating)}} -->
                                <RatingStars :rating="rest.rating" />
                                <!-- <p v-html="starElement"></p> -->
                                <!-- <p>Address: {{ rest.address }} </p> -->
                                <!-- <p>Price Level: {{ rest.priceLevel }} </p> -->
                            </div>

                            <div class="rest-waiting">Waiting Time 
                                <div class="restinfo-hide"> {{assignWaitTime(grSize, rest)}}</div>
                                <div class="wait"><span class="time">{{ rest.estTime }}</span><span class="min">min</span></div>
                            </div>

                        </div>
                        <!-- <button class="btn orange" v-on:click="assignRestSelc(selectedRes, rest)"> See details </button> -->
                    </li>
                </ul>
            </div>

        </div>
        <br>

    </div>
</template>

<script>

import MenuGallery from '../restaurant/MenuGallery.vue';
import Slider from '../main/Slider.vue';
import LoadingKiwe from '../main/LoadingKiwe.vue';
import RatingStars from '../restaurant/RatingStars.vue';
import firebase, { firestore } from 'firebase';

export default {
    name: "RestaurantList",
    components: {
        MenuGallery,
        Slider,
        LoadingKiwe,
        RatingStars
    },
    data(){
        return{  
            search: '',
            urlPart: 'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyCxKHIpSrggNO7p1N-n7V0FkJ8DohiK9MQ&maxwidth=400&photoreference=',
            starArray: []


        }
    },

    methods: {

        compileUrl:function(item){
            return this.urlPart + item;
        },


        assignRestSelc: function (target, source){
            this.$store.dispatch('assignRest', source).then(
                  this.$router.push('restDetail')
            );
        },
        goHome:function(){
            this.$router.push('home')
        },

        returnSpotTime:function(spotTime){
            return spotTime;
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
        },
        //Output Rating stars
        assignStars:function(rating){
            
            let starCount = Math.floor(rating);
            let output='';
            for(let i = 0;i<5; i++ )
            {   
              
                if(i<starCount)
                {
                    output+='<i class="fas fa-star"></i>';
                 
                }
                else{
                    output+='<i class="far fa-star"></i>';
                   
                }
                
            }
            // this.starElement.push(output);
            // console.log(this.starElement);
         
            // return output;
          
            
        }
        

    },


    computed: {
        restList(){
            return this.$store.state.restaurantList
        },

        loadedRestaurantList(){
            return this.$store.state.loadedRestaurantList;
        },

        selectedRes(){
            return this.$store.state.selRest
        },

        grSize(){
            return this.$store.state.currentListStatus.grSize
        },

        filteredRest: function (){
            return this.restList.filter((rest) => {
                let lowerName = rest.rName.toLowerCase();
                let lowerCuisine = rest.cuisine.toLowerCase();
                let lowerSearch = this.search.toLowerCase();
                if(lowerName.match(lowerSearch)){
                    return lowerName.match(lowerSearch);
                }
                else if (lowerCuisine.match(lowerSearch)){
                    return lowerCuisine.match(lowerSearch);
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
@import '../../sass/_variables.scss';


.restaurtant-list{
    margin: 1rem 8px;
}

.goBack {
    display: flex;
}

.restaurtant-single{
    position: relative;
    height: 230px;
    overflow: hidden;
    border-radius: 10px;
    margin: 20px 0;

    .restaurant-information{
    position: absolute;
    z-index: 12;
    display: flex;
    // justify-content: space-between;
    align-items: flex-end;
    color: white;
    background: linear-gradient(#94600149,#6d4700,#503400) ;
    width: 100%;
    bottom: 0;

    }

    .img-cover{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    border-radius: 10px;
    }
}

.rest-waiting{
    width: 30%;
    margin-right:10px;
    margin-bottom: 5px;
    font-family: $wtb-ff;
    .time{
    font-size: 25px;
    margin: 0;
    padding: 0;
    line-height: 25px;
    display: block;
    }

    .min{
    display: block;
    line-height: 8px;
    }
}

.basic-info{
    width: 70%;
    margin-left: 10px;
    margin-bottom: 5px;
    padding: 5px;
    padding-bottom: 0;
    .name{
    font-weight: bold;
    font-size: 18px;
    font-family: $sc-font-family;
    }
    p{
         margin: 0;
        text-align: left;
     }
}

.restInfoFil {
    display: inline-block;
    font-weight: normal;
}



.restInfoFil {
    margin-left: 5px;
    text-transform: capitalize;  
}

.searchB {
    margin: 2rem;
}

.rests {
    padding: 1rem;
}


.restinfo-hide{
    display: none;
}


</style>


