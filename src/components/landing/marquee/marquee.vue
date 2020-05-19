<template>
  <div class="marquee">
    <p class="marquee__slider">
      <span
        class="news"
        v-for="(i, index) in [0,1]"
        :key="index"
      >
        <span class="tag">Avviso</span>
        {{ news }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: ['news']
}
</script>

<style scoped lang="scss">
.marquee {
  overflow: hidden;

  &__slider {
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;

    .news {
      font-size: 1.6rem;
      display: inline-block;
      animation: marquee 20s linear infinite;
    }

    .tag {
      color: $color-text-primary;
      background-color: $color-accent;
      padding: 0.25rem 0.5rem;
      // border-radius: 0.5rem;
      text-transform: uppercase;
      margin-left: 1.5rem;
      margin-right: 0.5rem;
      font-weight: 400;
    }
  }
}
</style>
