<template>
<div>
  <div class="modal-backdrop">
    <div class="modal">

      <img src="../../assets/icons/kiwe.png" alt="Kiwi" class="kiwi1">
      <img src="../../assets/icons/kiwe.png" alt="Kiwi" class="kiwi2">

      <div class="popup">
        <header class="modal-header">
          <slot name="header">
            <h2 class="hello">Hello,</h2> 
            <h3 class="user-name"> {{userName}} </h3>
          </slot>
        </header>

        <section class="modal-body">
          <slot name="body">
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

  @import "../../sass/_variables.scss";

  .section-title {
    font-size: 1rem;
  }

  p {
    font-size: 1rem;
  }

  .restName {
    font-size: 1.2rem;
  }

.user-name{
  font-size: 2.5rem;
  margin: 0; 
  font-family: $sc-font-family;
  line-height: 3rem;
  font-weight: bold;
  margin-bottom: 5px;
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
    max-height: 480px;
    border-radius: 10px;
    position: relative;
    //margin-top: 20%;
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

  .modal-footer {
    //padding: 15px;
    display: flex;
    padding: 0;
  }

 

  // .modal-footer {
  //   border-top: 1px solid #eeeeee;
  //   justify-content: space-around;
  // }

  .modal-body {
    position: relative;
    //padding: 20px 20px;
  }


  .hello {
  margin-bottom: 1vh;
  font-weight: bold;
  margin-top: 0;
  margin-left: 3rem;
  color: $sc-font-color;
  text-align: left;
  font-size: 1.2rem;
  font-family: $sc-font-family;

}

.section-title {
  margin-bottom: 1vh;
}

.btn-text {
  margin: 1vh 10% !important;
}

  
</style>