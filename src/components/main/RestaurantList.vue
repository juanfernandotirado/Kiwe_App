<template>
    <div class="listRest">
        <h1>Where to eat</h1>
        <div class="searchB">
            <input type="text" v-model="search" placeholder="Search restaurants">
            <!-- <button class="btnSearch">Search</button> -->
        
        </div> 
        <ul>
            <li v-for="rest in filteredRest" 
            v-bind:key="rest.id" class="rests">
                <div class="restClass">
                   <div class="restInfo">Restaurant name: 
                       <div class="restInfoFil"> {{ rest.rName }} </div>
                   </div>
                   
                   <div class="restInfo">Est. Waiting Time: 
                       <div class="restInfoFil wait"> {{rest.waitTime}} min</div>
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

        <!-- <MenuGallery/> -->
    </div>
</template>

<script>

import MenuGallery from '../restaurant/MenuGallery.vue';
import firebase, { firestore } from 'firebase';

export default {
    name: "RestaurantList",
    components: {
        MenuGallery
    },
    data(){
        return{  
            search: ''

        }
    },

    methods: {
         assignRestSelc: function (tar, sor){
            this.$store.dispatch('assignRest', sor).then(
                  this.$router.push('restDetail')
            );
        },
        goHome:function(){
            this.$router.push('home')
        },

        
        

        
    },

    created() {
     
        let db = firebase.firestore();
        let that = this;

        db.collection("restaurants").get().then(function (querySnapshot){
            that.$store.dispatch('emptyRestDb');

            querySnapshot.forEach(function(doc){
                console.log(doc.id, " => " , doc.data());
                let restListdb = {
                    address: doc.data().address,
                    cuisine: doc.data().cuisine,
                    loginId: doc.data().loginId,
                    priceLevel: doc.data().priceLevel,
                    rName: doc.data().rName,
                    rImgRef: doc.data().rImgRef,
                    rid: doc.data().rid,
                    waitTime: doc.data().waitTime,
                    rating: doc.data().rating,
                }
                that.$store.dispatch('assignRestDb', restListdb);

            })

        })
        
        // this.restList = this.$store.state.restaurantList
        // console.log(restList)
    },

    computed: {
        restList(){
            return this.$store.state.restaurantList
        },

        selectedRes(){
            return this.$store.state.selRest
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
                // else if(rest.rName.match(this.search)){
                //     return rest.rName.match(this.search);
                // }
                else if (lowerCuisine.match(lowerSearch)){
                    return lowerCuisine.match(lowerSearch);
                }
                // else if(rest.cuisine.match(this.search)) {
                    
                //     return rest.cuisine.match(this.search);
                // };
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


</style>


