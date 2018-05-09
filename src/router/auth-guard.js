import { store } from '../store/store'

export default (to, from, next) => {
  if (store.getters.get_isLogin) {
    next()
  } else {
    store.state.isLogin = false
    next('/')
  }
}
