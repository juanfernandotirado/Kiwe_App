<template>
    <div>
        <button v-on:click="addToList" class="btn orange">Join</button>
    </div>
    
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'AddToList',
    methods: {
        addToList: function(){
             let currentTime = new Date();
             let docName = currentTime.getTime() + '_' +this.$store.state.userStatus.uid;
             console.log(docName);
             let db = firebase.firestore();
                return db.collection('waitlist').doc(docName).set({
                  //From this object of the firebase(reps), grab just the UID to set the user information on firebase.
                uid:this.$store.state.userStatus.uid,
                nickName:this.$store.state.userStatus.nickName,
<<<<<<< Updated upstream
                grSize:this.$store.state.currentListStatus.groupSize,
                currSpot:this.$store.state.currentListStatus.currentSpot+1,
                rid:'ChIJSa1PpdVzhlQRmKSfG7q1eYQ',
                rName:'The Mexican Antojitos y Cantina',
=======
                grSize:this.$store.state.currentListStatus.grSize,
                currentSpot:this.$store.state.currentListStatus.currentSpot,
                rid:this.$store.state.currentListStatus.rid,
                rName:this.$store.state.currentListStatus.rName,
>>>>>>> Stashed changes
                addOptionsAccs:this.$store.state.additionalInfo.accessibility,
                addOptionsSeating:this.$store.state.additionalInfo.seatingPreferences,
                joinTime: currentTime.getTime(),
                date: `${currentTime.getFullYear()}-${currentTime.getMonth()+1}-${currentTime.getDate()}`,
<<<<<<< Updated upstream
                status: 'waiting'
                //in here we created different properties for the user
               })
=======
                status: 'waiting',
                did:docName //Save the document name in currentStatus
            }
             that.$store.dispatch('addWaitingList',currentStatus);
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
               })
               
                that.$store.dispatch('joinList', currentStatus);
                that.$store.dispatch('isInLine');
                that.$store.dispatch('popUpShows');
          

            
                
>>>>>>> Stashed changes

            let currentStatus = {
                uid:this.$store.state.userStatus.uid,
                nickName:this.$store.state.userStatus.nickName,
                grSize:this.$store.state.currentListStatus.groupSize,
                currSpot:this.$store.state.currentListStatus.currentSpot+1,
                rid:this.$store.state.selRest.rid,
                rName:this.$store.state.selRest.name,
                addOptionsAccs:this.$store.state.additionalInfo.accessibility,
                addOptionsSeating:this.$store.state.additionalInfo.seatingPreferences,
                joinTime: currentTime.getTime(),
                date: `${currentTime.getFullYear()}-${currentTime.getMonth()+1}-${currentTime.getDate()}`,
                status: 'waiting'
            }

            this.$store.dispatch('joinList', currentStatus)
        }
    },
    computed: {
        // userStatus(){
        //     return this.$store.state.userStatus
        // }
    }
    
}
</script>

<style>

</style>


