<template>
    <div class="listRest">
        <h1>Where to eat</h1>
        <SearchBox/>
        <ul>
            <li v-for="rest in restList" 
            v-bind:key="rest.id">
                <div class="restClass">
                   <div class="restInfo">Restaurant name: 
                       <div class="restInfoFil"> {{ rest.name }} </div>
                   </div>
                   
                   <div class="restInfo">Est. Waiting Time: 
                       <div class="restInfoFil"> {{rest.waitTime}} </div>
                   </div>
                </div>
                <!-- <router-link to="/restDetail" >   -->
                    <span v-on:click="assignRestSelc(selectedRes, rest)"> See details </span>
                <!-- </router-link> -->
            </li>
        </ul>
    </div>
</template>

<script>

import SearchBox from '../restaurant/SearchBox.vue'
export default {
    name: "RestaurantList",
    components: {
        SearchBox
    },
    data(){
        return{  
        }
    },

    methods: {
         assignRestSelc: function (tar, sor){
            this.$store.dispatch('assignRest', sor).then(
                  this.$router.push('restDetail')
            );
        }
    },

    computed: {
        restList(){
            return this.$store.state.restaurantList
        },
        selectedRes(){
            return this.$store.state.selRest
        },
       
        
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
    // cursor: pointer; 
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
}

restaurantList.Name{
    display: none;
}



</style>


