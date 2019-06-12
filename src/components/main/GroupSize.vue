<template>
  <div class="group-size">
    <h1>Group Size</h1>

    <button class="btn-floating blue" v-on:click="incrementSize">+</button>
    <button class="btn-floating blue" v-on:click="decreasetSize">-</button>
    <p>{{ groupSize}}</p>
    

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
        if (this.groupSize > 1)
        this.$store.dispatch('subtractGroupSize');
    }

    },

    computed: {
        groupSize(){
            return this.$store.state.groupSize
        } 
    }
  
}
</script>
