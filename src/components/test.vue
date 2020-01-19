<template>
    <b-carousel :indicator-inside="false">
        <b-carousel-item v-for="(item, i) in 6" :key="i">
            <span class="image">
              <img :src="getImgUrl(i)">
            </span>
        </b-carousel-item>
        <template slot="indicators" slot-scope="props">
            <span class="al image">
                <img :src="getImgUrl(props.i)" :title="props.i">
            </span>
        </template>
    </b-carousel>
</template>

<script>
export default {
    methods: {
      getImgUrl(value) {
          return `https://picsum.photos/id/43${value}/1230/500`
      }
    }
}
</script>

<style>
.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}
</style>



<script>
    export default{
        data(){
            return {
                lokacija: '',
                vrijeme: '',
                troskovi: '',
                brojosoba:'',
                komentar:'',
                naziv:'',
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
        },
        formIsValid(){
            return this.troskovi !== '' 
            && this.brojosoba !== '' 
            && this.komentar !== '' 
            && this.naziv !== ''
        }
    }         
}
</script>

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
            currentPlace: null
            };
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
    }
    };
</script>



<style scoped>
    .da{
        max-width: 600px;
        margin:0 auto;
    }

    
</style>





