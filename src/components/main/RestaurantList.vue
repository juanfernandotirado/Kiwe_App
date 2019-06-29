<template>
    <div class="listRest">
        <h1>Where to eat</h1>

        <Slider class="slider"/>

        <div class="searchB">
            <input type="text" v-model="search" placeholder="Search restaurants">
        </div>

        <ul>
            <li v-for="rest in filteredRest" 
            v-bind:key="rest.id" class="rests">
                <div class="restClass">
                   <div class="restInfo">Restaurant name: 
                       <div class="restInfoFil"> {{ rest.rName }} </div>
                   </div>
                   
                   <div class="restInfo">Est. Waiting Time: 
                       <div class="restInfoHide"> {{assignWaitTime(grSize, rest)}}</div>
                       <div class="restInfoFil wait"> {{ rest.estTime }} min</div>
                   </div>

                    <div class="restInfo">Cuisine: 
                       <div class="restInfoFil"> {{ rest.cuisine }} </div>
                   </div>
                </div>
                <button class="btn orange" v-on:click="assignRestSelc(selectedRes, rest)"> See details </button>
            </li>
        </ul>
        <br>

        <button v-on:click='goHome' class="btn blue">Back</button>

    </div>
</template>

<script>

import MenuGallery from '../restaurant/MenuGallery.vue';
import Slider from '../main/Slider.vue'
import firebase, { firestore } from 'firebase';

export default {
    name: "RestaurantList",
    components: {
        MenuGallery,
        Slider,
    },
    data(){
        return{  
            search: ''

        }
    },

    methods: {
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
                        console.log(rest.groupSpot)
                    }

                    else if (item.grSize <= mediumTable){
                        spotCounter.mediumGroup++;
                        rest.groupSpot = spotCounter.mediumGroup;
                        console.log(rest.groupSpot)
                    }

                    else {
                        spotCounter.bigGroup++;
                        rest.groupSpot = spotCounter.bigGroup;
                        console.log(rest.groupSpot)
                    }

                })

            rest.spot = spotCounter;
            console.log('Spot from ' + rest.rName);
            console.log(rest.spot);

            }).then(function(){

                let currentSpot = spotCounter;

                let smallTableWait = rest.waitTime.small;
                let mediumTableWait = rest.waitTime.medium;
                let bigTableWait = rest.waitTime.large;
                
                if (grp <= smallTable) {
                    console.log('Small group spot');
                    rest.estTime = smallTableWait*(rest.spot.smallGroup+1);
                    console.log(rest.spot.smallGroup+1);
                    console.log('Small group wait');
                    console.log(smallTableWait);
                    console.log('est wait time for your group');
                    console.log(rest.estTime)
                    return rest.estTime;
                }
                else if (grp <=mediumTable) {
                    rest.estTime = mediumTableWait*(rest.spot.mediumGroup+1);
                    console.log('Medium group spot');
                    console.log(rest.spot.mediumGroup+1);
                    console.log('Medium group wait');
                    console.log(mediumTableWait);
                    console.log('est wait time for your group');
                    console.log(rest.estTime)
                    return rest.estTime;
                }
                else  {
                    rest.estTime = bigTableWait*(rest.spot.bigGroup+1);
                    console.log('Large group spot');
                    console.log(rest.spot.bigGroup+1);
                    console.log('Large group wait');
                    console.log(bigTableWait);
                    console.log('est wait time for your group');
                    console.log(rest.estTime)
                    return rest.estTime;
                }

            })
        }   
    },


    computed: {
        restList(){
            return this.$store.state.restaurantList
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
                console.log(lowerSearch);
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

ul {
    margin: 2rem;
}
li {
    border: 1px solid salmon;
    margin: 2rem auto;
    padding-left: 10px;   
}

.restClass {
    text-align: left,
}

.restInfoFil {
    display: inline-block;
    font-weight: normal;
}

.restInfo {
    font-weight: bold;
    display: block,
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

.wait {
    text-transform: lowercase;
}


.slider {
//   z-index: -1;
}

.restInfoHide{
    display: none;
}


</style>


