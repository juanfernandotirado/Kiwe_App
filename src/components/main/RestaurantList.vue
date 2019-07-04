<template>
    <div class="listRest">

        <div v-if="!loadedRestaurantList">
            <LoadingKiwe />
        </div>
        <!-- <h1>Where to eat</h1> -->

        <div v-else>

            <button v-on:click='goHome' class="btn goBack btn-round"> b </button>

            <div class="section">
                    <Slider class="slider"/>
            </div>

            <div class="section searchList">

                <div class="searchB">
                    <h2 class="section-title">Search</h2>
                    <input type="text" v-model="search" placeholder="Search restaurants or cuisines">
                </div>

                <ul>
                    <li v-for="rest in filteredRest" 
                    v-bind:key="rest.id" class="rests"
                    v-on:click="assignRestSelc(selectedRes, rest)">

                        <img :src="compileUrl(rest.rImgRef)" class="imgRest">

                        <span class="restaurantInformation">
                            <div class="imageRestaurantGeneralInfo">
                                <p class="imageRestaurantInformation name"> {{ rest.rName }} </p>
                                <p class="imageRestaurantInformation"> {{ rest.cuisine }} </p>
                                <p class="imageRestaurantInformation">Rating: {{ rest.rating }} </p>
                                <p class="imageRestaurantInformation">Address: {{ rest.address }} </p>
                                <p class="imageRestaurantInformation">Price Level: {{ rest.priceLevel }} </p>
                            </div>

                            <div class="restWaiting">Est. Waiting Time: 
                                <div class="restInfoHide"> {{assignWaitTime(grSize, rest)}}</div>
                                <div class="wait"> {{ rest.estTime }} min</div>
                            </div>

                        </span>
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
import Slider from '../main/Slider.vue'
import LoadingKiwe from '../main/LoadingKiwe.vue'
import firebase, { firestore } from 'firebase';

export default {
    name: "RestaurantList",
    components: {
        MenuGallery,
        Slider,
        LoadingKiwe
    },
    data(){
        return{  
            search: '',
            urlPart: 'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyCxKHIpSrggNO7p1N-n7V0FkJ8DohiK9MQ&maxwidth=400&photoreference='


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


ul {
    margin: 2rem;
}

.goBack {
    display: flex;
}

li {
    border: 1px solid salmon;
    margin: 2rem auto;
    padding-left: 10px;   
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




.slider {
//   z-index: -1;
height: 450px;
}

.restInfoHide{
    display: none;
}


</style>


