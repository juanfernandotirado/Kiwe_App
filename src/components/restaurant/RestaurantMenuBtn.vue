<template>
    <div>
        <button class="btn btn-text" v-on:click='restMenu'>Restaurant Menu</button>
    </div>

</template>

<script>
export default {
    name: 'restaurantMenuBtn',

    methods: {
        restMenu: function(){
            this.$router.push('restaurantmenu');
      }
    }
    
}
</script>

<style scoped lang='scss'>

</style>


