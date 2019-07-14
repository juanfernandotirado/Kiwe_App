<template>
    <div>
        <button v-on:click="addToList()" class="btn btn-text">Confirm</button>
        
        <div v-if="showPopup">
        <VerificationPopUp/>
        </div>
    </div>
    
</template>

<script>
import firebase from 'firebase';
import VerificationPopUp from '../popups/VerificationPopUp.vue'


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
            console.log('doc name',docName);
            let uid = this.$store.state.userStatus.uid;
            let did = this.$store.state.currentListStatus.did;

            let hour = currentTime.getHours();
            let minute = currentTime.getMinutes();
            let hourMinute;
            console.log(hour);
            console.log(minute);
            if (hour <13) {
                hourMinute = (hour + ":" + minute + " am");
                if (hour == 0){
                    hourMinute = (12 + ":" + minute + " am");
                }
            }
            else {
                hour = hour-12;
                hourMinute = (hour + ":" + minute + " pm");
            }

            
            let currentStatus = {
                uid:this.$store.state.userStatus.uid,
                nickName:this.$store.state.userStatus.nickName,
                grSize:this.$store.state.currentListStatus.grSize,
                currentSpot:this.$store.state.currentListStatus.currentSpot,
                rid:this.$store.state.currentListStatus.rid,
                rName:this.$store.state.currentListStatus.rName,
                rRating: this.$store.state.selRest.rating,
                rImgRef: this.$store.state.selRest.rImgRef,
                addOptionsAccs:this.$store.state.additionalInfo.accessibility,
                addOptionsSeating:this.$store.state.additionalInfo.seatingPreferences,
                joinTime: currentTime.getTime(),
                joinAt: currentTime.getTime(),
                // joinHour: `${currentTime.getHours()}:${currentTime.getMinutes()}`,
                 joinHour: hourMinute,
                date: `${currentTime.getMonth()+1}-${currentTime.getDate()}-${currentTime.getFullYear()}`,
                status: 'waiting',
                did:docName //Save the document name in currentStatus
            }

            let db = firebase.firestore();

            console.log('database id before firebase',docName);
            console.log('current spot in currentList', this.$store.state.currentListStatus.currentSpot);

            db.collection('waitlist').doc(docName).set({
                //From this object of the firebase(reps), grab just the UID to set the user information on firebase.
                uid:this.$store.state.userStatus.uid,
                nickName:this.$store.state.userStatus.nickName,
                grSize:this.$store.state.currentListStatus.grSize,
                rid:this.$store.state.currentListStatus.rid,
                rImgRef: this.$store.state.selRest.rImgRef,
                rName:this.$store.state.currentListStatus.rName,
                addOptionsAccs:this.$store.state.additionalInfo.accessibility,
                addOptionsSeating:this.$store.state.additionalInfo.seatingPreferences,
                joinTime: currentTime.getTime(),
                joinAt: currentTime.getTime(),
                joinHour: hourMinute,
                date: `${currentTime.getMonth()+1}-${currentTime.getDate()}-${currentTime.getFullYear()}`,
                status: 'waiting',
                notification: '',
                currentSpot:this.$store.state.currentListStatus.currentSpot,
                did:docName,
                //in here we created different properties for the user

          

            }).then(()=>{
                that.$store.dispatch('addWaitingList',currentStatus);
                that.$store.dispatch('joinList', currentStatus);
                //that.$store.dispatch('addCurrentWaiting', docName);
                that.$store.dispatch('isInLine', true);
                that.$store.dispatch('popUpShows');
                console.log(docName);

                console.log( 'database id adding to user', docName);
                console.log('user id in addtolist', uid);

                db.collection('users').doc(uid).update({
                    isInLine:true,
                    currentWaiting: docName,
                }).catch(function(error){
                        console.log(error);
            })

            })
               
        }
    },
   
}
</script>

<style scoped lang="scss">

</style>


