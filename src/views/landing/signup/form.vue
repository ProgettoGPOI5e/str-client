<template>
  <main class="main">
    <div class="card">
      <div class="card__header">
        <h1 class="title">Dati anagrafici</h1>
      </div>
      <div class="card__body">
        <div class="row">
          <div class="col-1-of-2">
            <label for="firstname">Nome *</label>
            <input
              class="textfield"
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Nome"
              v-model="firstname"
            />
          </div>
          <div class="col-1-of-2">
            <label for="lastname">Cognome *</label>
            <input
              class="textfield"
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Cognome"
              v-model="lastname"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-1-of-3">
            <label for="date">Data di nascita *</label>
            <input
              type="date"
              name="date"
              id="date"
              class="textfield"
              v-model="birthday"
            >
          </div>
          <div class="col-1-of-3">
            <label for="phone">Telefono *</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              class="textfield"
              v-model="phone"
              placeholder="Telefono"
            >
          </div>
          <div class="col-1-of-3">
            <label for="gender">Genere</label>
            <select
              name="gender"
              id="gender"
              class="select"
              v-model="gender"
            >
              <option
                value=""
                disabled
                selected
              >Genere</option>
              <option value="male">Maschio</option>
              <option value="female">Femmina</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-1-of-3">
            <label for="city">Comune *</label>
            <input
              type="text"
              name="city"
              id="city"
              class="textfield"
              v-model="city"
              placeholder="Comune"
            >
          </div>
          <div class="col-1-of-3">
            <label for="address">Indirizzo *</label>
            <input
              type="text"
              name="address"
              id="address"
              class="textfield"
              v-model="address"
              placeholder="Indirizzo"
            >
          </div>
          <div class="col-1-of-3">
            <label for="postalcode">CAP *</label>
            <input
              type="text"
              name="postalcode"
              id="postalcode"
              class="textfield"
              v-model="postalcode"
              placeholder="CAP"
            >
          </div>
        </div>
        <div class="row">
          <div class="col-1-of-1">
            <label for="employee-code">Codice convalida dipendente</label>
            <input
              type="text"
              name="employee-code"
              id="employee-code"
              class="textfield"
              v-model="employeeCode"
              placeholder="Codice di convalida dipendente"
            >
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card__header">
        <h1 class="title">Dati di accesso</h1>
      </div>
      <div class="card__body">
        <div class="row">
          <div class="col-1-of-3">
            <label for="email">E-mail *</label>
            <input
              class="textfield"
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              v-model="email"
            />
          </div>
          <div class="col-1-of-3">
            <label for="password">Password *</label>
            <input
              class="textfield"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <div class="col-1-of-3">
            <label for="password-confirm">Conferma password *</label>
            <input
              class="textfield"
              type="password"
              name="password-confirm"
              id="password-confirm"
              placeholder="Conferma password"
              v-model="passwordConfirm"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-1-of-2">
            <label
              class="checkbox"
              for="legal-terms"
            >
              <input
                type="checkbox"
                name="legal-terms"
                id="legal-terms"
                v-model="legals"
              >
              <span class="checkbox__check"></span>
              <span class="checkbox__label">
                Accetto i <router-link
                  to="/legals"
                  tag="a"
                >termini generali</router-link> e <router-link
                  to="/legals"
                  tag="a"
                >condizioni d'uso</router-link>.
              </span>
            </label>
          </div>
          <div class="col-1-of-2">
            <label
              class="checkbox"
              for="newsletter"
            >
              <input
                type="checkbox"
                name="newsletter"
                id="newsletter"
                v-model="newsletter"
              >
              <span class="checkbox__check"></span>
              <span class="checkbox__label">Voglio rimanere in contatto per eventuali sconti e news.</span>
            </label>
          </div>
        </div>
        <div class="row">
          <div class="col-1-of-1">
            <button
              class="button button--yellow"
              @click="signup"
            >
              <span class="icon">
                <i class="fas fa-check"></i>
              </span>
              <span class="crop">
                Registrati
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <transition name="fade">
      <app-alert :alert="alert" v-if="alert.message" @alert="alert = $event"></app-alert>
    </transition>
<!--
    <div class="card">
      <div class="card__header">
        <h1 class="title">Metodo di pagamento</h1>
      </div>
      <div class="card__body">
        <div class="row">
          <div class="col-1-of-1">
            <label for="card-number">Numero della carta</label>
            <input
              type="text"
              name="card-number"
              id="card-number"
              class="textfield"
              v-model="cardNumber"
              placeholder="Numero della carta"
            >
          </div>
        </div>
        <div class="row">
          <div class="col-1-of-2">
            <label for="date">Data di scadenza</label>
            <input
              type="date"
              name="card-date"
              id="card-date"
              class="textfield"
              v-model="cardDate"
            >
          </div>
          <div class="col-1-of-2">
            <label for="date">CVV/CVC</label>
            <input
              type="number"
              name="card-code"
              id="card-code"
              class="textfield"
              placeholder="CVV/CVC"
              v-model="cardCode"
            >
          </div>
        </div>
      </div>
    </div> -->
  </main>
</template>

<script>
import Alert from '@/components/alert/alert'

import v1 from '@/utils/v1'

export default {
  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      passwordConfirm: '',
      birthday: '',
      city: '',
      postalcode: '',
      address: '',
      phone: '',
      gender: '',
      employeeCode: '',
      cardNumber: '',
      cardDate: '',
      cardCode: '',
      legals: false,
      newsletter: false,
      alert: {
        message: '',
        color: ''
      }
    }
  },
  methods: {
    async signup () {
      try {
        await v1.post('/signup', {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          telephone: this.phone,
          password: this.password,
          password_confirm: this.passwordConfirm,
          address: {
            address: this.address,
            city: this.city,
            postalcode: this.postalcode
          },
          birthday: new Date(this.birthday),
          gender: this.gender,
          employee: this.employeeCode,
          newsletter: this.newsletter || false,
          legals: this.legals || false
        })
        this.$emit('signup', true)
      } catch (e) {
        this.alert = {
          message: e.response.data.message,
          color: 'alert--red'
        }
      }
    }
  },
  components: {
    appAlert: Alert
  }
}
</script>

<style scoped lang="scss">
.main {
  .card {
    &:not(:last-child) {
      margin-bottom: 4rem;
    }
  }
}
</style>
