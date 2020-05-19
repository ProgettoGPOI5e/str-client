<template>
        <div
        class="card">
        <div class="card__body">
          <img
            :src="img"
            class="picture"
            alt="Biglietto"
            loading="lazy"
          />
          <div class="info">
            <p class="title">{{ ticket.title.name }}</p>
            <p class="body">{{ ticket.title.description }}</p>
            <a
              href="#"
              class="button button--yellow"
            >Convalida titolo</a>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props: ['ticket'],
  data () {
    return {
      img: '/metrebus.png'
    }
  }
}
</script>

<style scoped lang="scss">
    .card {

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

          .button {
            width: 20rem;
          }
        }
      }
    }
</style>
