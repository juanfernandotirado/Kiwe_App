<template>
    <div>
        <ul class="user-history">
            <li v-for="history in historyList"
            v-bind:key="history.id"
            class="history">
            <div class="historyInformation">
                <div class="basic-info">
                    <p class="name"> {{history.rName}} </p>
                    <p class="date"> {{history.date}} </p>
                    <p class="time"> {{history.joinHour}} </p>
                    <p class="grSize">Party for: {{history.grSize}} </p>
                    <p>Waited for: {{ ((((history.waitedTime)+1)/60000)-(((history.joinAt)+1)/60000)).toFixed(0)}} mins</p>
                    <!-- Wait Time:{{ ((currentTime-new Date(spot.joinTime).getTime()+1)/60000).toFixed(0)}}mins -->
                </div>
            </div>

            </li>


        </ul>
    </div>
</template>

<script>
export default {
    name: 'userHistory',

    computed: {
        historyList(){
            return this.$store.state.userStatus.history
        }
    }
}
</script>

<style scoped lang="sass">

</style>


