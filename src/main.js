import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vueroute from 'vue-router'
import {routes} from './router/index'
import { store } from './store/store'
import base64url from 'base64url/dist/base64url'
import axios from 'axios/index'

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
    if (localStorage.getItem('jwttoken')) {
      let token = localStorage.getItem('jwttoken')
      this.$store.state.user_token = token
      let userid = token.split('.')
      let id = JSON.parse(base64url.decode(userid[1]))
      this.$store.state.user_id = id.user_id

      axios.get(this.$store.state.url, {headers: {'Authorization': this.$store.state.user_token}})
        .then((res) => {

          for(let key in res.data){
            this.$store.state.allBlog.push({

              'id': res.data[key].blog_id,
              'title': res.data[key].blog_title,
              'description': res.data[key].blog_description,
              'image': res.data[key].blog_image,
              'userid': res.data[key].user_id
            })
          }
          console.log('main.js components created method')
          this.$store.state.isallblog = true
          // console.log(this.$store.state.allBlog)
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  components: { App },
  template: '<App/>'
})
