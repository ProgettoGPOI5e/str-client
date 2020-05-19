<template>
  <main class="main">
    <div class="card">
      <div class="card__body">
        <form action="#">
        <div class="row">
          <div class="col-1-of-1">
            <label for="email">Email</label>
            <input
              type="email"
              class="textfield"
              name="email"
              id="email"
              required
              placeholder="Email"
              v-model="email"
              @keyup.enter="login({ email, password })"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-1-of-1">
            <label for="password">Password</label>
            <input
              type="password"
              class="textfield"
              name="password"
              id="password"
              required
              placeholder="Password"
              v-model="password"
              @keyup.enter="login({ email, password })"
            >
          </div>
        </div>
        <div class="row" v-if="error">
          <div class="col-1-of-1">
            <p class="error">{{ error }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col-1-of-1">
            <button
              type="submit"
              class="button button--yellow"
              @click.prevent="login({ email, password })"
            >
              <span class="crop">
                Login
              </span>
              <span class="icon">
                <i class="fas fa-sign-in-alt"></i>
              </span>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-1-of-1">
            <p>{{ $t('login.signup.text') }} <router-link
                to="/signup"
                tag="a"
              >{{ $t('login.signup.action') }}</router-link>
            </p>
          </div>
        </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>

// import { mapActions } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    // ...mapActions({
    //   login: 'login'
    // })

    async login () {
      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password
        })
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>

<style lang="scss">
// .header {
//   .lang {
//     margin: 0!important;
//   }

//   .login {
//     display: none!important;
//   }
// }
</style>

<style scoped lang="scss">
.main {
  position: relative;
  min-height: 80vh;
  z-index: 10;

  .card {
    @include absCenter;
    min-width: 35rem;
    max-width: 35rem;

    @include respond(phone) {
      max-width: none;
    }
  }

  .error {
    font-size: 1.4rem;
    color: $color-semantic-orange;
    text-align: center;
  }
}
</style>
