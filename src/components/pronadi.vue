<template>
    <div class="container">
        <link rel="stylesheet" href="https://kit.fontawesome.com/18ca921f41.js">
        <link href="../../node_modules/bulma-calendar/dist/css/bulma-calendar.min.css" rel="stylesheet">
        <br/><br/><br/><br/><br/><br/><br/>
        <h1>Odaberite mjesto i vrijeme </h1><br/>
        <label class="label">Kada?</label><br/>
        <input type="date"><br/><br/>
        <div class="field">
            <label class="label">Gdje?</label>
            <div class="control">
                <input class="input" type="text" placeholder="Unesite ime mjesta">
            </div>
        </div>
        <button class="button is-info is-medium"><router-link to="trazi">Traži</router-link></button>
        <!-- <div id='app'>
            <button ref='calendarTrigger' type='button'>Change</button>
        </div> -->


    </div>
    
</template>
<script src="https://kit.fontawesome.com/18ca921f41.js" crossorigin="anonymous"></script>
<!-- <script src="../../node_modules/bulma-calendar/dist/js/bulma-calendar.min.js"></script> -->
<script>
export default{

}
</script>

