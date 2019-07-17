<template>
    <div> 
        <button v-on:click='goHome' class="btn btn-round btn-back"> 
                <img src="../assets/icons/icon-back.png" alt="back-icon">    
        </button>
        <div class="rest-menu-container">
            <div class="rest-menu">
             <img class="rest-menu-img" src="../assets/jam_menu.png" alt="jam cafe menu">
       
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'restaurantMenu',

    methods: {
        restMenu: function(){
            this.$router.push('restaurantmenu');
      },
       goHome:function(){
            this.$router.push('home')
        },
    },
    created(){
        
    },
    destroyed(){
        console.log('Hello')
    }
    
}
</script>

<style scoped lang='scss'>

</style>


