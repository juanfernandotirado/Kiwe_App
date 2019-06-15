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

<p>{{ additionalInfo.accessibility }}</p>

<h5>Seating Preference</h5>

<label for="seatingPreferences">Seating Preferences</label>

<select v-model="additionalInfo.seatingPreferences" name="seatingPreferences">
<option value="">No preferences</option>
<option value="Indoor" > Indoor </option>
<option value="Outdoor" > Outdoor </option> 
<option value="Private-Table" > Private-Table </option> 
<option value="Shared-Table" > Shared-Table </option> 
<option value="Bar" > Bar </option> 
<option value="Window-View" > Window-View </option> 

</select>

<p>{{ additionalInfo.seatingPreferences }}</p>

</div>
</template>

<script>


export default {
  name: 'AdditionalInfo',
    // data:function(){
    // // return{
    // //     additionalInfo: {
    // //     accessibility:'',
    // //     seatingPreferences: ''
    // //     },
        
    // },

    methods: {
    },

    computed: {
        additionalInfo(){
            return this.$store.state.additionalInfo
        }

    }
  
}

</script>

<style scoped>
select{
    display: block;

}
</style>
