<template>

    <div>
        <h1>Hello {{userStatus.nickName}}</h1>

        <button v-on:click="addToList" class="btn orange">Join</button>

    </div>
    
</template>

<script>
export default {
    name: 'AddToList',
    methods: {
        addToList: function(){
            // console.log(this.$store.state.userStatus.nickName)
            let currentStatus = {
                uid:this.$store.state.userStatus.uid,
                nickName:this.$store.state.userStatus.nickName,
                grSize:this.$store.state.currentListStatus.groupSize,
                currSpot:this.$store.state.currentListStatus.currentSpot+1,
                rid:this.$store.state.selRest.rid,
                rName:this.$store.state.selRest.name,
                addOptionsAccs:this.$store.state.additionalInfo.accessibility,
                addOptionsSeating:this.$store.state.additionalInfo.seatingPreferences
            }
            this.$store.dispatch('joinList', currentStatus)
        }
    },
    computed: {
        userStatus(){
            return this.$store.state.userStatus
        }
    }
    
}
</script>

<style>

</style>


