<template>
    <div>
        <h1>Menu</h1>
        <button v-on:click="goToSettings" class="btn btn-text">Settings</button>
        <button v-on:click="goToFaq" class="btn btn-text">FAQ</button>
        <button v-on:click="goToAbout" class="btn btn-text">About</button>


    </div>
    
</template>

<script>

import Settings from '../components/main/Settings.vue'
export default {
    name: 'Menu',

    components: {
        Settings,
    },

    methods: {
        goToSettings:function () {
            this.$router.push('settings')
        },

        goToFaq:function (){

        },

        goToAbout: function (){

        }
    }
    
}
</script>

<style scoped>

</style>


