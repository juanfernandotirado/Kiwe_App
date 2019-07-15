<template>
<div>
  <div class="modal-backdrop" v-if="popUpSuccessShow">
    <div class="modal">

      <img src="../../assets/icons/kiwe.png" alt="Kiwi" class="kiwi1">
      <img src="../../assets/icons/kiwe.png" alt="Kiwi" class="kiwi2">

      <div class="popup">
        <header class="modal-header">
          <slot name="header">
            <h4 class="section-title">Congratulations!</h4>
          </slot>
        </header>

        <section class="modal-body">
          <slot name="body">
            <p><b>Your table is ready!</b></p>
            <p><b>Please go back to the restaurant</b></p>
          </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn btn-text" v-on:click="goHome()">OK</button>
          </slot>
        </footer>
      </div>

    </div>
  </div>
  </div>
</template>

<script>

  import firebase from 'firebase';

  export default {
    name: 'SuccessPopUp',

    data:function(){
      return{
       
      }
    },

    beforeCreate(){
      let did = this.$store.state.currentListStatus.did;
      let joinTime = this.$store.state.currentListStatus.joinAt;

      let db = firebase.firestore();
      let that = this;

      console.log('database id in successpopup', did);

      //Fetch Realtime Notification from firebase update
      let unsubscribe = db.collection("waitlist").doc(did)
            .onSnapshot(function(doc) {
                let item = doc.data();
                console.log('Something updated in firebase.',item)
                try {
                  if(!that.$store.state.denyNotification&&item.notification.length>1){ 
                    //Get notification

                    that.$store.dispatch('controlPopupNotification',true);
                  }
                  //  if(item.status=="success"){
                  //     that.$store.dispatch('togglePopUpSuccessShows');
                  //     //stop listen update
                  //     unsubscribe();
                  // }

                
                } 
                catch (error) {
                  console.log(error);
                }
      });

    },

    created(){
      let did = this.$store.state.currentListStatus.did;
      let db = firebase.firestore();
      let that = this;

      let successCustomer = db.collection("waitlist").doc(did)
            .onSnapshot(function(doc) {
                let item = doc.data();
                console.log('Something updated in firebase.',item)
                try {
              
                  if(item.status=="success"){
                      that.$store.dispatch('togglePopUpSuccessShows');
                      //stop listen update
                      unsubscribe();
                  }
                }
                catch (error) {
                  console.log(error);
                }
      });

    },
    

    methods: {

      goHome: function(){

        let currentListStatus = this.$store.state.currentListStatus;
        let history = this.$store.state.userStatus.history;

        let finishWait = new Date();
        let waitedTime = finishWait.getTime();

        let uid = this.$store.state.userStatus.uid;

        this.$store.dispatch('addWaitedTime', waitedTime);

        if (history.length<3){
          console.log('currentListStatus before adding to history', currentListStatus);
          this.$store.dispatch('addHistory', currentListStatus);

          this.$store.dispatch('fiveMinuteWait');
          this.$store.dispatch('togglePopUpSuccessShows');
          this.$store.dispatch('denyPopupNotification',false);
          //this.$store.dispatch('emptyCurrentWaiting');
          this.$store.dispatch('emptySelRest');
          this.$store.dispatch('isInLine', false);
          //this.$store.dispatch('emptyStatus');
          this.$router.push('home');
          this.$store.dispatch('changeStatus');
          this.$store.dispatch('toogleFirstStep')

          let db = firebase.firestore();
          let that = this;

          let addToHistory =db.collection("users").doc(uid).update({
            history : history,
            isInLine: false,
            currentWaiting: "",
            success: true, 
          })
        }

        else {
          console.log('currentListStatus before adding to history', currentListStatus);
          this.$store.dispatch('addHistoryThree', currentListStatus);
          this.$store.dispatch('fiveMinuteWait');
          this.$store.dispatch('togglePopUpSuccessShows');
          this.$store.dispatch('denyPopupNotification',false);
          //this.$store.dispatch('emptyCurrentWaiting');
          this.$store.dispatch('emptySelRest');
          this.$store.dispatch('isInLine', false);
          //this.$store.dispatch('emptyStatus');
          this.$router.push('home');
          this.$store.dispatch('changeStatus');
          this.$store.dispatch('toogleFirstStep')

          let db = firebase.firestore();
          let that = this;

          let addToHistory =db.collection("users").doc(uid).update({
            history : history,
            isInLine: false,
            currentWaiting: "",
            success: true, 
          })
        }
        
        
        //this.$store.dispatch('emptyWaitlist');
        //this.$store.dispatch('emptyStatus');
      }  
    },

    computed:{
      popUpSuccessShow(){
      return this.$store.state.popUpSuccessShow
    }
    },

    // beforeDestroy(){
    //   this.$store.dispatch('emptyStatus');
    //   this.$store.dispatch('emptyWaitlist');

    //   let db = firebase.firestore();
    //   let that = this;

      
    //       db.collection("users").doc(uid),update({
    //         history: this.$store.state.userStatus.history,
    //       })
      
    // }
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
    max-height: 480px;
    border-radius: 10px;
    position: relative;
 
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

  .modal-footer {
    padding: 0;
  }

  .modal-body {
    position: relative;
    //padding: 20px 10px;
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

 h4{
  //font-size: 2rem;
  margin: 1vh auto; 
  font-family: $sc-font-family;
  line-height: 3rem;
  font-weight: bold;
}
  b{
    font-family: $bt-font-family;
    font-weight: bold;
    font-size: 1rem;
  }

  .btn-text {
    margin: 1vh 10% !important;
  }
</style>