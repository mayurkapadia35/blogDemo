import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0,
    url: 'http://localhost:9090/vuecliapi/insert.php',
    isLogin: false
  },
  getters: {
    get_isLogin: state => {
      return state.isLogin
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

      axios.post(this.url, fd)
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
          console.log(res.data)
          if (!localStorage.getItem('jwttoken')) {
            localStorage.setItem('jwttoken', res.data[0].jwt)
            localStorage.setItem('user_id', res.data[0].user_id)
            state.isLogin = true
          }
        })
        .catch(e => {
          console.log(e)
        })
    },
    logoutProcess: (state) => {
      localStorage.removeItem('user_id')
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
