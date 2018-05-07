import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {

  },
  mutations: {
    registerUser: (state, payload) => {
      var fd = new FormData()
      fd.append('first_name', payload.first_name)
      fd.append('last_name', payload.last_name)
      fd.append('email', payload.email)
      fd.append('password', payload.password)
      fd.append('interest', payload.interest)
      axios.post('http://localhost:9090/vuecliapi/insert.php', fd)
        .then(res => console.log(res))
        .catch(e => {
          console.log(e)
        })
    }
  },
  actions: {
    registerUser: ({commit}, payload) => {
      commit('registerUser', payload)
    }
  }
})
