// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
// import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js'


Vue.use(Buefy)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/*new Vue({
  el: '#app',
  data() {
    return {
      date: new Date(),
    }
  },
  mounted() {
    const calendar = bulmaCalendar.attach(this.$refs.calendarTrigger, {
      startDate: this.date,
    })[0]
    calendar.on('date:selected', e => (this.date = e.start || null))
  },
  computed: {
    niceDate() {
      if (this.date) {
        return this.date.toLocaleDateString()
      }
    }
  }
}); */
