<template>
  <div class="wallet">
    <div class="card">
      <div class="card__header">
        Balance
      </div>
      <div class="card__body">
        <p v-if="user">{{ balance }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'getUser'
    }),
    balance () {
      return new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: this.user?.wallet.currency
      }).format(this.user?.wallet.balance)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
