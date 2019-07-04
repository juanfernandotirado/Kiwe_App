<template>
  <div class="group-size">

    <h2 class="section-title">Set up a table</h2>

    <h5>Party for how many?</h5>

    <button class="btn-floating btn" v-on:click="decreasetSize">-</button>

    <div class="groupSize">
        <p>{{ groupSize }}</p>
    </div>

    <button class="btn-floating btn" v-on:click="incrementSize">+</button>
    
  </div>
</template>

<script>


export default {
  name: 'GroupSize',
    data:function(){
    return{
    }
    },

    methods: {
    incrementSize: function(){
         this.$store.dispatch('addGroupSize');
    },

    decreasetSize: function(){
        if (this.$store.state.currentListStatus.grSize > 1)
        this.$store.dispatch('subtractGroupSize');
    },

    assignWaitTime:function(grp, rest){
            let currentSpot = this.$store.state.currentListStatus.currentSpot;
            let smallTable = rest.sizeStandard.small;
            let mediumTable = rest.sizeStandard.medium;
            let bigTable = rest.sizeStandard.large;
            let smallTableWait = rest.waitTime.small;
            let mediumTableWait = rest.waitTime.medium;
            let bigTableWait = rest.waitTime.large;
            

            if (grp <= smallTable) {
                rest.estTime = smallTableWait;
                console.log(rest.estTime);
                return rest.estTime*currentSpot;
            }
            else if (grp <=mediumTable) {
                rest.estTime = mediumTableWait;
                console.log(rest.estTime);
                return rest.estTime*currentSpot;
            }
            else if (grp <=bigTable) {
                rest.estTime = bigTableWait;
                console.log(rest.estTime);
                return rest.estTime*currentSpot;
            }
        }  

    },

    computed: {
        groupSize(){
            return this.$store.state.currentListStatus.grSize
        } 
    }
  
}
</script>

<style scoped lang="scss">

      @import "../../sass/_variables.scss";

    * {
        box-sizing: border-box;
    }

    .groupSize,
    .btn-floating {
        display: inline-block;
    }

    .groupSize {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        margin: 1rem;
        border: 2px solid orange;
        border-radius: 5px;
    }

    .groupSize p {
        font-size: 2rem;
        height: fit-content;
        margin: 0;
    }


</style>

