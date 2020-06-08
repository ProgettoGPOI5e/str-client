<template>
  <div class="wallet">
    <div class="card">
      <div class="card__header">
        Balance
      </div>
      <div class="card__body">
        <p v-if="wallet">{{ balance }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import v1 from '@/utils/v1'

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      wallet: undefined
    }
  },
  async mounted () {
    await this.getWallet()
  },
  methods: {
    async getWallet () {
      try {
        const response = await v1.get('/users/' + this.userId + '/wallet/')
        this.wallet = response.data
      } catch (e) {
        console.log('Impossibile reperire il wallet.')
      }
    }
  },
  computed: {
    ...mapGetters({
      userId: 'getUserId'
    }),
    balance () {
      return new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: this.wallet.currency
      }).format(this.wallet.balance)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
