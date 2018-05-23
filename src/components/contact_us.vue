<template>
  <div>
    <v-app>
      <navigation />
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card hover>
              <v-card-title primary-title class="purple--text layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                This is our contact information for helping anyone.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>000-000-0000</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Surat Gujarat, India</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>lanetteam.mayur35@gmail.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <blogfooter />
    </v-app>
  </div>
</template>

<script>
import navigation from '../components/Front_end/navigation_header'
import blogfooter from '../components/blogfooter'
export default {
  components: {
    navigation,
    blogfooter
  }
}
</script>

<style scoped>

</style>
