<template>
  <div class="hello">

      <div class="welcome section">
        <h2>Hello, {{nickName}}</h2>
        <h3>Welcome!</h3>
      </div>
    
      <!-- <label for="newName">New Name</label>
      <input v-model="newName" type="text">
      <button v-on:click="changeName">Change</button> --> 

      <div class="section setT">
        <GroupSize/> 
        <Accesibility/>
        <button v-on:click="nextStep" class="btn orange"><a href="#rest">Proceed</a></button>
      </div>

      <div class="section" id="rest">
        <h4>Choose the restaurant</h4>
        <button v-on:click="groupSizeDefined" class="btn orange">Search</button>
        <h4>or</h4>
        <button v-on:click="scanCode" class="btn orange">Scan QR code</button>
      </div>
  </div>
</template>

<script>

import GroupSize from '../components/main/GroupSize.vue'
import RestaurantList from '../components/main/RestaurantList.vue'
import Accesibility from '../components/main/Accesibility.vue'

export default {

  components: {
    GroupSize,
    RestaurantList,
    Accesibility
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      newName: ''
    }
  },
  computed:{
     nickName () {
     return this.$store.state.userStatus.nickName
    }
    
  },
  methods:{
    changeName:function(){
      this.$store.dispatch('changeName',this.newName).then(()=>{
      this.newName = '';
      });
    },

    groupSizeDefined:function(){
      this.$store.state.currentListStatus.groupSize
      this.$router.push('restaurant');
    },

    scanCode:function(){
      this.$router.push('qrCode');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">



h2 {
  margin-bottom: 0;
}

h3 {
  margin: 0;
}

.section {
  border: 2px solid green; 
  margin: 2rem 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: white;
}

button {
  display: block;
  text-align: center;
  margin: auto;
  margin-top: 1rem;
}
</style>
