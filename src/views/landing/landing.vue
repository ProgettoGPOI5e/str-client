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
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-rows: min-content auto min-content;
}
</style>
