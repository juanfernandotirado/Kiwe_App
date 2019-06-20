<template>
  <div class="hello">
      <!-- <h2>Hello I am {{nickName}}</h2>
    
      <label for="newName">New Name</label>
      <input v-model="newName" type="text">
      <button v-on:click="changeName">Change</button> -->
      <GroupSize/> 
      <Accesibility/>
      <button v-on:click="groupSizeDefined" class="btn orange">Search</button>
      <button v-on:click="scanCode" class="btn orange">Scan QR code</button>
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
      this.$router.push('test1');
    },

    scanCode:function(){
      this.$router.push('qrCode');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}

button {
  display: block;
  text-align: center;
  margin: auto;
  margin-top: 1rem;
}
</style>
