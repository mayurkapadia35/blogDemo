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

                <v-text-field type="file" onchange="previewimage" />
                <img src="" alt="" height="50"/>

              </v-card>
              <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
              <v-btn flat @click.native="dialog=false">Cancel</v-btn>
            </v-stepper-content>
            <v-stepper-content step="2">
              <v-card color="grey lighten-1" class="mb-5" height="200px">

                <v-text-field autofocus="true" placeholder="Enter the Title of blog" hint="Enter the valid title related to blog">

                </v-text-field>


              </v-card>
              <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
              <v-btn flat @click.native="dialog=false">Cancel</v-btn>
            </v-stepper-content>
            <v-stepper-content step="3">
              <v-card color="grey lighten-1" class="mb-5" height="200px">
                <v-text-field
                  name="input-7-1"
                  label="Label Text"
                  multi-line
                ></v-text-field>
              </v-card>
              <v-btn color="primary" @click.native="e1 = 1, dialog=false">Finish</v-btn>
              <v-btn flat @click.native="dialog=false">Cancel</v-btn>
            </v-stepper-content>
          </v-stepper-items>

        </v-stepper>
      </v-dialog>
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
      e1: 0
    }
  },
  components: {
    navigation
  }
}
function  previewimage () {
  // var preview  = document.querySelector('img');
  // var file     = document.querySelector('input[type=file]').files[0];
  // var reader   = new FileReader();
  //
  // reader.addEventListener('load',function () {
  //   preview.src = reader.result;
  // },false);
  //
  // if (file) {
  //   reader.readAsDataURL(file);
  // }
   alert('kjhfbsbhfd')
}

</script>

<style scoped>

</style>
