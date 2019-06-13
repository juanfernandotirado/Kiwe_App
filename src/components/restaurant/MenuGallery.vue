<template>
  <div class="menu-gallery">
    <h2>Menu Gallery</h2>

  </div>
</template>

<script>


export default {
  name: 'MenuGallery',
  
  data:function(){
    return{
      dishes:[]
      }
    },

  created(){

    let api = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJZ04tZ9ZzhlQRDsJZp_cOS4U&key=AIzaSyCxKHIpSrggNO7p1N-n7V0FkJ8DohiK9MQ';
    
    this.axios.get(api,{ crossdomain: true }).then((response) => {
        console.log(response.data)
      })

 

  }
    

  
}
</script>
