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
    created(){

        if(!this.$store.state.loadedRestaurantList){
           
            let db = firebase.firestore();
            let that = this;

            let loadedRestaurantList = this.$store.state.loadedRestaurantList;
            

            db.collection("restaurants").onSnapshot(function (querySnapshot){
            that.$store.dispatch('emptyRestDb');

            querySnapshot.forEach(function(doc){
                console.log(doc.id, " => " , doc.data());

                let restListdb = {
                address: doc.data().address,
                cuisine: doc.data().cuisine,
                loginId: doc.data().loginId,
                priceLevel: doc.data().priceLevel,
                rName: doc.data().rName,
                rImgRef: doc.data().rImgRef,
                rid: doc.data().rid,
                waitTime: doc.data().waitTime,
                rating: doc.data().rating,
                sizeStandard: doc.data().sizeStandard,
                estTime: 0,
                        }


                        that.$store.dispatch('assignRestDb', restListdb);
                        //Loaded All restaurant, hide loading
                        that.$store.dispatch('controlLoading', true);

                    })


                })
        }
    }
    
}
</script>

<style scoped lang="scss">

</style>

