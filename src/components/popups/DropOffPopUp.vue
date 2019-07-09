<template>
<div>
  <div class="modal-backdrop" v-if="show">
    <div class="modal">

      <img src="../../assets/icons/kiwe.png" alt="Kiwi" class="kiwi1">
      <img src="../../assets/icons/kiwe.png" alt="Kiwi" class="kiwi2">

      <div class="popup">
        <header class="modal-header">
          <slot name="header">
            <h4>Drop me off</h4>
          </slot>
        </header>

        <section class="modal-body">
          <slot name="body">
            <p><b>LEAVE ME IN THE QUEUE FOR</b></p>
            <p class="restName"> {{waiting.rName}} </p> 
            <p><b>Waiting Time:</b></p>
            <div class="wait"> <span class="time">{{selRest.estTime}}</span><span class="min">min</span> </div>
          </slot>
        </section>

        <footer class="modal-footer">
            <slot name="footer">

              <button
                type="button"
                class="btn btn-text"
                v-on:click="keepWaiting"
              >
                Stay in the queue
            </button>
            <button
                type="button"
                class="btn btn-text"
                v-on:click="dropOffConfirm"
              >
                Drop Off
            </button>
          </slot>
        </footer>
      </div>

    </div>
  </div>



  <div class="modal-backdrop" v-if="show2">
      <div class="modal modal2">

      <img src="../../assets/icons/kiwe.png" alt="Kiwi" class="kiwi1">
      <img src="../../assets/icons/kiwe.png" alt="Kiwi" class="kiwi2">

      <header class="modal-header">
        <slot name="header">
        </slot>
      </header>
      
      <section class="modal-body">
        <slot name="body">
            <h3>Your spot has been removed fom the restaurant!</h3> 
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
          <button
              type="button"
              class="btn btn-text"
              v-on:click="dropOffSpot">
              Close
          </button>
        </slot>
      </footer>
    </div>


  </div>
  </div>
</template>

<script>

import WaitListInfo from '../waitlist/WaitListInfo.vue'
import firebase from 'firebase';

  export default {
    name: 'VerificationPopUp',

      components: {
    WaitListInfo
  },

    data:function(){
    return{
      show2: false
    }
    },

    methods: {
      keepWaiting: function() {
        this.$store.dispatch('popUpShowsD')
      },

      dropOffConfirm: function(){
        this.show2 = true;
        console.log(this.$store.state.currentListStatus)
      },

      dropOffSpot: function() {

        this.$store.dispatch('isInLine');
        this.$store.dispatch('denyPopupNotification',false);
        this.$store.dispatch('emptyWaitlist');
       
        this.$store.dispatch('popUpShowsD');

        let didUser = this.$store.state.currentListStatus.did;
        let uid = this.$store.state.userStatus.uid;


        let db = firebase.firestore();
        db.collection('waitlist').doc(didUser).delete();
        db.collection('users').doc(uid).update({
                    isInLine: false,
                    currentWaiting: "",
        })

        this.$store.dispatch('emptyStatus');
         this.$router.push('home');
      },
    },

    computed: {
      show() {
      return this.$store.state.popUpShowD
    },

    waiting() {
      return this.$store.state.currentListStatus
    },

    selRest() {
      return this.$store.state.selRest
    }

  }

  }
</script>

<style scoped lang="scss">

  @import "../../sass/_variables.scss";

 .restName{
    text-transform: uppercase;
    font-family: $sc-font-family;
    font-weight: bold;
    color:$accent;
    font-size: 18px;
  }

h4{
  font-size: 3rem;
  margin: 1rem auto; 
  font-family: $sc-font-family;
  line-height: 3rem;
  font-weight: bold;
  color: black;
}

  .kiwi1{
    width: 50px;
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 200;
  }
  .kiwi2{
    width: 50px;
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 200;
  }

  p{
    margin:auto;
    font-size: 1.5rem;
  }

    b{
    font-family: $bt-font-family;
    font-weight: bold;
    margin-top: 2rem;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 14;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-y:visible;
    display: flex;
    flex-direction: column;
    height: 60vh;
    border-radius: 10px;
    position: relative;
 
  }

  .modal2 footer{
    margin-top: 3rem;
  }

  .modal2 .modal-body h3{
  font-size: 2rem;
  margin: 0; 
  font-family: $sc-font-family;
  line-height: 3rem;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 3rem;
  }

 .modal-footer{
   margin: 0;
 }

  // .modal-header {
  //   border-bottom: 1px solid #eeeeee;
  //   color: #4AAE9B;
  //   justify-content: space-between;
  // }

 

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

 
 
</style>