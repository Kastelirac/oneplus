<template>
    <div>
        <br/><br/><br/>
        <div class="tabs is-centered">
        <ul>
            <li class="is-focused">
                <a>
                    <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
                    <span>Sve</span>
                </a>
            </li>
            <li>
                <a>
                    <span class="icon is-small"><i class="fa fa-soccer-ball-o" aria-hidden="true"></i></span>
                    <span>Sport</span>
                </a>
            </li>
            <li>
                <a>
                    <span class="icon is-small"><i class="fas fa-chess" aria-hidden="true"></i></span>
                    <span>Drustvene igre</span>
                </a>
            </li>
            <li>
                <a>
                    <span class="icon is-small"><i class="fa fa-gamepad" aria-hidden="true"></i></span>
                    <span>E-sport</span>
                </a>
            </li>
            <li>
                <a>
                    <span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
                    <span>Random</span>
                </a>
            </li>
        </ul>
        </div> 
        <div class="mb-2 card" v-for="meetup in meetups" :key="meetup.id">
            <header class="card-header">
                <p class="card-header-title has-text-centered">
                    {{meetup.naziv}}
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                <div>Troskovi: {{meetup.troskovi}} </div> <br>
                <p>Broj osoba: {{meetup.brojosoba}} </p> <br>
                <p>Kategorija: {{meetup.kategorija}} </p>
                <p>Komentar:  {{meetup.komentar}}</p> <br>
                <p>Datum: {{meetup.date  |  date}} </p>
                <p>Vrijeme pocetka: {{meetup.timestart  |  time}} </p>
                <p>Vrijeme zavrsetka: {{meetup.timeend  |  time}} </p>
                <p>Lokacija: {{meetup.lat}} i {{meetup.lng}} </p>
                <GmapMap 
                    :center = "center"
                    :zoom="7"
                    style="width:100%;  height: 400px;" 
                    >
                    <GmapMarker
                        :position="center"
                    />
                </GmapMap>



                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Prijavi se</a>
            </footer>
        </div>

    </div>
</template>

<script>
  export default {
    data() {
        return{
            center: {lat: 50, lng: 20}
        }
    },
    mounted(){
        this.ajmo()
    },
    computed:{
        meetups(){
            return this.$store.getters.loadedMeetups
        },
        created(){
            console.log(this.meetups)
        },
        },
    methods:{
        ajmo(){
            this.meetups.forEach(meetup =>{
                if(this.meetup){
                    this.center = {
                        lat: this.meetup.lat,
                        lng: this.meetup.lng
                    }
                    console.log(this.meetups)
                }
            })
        }
    }
  }
</script>


<style scoped>
    .card{
        width:40%;
        display:block;
        margin:40px auto;
        text-align: center;
    }
</style>