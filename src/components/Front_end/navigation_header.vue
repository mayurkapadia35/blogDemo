<template>
  <div class="text-xs-center">
    <v-btn flat color="black" slot="activator" to="/" exact>
      Home
    </v-btn>
    <v-btn flat color="black" slot="activator" to="/about_us">
      About Us
    </v-btn>
    <v-btn flat color="black" slot="activator">
      Contact Us
    </v-btn>

    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-btn flat color="black" slot="activator">Sign Up</v-btn>
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
                  hint="Please Enter the valid name">
                </v-text-field>
              </v-flex>

              <v-flex xs12 sm6 md6>
                <v-text-field
                  label="Last name"
                  hint="Please Enter the valid name"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  label="Email"
                  hint="Enter the Email"
                  required>
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
                  required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-select
                  label="Interests"
                  multiple
                  autocomplete
                  close chips
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="black" flat="flat" @click.native="dialog = false">Close</v-btn>
          <v-btn color="black" flat="flat" @click.native="dialog = false">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>             <!--Sign Up-->

    <v-dialog v-model="logindialog" persistent max-width="500px">
      <v-btn flat color="black" slot="activator">Log in</v-btn>
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
                  required></v-text-field>
              </v-flex>

            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="black" flat="flat" @click.native="logindialog = false">Close</v-btn>
          <v-btn color="black" flat="flat" @click.native="logindialog = false">Log In</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>           <!--Login Code-->

  </div>
</template>

<script>

export default {
  data: () => ({
    dialog: false,
    logindialog: false,
    e2: true,
    e3: true
  })
}
</script>

<style scoped>

</style>
