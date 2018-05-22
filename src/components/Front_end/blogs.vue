<template>
  <div>
    <v-app>
      <navigation/>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card>
              <v-btn absolute dark fab top left color="pink" @click.native.stop="dialog=!dialog">
                <v-icon>add</v-icon>
              </v-btn>
            </v-card>
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12 sm6 offset-sm3 v-for="item in getallblog" :key="item.blog_id">
            <v-card raised hover>
              <v-card-media :src="'http://192.168.200.151:8080/static/'+item.blog_image" height="200px" >
              </v-card-media>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb- 0">{{item.blog_title}}</h3>
                  <div>{{item.blog_description}}</div>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-form>

      <v-dialog v-model="dialog" max-width="500px">
        <v-stepper v-model="e1">

          <v-stepper-header>
            <v-stepper-step :complete="e1 > 1" step="1" editable>Add an Image</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="e1 > 2" step="2">Title of the blog</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3">Add Description</v-stepper-step>
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
                    <img :src="imageurl" height="150">
                  </v-flex>
                </v-layout>

              </v-card>
              <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
              <v-btn flat @click.native="dialog=false">Cancel</v-btn>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-card color="grey lighten-1" class="mb-5" height="200px">
                <v-layout row>
                  <v-flex xs12 sm6 offset-sm3>
                    <v-text-field label="Title" v-model="title" hint="Enter the valid title related to blog"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-card>
              <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
              <v-btn flat @click.native="dialog=false">Cancel</v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-card color="grey lighten-1" class="mb-5" height="200px">
                <v-layout row>
                  <v-flex xs12 sm6 offset-sm3>
                    <v-text-field
                      name="description"
                      label="Description"
                      multi-line
                      v-model="description"
                    ></v-text-field>
                  </v-flex>
                </v-layout>

              </v-card>
              <v-btn color="primary" @click.native="snackbar = true, e1 = 1, dialog=false" @click="addBlog" :disabled="!formIsValid">Finish</v-btn>
              <v-btn flat @click.native="dialog=false">Cancel</v-btn>
            </v-stepper-content>
          </v-stepper-items>

        </v-stepper>
      </v-dialog>
        <v-card>
          <v-snackbar
            :timeout=2000
            :bottom="y==='bottom'"
            :right="x === 'right'"
            :multi-line="mode === 'multi-line'"
            :vertical="mode==='vertical'"
            v-model="snackbar"
          >
            {{ this.text }}
            <v-btn flat color="pink" @click.native="snackbar = false">Close</v-btn>
          </v-snackbar>
        </v-card>
      </v-form>

    </v-app>
  </div>
</template>

<script>
import navigation from '../Front_end/navigation_header'

export default {
  data () {
    return {
      dialog: false,
      e1: 0,
      imageurl: '',
      title: '',
      description: '',
      image: null,

      snackbar: false,
      y: 'bottom',
      x: 'right',
      mode: 'multi-line',
      text: 'Blog Posted Successfully',
      allblog: {}
    }
  },
  computed: {
    formIsValid () {
      return this.imageurl !== '' &&
        this.title !== '' &&
        this.description !== ''
    },
    getallblog () {
      return this.$store.getters.get_allBlog
    }
  },
  methods: {
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
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
    addBlog () {
      const addblog = {
        title: this.title,
        image: this.image,
        description: this.description
      }
      // console.log(addblog.image)
      this.$store.dispatch('insertBlog', addblog)
      this.image = ''
      this.title = ''
      this.description = ''
    }
  },
  components: {
    navigation
  },
  created () {
    if (this.$store.getters.get_isallblog == true) {
      this.$store.dispatch('getAllBlog')
    }
  }
}
</script>

<style scoped>

</style>
