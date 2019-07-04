<template>
 <div class="additional-info">
<!-- <h5>Accesibility Drop-down Menu</h5> -->

<div class="dropDown">

    <label for="additionalInfo" >
        <div class="dropDown-menuTitle">
            Any Accesibility needed?        
        </div>
    </label>

    <select v-model="additionalInfo.accessibility" class="dropDown-options" name="additionalInfo">
    <option value="">No special needs</option>
    <option value="Wheelchair" > Wheelchair </option>
    <option value="Stroller" > Stroller </option> 
    <option value="Baby-Chair" > Baby Chair </option> 
    <option value="Seat-Boster" > Seat Boster </option> 
    <option value="Guide-Dog" > Guide Dog </option> 

    </select>
</div>

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

@import "../../sass/_variables.scss";

.dropDown{
    width: 84%;
    margin: auto;
  }

.additional-info{

    margin: 2% 1rem;
}

select{
    display: block;
}

.menuTitle {
    color:black;
    font-size: 1.5rem;
}
</style>
