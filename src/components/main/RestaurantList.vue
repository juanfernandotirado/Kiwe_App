<template>
    <div class="listRest">
        <h1>Where to eat</h1>
        <ul>
            <li v-for="x in restaurantList" v-bind:key="x.restaurantID">
                <div v-for="(val,key) in x" v-bind:key="(val,key)" class="rest">
                    <div class="restInfo">{{ key }}: </div>
                    <div class="restInfoFil"> {{ val }}</div>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
    name: "RestaurantList",

    data(){
        return{
            restaurantList: [
                {
                    Name: 'Ramen ramen', 
                    ID: 1,
                    WaitTime: '30 min',
                    //Information Available at Restaurant Details
                    Rating: 5,
                    PriceLevel: 3,
                    Address: 'Alberni St',
                },
                {
                    Name: "Vips",
                    ID: 2,
                    WaitTime: '40 min',
                    //Information Available at Restaurant Details
                    Rating: 4,
                    PriceLevel: 4,
                    Address: '49th Street'
                },
               {
                    Name: 'La Fonda',
                    ID: 3,
                    WaitTime: '20 min',
                    //Information Available at Restaurant Details
                    Rating: 4,
                    PriceLevel: 2,
                    Address: 'Granville St'
                },
                {
                    Name: 'Sub Viet',
                    ID: 4,
                    WaitTime: '40 min',
                    //Information Available  at Restaurant Details
                    Rating: 5,
                    PriceLevel: 1,
                    Address: 'Broadway St'
                },

            ]
        }
    },
    methods: {

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

.rest {
    text-align: left,
}

.restInfo, .restInfoFil {
    display: inline-block,
}

.restInfo {
    font-weight: bold,
}

.restInfoFil {
    margin-left: 5px;
}

restaurantList.Name{
    display: none;
}

</style>


