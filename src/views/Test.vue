<template>
  <div class="test">
   <div >
      <a href="#!" v-for="item in restaurantList" :key="item.rid" v-on:click="getGalleryImgs(item.rid)" class="collection-item">
        {{item.rName}}
      </a>
    </div>
    <MenuGallery />
    <!-- <AddToList /> -->
  </div>
</template>

<script>
import MenuGallery from '../components/restaurant/MenuGallery.vue';
import AddToList from '../components/main/AddToList.vue';

export default {
  name:'Test',
  components: {
      MenuGallery,
      AddToList
  },
  methods: {
    getGalleryImgs: function(rid){
    
    let apikey = 'AIzaSyCxKHIpSrggNO7p1N-n7V0FkJ8DohiK9MQ'

    let api = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=' + rid + '&key='+ apikey;
    //Get imgs from google map api
    this.axios.get(api,{ crossdomain: true }).then((response) => {
        console.log(response.data)

        this.$store.dispatch('updateGalleryImgs',response.data.result.photos)

      })
    
  }
  
  },
  computed:{
    restaurantList(){
      return this.$store.state.restaurantList
    }
  },
  

}
</script>

