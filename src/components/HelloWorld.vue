<template>
  <div class="hello">

      <div class="welcome section">
        <h2 class="hello">Hello,</h2> 
          <p class="user-name">{{nickName}}</p>
        <h3>Welcome!</h3>
      </div>

      <div class="section setT">
        <GroupSize/> 
        <Accesibility/>
        <button class="btn btn-text"><a href="#rest">Proceed</a></button>
      </div>

      <div class="section" id="rest">
        <h2 class="section-title">Choose the restaurant</h2>
        <button v-on:click="groupSizeDefined" class="btn btn-text">Search</button>
        <h4 class="section-title"><span>or</span></h4>
        <button v-on:click="scanCode" class="btn btn-text"><span><img src="../assets/icons/icon-qr.png" alt="QR icon"></span> Scan QR code</button>
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
      this.$store.dispatch('toogleHome');
    },

    scanCode:function(){
      // this.$router.push('qrCode');

      this.$store.dispatch('toogleHome');

      let that = this;
        window.cordova.plugins.barcodeScanner.scan(
              function (result) {
       
                            let scanRid = result.text;
                            let restList = that.$store.state.restaurantList;
                            console.log(scanRid)
                            console.log(restList);
                            restList.map(item => {
                                if(item.rid === scanRid){
                                    that.$store.dispatch("assignRest", item);
                                    that.$router.push('restDetail')
                                }
                            })

                        },
                        function (error) {
                            alert("Scanning failed: " + error);
                        },
                        {
                            preferFrontCamera : false, // iOS and Android
                            showFlipCameraButton : false, // iOS and Android
                            showTorchButton : false, // iOS and Android
                            torchOn: false, // Android, launch with the torch switched on (if available)
                            saveHistory: false, // Android, save scan history (default false)
                            prompt : "Place a QR code inside the scan area", // Android
                            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                            formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
                            // orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
                            disableAnimations : true, // iOS
                            disableSuccessBeep: false // iOS and Android
                        }
                    );
            

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


  @import "../sass/_variables.scss";

h2 {
  margin-bottom: 0;
  margin-top: 0;
  margin-left: 3rem;
  color: $sc-font-color;
  text-align: left;
  font-size: $sc-font-size;
  font-family: $sc-font-family;
}

.section-title{
  text-align: center;
  margin-left: auto;
  margin-top: 10px;
}

.section-title span{
  text-transform: lowercase;
}

.user-name{
  font-size: 3rem;
  margin: 1rem auto; 
  font-family: $sc-font-family;
  line-height: 3rem;
    font-weight: bold;
}

  .btn img{
      width: 30px;
      vertical-align: middle;
  }

  .btn{
    margin: 2rem auto;
  }

h3 {
  margin: 0;
  color: $sc-font-color;
  text-align: center;
  font-size: $sc-font-size;
  font-family: $sc-font-family;
    line-height: 1rem;
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

/*button {
  display: block;
  text-align: center;
  margin: auto;
  margin-top: 1rem;
}*/

.hello {
  margin-bottom: 2rem;
}
</style>
