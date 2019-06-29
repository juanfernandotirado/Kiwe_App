<template>
    <div>
        <button v-on:click="dropOff" class="btn orange">Drop Off</button>
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

</style>


