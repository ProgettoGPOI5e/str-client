module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/scss/main.scss";'
      }
    }
  },
  pwa: {
    name: 'STR',
    themeColor: '#820D2D',
    msTileColor: '#820D2D',
    manifestOptions: {
      background_color: '#820D2D'
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'it',
      fallbackLocale: 'it',
      localeDir: 'locales',
      enableInSFC: false
    }
  }
}
