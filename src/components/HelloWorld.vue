<template>
  <div class="hello">
      <!-- <h2>Hello I am {{nickName}}</h2>
    
      <label for="newName">New Name</label>
      <input v-model="newName" type="text">
      <button v-on:click="changeName">Change</button> -->
      <GroupSize/>
      <button v-on:click="groupSizeDefined">Search</button>

  </div>
</template>

<script>

import GroupSize from '../components/main/GroupSize.vue'
import RestaurantList from '../components/main/RestaurantList.vue'

export default {

  components: {
    GroupSize,
    RestaurantList
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
</style>
