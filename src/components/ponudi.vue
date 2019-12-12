
<template>
    <div class="da">
        <br/><br/><br/><br/>
    <section>
        <!--<div class="block">
            <button class="button" @click="activeStep = 1">Set Profile</button>
        </div>
        <div class="block">
            <b-switch v-model="showSocial"> Show Social step </b-switch>
            <b-switch v-model="isAnimated"> Animated </b-switch>
            <b-switch v-model="isStepsClickable"> Clickable Marker </b-switch>
        </div>
        <div class="block">
            <b-switch v-model="hasNavigation"> Navigation Buttons </b-switch>
            <b-switch v-model="customNavigation"> Custom Navigation </b-switch>
            <b-switch v-model="isProfileSuccess"> Set <code>is-success</code> for profile </b-switch>
        </div>
        <b-field v-if="hasNavigation" grouped group-multiline>
            <b-select v-model="prevIcon">
                <option value="chevron-left">Chevron prev icon </option>
                <option value="arrow-left">Arrow prev icon</option>
            </b-select>
            <b-select v-model="nextIcon">
                <option value="chevron-right">Chevron next icon </option>
                <option value="arrow-right">Arrow next icon</option>
            </b-select>
        </b-field>
        -->
        <b-steps
            v-model="activeStep"
            :animated="isAnimated"
            :has-navigation="hasNavigation"
            :icon-prev="prevIcon"
            :icon-next="nextIcon">
            <b-step-item label="Lokacija" :clickable="isStepsClickable">
                <h1 class="title has-text-centered">Lokacija</h1>
                <h6 class="title is-6">Navedite mjesto gdje će se dešavati</h6>
                <div class="field">
                    <div class="control">                        
                        <div class="control has-icons-left">
                            <input class="input is-rounded" type="text" placeholder="Mjesto događaja">
                            <span class="icon is-small is-left">
                                <i class="fa fa-map-marker"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <div id="googleMap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5404.716085454414!2d15.932798875278898!3d45.80038056327336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6b7cdd41863%3A0x5a31d185326a73df!2sChoco%20Caf%C3%A9%20Tre%C5%A1njevka!5e0!3m2!1shr!2shr!4v1574040496432!5m2!1shr!2shr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                </div>
            </b-step-item>

            <b-step-item label="Vrijeme" :clickable="isStepsClickable" :type="{'is-success': isProfileSuccess}">
                <h1 class="title has-text-centered">Vrijeme</h1>
                <h6 class="title is-6">Navedite vrijeme kad mislite početi</h6>
                <b-field label="Odaberite datum">
                    <b-datepicker
                        placeholder="Odaberite datum"
                        icon="calendar-today"
                        editable>
                    </b-datepicker>
                </b-field>
                <div>
                    <div class="columns">
                        <div class="column">
                            <b-field label="Vrijeme pocetka">
                                <b-clockpicker v-model="minTime" :hour-format="format"></b-clockpicker>
                            </b-field>
                        </div>
                        <div class="column">
                            <b-field label="Vrijeme zavrsetka">
                                <b-clockpicker v-model="maxTime" :hour-format="format"></b-clockpicker>
                            </b-field>
                        </div>
                    </div>
                </div>
            </b-step-item>

            <b-step-item :visible="showSocial" label="Ostalo" :clickable="isStepsClickable">
                <h1 class="title has-text-centered">Ostalo</h1>
                <div class="field">
                    <div class="control">                        
                        <div class="control has-icons-left">
                            <input class="input is-rounded" type="text" placeholder="Troskovi">
                            <span class="icon is-small is-left">
                                <i class="fa fa-money"></i>
                            </span>
                            <p class="help"> Troskovi npr. dvorane za nogomet </p>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <div class="control">                        
                        <div class="control has-icons-left">
                            <input class="input is-rounded" type="text" placeholder="Broj osoba">
                            <span class="icon is-small is-left">
                                <i class="fa fa-group"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </b-step-item>
            <b-step-item label="Komentari" :clickable="isStepsClickable">
                <h1 class="title has-text-centered">Dodatne pojedinosti</h1>
                <textarea class="textarea" placeholder="Navedite dodatne informacije. Recimo, nemojte zaboraviti vodu."></textarea>
            </b-step-item>

            <b-step-item label="Napravite" :clickable="isStepsClickable" disabled>
                <h1 class="title has-text-centered">Već si član?</h1>
                <button class="button is-info is-rounded is-medium"><router-link to="registrirajse">Ne, registiracija </router-link></button><br/><br/>
                <button class="button is-info is-rounded is-medium"><router-link to="prijava">Da, prijava</router-link></button>
            </b-step-item>

            <div class="pet"
                v-if="customNavigation"
                slot="navigation"
                slot-scope="{previous, next}">
                <b-button
                    outlined
                    icon-pack="fa"
                    icon-left="fa fa-angle-up"
                    :disabled="previous.disabled"
                    @click.prevent="previous.action">
                    
                </b-button>
                <b-button
                    outlined
                    icon-pack="fas"
                    icon-right="fa-arrow-right"
                    :disabled="next.disabled"
                    @click.prevent="next.action">

                </b-button>
            </div>
        </b-steps>
    </section>
    <!--
        <br/><br/><br/><br/><br/>
        <h6 class="title is-6">Navedite mjesto gdje će se dešavati</h6>
        <div class="field">
            <div class="control">                        
                <div class="control has-icons-left">
                    <input class="input is-rounded" type="text" placeholder="Mjesto događaja">
                    <span class="icon is-small is-left">
                        <i class="fa fa-map-marker"></i>
                    </span>
                </div>
            </div>
        </div>
