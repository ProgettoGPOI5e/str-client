<template>
  <div class="container">
      <app-header></app-header>
      <router-view/>
  </div>
</template>

<script>

import Header from '@/components/back/header/header'

export default {
  created () {
    this.$store.dispatch('fetchUser')
  },
  components: {
    appHeader: Header
  }
}
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-rows: auto minmax(100vh, auto);
}
</style>
