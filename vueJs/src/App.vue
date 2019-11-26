<template>
  <div id="app">
    <div class="router-view"><router-view/></div>
    <navbar></navbar>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components:{
    navbar: Navbar
  },
}
</script>

<style lang="sass">
  @import '@/assets/sass/reset.scss'
  @import '@/assets/sass/main.sass'
</style>
