<template>
    <div>
        <button v-on:click="dropOff" class="btn btn-text btn-optional">Drop off the queue</button>
    </div>
    
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'DropOffConfirmation',

    methods: {

        dropOff: function(){
            this.$store.dispatch('popUpDropConfirmToggle')
        }
    },
   
}
</script>

<style scoped lang="scss">

@import "../../sass/_variables.scss";

.btn{
    background-color: white;
}

.btn-text {
    color: black;
    text-decoration: underline $main-green;
    font-weight: normal;
    box-shadow: none;
}

</style>


