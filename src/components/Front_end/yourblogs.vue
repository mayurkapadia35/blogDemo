<template>
  <div>
    <v-app>
      <navigation/>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12 sm6 offset-sm3 v-for="item in getallblog" :key="item.blog_id">
            <v-card raised v-if="item.user_id == getuserid" hover>
              <v-card-media :src="/static/+item.blog_image" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb- 0">{{item.blog_title}}</h3>
                  <div>{{item.blog_description}}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
              <v-btn fab small color="orange">
              <v-icon>edit</v-icon></v-btn>
                <v-btn fab small color="orange" @click.native.stop="dialog=!dialog" ><v-icon>close</v-icon></v-btn>
                <!--<v-btn fab small color="orange" slot="activator"><v-icon>close</v-icon></v-btn>-->
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-dialog v-model="dialog" persistent max-width="290">
            <v-card>
              <v-card-title class="headline">Are you sure to delete this post?</v-card-title>
              <v-card-text>Click Yes for Delete else No for continue. </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green" flat @click.native="dialog = false">No</v-btn>
                <v-btn color="green" flat @click.native="dialog = false">Yes</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import navigation from '../Front_end/navigation_header'
export default {
  data: () => ({
    dialog: false
  }),
  components: {
    navigation
  },
  computed: {
    getallblog () {
      console.log(this.$store.getters.get_allBlog)
      return this.$store.getters.get_allBlog
    },
    getuserid () {
      return this.$store.getters.get_userId
    }
  }
}
</script>

<style scoped>

</style>
