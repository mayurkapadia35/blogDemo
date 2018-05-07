import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vueroute from 'vue-router'
import {routes} from './router/index'
import { store } from './store/store'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(Vueroute)

const router = new Vueroute({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
