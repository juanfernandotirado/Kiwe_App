<template>
<div>
    <h1>Read QR Code</h1>
    <div class="camera">
        <span>Camera Here...</span>
    </div>
    <button v-on:click='goHome' class="btn blue">Back</button>

</div>
    
</template>

<script>
export default {
    methods:{
        goHome:function(){
            this.$router.push('home')
        }
    }
    
}
</script>

<style scoped>
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


