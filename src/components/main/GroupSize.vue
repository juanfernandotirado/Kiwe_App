<template>
  <div class="group-size">
    <h1>Group Size</h1>

    <button v-on:click="incrementSize">Add</button>
    <button v-on:click="decreasetSize">Subtract</button>
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
        this.$store.dispatch('substractGroupSize');
    }

    },

    computed: {
        groupSize(){
            return this.$store.state.groupSize
        } 
    }
  
}
</script>
