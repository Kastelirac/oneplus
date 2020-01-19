<template>
    <div class="da">
        <br/><br/><br/><br/>
    <form @submit.prevent="onCreateMeetup">
        <section>
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
                        <!--<div class="control">                        
                            <div class="control has-icons-left">
                                <input class="input is-rounded" type="text" placeholder="Mjesto događaja">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-map-marker"></i>
                                </span>
                            </div>
                        </div> -->
                    </div>
                    <br/><br/>
                    <div>
                        <div>
                        <label>
                            <gmap-autocomplete
                            @place_changed="setPlace">
                            </gmap-autocomplete>
                            <button @click="addMarker">Add</button>
                        </label>
                        <br/>

                        </div>
                        <br>
                        <GmapMap
                            :center="center"
                            :zoom="7"
                            style="width:100%;  height: 400px;" 
                            >
                            <GmapMarker
                                :key="index"
                                v-for="(m, index) in markers"
                                :position="m.position"
                                :draggable="true"
                                @click="center=m.position"
                            />
                        </GmapMap>
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
                                <input class="input is-rounded" 
                                    type="text" 
                                    id="troskovi" 
                                    name="troskovi" 
                                    v-model="troskovi"
                                    required
                                    placeholder="Troskovi">
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
                                <input class="input is-rounded" 
                                    type="text" 
                                    id="brojosoba" 
                                    name="brojosoba" 
                                    v-model="brojosoba"
                                    required
                                    placeholder="Broj osoba">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-group"></i>
                                </span>
                                <h1 class="title has-text-centered"></h1>
                                <textarea class="textarea" 
                                        id="komentar" 
                                        name="komentar"
                                        v-model="komentar" 
                                        required
                                        placeholder="Navedite dodatne informacije. Recimo, nemojte zaboraviti vodu.">
                                </textarea>
                            </div>
                        </div>
                    </div>
                </b-step-item>
                <b-step-item label="Aktivnost" :clickable="isStepsClickable">
                    <h1 class="title has-text-centered">Naziv</h1>
                    <input class="input is-rounded" 
                                id ="naziv"
                                name="naziv" 
                                type="text" 
                                v-model="naziv"
                                required
                                placeholder="Naziv aktivnosti">
                    <b-field label="Kategorija">
                        <b-select id="okategoriju" placeholder="Odaberite kategoriju" >
                            <option id="sport" value="sport">Sport</option>
                            <option id="digre" value="drustveneigre">Drustvene igre</option>
                            <option id="esport" value="esport">E-sport</option>
                            <option id="random" value="random">Random</option>
                        </b-select>
                    </b-field> 
                </b-step-item>

                <b-step-item label="Napravite" :clickable="isStepsClickable" disabled>
                    <br/>
                    <br/>   
                    <button type="submit" class="button is-info is-rounded is-medium" :disabled="!formIsValid">NAPRAVITE!</button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1 class="title has-text-centered">Već si član?</h1>
                    <button class="button is-info is-rounded is-medium"><router-link to="registrirajse">Ne, registiracija </router-link></button><br/><br/>
                    <button class="button is-info is-rounded is-medium"><router-link to="prijava">Da, prijava</router-link></button>
                    

                </b-step-item>

                <div class="pet"
                    v-if="customNavigation"
                    slot="navigation"
                    slot-scope="{previous, next}">
                    <b-button
                        size="is-medium"
                        icon-left="angle-up"
                        :disabled="previous.disabled"
                        @click.prevent="previous.action">
                        
                    </b-button>
                    <b-button
                        outlined
                        icon-pack="fas"
                        icon-right="fas fa-angle-down"
                        :disabled="next.disabled"
                        @click.prevent="next.action">

                    </b-button>

                </div>
            </b-steps>
        </section>
    </form>
    </div>
</template>


<script>
    export default { 
    name: "GoogleMap",
        data() {
            return {
            // default to montreal to keep it simple
            // change this to whatever makes sense
            center: { lat: 45.508, lng: -73.587 },
            markers: [],
            places: [],
            currentPlace: null,          
            }
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
            return {
                lokacija: '',
                vrijeme: '',
                troskovi: '',
                brojosoba:'',
                komentar:'',
                naziv:'',
            }
            return {
                activeStep: 0,
                showSocial: true,
                isAnimated: true,
                hasNavigation: true,
                customNavigation: true,
                isStepsClickable: true,
                isProfileSuccess: false
            }
        },
        mounted() {
            this.geolocate();
        },
    methods: {
        setPlace(place) {
        this.currentPlace = place;
        },
        addMarker() {
        if (this.currentPlace) {
            const marker = {
            lat: this.currentPlace.geometry.location.lat(),
            lng: this.currentPlace.geometry.location.lng()
            };
            this.markers.push({ position: marker });
            this.places.push(this.currentPlace);
            this.center = marker;
            this.currentPlace = null;
        }
        },
        geolocate: function() {
        navigator.geolocation.getCurrentPosition(position => {
            this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
            };
        });
        },
        onCreateMeetup(){
            //if (!this.formIsValid){
              //  return
            //}
            const meetupData = {
                troskovi: this.troskovi,
                brojosoba: this.brojosoba,
                komentar: this.komentar,
                naziv: this.naziv,
                datum: new Date()
            }
            this.$store.dispatch('createMeetup', meetupData)
            this.$router.push('/trazi')
        }
    },
    computed: {
        format() {
            return this.isAmPm ? '12' : '24'
        },
        formIsValid(){
            return this.troskovi !== '' 
            && this.brojosoba !== '' 
            && this.komentar !== '' 
            && this.naziv !== ''
        }
    }
    };
</script>



<style scoped>
    .da{
        max-width: 600px;
        margin:0 auto;
    }

    
</style>


