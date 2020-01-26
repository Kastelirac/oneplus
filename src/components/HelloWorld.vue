<template>
  <div class="bodi">
    <!--
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div class="hero-body has-text-white">
                <div class="container has-text-centered">
                    <div class="column is-6 is-offset-3">
                        <h1 id="h1">
                          Dosadno mi je... Baš bih nešto radio.
                        </h1>
                        <h2 id="h2">
                          Pronalazak aktivnosti nikad nije bio lakši
                        </h2>
                        <button class="button is-info is-rounded is-medium"><router-link to="pronadi">Pronađi aktivnosti</router-link></button>

                    </div>
                </div>
            </div> -->
    <div id="app" class="container">
          <section class="has-text-centered">
              <b-carousel
                  v-model="carousel"
                  :animated="animated"
                  :autoplay="autoPlay"
                  :pause-hover="pauseHover"
                  :interval="interval"
                  @change="info($event)">
                  <b-carousel-item 
                  v-for="meetup in meetups"
                  :key="meetup.id"
                  :src="meetup.imageUrl"
                  @click="onLoadMeetup(meetup.id)">
                      <section class="hero is-fullheight-with-navbar has-text-centered has-text-black is-bold">
                          <div class="hero-body has-text-centered">
                              <h1 class="title has-text-centered">{{meetup.naziv}}</h1>
                          </div>
                      </section>
                  </b-carousel-item>
              </b-carousel>
          </section>
                 <button class="button is-info is-medium"><router-link to="trazi">Traži</router-link></button>
    </div> 
  </div>
</template>
<script>
export default {
    data() {
        return {
            carousel: 0,
            animated: 'slide',
            drag: false,
            autoPlay: true,
            pauseHover: true,
            pauseInfo: false,
            pauseType: 'is-primary',
            interval: 3000,
        }
    },
    computed:{
      meetups(){
        return this.$store.getters.featuredMeetups
      }
    },
    methods:{
      onLoadMeetup(id){
        this.$router.push('/trazi/' + id)
      }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- ../assets/wallpaper.jpg -->
<style>
      .bodi{
        background-image: url(http://lorempixel.com/950/740/sports/);  
        background-size: cover;
        background-repeat: no-repeat; 

      }

      #h1{
        font-size:35px;
        font-weight: bold;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
      #h2{
        font-size:25px;
      }
</style>



