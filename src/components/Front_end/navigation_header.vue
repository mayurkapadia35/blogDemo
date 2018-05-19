<template>
  <div class="text-xs-center">
    <v-btn flat color="black" slot="activator" :to="{name : 'home'}" exact>
      <v-icon>home</v-icon>
      Home
    </v-btn>
    <v-btn flat color="black" slot="activator" :to="{name : 'aboutus'}">
      <v-icon>account-multiple</v-icon>
      About Us
    </v-btn>
    <v-btn flat color="black" slot="activator" :to="{name : 'contactus'}">
      <v-icon>email</v-icon>
      Contact Us
    </v-btn>

    <v-btn flat v-if='isLogin' color="black" slot="activator" :to="{name : 'blogs'}">
      Blogs
    </v-btn>
    <v-btn flat color="black" v-if='isLogin' slot="activator" :to="{name : 'yourblogs'}">
      Your Blog/s
    </v-btn>
    <v-btn flat v-if='isLogin' color="black" slot="activator" @click='logoutProcess()'>
      Log Out
    </v-btn>

    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn v-if='!isLogin' flat color="black" slot="activator">
        <v-icon>face</v-icon>
        Sign Up
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md6>
                <v-text-field
                  label="First name"
                  required
                  hint="Please Enter the valid name"
                  v-model="user.firstname">
                </v-text-field>
              </v-flex>

              <v-flex xs12 sm6 md6>
                <v-text-field
                  label="Last name"
                  hint="Please Enter the valid name"
                  required
                  v-model="user.lastname"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Email"
                  hint="Enter the Email"
                  required
                  v-model="user.useremail">
                </v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  name="input-10-2"
                  label="Enter your password"
                  hint="At least 8 Characters"
                  min="8"
                  :append-icon="e2 ? 'visibility' : 'visibility_off'"
                  :append-icon-cb="() => (e2 = !e2)"
                  value=""
                  class="input-group"
                  :type="e2 ? 'password' : 'text'"
                  required
                  v-model="user.userpassword"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-select
                  label="Interests"
                  multiple
                  autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  v-model="user.interest"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn dark @click.native="dialog = false" @click="reset">
            <v-icon dark left>remove_circle</v-icon>Cancel
          </v-btn>

          <v-btn @click.native="snackbar = false, loader = 'loading4'" @click='registerUser({"first_name": user.firstname,"last_name": user.lastname,"email": user.useremail, "password": user.userpassword, "interest": user.interest})'
          :loading="loading4" :disabled="loading4" color="info">Register

            <span slot="loader" class="custom-loader">
              <v-icon light>cached</v-icon>
            </span>
          </v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>             <!--Sign Up-->

    <v-dialog v-model="logindialog" persistent max-width="500px">
      <v-btn  v-if='!isLogin' flat color="black" slot="activator">
        <v-icon>lock_open</v-icon>
        <v-spacer></v-spacer>
        Log in
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">Login Details</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>

              <v-flex xs12>
                <v-text-field
                  label="Email"
                  v-model="loginDetails.useremail"
                  required>
                </v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field
                  name="input-10-2"
                  label="Enter your password"
                  hint="At least 8 Characters"
                  min="8"
                  :append-icon="e3 ? 'visibility' : 'visibility_off'"
                  :append-icon-cb="() => (e3 = !e3)"
                  value=""
                  class="input-group"
                  :type="e3 ? 'password' : 'text'"
                  required
                  v-model="loginDetails.userpassword"></v-text-field>
              </v-flex>

            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark @click.native="logindialog = false"><v-icon dark left>remove_circle</v-icon>Cancel</v-btn>
          <v-btn color="info" @click.native="logindialog = false" @click='loginProcess({"email": loginDetails.useremail,"password": loginDetails.userpassword})'><v-icon dark left>subdirectory_arrow_right</v-icon>Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>           <!--Login Code-->
    <!---->
    <v-card>
      <v-snackbar
        :timeout=3000
        :bottom="y==='bottom'"
        :multi-line="mode === 'multi-line'"
        :vertical="mode==='vertical'"
        v-model="snackbar"
      >
        {{ this.text }}
        <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-card>                                       <!--Snackbar Code for userFriendly layout-->
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data: () => ({
    dialog: false,
    logindialog: false,
    e2: true,
    e3: true,
    loader: null,
    loading4: false,
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
    ]),
    reset () {
      this.user.firstname = ''
      this.user.lastname = ''
      this.user.useremail = ''
      this.user.userpassword = ''
      this.user.interest = []
    }
  },
  computed: {
    isLogin () {
      return this.$store.getters.get_isLogin
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]
      setTimeout(() => (this[l] = false, this.dialog = false, this.snackbar = true), 2000)
      this.loader = null
    }
  }
}
</script>
<style scoped>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
