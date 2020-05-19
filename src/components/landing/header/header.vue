<template>
  <header class="header">
    <section class="top">
      <router-link
        to="/"
        tag="p"
        class="logo"
      >Società di trasporti</router-link>
      <div class="info">
        <p class="lang u-noselect" @click="lang">
          <span class="text">{{ $t('header.lang') }}</span>
          <img
            :src="$t('header.flag')"
            class="flag"
          />
        </p>
        <router-link
          class="login button button--yellow"
          tag="a"
          to="/login"
        >
          <span class="crop">
            Login
          </span>
          <span class="icon">
            <i class="fas fa-sign-in-alt"></i>
          </span>
        </router-link>
      </div>
    </section>
    <section class="bottom">
      <app-marquee :news="news"></app-marquee>
      <nav class="menu">
        <ul>
          <li>
            <router-link
              tag="a"
              to="/timetables"
            >{{ $t('menu.timetables') }}</router-link>
          </li>
          <li>
            <router-link
              tag="a"
              to="/tariffs"
            >{{ $t('menu.tariffs') }}</router-link>
          </li>
          <li>
            <router-link
              tag="a"
              to="/contacts"
            >{{ $t('menu.contacts') }}</router-link>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script>

import lang from '@/mixins/lang'

import Marquee from '@/components/landing/marquee/marquee'

export default {
  data () {
    return {
      news: 'In coerenza con quanto disposto dalla Regione Lazio e da Roma Capitale, Atac ha predisposto il piano di rimodulazione dei servizi di trasporto pubblico, sia di superficie che metroferroviario.'
    }
  },
  mixins: [lang],
  components: {
    appMarquee: Marquee
  }
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  box-shadow: 0 0 1rem rgba(black, 0.4);
  position: sticky;
  top: 0;
  z-index: 100;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $color-primary;
    padding: 1rem 4rem;
    height: 5.5rem;

    @include respond(phone) {
      padding: 1rem 2rem;
    }

    .logo {
      font-size: 2rem;
      cursor: pointer;
      color: white;
      font-weight: 400;
    }

    .info {
      .lang {
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        margin-right: 2rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: darken($color-primary, 5%);
        }

        .text {
          font-size: 1.6rem;
          // display: inline-block;
          color: white;
          margin-right: 1rem;
          cursor: pointer;

          &:hover {
            text-decoration: none;
          }
        }

        .flag {
          width: 3rem;
          display: inline-block;
        }
      }

      .login {
        display: inline-block;
      }
    }
  }

  .bottom {
    background-color: $color-secondary;
    padding: 0 4rem;
    display: grid;
    grid-template-columns: auto max-content;
    grid-template-rows: 1fr;
    grid-gap: 3rem;
    grid-template-areas: "marquee menu";
    align-items: center;
    height: 4.5rem;

    @include respond(phone) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas: "menu" "marquee";
      grid-gap: 0rem;
      padding: 0;
    }

    .marquee {
      grid-area: marquee;
      padding: 1rem 0;

      @include respond(phone) {
        background-color: $color-tertiary;
        color: white;
        padding: 1rem 2rem;
      }
    }

    .menu {
      grid-area: menu;
      padding: 1rem 0;

      @include respond(phone) {
        padding: 1rem 2rem;
        text-align: center;
      }

      ul {
        padding: 0;

        li {
          display: inline-block;
          font-size: 1.6rem;

          &:not(:last-child) {
            padding-right: 2rem;
          }

          a {
            text-decoration: none;
            color: $color-text-primary;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
