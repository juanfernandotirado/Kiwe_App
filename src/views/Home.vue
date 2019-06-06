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
    //functiom provided by vue. Run each time we go to a component. 
    //currentUser is all the information about the user. 
  
    // if(!currentUser){
    //   //if the user is not logged in, go to login page
    //    this.$router.replace('login');
    // }
  }
 
}
</script>
