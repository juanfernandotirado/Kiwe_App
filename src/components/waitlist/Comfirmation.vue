<template>
  <div class="comfirmation-container">
      <h1>Hello {{userStatus.nickName}}</h1>
  </div>
</template>

<script>

export default {
  name:'Comfirmation',
  methods: {
  },
  computed: {
    userStatus(){
      return this.$store.state.userStatus
    }
  }
}
</script>

