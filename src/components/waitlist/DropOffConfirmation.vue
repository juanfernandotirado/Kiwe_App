<template>
    <div>
        <button v-on:click="dropOff" class="btn btn-text btn-drop">Drop off the queue</button>
    </div>
    
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'DropOffConfirmation',

    methods: {

        dropOff: function(){
            this.$store.dispatch('popUpShowsD')
        }
    },
   
}
</script>

<style scoped lang="scss">

.btn{
    background-color: white;
}

.btn-text {
    color: black;
}

</style>


