<template>
<div class="section header">
    <!-- <div class="back" v-if="homeShow">
        <button v-on:click="backPage" class="btn btn-round goBack">B</button>
    </div> -->
    <img src="../../assets/KiweLogo-02.svg" alt="" class="header-image">
</div>
    
</template>

<script>
export default {
    name: 'Header',
    
    computed: {
        homeShow () {
            return this.$store.state.homeShow
        }
    }
    
}
</script>

<style scoped lang='scss'>

  @import "../../sass/_variables.scss";

    .section {
        background-color: $csecond-green;
        width: 35%;
        height: auto;
        margin:  auto;
        padding-top: 3vh;

        
    }

</style>

