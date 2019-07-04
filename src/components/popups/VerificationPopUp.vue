<template>
<div>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          <p>Hello, </p>
          <h3> {{userName}} </h3>
          <WaitListInfo/> 
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">

            <button
              type="button"
              class="btn btn-text"
              v-on:click="goHome()"
            >
              Done
          </button>
        </slot>
      </footer>
    </div>
  </div>
  </div>
</template>

<script>

import WaitListInfo from '../waitlist/WaitListInfo.vue'

  export default {
    name: 'VerificationPopUp',

      components: {
    WaitListInfo
  },

    data:function(){
      return{
      }
    },

    methods: {

      goHome: function(){
        this.$router.push('home');
        this.$store.dispatch('popUpShows')
      }
      
    },

    computed:{
      userName(){
        return this.$store.state.userStatus.nickName
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
    display: flex;
  }

 

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: space-around;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  
</style>