import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vueroute from 'vue-router'
import {routes} from './router/index'
import { store } from './store/store'
import base64url from "base64url/dist/base64url";

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
  created () {
    if (localStorage.getItem('jwttoken')){
      let token = localStorage.getItem('jwttoken')
      this.$store.state.user_token = token
      let userid = token.split('.')
      let id = JSON.parse(base64url.decode(userid[1]))
      this.$store.state.user_id = id.user_id

    }
  },
  components: { App },
  template: '<App/>'
})
