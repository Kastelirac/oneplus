// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import * as VueGoogleMaps from 'vue2-google-maps'
import { store } from './store'

Vue.use(Buefy)
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAWFxR54TgyQY4ipfjIJQH_uZ0KAfgN92k',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  }})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

