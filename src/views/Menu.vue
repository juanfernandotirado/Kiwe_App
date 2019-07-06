<template>
    <div class="menu">
        <div class="section">
            <h2 class="section-title">Menu</h2>
            <button v-on:click="goToSettings" class="btn btn-text">Settings</button>
            <button v-on:click="goToFaq" class="btn btn-text">FAQ</button>
            <button v-on:click="goToAbout" class="btn btn-text">About</button>
        </div>
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


