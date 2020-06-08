<template>
<footer class="footer">
  <section class="top">
    <div class="legal">
      <p class="copyright">Copyright © {{ new Date().getFullYear() }} <a href="/">Società di Trasporti</a></p>
      <p class="powered">Powered by <a href="/">Società di Trasporti</a></p>
    </div>
    <div class="social">
      <ul>
        <li>
          <a href="#">
            <i class="fab fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  </section>
  <section class="bottom">
    <div class="section">
      <div class="section__header">
        <p class="title">{{ $t('footer.backoffice') }}</p>
      </div>
      <div class="section__body">
        <ul>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/signup">Registrati</a>
          </li>
         <li>
            <a href="/legals">{{ $t('menu.legalterms') }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="section">
      <div class="section__header">
        <p class="title">{{ $t('footer.links') }}</p>
      </div>
      <div class="section__body">
        <ul>
          <li>
            <a href="https://www.comune.roma.it/">{{ $t('footer.rome') }}</a>
          </li>
          <li>
            <a href="/timetables">{{ $t('menu.timetables') }}</a>
          </li>
          <li>
            <a href="/tariffs">{{ $t('menu.tariffs') }}</a>
          </li>
          <li>
            <a href="/contacts">{{ $t('menu.contacts') }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="section">
      <div class="section__header">
        <p class="title">{{ $t('footer.contacts') }}</p>
      </div>
      <div class="section__body">
        <ul>
          <li>
            <a href="https://goo.gl/maps/uLf2DMCLThDvxU8Q9">
              <span class="icon">
                <i class="fas fa-map-marker-alt"></i>
              </span>
              <span class="crop">
                Via Prenestina, 45 - 00176 Roma
              </span>
            </a>
          </li>
          <li>
            <a href="/">
              <span class="icon">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="crop">
                info@societaditrasporti.it
              </span>
            </a>
          </li>
          <li>
            <a href="/">
              <span class="icon">
                <i class="fab fa-telegram"></i>
              </span>
              <span class="crop">
                @SocietaDiTrasporti
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</footer>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.footer {
    width: 100%;

    .bottom,
    .top {
        padding-left: 15rem;
        padding-right: 15rem;

        @include respond(tab-land) {
            padding-left: 10rem;
            padding-right: 10rem;
        }

        @include respond(tab-port) {
            padding-left: 5rem;
            padding-right: 5rem;
        }

    }

    .top {
        background-color: $color-fourth;
        padding-top: 2rem;
        padding-bottom: 2rem;
        font-size: 1.4rem;
        display: grid;
        justify-content: space-between;
        grid-template-columns: auto auto;
        align-items: center;

        // @include respond(phone) {
        //     grid-template-columns: auto;
        //     grid-gap: 1rem;
        // }

        .legal {

            .copyright {
                color: $color-text-fourth;
                margin-bottom: 0.5rem;

                a {
                    color: inherit;
                    text-decoration: none;
                }
            }

            .powered {
                color: $color-text-tertiary;

                a {
                    color: $color-text-fourth;
                    text-decoration: none;
                }
            }

        }

        .social {

            ul {
                padding: 0;

                li {
                    display: inline-block;
                    font-size: 1.6rem;

                    a {
                        padding: 0 1rem;
                        color: $color-text-fourth;
                        text-decoration: none;
                        transition: all 0.2s ease-in-out;

                        &:hover {
                            color: white;
                        }
                    }
                }
            }

        }

    }

    .bottom {
        padding-top: 5rem;
        padding-bottom: 5rem;
        background-color: $color-secondary;
        color: $color-text-primary;
        font-size: 1.4rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        @include respond(tab-port) {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
            grid-gap: 5rem;
        }

        .section {

            @include respond(tab-port) {
                text-align: center;
            }

            &__header {
                margin-bottom: 3rem;

                @include respond(tab-port) {
                    margin-bottom: 2rem;
                }

                .title {
                    text-transform: uppercase;
                    font-weight: bold;

                    display: inline-block;
                    padding-bottom: 1rem;
                    border-bottom: 0.3rem solid $color-primary;
                }

            }

            &__body {

                ul {
                    padding: 0;

                    li {
                        list-style: none;

                        &:not(:last-child) {
                            margin-bottom: 1.5rem;
                        }

                        a {
                            color: $color-text-primary;
                            text-decoration: none;

                            span.icon {
                                margin: 0 0.5rem;
                            }
                        }

                    }

                }
            }
        }

    }
}
</style>
