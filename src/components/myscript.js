import { mapActions } from 'vuex'
export default {
  data: () => ({
    dialog: false,
    logindialog: false,
    e2: true,
    e3: true,
    loginDetails: [{
      email: '',
      password: ''
    }],
    user: [{
      firstname: '',
      lastname: '',
      useremail: '',
      userpassword: '',
      interest: []
    }],
    snackbar: false,
    y: 'bottom',
    x: null,
    mode: 'vertical',
    timeout: 3000,
    text: 'Registration Successfully'
  }),
  methods: {
    ...mapActions([
      'registerUser',
      'loginProcess',
      'logoutProcess'
    ])
  },
  computed: {
    isLogin () {
      return this.$store.getters.get_isLogin
    }
  }
}
