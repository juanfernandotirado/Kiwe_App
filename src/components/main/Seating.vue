<template>
 <div class="additional-info">

<h5>Seating Preference</h5>

<!-- <label for="seatingPreferences">Seating Preferences</label> -->

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
  name: 'Seating',
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

.additional-info{

    width: 30%;
    margin: 2% auto;
}

select{
    display: block;

}
</style>
