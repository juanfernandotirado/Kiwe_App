<template>
  <div class="home">
    <div>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  
   
  </div>
</template>

<script>
import firebase, { firestore } from 'firebase';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';


export default {
  name: 'home',
  components: {
    HelloWorld,
   
  },
  data:function(){
    return{

    }
  },
  mounted(){
    const currentUser = firebase.auth().currentUser;
    console.log(currentUser);
    if(!currentUser){
       this.$router.replace('login');
    }
  }
 
}
</script>
