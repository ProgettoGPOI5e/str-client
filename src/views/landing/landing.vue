<template>
  <div class="container">
      <app-header></app-header>
      <router-view/>
      <app-footer></app-footer>
  </div>
</template>

<script>

import Header from '@/components/landing/header/header'
import Footer from '@/components/landing/footer/footer'

export default {
  created () {
    // this.$store.dispatch('authenticate')
    // this.$store.dispatch('fetchUser')
  },
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-rows: min-content minmax(calc(100vh - 10rem), auto) min-content;
}
</style>
