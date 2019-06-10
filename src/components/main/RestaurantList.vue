<template>
    <div class="listRest">
        <h1>Where to eat</h1>
        <div>{{selectedRes}}</div>

        <ul>
            <li v-for="rest in restList" 
            v-bind:key="rest.id" 
            v-on:click="assignRestSelc(selectedRes, rest)">
            
                <div class="restClass">
                   <div class="restInfo">Restaurant name: 
                       <div class="restInfoFil"> {{ rest.Name }} </div>
                   </div>
                   
                   <div class="restInfo">Est. Waiting Time: 
                       <div class="restInfoFil"> {{rest.WaitTime}} </div>
                   </div>
                </div>
                <router-link to="/restDetail" >See details</router-link>
                
            </li>
           
        </ul>
        <div>{{ selectedRes }}</div>

    </div>
</template>

<script>
export default {
    name: "RestaurantList",
    data(){
        return{  
        }
    },

    methods: {
         assignRestSelc: function (tar, sor){
            this.$store.dispatch('assignRest', sor);
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
    cursor: pointer; 
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