<br/><br/>
        <div id="googleMap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5404.716085454414!2d15.932798875278898!3d45.80038056327336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6b7cdd41863%3A0x5a31d185326a73df!2sChoco%20Caf%C3%A9%20Tre%C5%A1njevka!5e0!3m2!1shr!2shr!4v1574040496432!5m2!1shr!2shr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
        <h6 class="title is-6">Navedite vrijeme kad mislite početi</h6>
        <b-field label="Odaberite datum">
            <b-datepicker
                placeholder="Odaberite datum"
                icon="calendar-today"
                editable>
            </b-datepicker>
        </b-field>
        <div>
            <div class="columns">
                <div class="column">
                    <b-field label="Vrijeme pocetka">
                        <b-clockpicker v-model="minTime" :hour-format="format"></b-clockpicker>
                    </b-field>
                </div>
                <div class="column">
                    <b-field label="Vrijeme zavrsetka">
                        <b-clockpicker v-model="maxTime" :hour-format="format"></b-clockpicker>
                    </b-field>
                </div>
            </div>
        </div>
        <br/><br/>
        <div class="field">
            <div class="control">                        
                <div class="control has-icons-left">
                    <input class="input is-rounded" type="text" placeholder="Troskovi">
                    <span class="icon is-small is-left">
                        <i class="fa fa-money"></i>
                    </span>
                    <p class="help"> Troskovi npr. dvorane za nogomet </p>
                </div>
            </div>
        </div>
        <div class="field">
            <div class="control">                        
                <div class="control has-icons-left">
                    <input class="input is-rounded" type="text" placeholder="Broj osoba">
                    <span class="icon is-small is-left">
                        <i class="fa fa-group"></i>
                    </span>
                </div>
            </div>
        </div>
        <p>Dodatne pojedinosti</p>
        <textarea class="textarea" placeholder="Navedite dodatne informacije. Recimo, nemojte zaboraviti vodu."></textarea>
        <br/><br/><br/>
        <h3 class="title has-text-black">Već si član?</h3>
        <button class="button is-info is-rounded is-medium"><router-link to="registrirajse">Ne, registiracija </router-link></button><br/><br/>
        <button class="button is-info is-rounded is-medium"><router-link to="prijava">Da, prijava</router-link></button> -->

    </div>
</template>


<script>
export default {
    data() {
        const min = new Date()
        min.setHours(9)
        min.setMinutes(0)
        const max = new Date()
        max.setHours(18)
        max.setMinutes(0)
        return {
            minTime: min,
            maxTime: max,
            isAmPm: false
        }
    },
    computed: {
        format() {
            return this.isAmPm ? '12' : '24'
        }
    },
    data() {
        return {
            activeStep: 0,
            showSocial: true,
            isAnimated: true,
            hasNavigation: true,
            customNavigation: true,
            isStepsClickable: true,
            isProfileSuccess: false
        }
    }          
}
</script>



<style scoped>
    .da{
        max-width: 600px;
        margin:0 auto;
    }
    .pet{
        margin:0 auto;
        position:absolute;
        top:600px;
    }
    
</style>


