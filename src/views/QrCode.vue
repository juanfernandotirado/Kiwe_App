<template>
<div>
    <h1>Read QR Code</h1>
    <div class="camera">
        
        <qrcode-stream @decode="onDecode"></qrcode-stream>

    </div>
    <button v-on:click='goHome' class="btn blue">Back</button>

</div>
    
</template>

<script>

import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

export default {
    components:{
        QrcodeStream,
        QrcodeDropZone,
        QrcodeCapture
    },

    methods:{
        goHome:function(){
            this.$router.push('home')
        },
        onDecode:function (decodedString) {
            let scanRid = decodedString;
            let restList = this.$store.state.restaurantList;
            //   alert(decodedString)
            console.log(decodedString)
            console.log(restList);
            restList.map(item => {
                if(item.rid === scanRid){
                    this.$store.dispatch("assignRest", item);
                    this.$router.push('restDetail')
                }
            })
        },

    }
    
}
</script>

<style scoped lang="scss">
.camera {
    border: 1px solid salmon;
    width: 300px;
    height: 300px;
    margin: auto;
}

.btn {
    margin: 1rem;
}

</style>


