<template>
    <div class="card">
      <div class="card__body">
        <div class="row">
          <div class="col-1-of-1">
            <label for="title">Titolo della notizia</label>
            <input
              type="text"
              name="title"
              id="title"
              class="textfield"
              v-model="title"
              placeholder="Titolo della notizia"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-1-of-1">
            <label for="body">Notizia</label>
            <textarea
              name="body"
              id="body"
              cols="30"
              rows="10"
              class="textarea"
              v-model="body"
              placeholder="Inserisci lanotizia"
            ></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-1-of-1">
            <button
              type="submit"
              class="button button--yellow"
              @click="addNews"
            >Invia la notiza</button> </div>
        </div>
      </div>
    </div>
</template>

<script>

import v1 from '@/utils/v1'

export default {
  data () {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    async addNews () {
      try {
        await v1.post('/news', {
          title: this.title,
          body: this.body
        })
        console.log('Notizia aggiunta.')
      } catch (e) {
        console.log(e.response.data.message)
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
