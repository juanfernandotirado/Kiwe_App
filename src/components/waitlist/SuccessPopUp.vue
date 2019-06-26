<template>
<div>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          <h4 class="green-text center-align">Congratulation!</h4>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          <p>Your table is ready!</p>
          <p>Please go back to the restaurant.</p>
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn-green"
              v-on:click="goHome()"
            >
              OK
          </button>
        </slot>
      </footer>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'SuccessPopUp',

    data:function(){
      return{
        
      }
    },
    

    methods: {

      goHome: function(){
        this.$store.dispatch('isInLine');
        this.$router.push('home');
        
      }
      
    },

    computed: {

  
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
    justify-content: center;
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
    cursor: pointer;
  }
</style>