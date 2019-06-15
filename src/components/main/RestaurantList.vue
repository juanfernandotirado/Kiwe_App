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
                       <div class="restInfoFil"> {{ rest.name }} </div>
                   </div>
                   
                   <div class="restInfo">Est. Waiting Time: 
                       <div class="restInfoFil"> {{rest.waitTime}} </div>
                   </div>

                    <div class="restInfo">Cuisine: 
                       <div class="restInfoFil"> {{ rest.cuisine }} </div>
                   </div>
                </div>
                <button class="btn orange" v-on:click="assignRestSelc(selectedRes, rest)"> See details </button>
            </li>
        </ul>
        <br>
        <!-- <MenuGallery/> -->
    </div>
</template>

<script>

import MenuGallery from '../restaurant/MenuGallery.vue'

export default {
    name: "RestaurantList",
    components: {
        MenuGallery
    },
    data(){
        return{  
            search: '',
            restList: []

        }
    },

    methods: {
         assignRestSelc: function (tar, sor){
            this.$store.dispatch('assignRest', sor).then(
                  this.$router.push('restDetail')
            );
        },

        
    },

    created() {
        this.restList = this.$store.state.restaurantList
    },

    computed: {
        // restList(){
        //     return this.$store.state.restaurantList
        // },

        selectedRes(){
            return this.$store.state.selRest
        },

        filteredRest: function (){
            return this.restList.filter((rest) => {
                if(rest.name.match(this.search)){
                    return rest.name.match(this.search);
                }
                else if(rest.cuisine.match(this.search)) {
                    return rest.cuisine.match(this.search);
                };
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



</style>


