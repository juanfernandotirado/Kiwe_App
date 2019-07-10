<template>
    <div>
        <RestaurantList />
    </div>
</template>

<script>
import firebase, { firestore } from 'firebase';
import RestaurantList from '../components/main/RestaurantList'
import LoadingKiwe from '../components/main/LoadingKiwe.vue'

export default {
    name: 'Restaurant',
    components: {
        RestaurantList,
    },
    methods: {

    },
    
    
}
</script>

<style scoped lang="scss">

</style>

