<template>
 <div class="additional-info">
<h5>Accesibility Drop-down Menu</h5>

<label for="additionalInfo">Accessibility</label>

<select v-model="additionalInfo.accessibility" name="additionalInfo">
<option value="">No special needs</option>
<option value="Wheelchair" > Wheelchair </option>
<option value="Stroller" > Stroller </option> 
<option value="Baby-Chair" > Baby Chair </option> 
<option value="Seat-Boster" > Seat Boster </option> 
<option value="Guide-Dog" > Guide Dog </option> 

</select>

</div>
</template>

<script>


export default {
  name: 'Accesibility',
    data:function(){
        return{
        }
    },

    computed: {
        additionalInfo(){
            return this.$store.state.additionalInfo;
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
