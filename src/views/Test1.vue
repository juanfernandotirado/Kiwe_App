<template>
    <div class="test1">
        <RestaurantList />
    </div>
</template>

<script>
import RestaurantList from '../components/main/RestaurantList'
import RestaurantDetail from '../components/restaurant/RestaurantDetail'

export default {
    name: 'Test1',
    components: {
        RestaurantList,
        RestaurantDetail
    },
    methods: {

    },
    
}
</script>

