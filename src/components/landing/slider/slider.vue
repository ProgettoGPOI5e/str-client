<template>
  <section class="slider">
    <div class="info">
      <h1 class="slogan">
        <span>
          {{ $t('slider.text') }}</span>
      </h1>
      <router-link
        to="/tariffs"
        tag="a"
        class="button"
      >{{ $t('slider.action') }}</router-link>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.slider {
  padding: 2rem 7rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("../../../../public/metro.jpg");

  @include respond(phone) {
    padding: 2rem 4rem;
  }

  .info {
    animation: moveInRight 0.5s ease-in-out;

    .slogan {
      font-size: 3rem;
      font-weight: 300;
      text-transform: uppercase;
      text-align: left;
      color: $color-white;
      margin-bottom: 2rem;
      width: 60%;

      @include respond(phone) {
        width: 100%;
        font-size: 2.8rem;
      }

      span {
        font-weight: 300;
        color: white;
        padding: 1rem 1.5rem;
        box-decoration-break: clone;
        background-image: linear-gradient(
          to right bottom,
          rgba(lighten($color-primary, 5%), 0.85),
          rgba(darken($color-primary, 5%), 0.85)
        );
      }
    }

    .button {
      width: 20rem;
    }
  }
}
</style>
