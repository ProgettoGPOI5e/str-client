<template>
  <main class="main">
    <app-balance></app-balance>
    <section class="section-tickets">
      <app-purchase
        v-for="(ticket, index) in tickets"
        :key="index"
        :ticket="ticket"
      ></app-purchase>
    </section>
  </main>
</template>

<script>

import Balance from '@/components/customer/balance/balance'
import Purchase from '@/components/customer/purchase/purchase'

import v1 from '@/utils/v1'

import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      tickets: []
    }
  },
  async mounted () {
    await this.getTickets()
  },
  computed: {
    ...mapGetters({
      userId: 'getUserId',
      user: 'getUser'
    })
  },
  methods: {
    async getTickets () {
      const id = this.userId
      const response = await v1.get(`/users/${id}/tickets`)
      this.tickets = response.data
      // console.log(response.data)
      // this.tickets = response.data.map(el => {
      //   el = { ...el, img: '/metrebus.png' }
      // })
    }
  },
  components: {
    appBalance: Balance,
    appPurchase: Purchase
  }
}
</script>
<style scoped lang="scss">
.main {
  padding: 4rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  grid-template-areas: "balance" "tickets";
  grid-gap: 2rem;

  .balance {
    grid-area: balance;
  }

  .section-tickets {
    grid-area: tickets;

    .card:not(:last-child) {
      margin-bottom: 2rem;
    }
  }
}
</style>
