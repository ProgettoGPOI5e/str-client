export default (env) => {
  if (env !== 'production') {
    return process.env.VUE_APP_LOCAL || 'http://localhost:3000'
  } else {
    return 'https://cobos-api.herokuapp.com' || process.env.API_URI || window.location.origin
  }
}
