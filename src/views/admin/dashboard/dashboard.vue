<template>
  <main class="main">
      <section class="section-news">
          <article class="card" v-for="(article, index) in news" :key="index">
              <div class="card__header">
                  {{ article.title }}
              </div>
              <div class="card__body">
                  {{ article.body }}
              </div>
          </article>
      </section>
      <section class="section-form">
        <app-add-news @newNews="getNews" @alert="alert = $event"></app-add-news>
        <transition name="fade">
          <app-alert :alert="alert" v-if="alert.message" @alert="alert = $event"></app-alert>
        </transition>
      </section>
  </main>
</template>

<script>

import v1 from '@/utils/v1'

import Alert from '@/components/alert/alert'
import addNews from '@/components/back/addNews/addNews'

export default {
  data () {
    return {
      news: [],
      alert: {
        message: '',
        color: ''
      }
    }
  },
  async mounted () {
    await this.getNews()
  },
  methods: {
    async getNews () {
      try {
        const response = await v1.get('/news')
        this.news = response.data
      } catch (e) {
        console.log(e)
        this.news = []
      }
    }
  },
  components: {
    appAddNews: addNews,
    appAlert: Alert
  }
}
</script>

<style scoped lang="scss">
.main {
    padding: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "news form";
    grid-gap: 2rem;

    .section-news {
      grid-area: news;

      .card {
        margin-bottom: 2rem;
      }
    }

    .section-form {
      grid-area: form;

      .alert {
        margin-top: 2rem;
      }
    }
}
</style>
