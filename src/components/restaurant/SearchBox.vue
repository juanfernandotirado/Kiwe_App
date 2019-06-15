<template>
    <div class="searchB">
        <label for="searchbox">
            <input type="text" v-model="search" placeholder="Search restaurants">
            <!-- <button class="btnSearch">Search</button> -->
        </label>
        
    </div>
</template>

<script>
export default {
    name: "SearchBox",
    data(){
        return{
            search: ''
        }
    },


    computed: {

        restaurantList(){
            return this.$store.state.restaurantList
        },

        filteredRest: function (){
            return this,restaurantList.filter((restaurant) => {
                return restaurantList.name.match(this.search)
            })
        }
    }
    
}
</script>

<style scoped>

.searchB {
    margin: auto;
    width: 50%;
}





</style>

