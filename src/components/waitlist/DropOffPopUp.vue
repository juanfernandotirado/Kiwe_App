<template>
<div>
    <!--<button @click="show=true" class="btn">Confirm</button>-->
  <div class="modal-backdrop" v-if="show">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          You have been successfully added to the queue! 

          <button
            type="button"
            class="btn-close"
          >
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
            Are you sure you want to drop off? 

            <!-- <WaitListInfo/> -->
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            <!-- I'm the default footer! -->

            <button
              type="button"
              class="btn-green"
              v-on:click="keepWaiting"
            >
              Keep Waiting
          </button>
          <button
              type="button"
              class="btn-green"
              v-on:click="dropOffConfirm"
            >
              Drop Off
          </button>
        </slot>
      </footer>
    </div>
  </div>



  <div class="modal-backdrop" v-if="show2">
      <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <!-- You have been successfully added to the queue!  -->

          <button
            type="button"
            class="btn-close"
          >
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
            Your spot has been removed fom the restaurant! 

            <!-- <WaitListInfo/> -->
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            <!-- I'm the default footer! -->
          <button
              type="button"
              class="btn-green"
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

import WaitListInfo from './WaitListInfo.vue'
import firebase from 'firebase';

  export default {
    name: 'VerificationPopUp',

      components: {
    WaitListInfo
  },

    data:function(){
    return{
      //show:false
      show2: false
    }
    },

    methods: {
      keepWaiting: function() {
        this.$store.dispatch('popUpShowsD')
        // this.$router.push('home');
      },

      dropOffConfirm: function(){
        this.show2 = true;
        console.log(this.$store.state.currentListStatus)
      },

      dropOffSpot: function() {
        this.$store.state.userStatus.status = 'cancel'
        console.log(this.$store.state.userStatus)
        // this.$store.state.waitList.status = 'cancel'

        this.$store.dispatch('isInLine');
        this.$store.dispatch('emptyWaitlist');
        this.$router.push('home');
        this.$store.dispatch('popUpShowsD');


        let didUser = this.$store.state.currentListStatus.did;

        let db = firebase.firestore();
        db.collection('waitlist').doc(didUser).delete();

        this.$store.dispatch('emptyStatus');
      },
    },

    computed: {
      show() {
      return this.$store.state.popUpShowD
    },

    // didUser() {
    //   return this.$store.state.userStatus.did
    // }
  }

  }
</script>

<style scoped>

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
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: center;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
    margin: auto 1rem;
    cursor: pointer;
  }
</style>