import Vue from 'vue'
import Router from 'vue-router'
import aboutus from '../components/about_us'
import home from '../components/Front_end/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about_us',
      name: 'aboutus',
      component: aboutus
    }
  ],
  mode: 'history'
})
