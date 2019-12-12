<template>
    <div class="max">
        <br/><br/><br/><br/><br/>        
        <br/><br/><br/><br/><br/><br/><br/>
        <h1>Odaberite mjesto i vrijeme </h1><br/>
        <!--<b-field label="Kada?">
            <b-datetimepicker
                rounded
                placeholder="Odaberite vrijeme  "
                icon="calendar-today"
                :datepicker="{ showWeekNumber }"
                :timepicker="{ enableSeconds, hourFormat: format }">
            </b-datetimepicker>
        </b-field>-->
        <b-field label="Odaberite datum">
            <b-datepicker
                rounded
                placeholder="Odaberite datum"
                icon="calendar-today"
                editable>
            </b-datepicker>
        </b-field>
        <b-field>
        <b-clockpicker
            rounded
            placeholder="Click to select..."
            icon="clock"
            :hour-format="format">
        </b-clockpicker>
        </b-field>
        <br/><br/>
        <b-field><br/>
            <label class="label">Gdje?</label>
            <div class="control">
                <b-input rounded class="input" type="text" placeholder="Unesite ime mjesta"></b-input> 
            </div>
        </b-field>
        <button class="button is-info is-medium"><router-link to="trazi">Traži</router-link></button>
        

    </div>
    
</template>
<style scoped>
    .max{
        margin:0 auto;
        max-width:300px;
    }
</style>
<script>
export default {
    data() {
        return {
            showWeekNumber: false
        }
    }
}
</script>

