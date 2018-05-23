<template>
  <div>
    <v-app>
      <navigation/>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card hover>
              <v-card-title primary-title class="purple--text layout justify-center">
                <div class="headline">Site info</div>
              </v-card-title>
              <v-card-text>
                This site is mainly used for posting a blog, share a thoughts to others so that it is easy
                to share the knowledge of the person.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <blogfooter />
    </v-app>
  </div>
</template>

<script>
import navigation from './Front_end/navigation_header'
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
