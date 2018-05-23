<template>
  <div>
    <v-app>
      <navigation/>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12 sm6 offset-sm3 v-for="item in getallblog" :key="item.blog_id" v-if="item.user_id == getuserid">
            <v-card raised hover>
              <v-card-media :src="'http://192.168.200.151:8080/static/'+item.blog_image" height="200px">
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb- 0">{{item.blog_title}}</h3>
                  <div>{{item.blog_description}}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
              <v-btn fab small color="orange" @click.native.stop="dialog1=!dialog1" @click="fetchdata(item)">
              <v-icon >edit</v-icon></v-btn>
                <v-btn fab small color="orange" @click.native.stop="dialog=!dialog" @click="setdeleteblog_id(item.blog_id)" ><v-icon>close</v-icon></v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-dialog v-model="dialog1" persistent max-width="500px">
            <v-stepper v-model="e1">

              <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1" editable>Edit an Image</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step :complete="e1 > 2" step="2" editable>Title of the blog</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3" editable>Add Description</v-stepper-step>
              </v-stepper-header>

              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-card color="grey lighten-1" class="mb-5" height="200px">
                    <v-layout row>
                      <v-flex xs12 sm6 offset-sm3>
                        <v-btn raised class="secondary" @click="onPickFile">Upload Image</v-btn>
                        <input
                          type="file"
                          multiple
                          style="display: none"
                          ref="fileInput"
                          accept="image/*"
                          @change="onFilePicked">
                      </v-flex>
                    </v-layout>

                    <v-layout>
                      <v-flex xs12 sm6 offset-sm3>
                        <img :src="imageurl == '' ? blog_image : imageurl" height="150">
                      </v-flex>
                    </v-layout>

                  </v-card>
                  <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
                  <v-btn flat @click.native="dialog1=false">Cancel</v-btn>
                </v-stepper-content>
                <v-stepper-content step="2">
                  <v-card color="grey lighten-1" class="mb-5" height="200px">
                    <v-layout row>
                      <v-flex xs12 sm6 offset-sm3>
                        <v-text-field label="Title" v-model="blog_title" hint="Enter the valid title related to blog"></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-card>
                  <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
                  <v-btn flat @click.native="dialog1=false">Cancel</v-btn>
                </v-stepper-content>
                <v-stepper-content step="3">
                  <v-card color="grey lighten-1" class="mb-5" height="200px">
                    <v-layout row>
                      <v-flex xs12 sm6 offset-sm3>
                        <v-text-field
                          name="description"
                          label="Description"
                          multi-line
                          v-model="blog_description"
                        ></v-text-field>
                      </v-flex>
                    </v-layout>

                  </v-card>
                  <v-btn color="primary" @click.native="e1 = 1, dialog1=false" @click="updateBlog">Update</v-btn>
                  <v-btn flat @click.native="dialog1=false">Cancel</v-btn>
                </v-stepper-content>
              </v-stepper-items>

            </v-stepper>
          </v-dialog>

          <v-dialog v-model="dialog" persistent max-width="290">
            <v-card>
              <v-card-title class="headline">Are you sure you want to delete this post?</v-card-title>
              <v-card-text>Click Yes for Delete else No for continue. </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green" flat @click.native="dialog = false" @click="unsetblogid">No</v-btn>
                <v-btn color="green" flat @click.native="dialog = false" @click="deleteBlog({'blog_id': getdeleteblog_id})">Yes</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
      </v-container>
      <blogfooter />
    </v-app>
  </div>
</template>

<script>
import navigation from '../Front_end/navigation_header'
import { mapActions } from 'vuex'
import blogfooter from '../blogfooter'
export default {
  data: () => ({
    dialog: false,
    e1: 0,
    imageurl: '',
    deleteblog_id: '',
    dialog1: false,
    blog_id: '',
    blog_title: '',
    blog_description: '',
    blog_image: '',
    image: null
  }),
  components: {
    navigation,
    blogfooter
  },
  computed: {
    getallblog () {
      return this.$store.getters.get_allBlog
    },
    getuserid () {
      return this.$store.getters.get_userId
    },
    getdeleteblog_id () {
      return this.deleteblog_id
    }
  },
  methods: {
    ...mapActions([
      'deleteBlog'
    ]),
    setdeleteblog_id (id) {
      this.deleteblog_id = id
    },
    unsetblogid () {
      this.deleteblog_id = ''
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      console.log(files)
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('please add a valid file')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageurl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    },
    fetchdata (item) {
      this.blog_id = item.blog_id
      this.blog_title = item.blog_title
      this.blog_description = item.blog_description
      this.blog_image = 'static/' + item.blog_image
    },
    updateBlog () {
      let editblog = {
        blog_id: this.blog_id,
        blog_title: this.blog_title,
        blog_description: this.blog_description,
        blog_image: this.image
      }
      this.$store.dispatch('updateBlog', editblog)
    }
  }
}
</script>

<style scoped>

</style>
