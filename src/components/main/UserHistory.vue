<template>
    <div>
        <h2 class="section-title">History</h2>
        <ul class="user-history">
            <li v-for="history in topThreeHistory(historyList)"
            v-bind:key="history.id"
            class="history">

                <img :src="compileUrl(history.rImgRef)" alt="" class="img-cover">


                <div class="history-information">
                    <div class="basic-info">
                        <div class="basic-info-header">
                            <p class="name"> {{history.rName}} </p>
                            <span class="rating">
                                <RatingStars :rating="history.rRating" />
                            </span>
                        </div>
                        
                        <p class="date"> {{history.date}} at {{history.joinHour}} </p>
                        <p class="grSize">Party for: <span>{{history.grSize}}</span> </p>
                        <p class="waitTime">Waited for:  <span>{{ ((((history.waitedTime)+1)/60000)-(((history.joinAt)+1)/60000)).toFixed(0)}} mins </span> </p>
                        <!-- Wait Time:{{ ((currentTime-new Date(spot.joinTime).getTime()+1)/60000).toFixed(0)}}mins -->
                    </div>
                </div>

            </li>


        </ul>
    </div>
</template>

<script>

import RatingStars from '../restaurant/RatingStars.vue'
export default {
    name: 'userHistory',

    components: {
        RatingStars
    },


    data(){
        return {
            urlPart: 'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyCxKHIpSrggNO7p1N-n7V0FkJ8DohiK9MQ&maxwidth=400&photoreference=',

        }

    },

    computed: {
        historyList(){
            return this.$store.state.userStatus.history
        },

    },

    methods: {
        compileUrl: function (item) {
            return this.urlPart + item;
        },

        topThreeHistory: function (history) {
            let historyShort = [];
            let originalHistory = history.length;
            let newHistory = originalHistory - 3;

            //console.log(history);
            //console.log(originalHistory);
            //console.log(newHistory);


            for(var i=newHistory; i < originalHistory; i++){
                //console.log(history[i]);
                historyShort.push(history[i]);

            }
            //console.log(historyShort);
            return historyShort;
        
        }
    }

    
}
</script>

<style scoped lang="scss">

@import '../../sass/_variables.scss';


    .history {
        position: relative;
        height: 240px;
        overflow: hidden;
        border-radius: 10px;
        margin: 20px 0;

        .history-information {
            position: absolute;
            z-index: 12;
            display: flex;
            align-items: flex-end;
            color: white;
            background: linear-gradient(#94600149,#6d4700,#503400) ;
            width: 100%;
            bottom: 0;
        }



        .img-cover{
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 10;
            border-radius: 10px;
        }

    }

    .basic-info{
        width: 70%;
        margin-left: 10px;
        margin-bottom: 5px;
        padding: 5px;
        padding-bottom: 0;
        .grSize,
        .waitTime {
            font-weight: bold;

            span {
                font-weight: normal;
            }
        }
        .name{
            font-weight: bold;
            font-size: 18px;
            font-family: $sc-font-family;
        }
        .basic-info-header {
            display:flex;
            flex-wrap: nowrap;
            justify-content: space-between;
        }
        p{
            margin: 0;
            text-align: left;
     }
}

</style>



