<template>
  <div class="restaurant-detail">
    <h1>Restaurant Detail</h1>
    <div>{{selectedRes}}</div>
    <ul>
      <li v-for="rest in restList" 
      v-bind:key="rest.id" 
      >
        <div  v-for="(val,key) in rest" 
        v-bind:key="(val,key)"
        >
          <div class="restInfo">{{ key }}: </div>
          <div class="restInfoFil"> {{ val }}</div>
        </div> 
      </li>
    </ul>
    <router-link to="/restList">Go back</router-link>
  </div>
</template>

<script>

export default {
    name: "RestaurantList",

    data(){
        return{
           
        }
    },
    computed: {
      restList(){
        return this.$store.state.restaurantList
      },
      selectedRes(){
        this.$store.state.selRest 
      }
    }
}
</script>

<style scoped lang="scss">

ul {
    margin: 2rem;
}
li {
    border: 1px solid salmon;
    margin: 2rem auto;
    padding-left: 10px;    
}

// .restoName {
//         font-size: 2rem;

// }

.rest {
    text-align: left,
}

.restInfo, .restInfoFil {
    display: inline-block,
}

.restInfo {
    font-weight: bold,
}

.restInfoFil {
    margin-left: 5px;
}

restaurantList.Name{
    display: none;
}

</style>


