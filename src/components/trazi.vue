<template>
    <div>
        <br/><br/><br/><br/><br/>
        <p> Ovdje bi trebalo doc koje su vrijeme i mjesto odabrali</p>
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
                <p class="card-header-title">
                {{meetup.naziv}}
                </p>
            </header>
            <div class="card-content">
                <div class="content">
                <div>Troskovi: {{meetup.troskovi}} </div> <br>
                <p>Broj osoba: {{meetup.brojosoba}} </p> <br>
                <p>Komentar:  {{meetup.komentar}}</p> <br>
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
    computed:{
      meetups(){
        return this.$store.getters.loadedMeetups
      }
    }
  }
</script>

<style scoped>
    .card{
        width:40%;
        margin:0 auto;
    }
</style>