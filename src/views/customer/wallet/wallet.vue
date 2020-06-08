<template>
  <main class="main">
    <app-balance></app-balance>
    <section class="section-tickets">
      <app-purchase
        v-for="(purchase, index) in purchases.valid"
        :key="index"
        :purchase="purchase"
        @validate="showPopUp($event) && validateTicket($event)"
      ></app-purchase>
    </section>
    <transition name="fade">
      <div class="popup" v-if="popup">
      <div class="card modal">
        <div class="card__header">
          <p class="close" @click="popup = false">Chiudi</p>
        </div>
        <div class="card__body" v-html="qrcode">
        </div>
      </div>
    </div>
    </transition>
  </main>
</template>

<script>

import Balance from '@/components/customer/balance/balance'
import Purchase from '@/components/customer/purchase/purchase'

import v1 from '@/utils/v1'

import { mapGetters } from 'vuex'

import qrcode from 'qrcode'

export default {
  data () {
    return {
      purchases: {
        valid: [],
        invalid: []
      },
      popup: false,
      id: undefined,
      qrcode: undefined
    }
  },
  async mounted () {
    await this.getValidPurchases()
  },
  computed: {
    ...mapGetters({
      userId: 'getUserId'
    })
  },
  methods: {
    async showPopUp (id) {
      this.qrcode = await qrcode.toString(id, {
        type: 'svg'
      })
      this.popup = true
    },
    // async getTickets () {
    //   const id = this.userId
    //   const response = await v1.get(`/users/${id}/tickets`)
    //   this.tickets = response.data
    //   // console.log(response.data)
    //   // this.tickets = response.data.map(el => {
    //   //   el = { ...el, img: '/metrebus.png' }
    //   // })
    // },
    async getValidPurchases () {
      const id = this.userId
      const response = await v1.get(`/users/${id}/purchases/valid`)
      this.purchases.valid = response.data
    },
    async validateTicket (id) {
      try {
        await v1.post(`/purchases/${id}/validate/`)
      } catch (e) {
        console.log(e)
      }
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

  .popup {
    position: realtive;
    background-color: rgba($color-black, 0.8);
    height: 100%;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;

    .modal {
      @include absCenter;
      width: 30%;

      @include respond(phone) {
        width: 90%;
      }

      .close {
        text-align: right;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }

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
