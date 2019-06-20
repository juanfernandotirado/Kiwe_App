<template>
    <div>
        <qrcode-vue :value='value' :size='size' level='H'></qrcode-vue> 

    </div>
</template>


<script>

import QrcodeVue from 'qrcode.vue';

export default {
    components:{
      QrcodeVue  
    },
    
    data() {
        return{
            size: 300,
            value : this.$store.state.selRest.rid,
        }
    },

    computed: {
        // restaurantID () {
        //     return this.$store.state.selRest.rid
        // }
    }
    
}

</script>

<style>

</style>


