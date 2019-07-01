<template>
<div>
  <div class="modal-backdrop" v-if="show">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          <h4>Drop me off</h4>
          <p>Leave the queue at</p>
          <p> {{waiting.rName}} </p> 
          <p>Waiting time</p>
          <p> {{selRest.estTime}} </p>
        </slot>
      </section>
      <footer class="modal-footer">
          <slot name="footer">

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
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
            Your spot has been removed fom the restaurant! 
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
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
        this.$store.dispatch('emptyWaitlist');
       
        this.$store.dispatch('popUpShowsD');

        let didUser = this.$store.state.currentListStatus.did;

        let db = firebase.firestore();
        db.collection('waitlist').doc(didUser).delete();

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

  .modal-footer {
    padding: 15px;
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
    margin: 2rem auto;
    cursor: pointer;
    display: block;
    padding: 0.25rem;
    width: 300px;
  }
</style>