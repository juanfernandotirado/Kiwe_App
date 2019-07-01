<template>
    <div>
        <RestaurantList />
    </div>
</template>

<script>
import RestaurantList from '../components/main/RestaurantList'
import RestaurantDetail from '../components/restaurant/RestaurantDetail'
import LoadingKiwe from '../components/main/LoadingKiwe.vue'

export default {
    name: 'Restaurant',
    components: {
        //  RestaurantList : () => ({
        //      component: import('../components/main/RestaurantList.vue'),
        //      loading: LoadingKiwe
        // }),
        RestaurantList,
        RestaurantDetail
    },
    methods: {

    },
    
}
</script>

<style scoped lang="scss">

</style>

