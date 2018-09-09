import Vue from 'vue'
import App from './App'
import router from './router'
import * as firebase from 'firebase'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBdH8uQUdh7F5GNEQf6UVSlDZSwCrK6WUY',
      authDomain: 'featured-meetup.firebaseapp.com',
      databaseURL: 'https://featured-meetup.firebaseio.com',
      projectId: 'featured-meetup',
      storageBucket: 'featured-meetup.appspot.com'
    })
  }
})
