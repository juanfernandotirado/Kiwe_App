<template>
    <div>
        <button v-on:click="addToList()" class="btn orange">Confirm</button>
        
        <div v-if="showPopup">
        <VerificationPopUp/>
        </div>
    </div>
    
</template>

<script>
import firebase from 'firebase';
import VerificationPopUp from '../waitlist/VerificationPopUp.vue'


export default {
    name: 'AddToList',
    components: {
        VerificationPopUp,
    },

    computed:{
        showPopup() {
            return this.$store.state.popUpShow
        }
    },

    methods: {
        addToList: function(){
            let currentTime = new Date();
            let that = this;
            let docName = currentTime.getTime() + '_' +this.$store.state.userStatus.uid;
            
            let currentStatus = {
                uid:this.$store.state.userStatus.uid,
                nickName:this.$store.state.userStatus.nickName,
                grSize:this.$store.state.currentListStatus.grSize,
                currentSpot:this.$store.state.currentListStatus.currentSpot,
                rid:this.$store.state.currentListStatus.rid,
                rName:this.$store.state.currentListStatus.rName,
                addOptionsAccs:this.$store.state.additionalInfo.accessibility,
                addOptionsSeating:this.$store.state.additionalInfo.seatingPreferences,
                joinTime: currentTime.getTime(),
                joinAt: currentTime.getTime(),
                date: `${currentTime.getFullYear()}-${currentTime.getMonth()+1}-${currentTime.getDate()}`,
                status: 'waiting',
                did:docName //Save the document name in currentStatus
            }

            let db = firebase.firestore();

            db.collection('waitlist').doc(docName).set({
                //From this object of the firebase(reps), grab just the UID to set the user information on firebase.
                uid:this.$store.state.userStatus.uid,
                nickName:this.$store.state.userStatus.nickName,
                grSize:this.$store.state.currentListStatus.grSize,
                rid:this.$store.state.currentListStatus.rid,
                rName:this.$store.state.currentListStatus.rName,
                addOptionsAccs:this.$store.state.additionalInfo.accessibility,
                addOptionsSeating:this.$store.state.additionalInfo.seatingPreferences,
                joinTime: currentTime.getTime(),
                date: `${currentTime.getFullYear()}-${currentTime.getMonth()+1}-${currentTime.getDate()}`,
                status: 'waiting',
                //in here we created different properties for the user

            }).then(()=>{
                that.$store.dispatch('addWaitingList',currentStatus);
                that.$store.dispatch('joinList', currentStatus);
                that.$store.dispatch('isInLine');
                that.$store.dispatch('popUpShows');
            })
               
        }
    },
   
}
</script>

<style scoped lang="scss">

</style>


