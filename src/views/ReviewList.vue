<template>
  <div class="TestJuan" >    
    
    <div class="section">
      <ReviewWaitlist/>
      <AddToList/>
    </div>
    <br>
  
  </div>

</template>

<script>
import AddToList from '../components/main/AddToList.vue'
import ReviewWaitlist from '../components/waitlist/ReviewWaitlist.vue'



export default {
  name: 'ReviewList',
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

<style scoped lang="scss">

.section {
  border: 2px solid green;
  margin: 2rem 0;
}

.slider {
  z-index: -1;
}

</style>
