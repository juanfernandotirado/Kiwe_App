<template>
  <div class="drop-off-confirmation">
      <h1>Hello Peter</h1>
      <WaitListInfo/>
        <!-- <div v-for="(value, name, index) in currentListStatus" v-bind:key="index"><p>{{ name }}={{ value }}</p></div> -->

      

        <button class="btn">Drop-off</button>

      
  </div>
</template>

<script>
import WaitListInfo from './WaitListInfo.vue'
export default {
  name:'Drop-off-confirmation',
  components: {
    WaitListInfo
  },
  
  methods: {
  
   
  },

 
}
</script>
