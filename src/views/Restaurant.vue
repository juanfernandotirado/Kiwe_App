<template>
    <div>
        <RestaurantList />
    </div>
</template>

<script>
import firebase, { firestore } from 'firebase';
const RestaurantList = import( '../components/main/RestaurantList')
import LoadingKiwe from '../components/main/LoadingKiwe.vue'

export default {
    name: 'Restaurant',
    components: {
        RestaurantList: () => ({
            component: RestaurantList,
            loading: LoadingKiwe,
            timeout: 1500
        })
    },
    methods: {

    },
    
    
}
</script>

<style scoped lang="scss">

</style>

