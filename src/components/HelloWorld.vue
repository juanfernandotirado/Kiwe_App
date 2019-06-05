<template>
  <div class="hello">
      <h2>Hello I am {{nickName}}</h2>
    
      <label for="newName">New Name</label>
      <input v-model="newName" type="text">
      <button v-on:click="changeName">Change</button>
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
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
     return this.$store.state.nickName
    }
    
  },
  methods:{
    changeName:function(){
      this.$store.dispatch('changeName',this.newName).then(()=>{
        this.newName = '';
      console.log('new',this.nickName);
      console.log(this.$store.state.userStatus);
      });
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
