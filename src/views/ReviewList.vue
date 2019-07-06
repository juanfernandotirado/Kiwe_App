<template>
    <div class="wait-list-info-section">

      <button v-on:click="backPage" class="btn btn-round btn-back">
        <img src="../assets/icons/icon-back.png" alt="">
      </button>

      <div class="section">
        <ReviewWaitlist/>
        <AddToList/>
      </div>
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
    backPage:function (){
      this.$router.push('restDetail')
    }
  }

}
</script>

<style scoped lang="scss">



.slider {
  z-index: -1;
}

</style>
