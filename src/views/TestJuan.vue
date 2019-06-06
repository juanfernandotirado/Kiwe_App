<template>
  <div class="TestJuan" >
    <GroupSize/>
    <Drop-off-confirmation/>
  </div>

</template>

<script>
import GroupSize from '../components/main/GroupSize.vue'
import DropOffConfirmation from '../components/waitlist/DropOffConfirmation.vue'

export default {
  name: 'TestJuan',
  components: {
    GroupSize,
    DropOffConfirmation
  },
  data: function(){
      return{
       
      }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
