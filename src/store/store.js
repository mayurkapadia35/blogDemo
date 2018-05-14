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
    user_id: '',
    user_token: '',
    isallblog: false,
    allBlog: []
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
    },
    get_userToken: state => {
      return state.user_token
    },
    get_isallblog: state => {
      return state.isallblog
    },
    get_allBlog: state => {
      return state.allBlog
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
            state.user_token = res.data[0].jwt
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
    },
    insertBlog: (state, payload) => {
      let fd = new FormData()
      fd.append('title', payload.title)
      fd.append('image', payload.image)
      fd.append('description', payload.description)
      fd.append('userid', state.user_id)

      axios.post(state.url, fd, {
        headers: {
          'Authorization': state.user_token
        }
      })
        .then(res => console.log(res))
        .catch(e => {
          console.log(e)
        })
    },
    getAllBlog: (state) => {
      axios.get(state.url, {headers: {'Authorization': state.user_token}})
        .then((res) => {
          // console.log(res)
          // state.allBlog = state.allBlog.concat(res.data)

          for(let key in res.data){

            state.allBlog.push({
              id: res.data[key].blog_id,
              title: res.data[key].blog_title,
              description: res.data[key].blog_description,
              image: res.data[key].blog_image,
              userid: res.data[key].user_id
            })
          }
          state.isallblog = true

          // console.log(state.allBlog[0])
        })
        .catch(e => {
          console.log(e)
        })
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
    },
    insertBlog: ({commit}, payload) => {
      commit('insertBlog', payload)
    },
    getAllBlog: ({commit}) => {
      commit('getAllBlog')
    }
  }

})
