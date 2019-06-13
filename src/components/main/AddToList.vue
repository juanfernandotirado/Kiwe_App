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
            let person = {
                id:this.$store.state.userStatus.uid,
                nickName:this.$store.state.userStatus.nickName,
                grSize:this.$store.state.groupSize,
                currSpot:this.$store.state.waitList.lenght,
            }
            this.$store.dispatch('joinList', person)
        }
    }
    
}
</script>

<style>

</style>


