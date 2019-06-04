<template>
    <div class="listRest">
        <h1>Where to eat</h1>
    </div>
</template>

<script>
export default {
    name: "RestaurantList",

    data: function (){
        return{
            // Restaurant 
            restaurantList: [
                {
                    restaurantName: 'Pizza', 
                    restaurantID: 1,
                },
                {
                    restaurantName: 'Hamburguer',
                    restuarantID: 2,
                },
               {
                    restaurantName: 'Taco',
                    restuarantID: 3,
                },
                {
                    restaurantName: 'Sushi',
                    restuarantID: 4,
                },

            ]
        }
    },
    methods: {

    }
}
</script>

<style scoped lang="scss">

</style>


