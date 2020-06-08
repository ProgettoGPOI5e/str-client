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
        const response = await v1.post('/news', {
          title: this.title,
          body: this.body
        })
        this.title = ''
        this.body = ''
        this.$emit('newNews', response.data)
        this.$emit('alert', {
          message: 'La notizia pubblicata.',
          color: 'alert--green'
        })
      } catch (e) {
        this.$emit('alert', {
          message: e.response.data.message,
          color: 'alert--red'
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>
