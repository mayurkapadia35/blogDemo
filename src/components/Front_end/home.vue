<template>
  <div>
    <v-app light>
      <navigation />      <!--This is a navigation link.-->

      <!--rest of the things like content-->
      <v-content>
        <section>
          <v-parallax src="static/images/blogging-SMB.png" height="600">
            <v-layout
              column
              align-center
              justify-center
              class="white--text"
            >
              <h1 class="black--text mb-2 display-1 text-xs-center">Blog Mania</h1>
              <div class="subheading black--text mb-3 text-xs-center">Powered By MA Company..</div>
              <v-btn
                class="blue lighten-2 mt-5"
                dark
                large
                href="/pre-made-themes"
              >
                Get Started
              </v-btn>
            </v-layout>
          </v-parallax>
        </section>

        <section>
          <v-layout
            column
            wrap
            class="my-5"
            align-center
          >
            <v-flex xs12 sm4 class="my-3">
              <div class="text-xs-center">
                <h2 class="headline">The best way to post the blog</h2>
                <!--<span class="subheading">-->
                <!--Cras facilisis mi vitae nunc-->
                <!--</span>-->
              </div>
            </v-flex>
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">User-Friendly Design</div>
                      </v-card-title>
                      <v-card-text>
                        This is a completely new and awesome design given by the end users.. It is really helpful
                        to use this site to make a post & also know the others post.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">Fast development</div>
                      </v-card-title>
                      <v-card-text>
                        You can easily share a post between the site so that the other bloggers can see your post and
                        know something that is in your mind.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Completely modifiable</div>
                      </v-card-title>
                      <v-card-text>
                        You can also modify your previous post, so that it is correctness to read others.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </section>

        <section>
          <v-parallax src="/static/images/blogging.png" height="400">
            <v-layout column align-center justify-center>
              <div class="headline black--text mb-3 text-xs-center">Web development has never been easier</div>
              <em class="black--text">Kick-start your application today</em>
              <!--<v-btn-->
              <!--class="blue lighten-2 mt-5"-->
              <!--dark-->
              <!--large-->
              <!--href="/pre-made-themes"-->
              <!--&gt;-->
              <!--Get Started-->
              <!--</v-btn>-->
            </v-layout>
          </v-parallax>
        </section>

        <section>
          <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-5">
              <v-flex xs12 sm4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="purple--text headline">Site info</div>
                  </v-card-title>
                  <v-card-text>
                    This site is mainly used for posting a blog, share a thoughts to others so that it is easy
                    to share the knowledge of the person.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 sm4 offset-sm1>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="purple--text layout justify-center">
                    <div class="headline">Contact us</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
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
        </section>

        <v-footer class="blue darken-2">
          <v-layout row wrap align-center>
            <v-flex xs12>
              <div class="white--text ml-3">
                &copy;2018
                Made with
                <v-icon class="red--text">favorite</v-icon>
                by <a class="white--text" href="javascript:;" target="_blank">Mayur Kapadia</a>
                and <a class="white--text" href="javascript:;">Ankita Kuchhadia </a>
              </div>
            </v-flex>
          </v-layout>
        </v-footer>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import navigation from './navigation_header.vue'

export default {
  components: {
    navigation
  }
}
</script>

<style scoped>

</style>
