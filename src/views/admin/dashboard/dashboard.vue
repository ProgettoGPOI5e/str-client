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
      <section class="section-chart">

      </section>
      <section class="section-form">
        <app-add-news></app-add-news>
      </section>
  </main>
</template>

<script>

import v1 from '@/utils/v1'

import addNews from '@/components/back/addNews/addNews'

export default {
  data () {
    return {
      news: []
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
        console.log(e.response.data.message)
      }
    }
  },
  components: {
    appAddNews: addNews
  }
}
</script>

<style scoped lang="scss">
.main {
    padding: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "news chart" "news form";
    grid-gap: 2rem;

    .section-news {
      grid-area: news;
      background-color: green;
    }

    .section-chart {
      grid-area: chart;
      background-color: blue;
    }

    .section-form {
      grid-area: form;
    }
}
</style>
