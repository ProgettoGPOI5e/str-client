<template>
  <div>
    <app-header></app-header>
    <main class="main">
      <div class="card">
        <div class="card__body">
          <p>Errore 404. Pagina non trovata!</p>
        </div>
      </div>
    </main>
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
.main {
  padding: 4rem;
  min-height: 60vh;

  .card {
    @include absCenter;

    .card__body {
      p {
        font-size: 1.6rem;
      }
    }
  }
}
</style>
