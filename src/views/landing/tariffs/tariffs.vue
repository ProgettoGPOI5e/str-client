<template>
  <main class="main">
    <div
      class="card"
      v-for="(ticket, index) in tickets"
      :key="index"
    >
      <div class="card__body">
        <img
          :src="img"
          class="picture"
          alt="Biglietto"
          loading="lazy"
        />
        <div class="info">
          <p class="title">{{ ticket.name }}</p>
          <p class="body">{{ ticket.description }}</p>
          <p class="price">{{ ticket.price }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import v1 from '@/utils/v1'

export default {
  data () {
    return {
      img: '/metrebus.png',
      tickets: []
    }
  },
  async created () {
    await this.getTickets()
  },
  methods: {
    async getTickets () {
      const response = await v1.get('/tickets')
      this.tickets = response.data
      // console.log(response.data)
      // this.tickets = response.data.map(el => {
      //   el = { ...el, img: '/metrebus.png' }
      // })
    }
  }
}
</script>

<style scoped lang="scss">
.main {
  padding: 4rem;

  .card {
      width: 60rem;

    &:not(:last-child) {
      margin-bottom: 2rem;
    }

    .card__body {
      display: grid;
      grid-template-columns: 20rem 1fr;
      grid-template-rows: 1fr;
      grid-gap: 2rem;

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
    }
  }
}
</style>
