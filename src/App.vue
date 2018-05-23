<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from './components/Front_end/navigation_header'
import blogfooter from './components/blogfooter'
export default {
  components: {
    navigation,
    blogfooter
  }
}
</script>

<style>
</style>
