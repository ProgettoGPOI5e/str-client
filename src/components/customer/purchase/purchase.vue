<template>
        <div
        class="card">
        <div class="card__body">
          <img
            :src="purchase.ticket.img"
            class="picture"
            alt="Biglietto"
            loading="lazy"
          />
          <div class="info">
            <p class="title">{{ purchase.ticket.name }}</p>
            <p class="body">{{ purchase.ticket.description }}</p>
            <button
              class="button button--yellow"
              @click="$emit('validate', purchase._id)"
            >Convalida titolo</button>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props: ['purchase']
}
</script>

<style scoped lang="scss">
    .card {

      .card__body {
        display: grid;
        grid-template-columns: 20rem 1fr;
        grid-template-rows: 1fr;
        grid-gap: 1rem;
        padding: 0!important;

        .picture {
          display: block;
          width: 100%;
        }

        .info {
          display: flex;
          align-items: left;
          flex-direction: column;
          justify-content: center;
          padding: 1rem;

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
