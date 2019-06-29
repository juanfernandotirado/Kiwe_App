<template>
  <div class="TestJuan" >    
    
    <ReviewWaitlist/>
    <AddToList/>
    <br>
  
  </div>

</template>

<script>
import AddToList from '../components/main/AddToList.vue'
import ReviewWaitlist from '../components/waitlist/ReviewWaitlist.vue'



export default {
  name: 'TestJuan',
  components: {
    AddToList,
    ReviewWaitlist,
  },
  data: function(){
      return{
      
      }
  },

  computed: {
    joinTime: function (){
      return this.$store.state.currentListStatus.currentSpot
    }
  },
  methods: {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.slider {
  z-index: -1;
}

</style>
