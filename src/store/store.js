import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import base64url from 'base64url'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    url: 'http://localhost:9090/vuecliapi/insert.php',
    isLogin: false,
    user_id: ''
  },
  getters: {
    get_isLogin: state => {
      if (localStorage.getItem('jwttoken')) {
        state.isLogin = true
        return state.isLogin
      } else {
        state.isLogin = false
        return state.isLogin
      }
    },
    get_userId: state => {
      return state.user_id
    }
  },
  mutations: {
    registerUser: (state, payload) => {
      var fd = new FormData()
      fd.append('first_name', payload.first_name)
      fd.append('last_name', payload.last_name)
      fd.append('email', payload.email)
      fd.append('password', payload.password)
      fd.append('interest', payload.interest)

      axios.post(state.url, fd)
        .then(res => console.log(res))
        .catch(e => {
          console.log(e)
        })
    },
    loginProcess: (state, payload) => {
      var fd = new FormData()
      fd.append('email', payload.email)
      fd.append('password', payload.password)
      axios.post('http://localhost:9090/vuecliapi/insert.php?type=login', fd)
        .then((res) => {
          if (!localStorage.getItem('jwttoken')) {
            localStorage.setItem('jwttoken', res.data[0].jwt)
            let userid = res.data[0].jwt.split('.')
            let id = JSON.parse(base64url.decode(userid[1]))
            state.user_id = id.user_id
            state.isLogin = true
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    logoutProcess: (state) => {
      localStorage.removeItem('jwttoken')
      state.isLogin = false
      this.$router.push('/')
    }
  },
  actions: {
    registerUser: ({commit}, payload) => {
      commit('registerUser', payload)
    },
    loginProcess: ({commit}, payload) => {
      commit('loginProcess', payload)
    },
    logoutProcess: ({commit}) => {
      commit('logoutProcess')
    }
  }
})
