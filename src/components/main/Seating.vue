<template>
 <div class="additional-info">

<h5>Seating Preference</h5>

<select v-model="additionalInfo.seatingPreferences" name="seatingPreferences">
<option value="">No preferences</option>
<option value="Indoor" > Indoor </option>
<option value="Outdoor" > Outdoor </option> 
<option value="Private-Table" > Private-Table </option> 
<option value="Shared-Table" > Shared-Table </option> 
<option value="Bar" > Bar </option> 
<option value="Window-View" > Window-View </option> 

</select>

</div>
</template>

<script>

export default {
  name: 'Seating',
    data:function(){
        return{    
        }
    },

    computed: {
        additionalInfo(){
            return this.$store.state.additionalInfo
        }
    }
  
}

</script>

<style scoped lang="scss">

.additional-info{

    width: 30%;
    margin: 2% auto;
}

select{
    display: block;
}
</style>
