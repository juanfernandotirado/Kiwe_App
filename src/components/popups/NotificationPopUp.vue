<template>
<div>
  <div class="modal-backdrop" v-if="popUpNotificationShow">
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
            <p><B>YOU ARE IN THE WAITING LIST AT</B></p>
            <h3 class="restName">{{ rName }}</h3>

            <div class="restWaiting"> <b>Your table will be ready in:</b> 
              <div class="wait"> <span class="time">05</span><span class="min">min</span> </div>
            </div>
            <p><b>PLEASE, HEAD BACK TO THE RESTAURANT</b></p>
          </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn btn-text" v-on:click="gotIt()">OK</button>
          </slot>
        </footer>
      </div>

    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'NotificationPopUp',

    data:function(){
      return{
        
      }
    },

    methods: {

      gotIt: function(){
        this.$store.dispatch('denyPopupNotification',true);
      }  
    },

    computed:{
      popUpNotificationShow(){
      return this.$store.state.popUpNotificationShow
      },

      userName(){
      return this.$store.state.userStatus.nickName
      },

    rName(){
      return this.$store.state.currentListStatus.rName
    },
    
    }
  }
</script>

<style scoped lang="scss">

  @import "../../sass/_variables.scss";

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
    height: 75vh;
    border-radius: 10px;
    position: relative;

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
  }

  // .modal-header {
  //   border-bottom: 1px solid #eeeeee;
  //   color: #4AAE9B;
  //   justify-content: center;
  // }

  // .modal-footer {
  //   border-top: 1px solid #eeeeee;
  //   justify-content: flex-end;
  // }

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

  .hello {
  margin-bottom: 1rem;
  font-weight: bold;
  margin-top: 0;
  margin-left: 3rem;
  color: $sc-font-color;
  text-align: left;
  font-size: $sc-font-size;
  font-family: $sc-font-family;
}

.user-name{
  font-size: 3rem;
  margin: 0; 
  font-family: $sc-font-family;
  line-height: 3rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: black;
}

  b{
    font-family: $bt-font-family;
    font-weight: bold;
  }

    .restName{
    text-transform: uppercase;
    font-family: $sc-font-family;
    font-weight: bold;
    color:$accent;
    font-size: 22px;
  }

</style>