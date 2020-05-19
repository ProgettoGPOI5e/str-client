<template>
  <main class="main">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.0636651636096!2d12.522468715318963!3d41.89148787922108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6188d9eacea3%3A0xa8110ffc034c0140!2sVia%20Prenestina%2C%2045%2C%2000176%20Roma%20RM!5e0!3m2!1sit!2sit!4v1588523627150!5m2!1sit!2sit"
      width="100%"
      height="100%"
      frameborder="0"
      style="border:0;"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
    <div class="section">
      <div class="section__header">
        <p class="title">{{ $t('contacts.info.title') }}</p>
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
        </ul>
      </div>
    </div>
    <div class="section">
      <div class="section__header">
        <p class="title">{{ $t('contacts.contacts.title') }}</p>
      </div>
      <div class="section__body">
        <ul>
          <li>
            <a href="https://goo.gl/maps/uLf2DMCLThDvxU8Q9">
              <span class="icon">
                <i class="fas fa-phone"></i>
              </span>
              <span class="crop">
                {{ $t('contacts.contacts.phone') }}: +39 345068756
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-fax"></i>
              </span>
              <span class="crop">
                {{ $t('contacts.contacts.fax') }}: +39 3454578236
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-at"></i>
              </span>
              <span class="crop">
                {{ $t('contacts.contacts.email') }}: info@societaditrasporti.it
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span class="icon">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="crop">
                {{ $t('contacts.contacts.pec') }}: info@pec.societaditrasporti.it
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.main {
  display: grid;
  grid-template-columns: 40rem auto;
  grid-template-rows: min-content 1fr;
  grid-template-areas: "info map" "contacts map";
  grid-gap: 2rem;
  padding: 4rem;

  @include respond(tab-port) {
    grid-template-columns: 1fr;
    grid-template-rows: 40rem min-content min-content;
    grid-template-areas: "map" "info" "contacts";
    padding: 2rem;
  }

  iframe {
    grid-area: map;
  }

  .section {
    background-color: $color-secondary;
    padding: 3rem;
    font-size: 1.6rem;

    &:first-child {
      grid-area: info;
    }

    &:last-child {
      grid-area: contacts;
    }

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
</style>
