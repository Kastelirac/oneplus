<template>
    <div class="container">
        <br/><br/><br/><br/><br/>        <link rel="stylesheet" href="https://kit.fontawesome.com/18ca921f41.js">
        <link href="../../node_modules/bulma-calendar/dist/css/bulma-calendar.min.css" rel="stylesheet">
        <br/><br/><br/><br/><br/><br/><br/>
        <h1>Odaberite mjesto i vrijeme </h1><br/>
        <b-field label="Kada?">
            <b-datetimepicker
                rounded
                placeholder="Click to select..."
                icon="calendar-today"
                :datepicker="{ showWeekNumber }"
                :timepicker="{ enableSeconds, hourFormat: format }">
            </b-datetimepicker>
        </b-field>
        <br/><br/>
        <div class="field">
            <label class="label">Gdje?</label>
            <div class="control">
                <input class="input" type="text" placeholder="Unesite ime mjesta">
            </div>
        </div>
        <button class="button is-info is-medium"><router-link to="trazi">Traži</router-link></button>
        

    </div>
    
</template>
<script src="https://kit.fontawesome.com/18ca921f41.js" crossorigin="anonymous"></script>
<script>
export default {
    data() {
        return {
            showWeekNumber: false
        }
    }
}
</script>

