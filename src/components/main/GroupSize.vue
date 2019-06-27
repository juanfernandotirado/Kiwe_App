<template>
  <div class="group-size">
    <h5>Group Size</h5>

    <button class="btn-floating blue" v-on:click="incrementSize">+</button>
    <button class="btn-floating blue" v-on:click="decreasetSize">-</button>
    <p>{{ groupSize }}</p>
    

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
                //console.log(rest.estTime);
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
