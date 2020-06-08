<template>
  <main class="main">
    <section class="card section-tickets">
      <div class="card__body">
        <div class="ticket" v-for="(ticket, index) in tickets" :key="index">
          <img :src="ticket.img" class="picture" alt="Biglietto" loading="lazy" />
          <div class="info">
            <p class="title">{{ ticket.name }}</p>
            <p class="body">{{ ticket.description }}</p>
            <p class="price">
              {{ new Intl.NumberFormat('it-IT', {
              style: 'currency',
              currency: ticket.price.currency
              }).format(ticket.price.value) }}
            </p>

            <!-- <button class="button button--yellow" @click="buyTicket(ticket._id)">Compra</button> -->
          </div>
          <div class="action">
            <app-counter @change="ticket.counter = $event"></app-counter>
          </div>
        </div>
      </div>
    </section>
    <section class="section-summary">
      <div class="card">
        <div class="card__header">
          <p>Riepilogo</p>
        </div>
        <div class="card__body">
          <div class="row">
            <div class="col-1-of-1">
              <ul class="summary">
                <li v-for="(ticket, index) in tickets" :key="index">{{ticket.name }} x {{ ticket.counter || 0 }}</li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-1-of-1">
              <button class="button button--yellow" @click="buyTickets">Completa acquisto</button>
            </div>
          </div>
        </div>
      </div>
      <transition name="fade">
        <app-alert :alert="alert" v-if="alert.message" @alert="alert = $event"></app-alert>
      </transition>
    </section>
  </main>
</template>

<script>
import v1 from '@/utils/v1'

import Counter from '@/components/customer/counter/counter'
import Alert from '@/components/alert/alert'

export default {
  data () {
    return {
      tickets: [],
      alert: {
        message: '',
        color: ''
      }
    }
  },
  computed: {
    purchases () {
      return this.tickets.map(el => {
        return {
          id: el._id,
          counter: el.counter
        }
      })
    }
  },
  async created () {
    await this.getTickets()
  },
  methods: {
    async getTickets () {
      const response = await v1.get('/tickets')
      this.tickets = response.data.map(el => {
        el.counter = 0
        return el
      })
      // console.log(response.data)
      // this.tickets = response.data.map(el => {
      //   el = { ...el, img: '/metrebus.png' }
      // })
    },
    async buyTickets () {
      try {
        if (!this.purchases.length) {
          this.alert = {
            message: 'Non sono stati selezionati titoli di viaggio.',
            color: 'alert--yellow'
          }
          return
        }
        await v1.post('/tickets/buy/', this.purchases)
        await this.getTickets()
        this.alert = {
          message: 'I titolo di viaggio sono stati acquistati.',
          color: 'alert--green'
        }
      } catch (e) {
        this.alert = {
          message: e.response.data.message,
          color: 'alert--red'
        }
      }
    }
  },
  components: {
    appCounter: Counter,
    appAlert: Alert
  }
}
</script>

<style scoped lang="scss">
.main {
  padding: 4rem;
  display: grid;
  grid-template-columns: auto 40rem;
  grid-template-rows: min-content;
  grid-template-areas: "tickets summary";
  grid-gap: 2rem;

  @include respond(tab-port) {
    grid-template-columns: 1fr;
    grid-template-rows: min-content auto;
    grid-template-areas: "summary" "tickets";
  }

  .section-tickets {
    grid-area: tickets;

    .ticket {
      display: grid;
      grid-template-columns: 15rem 1fr auto;
      grid-template-rows: 1fr;
      grid-gap: 2rem;

      &:not(:last-child) {
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid $color-text-tertiary;
      }

      .picture {
        display: block;
        width: 100%;
      }

      .info {
        display: flex;
        align-items: left;
        flex-direction: column;
        justify-content: center;

        .title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .body {
          margin-bottom: 1rem;
        }
      }

      .action {
        display: flex;
        align-items: left;
        flex-direction: column;
        justify-content: top;
      }
    }
  }

  .section-summary {
    grid-area: summary;

    .summary {
      padding: 0 2rem;

      li {
        // list-style: none;
        padding: 1rem 0;

        &:not(:last-child) {
          border-bottom: 1px solid $color-text-tertiary;
        }
      }
    }

    .alert {
      margin-top: 2rem;
    }
  }
}
</style>
