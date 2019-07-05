<template>
  <div class="group-size">

    <h2 class="section-title">Set up a table</h2>

    <h3>Party for how many?</h3>

    <div class="container">
    <button class="btn" v-on:click="decreasetSize"><img src="../../assets/icons/icon-minus.png" alt="Minus Icon"></button>

    <div class="groupSize">
        <p>{{ groupSize }}</p>
    </div>

    <button class="btn" v-on:click="incrementSize"><img src="../../assets/icons/icon-plus.png" alt="Plus Icon"></button>
    </div>
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

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h3{
        font-size: 16px;
        margin-top: 1rem;
    }

    .btn {
    background-color: $bt-background-color;
    display: inline-block;
    box-sizing: border-box;
    padding: 5px;
    border-radius: 50%;
    width: 40px;
    height: 40px;

  }

  .btn img{
      width: 30px;
  }





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

