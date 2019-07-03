<template>
  <div class="hello">

      <div class="welcome section">
        <h2>Hello, {{nickName}}</h2>
        <h3>Welcome!</h3>
      </div>

      <div class="section setT">
        <GroupSize/> 
        <Accesibility/>
        <button class="btn orange"><a href="#rest">Proceed</a></button>
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
      // this.$router.push('qrCode');

      let that = this;
        window.cordova.plugins.barcodeScanner.scan(
              function (result) {
                            // alert("We got a barcode\n" +
                            //         "Result: " + result.text + "\n" +
                            //         "Format: " + result.format + "\n" +
                            //         "Cancelled: " + result.cancelled);

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
                            showFlipCameraButton : true, // iOS and Android
                            showTorchButton : true, // iOS and Android
                            torchOn: true, // Android, launch with the torch switched on (if available)
                            saveHistory: true, // Android, save scan history (default false)
                            prompt : "Place a barcode inside the scan area", // Android
                            resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                            formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
                            orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
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
