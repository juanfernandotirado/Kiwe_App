<template>
<div>
    <!--<button @click="show=true" class="btn">Confirm</button>-->
  <div class="modal-backdrop" v-show="show">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          You have been successfully added to the queue! 
          <button
            type="button"
            class="btn-close"
            v-on:click="goHome()"
          >
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          I'm the default body!
          <WaitListInfo/>
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            I'm the default footer!

            <button
              type="button"
              class="btn-green"
              v-on:click="goHome()"
            >
              Close me!
          </button>
        </slot>
      </footer>
    </div>
  </div>
  </div>
</template>

<script>

import WaitListInfo from './WaitListInfo.vue'

  export default {
    name: 'VerificationPopUp',

      components: {
    WaitListInfo
  },

    data:function(){
    return{
      //show:false
    }
    },

    methods: {

      goHome: function(){
        this.$router.push('home');
        this.$store.dispatch('popUpShows')
      }
      
    },

    computed: {
      show() {
      return this.$store.state.popUpShow
    }
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
    justify-content: flex-end;
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
  }
</style>