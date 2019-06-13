<template>
    <div>
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
            }
            this.$store.dispatch('joinList', currentStatus)
        }
    }
    
}
</script>

<style>

</style>


