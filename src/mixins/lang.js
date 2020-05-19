export default {
  methods: {
    lang () {
      if (this.$i18n.locale === 'en') {
        this.$i18n.locale = 'it'
      } else {
        this.$i18n.locale = 'en'
      }
    }
  }
}
