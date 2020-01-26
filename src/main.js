// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import moment from 'moment'
import { store } from './store'
import DateFilter from './filters/date'
import TimeFilter from './filters/time'
import * as firebase from 'firebase'


Vue.use(Buefy)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    /* key: 'AIzaSyAWFxR54TgyQY4ipfjIJQH_uZ0KAfgN92k', */
    libraries: 'places', // This is required if you use the Autocomplete plugin
  }})
Vue.filter('date', DateFilter)
Vue.filter('time', TimeFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created(){
    firebase.initializeApp({
      apiKey: 'AIzaSyCIqlemhndOuXFeDukxcZwzg54PRnsT4rE',
      authDomain: 'oneplus-c53ca.firebaseapp.com',
      databaseURL: 'https://oneplus-c53ca.firebaseio.com',
      projectId: 'oneplus-c53ca',
      storageBucket: ''
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
    this.$store.dispatch('loadMeetups')
  }
})



