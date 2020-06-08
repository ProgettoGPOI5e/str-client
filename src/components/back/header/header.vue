<template>
  <header class="header">
    <section class="top">
      <router-link
        to="/"
        tag="p"
        class="logo"
      >Società di trasporti</router-link>
      <div class="info">
        <p
          class="lang u-noselect"
          @click="lang"
        >
          <span class="text">{{ $t('header.lang') }}</span>
          <img
            :src="$t('header.flag')"
            class="flag"
          />
        </p>
        <div class="user">
          <img
            :src="'/layout/profile.svg'"
            class="user__pic"
            alt="Profilo"
          />
          <p
            class="user__name"
            v-if="user"
          >{{ 'Ciao, ' + user.firstname + ' ' + user.lastname + '!' }}</p>
          <!-- <div class="user__menu">
            <p
              class="logout"
              @click="logout"
            >Logout</p>
          </div> -->
        </div>

        <p
          class="logout button button--yellow"
          @click="logout"
        >
          <span class="crop">
            Logout
          </span>
          <span class="icon">
            <i class="fas fa-sign-out-alt"></i>
          </span>
        </p>
      </div>
    </section>
    <section class="bottom">
      <nav class="menu">
        <ul>
          <li>
            <router-link
              tag="a"
              to="/customer/"
              class="link"
              active-class="link--active"
              exact
            >{{ $t('menu.dashboard') }}</router-link>
          </li>
          <li v-if="user && user.employee">
            <router-link
              tag="a"
              to="/admin"
              class="link"
              active-class="link--active"
              exact
            >{{ $t('menu.admin') }}</router-link>
          </li>
          <li>
            <router-link
              tag="a"
              to="/customer/wallet/"
              class="link"
              active-class="link--active"
              exact
            >{{ $t('menu.wallet') }}</router-link>
          </li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script>

import lang from '@/mixins/lang'
import { mapGetters, mapActions } from 'vuex'

export default {
  mixins: [lang],
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    ...mapActions({
      logout: 'logout'
    })
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
      .user,
      .logout {
        display: inline-block;
        font-size: 1.6rem;
        color: $color-white;
      }

      .user {
        position: relative;
        cursor: pointer;

        &__pic {
          height: 3rem;
          display: inline-block;
          clip-path: circle(50% at 50% 50%);
          vertical-align: middle;
          margin-right: 1rem;
        }

        &__name {
          display: inline-block;

          @include respond(tab-port) {
            display: none;
          }
        }

        // &__menu {
        //   display: none;
        //   position: absolute;
        //   background-color: $color-primary;
        //   min-width: 160px;
        //   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        //   padding: 12px 16px;
        //   top: 4rem;
        //   right: 0;
        //   z-index: 1;
        // }

        // &:hover .user__menu {
        //   display: block;
        // }
      }

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

      .logout {
        display: inline-block;
        width: 10rem;
        margin-left: 2rem;
        color: $color-text-primary;
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

    // @include respond(phone) {
    //   grid-template-columns: 1fr;
    //   grid-template-rows: 1fr 1fr;
    //   grid-template-areas: "menu" "marquee";
    //   grid-gap: 0rem;
    //   padding: 0;
    // }

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

          .link {
            text-decoration: none;
            color: $color-text-primary;

            &--active,
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
