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
        .then()
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
            state.isallblog = true
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

      let tempindex= parseInt(state.allBlog[0].blog_id) + 1

      state.allBlog.unshift({
        'blog_id': tempindex,
        'blog_title': payload.title,
        'blog_description': payload.description,
        'blog_image': payload.image.name,
        'user_id': state.user_id,
        'flag': true
      })
      axios.post(state.url, fd, {
        headers: {
          'Authorization': state.user_token
        }
      })
        .then()
        .catch(e => {
          console.log(e)
        })
    },
    getAllBlog: (state) => {
      axios.get(state.url, {headers: {'Authorization': state.user_token}})
        .then((res) => {
          state.allBlog = []
          state.allBlog = state.allBlog.concat(res.data)
          state.isallblog = false
        })
        .catch(e => {
          console.log(e)
        })
    },
    deleteBlog: (state, payload) => {
      let index = state.allBlog.findIndex(item => item.blog_id === payload.blog_id);
      state.allBlog.splice(index, 1)

      axios.delete(state.url, {
        params: {
            id: payload.blog_id
        },
        headers: {
          'Authorization': state.user_token
        }
        })
        .then()
        .catch(e => {
          console.log(e)
        })
    },
    updateBlog: (state, payload) => {

      let fd = new FormData()
      fd.append('blog_id', payload.blog_id)
      fd.append('title', payload.blog_title)
      fd.append('image', payload.blog_image)
      fd.append('description', payload.blog_description)
      fd.append('userid', state.user_id)

      const editblog = {
        'blog_id': payload.blog_id,
        'blog_title': payload.blog_title,
        'blog_description': payload.blog_description,
        'blog_image': payload.blog_image.name,
        'user_id': state.user_id,
        'flag': true
      }
      let index = state.allBlog.findIndex(item => item.blog_id === payload.blog_id);
      state.allBlog.splice(index, 1, editblog)

      axios.post(state.url, fd, {
        headers: {
          'Authorization': state.user_token
        }
      })
      .then()
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
    },
    deleteBlog: ({commit}, payload) => {
      commit('deleteBlog', payload)
    },
    updateBlog: ({commit}, payload) => {
      commit('updateBlog', payload)
    }
  }
})
