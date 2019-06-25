<template>
  <div class="TestJuan" >
    <!-- <GroupSize/> -->
    <!-- <vueDateFormat :format="'yyyy-MM-dd hh:mm:ss'" :time="'2019-06-10'" :type="'fmt'" :autoUpdate="false"></vueDateFormat> -->
    
    
    <WaitListInfo/>
    <Seating/>
    <AddToList/>
    <br>
   <!-- <Slider/> -->
    <br><br>
    <Profile/>

    
    
  
  </div>

</template>

<script>
import GroupSize from '../components/main/GroupSize.vue'
import DropOffConfirmation from '../components/waitlist/DropOffConfirmation.vue'
import AddToList from '../components/main/AddToList.vue'
import Seating from '../components/main/Seating.vue'
import WaitListInfo from '../components/waitlist/WaitListInfo.vue'
import Slider from '../components/main/Slider.vue'
import Profile from '../components/main/Profile.vue'



export default {
  name: 'TestJuan',
  components: {
    GroupSize,
    DropOffConfirmation,
    AddToList,
    Seating,
    WaitListInfo,
    VerificationPopUp,
    Slider,
    Profile
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

</style>
