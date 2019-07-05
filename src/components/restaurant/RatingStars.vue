<template>
    <p class="rating-container">
        <span class="star-container" v-html="showStars"></span>&nbsp;<span>{{rating}}</span>
    </p>
</template>
<script>
export default {
    name:'RatingStars',
    props:{
        rating: Number
    }
    ,
    computed:{
        showStars(){
            let starCount = Math.floor(this.rating);
            let output='';
            for(let i = 0;i<5; i++ )
            {   
              
                if(i<starCount)
                {
                    output+='<i class="fas fa-star"></i>';
                 
                }
                else{
                    output+='<i class="far fa-star"></i>';
                   
                }
                
            }
            
            return output;
        }
    }
}
</script>
<style scoped lang="scss">
    .rating-container{
        display: flex;
        align-items: center;
    }

    .star-container{
        font-size: 8px;
    }
</style>

